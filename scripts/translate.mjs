#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { tmpdir } from 'node:os';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { promisify } from 'node:util';
import {
  localizeMathText,
  mask,
  normalizeInlineMathSpacing,
  restore,
} from './lib/mask-restore.mjs';
import { glossaryPromptSection } from './lib/glossary.mjs';
import { lintChineseCopywriting } from './lib/copywriting-lint.mjs';
import {
  validateTranslation,
  validateMathSyntax,
  validateShortcodeIntegrity,
  validateMarkdownStructureIntegrity,
  checkGlossaryMapping,
  loadDangling,
} from './lib/validate.mjs';
import { buildSlugMap } from '../src/lib/slug-map.mjs';

const execFileAsync = promisify(execFile);

const __dirname = dirname(fileURLToPath(import.meta.url));
const UPSTREAM = resolve(__dirname, '..', '..', 'algebrica');
const CONTENT_ZH = resolve(__dirname, '..', 'content-zh');
const PUBLIC_ROOT = resolve(__dirname, '..', 'public');
const FAILURES_FILE = resolve(__dirname, '..', 'translation-failures.json');
const ARTICLE_GRAPHS_FILE = resolve(__dirname, '..', 'src', 'data', 'article-graphs.json');
const ARTICLE_GRAPH_TRANSLATIONS_FILE = resolve(
  __dirname,
  '..',
  'src',
  'data',
  'article-graphs-zh.json',
);
const ARTICLE_GRAPHS = JSON.parse(readFileSync(ARTICLE_GRAPHS_FILE, 'utf8'));
const PAGE_TITLES = {
  bibliography: { title_en: 'Bibliography', title_zh: '参考文献' },
  'editorial-process': { title_en: 'Editorial Process', title_zh: '编辑流程' },
};

const MAX_RETRIES = 2;
// Smaller chunks reduce placeholder duplication and copywriting drift in long,
// formula-dense articles while still keeping complete H2 sections together.
const MAX_PLACEHOLDERS_PER_CHUNK = 40;
const OMP_MODEL = 'zhipu-coding-plan/glm-5.2';
const OMP_TIMEOUT = '20m';
const OMP_EXEC_OPTIONS = { timeout: 21 * 60 * 1000, maxBuffer: 16 * 1024 * 1024, killSignal: 'SIGTERM' };

async function main() {
  const { allMissing, dryRun, feedbackFile, target } = parseTranslateArgs(
    process.argv.slice(2),
  );

  if (allMissing) {
    if (feedbackFile) {
      throw new Error('--feedback-file is only supported for a single target');
    }
    await runAllMissing({ dryRun });
    return;
  }

  if (!target) {
    console.error('Usage: node scripts/translate.mjs [--dry-run] [--feedback-file <path>] <section/slug>');
    console.error('       node scripts/translate.mjs --all-missing [--dry-run]');
    process.exit(1);
  }

  const reviewFeedback = feedbackFile
    ? readFileSync(resolve(feedbackFile), 'utf8').trim()
    : null;
  if (feedbackFile && !reviewFeedback) {
    throw new Error(`feedback file is empty: ${feedbackFile}`);
  }

  const { section, slug } = parseTarget(target);
  const result = await translateOne(section, slug, { dryRun, reviewFeedback });
  if (!result.ok) {
    console.error(result.reason);
    process.exit(1);
  }
  console.log(`OK ${section}/${slug}`);
  if (result.path) console.log(`  → ${result.path}`);
}

export function parseTranslateArgs(args) {
  let allMissing = false;
  let dryRun = false;
  let feedbackFile = null;
  let target = null;

  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg === '--all-missing') {
      allMissing = true;
    } else if (arg === '--dry-run') {
      dryRun = true;
    } else if (arg === '--feedback-file') {
      const value = args[index + 1];
      if (!value || value.startsWith('--')) {
        throw new Error('--feedback-file requires a path');
      }
      feedbackFile = value;
      index++;
    } else if (arg.startsWith('--')) {
      throw new Error(`unknown option: ${arg}`);
    } else if (target) {
      throw new Error(`multiple targets provided: ${target}, ${arg}`);
    } else {
      target = arg;
    }
  }

  return { allMissing, dryRun, feedbackFile, target };
}

function parseTarget(target) {
  const parts = target.split('/');
  if (parts.length !== 2) {
    throw new Error(`target must be section/slug, got ${target}`);
  }
  return { section: parts[0], slug: parts[1] };
}

async function runAllMissing({ dryRun }) {
  const slugMap = await buildSlugMap({ source: 'sections-yaml', strictCollisions: false, strictEmpty: false, unionFs: true, silent: true });
  const targets = [];
  for (const [slug, section] of slugMap) {
    const zhPath = resolve(CONTENT_ZH, section, `${slug}.md`);
    if (!existsSync(zhPath)) {
      targets.push({ section, slug });
    }
  }
  for (const slug of Object.keys(PAGE_TITLES)) {
    const zhPath = resolve(CONTENT_ZH, 'pages', `${slug}.md`);
    if (!existsSync(zhPath)) {
      targets.push({ section: 'pages', slug });
    }
  }

  targets.sort((a, b) => `${a.section}/${a.slug}`.localeCompare(`${b.section}/${b.slug}`));
  console.log(`Translating ${targets.length} missing/stale entries (dry-run=${dryRun})`);

  let okCount = 0;
  let failCount = 0;
  for (const { section, slug } of targets) {
    const result = await translateOne(section, slug, { dryRun });
    if (!result.ok) {
      console.error(`FAIL ${section}/${slug}: ${result.reason}`);
      failCount++;
      continue;
    }
    okCount++;
    console.log(`OK ${section}/${slug}${dryRun ? ' (dry-run)' : ''}`);
  }
  console.log(`Summary: ${okCount} ok, ${failCount} failed`);
  if (failCount > 0) {
    process.exit(1);
  }
}

export async function translateOne(
  section,
  slug,
  { dryRun = false, reviewFeedback = null } = {},
) {
  const isPage = section === 'pages';
  const sourcePath = isPage
    ? resolve(UPSTREAM, 'pages', `${slug}.md`)
    : resolve(UPSTREAM, section, `${slug}.md`);

  if (!existsSync(sourcePath)) {
    return { ok: false, reason: `source not found: ${sourcePath}` };
  }

  let raw = readFileSync(sourcePath, 'utf8');
  const sourceHash = createHash('sha256').update(raw).digest('hex');

  if (isPage) {
    const pageInfo = PAGE_TITLES[slug];
    if (!pageInfo) {
      return { ok: false, reason: `unknown page slug: ${slug}` };
    }
    raw = `---\ntitle: ${pageInfo.title_en}\nsource: https://algebrica.org/${slug}/\nlicense: CC BY-NC 4.0\ntags: []\n---\n${raw}`;
  }

  const { masked, placeholders, frontmatter } = mask(raw, { maskTitle: false });

  if (!frontmatter.title) {
    return { ok: false, reason: 'source missing title frontmatter' };
  }

  const maskedBody = stripFrontmatter(masked);
  const chunks = splitMaskedBody(maskedBody, MAX_PLACEHOLDERS_PER_CHUNK);
  const translatedChunks = [];
  let totalWallMs = 0;
  const lintReports = [];

  for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
    const { masked: localBody, placeholders: localPlaceholders } = localizePlaceholders(
      chunks[chunkIndex],
      placeholders,
    );
    let lastError = null;
    let translatedChunk = null;
    let currentPrompt = buildPrompt(frontmatter.title, localBody, reviewFeedback, {
      chunkIndex,
      chunkCount: chunks.length,
    });

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      const tmpFile = resolve(
        tmpdir(),
        `algebrica-zh-${process.pid}-${section}-${slug}-${chunkIndex}-${attempt}.txt`,
      );
      try {
        writeFileSync(tmpFile, currentPrompt, 'utf8');
        const start = Date.now();
        const { stdout } = await execFileAsync(
          'omp',
          buildOmpArgs(tmpFile),
          OMP_EXEC_OPTIONS,
        );
        totalWallMs += Date.now() - start;
        const cleaned = cleanStdout(stdout);
        if (!cleaned || cleaned.trim().length === 0) {
          throw new Error('omp returned empty output');
        }
        const withRestoredStandaloneLines = restoreStandalonePlaceholderLines(
          cleaned,
          localBody,
        );
        const restored = normalizeInlineMathSpacing(
          localizeMathText(restore(withRestoredStandaloneLines, localPlaceholders)),
        );
        const mathErrors = validateMathSyntax(restored);
        if (mathErrors.length) {
          throw new Error(`chunk math validation failed: ${mathErrors.join('; ')}`);
        }
        const structureErrors = validateTranslatedChunkStructure(localBody, restored, {
          firstChunk: chunkIndex === 0,
        });
        if (structureErrors.length) {
          throw new Error(`chunk structure validation failed: ${structureErrors.join('; ')}`);
        }
        const { text: linted, reports, errors: lintErrors } = lintChineseCopywriting(restored);
        assertNoCopywritingReports([...reports, ...lintErrors]);
        lintReports.push(...reports);
        translatedChunk = linted;
        break;
      } catch (err) {
        lastError = err;
        if (attempt < MAX_RETRIES) {
          console.warn(
            `  retry ${attempt + 1} for ${section}/${slug}` +
            `${chunks.length > 1 ? ` chunk ${chunkIndex + 1}/${chunks.length}` : ''}: ${err.message}`,
          );
          currentPrompt = buildPrompt(
            frontmatter.title,
            localBody,
            [reviewFeedback, err.message].filter(Boolean).join('\n'),
            { chunkIndex, chunkCount: chunks.length },
          );
        }
      } finally {
        try {
          if (existsSync(tmpFile)) {
            const { unlinkSync } = await import('node:fs');
            unlinkSync(tmpFile);
          }
        } catch {}
      }
    }

    if (!translatedChunk) {
      const fragment = chunks.length > 1 ? ` in chunk ${chunkIndex + 1}/${chunks.length}` : '';
      const reason = `terminal failure${fragment} after ${MAX_RETRIES + 1} attempts: ${lastError?.message || lastError}`;
      recordFailure(section, slug, reason);
      return { ok: false, reason };
    }
    translatedChunks.push(translatedChunk.trim());
  }

  // Rewrite image paths to the public /assets/ mount: the zh overlay has no
  // section-local svg/ dirs, and Astro's content-assets plugin resolves
  // relative markdown images against content-zh/ (where they don't exist).
  const withNormalizedLinks = normalizeLegacyInternalLinkPaths(
    translatedChunks.join('\n\n'),
  );
  const withAssets = rewriteImagePaths(withNormalizedLinks, section);
  const zhFile = assembleZhFile({ frontmatter, body: withAssets, sourceHash });
  // Formula prose is restored from immutable math placeholders. It is checked
  // by the independent admission gate after reviewer/localization edits.
  const validation = await validateTranslation(zhFile, zhFile, {
    dangling: loadDangling(),
    checkVisibleMathText: false,
  });
  validation.errors.push(...validateShortcodeIntegrity(raw, zhFile));
  validation.errors.push(...validateMarkdownStructureIntegrity(raw, zhFile));
  const glossaryWarnings = checkGlossaryMapping(raw, zhFile);
  if (validation.errors.length) {
    const reason = `validation failed: ${validation.errors.join('; ')}`;
    recordFailure(section, slug, reason);
    return { ok: false, reason };
  }
  if (glossaryWarnings.length) {
    console.warn(`  glossary warnings for ${section}/${slug}: ${glossaryWarnings.join('; ')}`);
  }
  let articleGraphTranslation = null;
  if (
    !isPage &&
    ARTICLE_GRAPHS[slug] &&
    (!hasArticleGraphTranslation(slug) || reviewFeedback)
  ) {
    try {
      const graphResult = await translateArticleGraph(
        frontmatter.title,
        ARTICLE_GRAPHS[slug],
        reviewFeedback,
      );
      articleGraphTranslation = graphResult.translation;
      totalWallMs += graphResult.wallMs;
    } catch (err) {
      const reason = `article graph translation failed: ${err.message}`;
      recordFailure(section, slug, reason);
      return { ok: false, reason };
    }
  }
  const translation = {
    zhFile,
    articleGraphTranslation,
    lintReports,
    wallMs: totalWallMs,
  };

  if (dryRun) {
    return { ok: true, path: null, wallMs: translation.wallMs, lintReports: translation.lintReports };
  }

  const zhDir = resolve(CONTENT_ZH, section);
  mkdirSync(zhDir, { recursive: true });
  const zhPath = resolve(zhDir, `${slug}.md`);
  writeFileSync(zhPath, translation.zhFile, 'utf8');
  if (translation.articleGraphTranslation) {
    writeArticleGraphTranslation(slug, translation.articleGraphTranslation);
  }
  clearFailure(section, slug);
  return { ok: true, path: zhPath, wallMs: translation.wallMs, lintReports: translation.lintReports };
}

function stripFrontmatter(markdown) {
  if (!markdown.startsWith('---\n') && !markdown.startsWith('---\r\n')) return markdown;
  const end = markdown.indexOf('\n---', 3);
  if (end === -1) return markdown;
  let bodyStart = end + 4;
  if (markdown[bodyStart] === '\r') bodyStart++;
  if (markdown[bodyStart] === '\n') bodyStart++;
  return markdown.slice(bodyStart);
}

export function rewriteImagePaths(markdown, section, publicRoot = PUBLIC_ROOT) {
  const withAssetPaths = markdown
    .replace(/!\[IMG\.\s*(\d+)\]/gi, '![图 $1]')
    .replace(/(!\[[^\]]*\]\()svg\//g, `$1/assets/${section}/svg/`)
    .replace(/(!\[[^\]]*\]\()\.\.\/([^/]+\/svg\/)/g, '$1/assets/$2');

  return withAssetPaths.replace(
    /(!\[[^\]]*\]\()(\/assets\/[^)\s]+)\.svg(\))/g,
    (match, prefix, assetPath, suffix) => {
      const localizedAsset = `${assetPath}.zh.svg`;
      return existsSync(resolve(publicRoot, localizedAsset.slice(1)))
        ? `${prefix}${localizedAsset}${suffix}`
        : match;
    },
  );
}

/**
 * Normalize legacy repository-relative article links from the upstream corpus.
 *
 * Some source articles use ../../<section>/<slug>/ even though the rendered
 * article namespace is flat. Link URLs are masked during translation, so this
 * deterministic post-restore step repairs them without asking the model to
 * mutate an immutable placeholder. Image paths remain the responsibility of
 * rewriteImagePaths().
 */
export function normalizeLegacyInternalLinkPaths(markdown) {
  return markdown.replace(
    /(?<!!)(\[[^\]\n]*\]\()\.\.\/\.\.\/[^/)\s]+\/([^)\s]+)(\))/g,
    '$1../$2$3',
  );
}

export function splitMaskedBody(maskedBody, maxPlaceholders = MAX_PLACEHOLDERS_PER_CHUNK) {
  const sections = maskedBody.split(/(?=\n##\s)/);
  const chunks = [];
  let current = '';

  for (const section of sections) {
    const candidate = current ? `${current}${section}` : section;
    if (current && countPlaceholders(candidate) > maxPlaceholders) {
      chunks.push(current.trim());
      current = section.trimStart();
    } else {
      current = candidate;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

export function localizePlaceholders(maskedChunk, placeholders) {
  const localized = { math: [], link: [], img: [], title: [], shortcode: [] };
  const maps = {
    MATH: new Map(),
    LINK: new Map(),
    IMG: new Map(),
    TITLE: new Map(),
    SHORTCODE: new Map(),
  };
  const masked = maskedChunk.replace(/__(MATH|LINK|IMG|TITLE|SHORTCODE)_(\d+)__/g, (token, type, rawIndex) => {
    const sourceIndex = Number(rawIndex);
    const key = type.toLowerCase();
    const original = placeholders[key]?.[sourceIndex];
    if (original === undefined) {
      throw new Error(`placeholder ${token} has no stored original value`);
    }
    let localIndex = maps[type].get(sourceIndex);
    if (localIndex === undefined) {
      localIndex = localized[key].length;
      maps[type].set(sourceIndex, localIndex);
      localized[key].push(original);
    }
    return `__${type}_${localIndex}__`;
  });
  return { masked, placeholders: localized };
}

export function buildOmpArgs(promptFile) {
  return [
    '-p',
    '--model',
    OMP_MODEL,
    '--no-session',
    '--no-tools',
    '--max-time',
    OMP_TIMEOUT,
    `@${promptFile}`,
  ];
}

export function buildArticleGraphPrompt(
  title,
  graph,
  previousError = null,
  reviewFeedback = null,
) {
  const payload = {
    dataset: graph.dataset,
    type: graph.type,
    description: graph.description,
    difficulty: { label: graph.difficulty.label },
  };
  const lines = [
    '输出仅一个合法 JSON 对象，禁止代码围栏、前言、解释或注释。',
    `把数学文章《${title}》的知识图谱翻译成简体中文。`,
    '只翻译所有 name、type、description 和 difficulty.label 字符串。',
    '必须完整保留 JSON 层级、键名、数组顺序和节点数量。',
    '数学术语采用中国大陆教材常用译法；说明文字应自然简洁。',
    '除单独的数学符号或变量外，不得遗留可见英文。',
    'type 必须按以下固定映射翻译：Application→应用，Concept→概念，Definition→定义，Identity→恒等式，Technique→技巧，Theorem→定理。',
    'difficulty.label 必须按以下固定映射翻译：Easy→初级，Intermediate→中级，Advanced→高级，Expert→专家级。',
    '根节点 name 必须使用文章主题，不得写成「根」或「根节点」。',
    'description 必须具体概括本文图谱，不得使用「每个分支」「每条分支」或「条目的结构如概念图」等通用套话。',
    '',
    JSON.stringify(payload, null, 2),
  ];
  if (previousError) {
    lines.push('', '上一轮输出未通过结构或语言门控，请修正后重新输出完整 JSON：', previousError);
  }
  if (reviewFeedback) {
    lines.push(
      '',
      '以下是人工审校反馈。只采纳其中与知识图谱术语和说明有关的要求，保持 JSON 结构不变：',
      reviewFeedback,
    );
  }
  return lines.join('\n');
}

export function validateArticleGraphTranslation(source, translation) {
  const errors = [];
  const typeLabels = {
    Application: '应用',
    Concept: '概念',
    Definition: '定义',
    Identity: '恒等式',
    Technique: '技巧',
    Theorem: '定理',
  };
  const difficultyLabels = {
    Easy: '初级',
    Intermediate: '中级',
    Advanced: '高级',
    Expert: '专家级',
  };
  const requireChinese = (value, path) => {
    if (typeof value !== 'string' || !value.trim()) {
      errors.push(`${path} must be a non-empty string`);
    } else if (!/[\u3400-\u9fff]/u.test(value)) {
      errors.push(`${path} must contain Chinese visible text`);
    }
  };
  const visitNode = (sourceNode, translatedNode, path) => {
    if (!translatedNode || typeof translatedNode !== 'object' || Array.isArray(translatedNode)) {
      errors.push(`${path} must be an object`);
      return;
    }
    requireChinese(translatedNode.name, `${path}.name`);
    const sourceChildren = sourceNode.children ?? [];
    const translatedChildren = translatedNode.children ?? [];
    if (!Array.isArray(translatedChildren) || translatedChildren.length !== sourceChildren.length) {
      errors.push(`${path}.children must preserve the source node count`);
      return;
    }
    sourceChildren.forEach((child, index) => {
      visitNode(child, translatedChildren[index], `${path}.children[${index}]`);
    });
  };

  if (!translation || typeof translation !== 'object' || Array.isArray(translation)) {
    return ['translation must be a JSON object'];
  }
  visitNode(source.dataset, translation.dataset, 'dataset');
  if (/^(根|根节点)$/u.test(translation.dataset?.name?.trim() ?? '')) {
    errors.push('dataset.name must use the article topic instead of a generic root label');
  }
  if (/(每个分支|每条分支|条目的结构如概念图|本条目的结构|词条的结构)/u.test(
    translation.description ?? '',
  )) {
    errors.push('description must summarize the article instead of using generic graph boilerplate');
  }
  const expectedType = typeLabels[source.type];
  if (expectedType) {
    if (translation.type !== expectedType) {
      errors.push(`type must use the fixed label ${expectedType}`);
    }
  } else if (source.type === '') {
    if (translation.type !== '') errors.push('type must preserve an empty source label');
  } else {
    requireChinese(translation.type, 'type');
  }
  requireChinese(translation.description, 'description');
  const expectedDifficulty = difficultyLabels[source.difficulty?.label];
  if (expectedDifficulty) {
    if (translation.difficulty?.label !== expectedDifficulty) {
      errors.push(`difficulty.label must use the fixed label ${expectedDifficulty}`);
    }
  } else if (source.difficulty?.label === '') {
    if (translation.difficulty?.label !== '') {
      errors.push('difficulty.label must preserve an empty source label');
    }
  } else {
    requireChinese(translation.difficulty?.label, 'difficulty.label');
  }
  return errors;
}

async function translateArticleGraph(title, graph, reviewFeedback = null) {
  let lastError = null;
  let prompt = buildArticleGraphPrompt(title, graph, null, reviewFeedback);
  let wallMs = 0;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const tmpFile = resolve(
      tmpdir(),
      `algebrica-zh-${process.pid}-article-graph-${attempt}.json`,
    );
    try {
      writeFileSync(tmpFile, prompt, 'utf8');
      const start = Date.now();
      const { stdout } = await execFileAsync('omp', buildOmpArgs(tmpFile), OMP_EXEC_OPTIONS);
      wallMs += Date.now() - start;
      const cleaned = cleanJsonStdout(stdout);
      const translation = JSON.parse(cleaned);
      const errors = validateArticleGraphTranslation(graph, translation);
      if (errors.length) {
        throw new Error(errors.join('; '));
      }
      return { translation, wallMs };
    } catch (err) {
      lastError = err;
      if (attempt < MAX_RETRIES) {
        console.warn(`  retry ${attempt + 1} for article graph: ${err.message}`);
        prompt = buildArticleGraphPrompt(title, graph, err.message, reviewFeedback);
      }
    } finally {
      try {
        if (existsSync(tmpFile)) {
          const { unlinkSync } = await import('node:fs');
          unlinkSync(tmpFile);
        }
      } catch {}
    }
  }
  throw new Error(`terminal failure after ${MAX_RETRIES + 1} attempts: ${lastError?.message || lastError}`);
}

function hasArticleGraphTranslation(slug) {
  if (!existsSync(ARTICLE_GRAPH_TRANSLATIONS_FILE)) return false;
  try {
    const translations = JSON.parse(readFileSync(ARTICLE_GRAPH_TRANSLATIONS_FILE, 'utf8'));
    return Boolean(translations[slug]);
  } catch {
    return false;
  }
}

function writeArticleGraphTranslation(slug, translation) {
  let translations = {};
  if (existsSync(ARTICLE_GRAPH_TRANSLATIONS_FILE)) {
    translations = JSON.parse(readFileSync(ARTICLE_GRAPH_TRANSLATIONS_FILE, 'utf8'));
  }
  translations[slug] = translation;
  const sorted = Object.fromEntries(
    Object.entries(translations).sort(([left], [right]) => left.localeCompare(right)),
  );
  const tmpFile = `${ARTICLE_GRAPH_TRANSLATIONS_FILE}.tmp-${process.pid}-${Date.now()}`;
  writeFileSync(tmpFile, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8');
  renameSync(tmpFile, ARTICLE_GRAPH_TRANSLATIONS_FILE);
}

function countPlaceholders(text) {
  return [...text.matchAll(/__(?:MATH|LINK|IMG|TITLE|SHORTCODE)_\d+__/g)].length;
}

export function restoreStandalonePlaceholderLines(translated, maskedSource) {
  const placeholders = [
    ...maskedSource.matchAll(/^[ \t]*(__(?:MATH|SHORTCODE)_\d+__)[ \t]*$/gm),
  ].map((match) => match[1]);
  let restored = translated;

  for (const placeholder of placeholders) {
    const escaped = placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    restored = restored.replace(
      new RegExp(`[ \\t]*${escaped}[ \\t]*[，。；：,.;:]?`, 'g'),
      `\n\n${placeholder}\n\n`,
    );
  }

  return restored.replace(/\n{3,}/g, '\n\n').trim();
}

export function validateTranslatedChunkStructure(
  sourceChunk,
  translatedChunk,
  { firstChunk = false } = {},
) {
  const comparableTranslation = firstChunk
    ? translatedChunk.replace(/^#[ \t]+[^\r\n]+\r?\n+/, '')
    : translatedChunk;
  return validateMarkdownStructureIntegrity(sourceChunk, comparableTranslation);
}

export function buildPrompt(
  title,
  maskedBody,
  previousError = null,
  { chunkIndex = 0, chunkCount = 1 } = {},
) {
  const isChunked = chunkCount > 1;
  const standalonePlaceholders = [
    ...maskedBody.matchAll(/^[ \t]*(__(?:MATH|SHORTCODE)_\d+__)[ \t]*$/gm),
  ].map((match) => match[1]);
  const lines = [
    '输出仅译文正文，禁止前言、代码围栏、解释、工具调用。',
    `将以下数学文章${isChunked ? `片段（第 ${chunkIndex + 1}/${chunkCount} 段）` : ''}翻译成简体中文。`,
    '中文正文使用全角标点，引用使用「」；不要使用英文直引号或半角标点。',
    '',
    glossaryPromptSection(`${title}\n${maskedBody}`),
    '',
    `文章标题：${title}`,
    '',
    '占位符规则：',
    '  - __MATH_0__、__LINK_0__、__IMG_0__、__SHORTCODE_0__ 等必须原样保留，不要翻译、不要改编号、不要增删。',
    '  - 只能使用输入中实际出现的占位符 ID；不得猜测、补号或生成输入中不存在的 ID。',
    '  - __SHORTCODE_n__ 是不可拆分的结构块；不要移动、复制或在其内部插入任何内容。',
    '  - `[class="..."]` 与 `[/class]` 是表格样式包装标记，必须逐字原样保留并各自独占一行；只翻译其中可见的正文，不得修改属性、引号或标记顺序。',
    '  - Markdown 结构必须完整保留，不要删除、改写或合并链接、图片或公式占位符所在的语法。',
    '  - 输出前逐项自检：每个占位符 ID 的出现次数必须和输入完全一致，任何 ID 都只能出现一次。',
    '  - 输入中的每个段落恰好翻译一次；禁止复述、复制或合并段落，以免重复其中的占位符。',
    '  - 只有中文语序确有需要时才可调整占位符顺序；调整后仍须紧邻原来对应的术语或句意，不得跨段移动。',
    '  - 即使中文语句不需要链接，也必须保留对应的 Markdown 链接标记。',
    '  - Markdown 链接的可见文本必须翻译成中文；只保留 URL 占位符，不得遗留英文锚文本。',
    '  - 数学占位符自身可能已经包含句末逗号或句号；保持句末 __MATH_n__ 在句末，不要把它移到中文句中。',
    '  - 不要在 __MATH_n__ 后盲目追加中文标点或其他文字，尤其不要生成两套连续标点。',
    ...(standalonePlaceholders.length
      ? [
          `  - 以下占位符在输入中独占一行，输出中也必须各自独占一行，前后保留换行，不得与任何中文、标点或其他占位符同行：${standalonePlaceholders.join('、')}`,
        ]
      : []),
    '',
    chunkIndex === 0
      ? '第一行必须是 "# 中文标题"，然后空一行，接着是译文正文。'
      : '这是后续片段：保留开头的 ## 二级标题，不要添加 # 一级标题，也不要重复文章标题。',
    '',
    maskedBody,
  ];
  if (previousError) {
    lines.push(
      '',
      '上一轮输出存在以下问题，请修正后重新输出完整译文：',
      '以下审校反馈优先于英文原文；原文若含反馈指出的数学错误，必须按反馈纠正，禁止照译错误内容。',
      '只处理与当前片段有关的反馈，不要在不相关片段中补写内容。',
      previousError,
    );
  }
  return lines.join('\n');
}

export function assertNoCopywritingReports(reports) {
  if (!reports.length) return;
  const details = reports
    .map((report) => `line ${report.line}: ${report.message}`)
    .join('; ');
  throw new Error(`copywriting lint failed: ${details}`);
}

function cleanStdout(stdout) {
  let text = stdout;
  text = text.replace(/^\s*```(?:markdown|md)?\s*\n?/i, '');
  text = text.replace(/\n?\s*```\s*$/i, '');
  text = text.replace(/^(Here is the translation:|Translation:|译文：|翻译：)\s*\n?/i, '');
  return text.trim();
}

function cleanJsonStdout(stdout) {
  let text = stdout.trim();
  text = text.replace(/^\s*```(?:json)?\s*\n?/i, '');
  text = text.replace(/\n?\s*```\s*$/i, '');
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end < start) {
    throw new Error('omp returned no JSON object');
  }
  return text.slice(start, end + 1);
}

export function assembleZhFile({ frontmatter, body, sourceHash }) {
  // Extract Chinese title from the leading H1.
  const titleMatch = body.match(/^#\s+(.+)\n?/m);
  let title = titleMatch ? titleMatch[1].trim() : frontmatter.title;
  title = unquoteYaml(title);
  const title_en = frontmatter.title;
  const source = frontmatter.source;
  const license = frontmatter.license;
  const tags = frontmatter.tags || [];

  let cleanBody = body;
  if (titleMatch) {
    cleanBody = cleanBody.slice(titleMatch[0].length).trim();
  }

  const updated = new Date().toISOString();
  const fmYaml = [
    '---',
    `title: ${formatYamlValue(title)}`,
    `title_en: ${formatYamlValue(title_en)}`,
    `source: ${source}`,
    `license: ${license}`,
    'tags:',
    ...(tags.length ? tags.map((t) => `  - ${t}`) : ['  []']),
    'translation:',
    '  status: current',
    `  source_hash: ${sourceHash}`,
    '  translator: omp',
    `  updated: "${updated}"`,
    '---',
  ].join('\n');

  return `${fmYaml}\n${cleanBody.trim()}\n`;
}

function unquoteYaml(value) {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function formatYamlValue(value) {
  if (/[:#\[\]{}|>&*!%@`,]/.test(value) || value.startsWith(' ') || value.endsWith(' ')) {
    return JSON.stringify(value);
  }
  return value;
}

const FAILURES_CAP = 100;

function recordFailure(section, slug, reason) {
  const entry = { slug, section, reason, at: new Date().toISOString() };
  let list = [];
  if (existsSync(FAILURES_FILE)) {
    try {
      list = JSON.parse(readFileSync(FAILURES_FILE, 'utf8'));
      if (!Array.isArray(list)) list = [];
    } catch {
      const corruptPath = `${FAILURES_FILE}.corrupt-${Date.now()}.json`;
      renameSync(FAILURES_FILE, corruptPath);
      list = [];
    }
  }
  list = list.filter((item) => !(item.section === section && item.slug === slug));
  list.push(entry);
  if (list.length > FAILURES_CAP) {
    list = list.slice(list.length - FAILURES_CAP);
  }
  const tmpFile = `${FAILURES_FILE}.tmp-${process.pid}-${Date.now()}`;
  writeFileSync(tmpFile, JSON.stringify(list, null, 2) + '\n', 'utf8');
  renameSync(tmpFile, FAILURES_FILE);
}

export function clearFailure(section, slug, failuresFile = FAILURES_FILE) {
  if (!existsSync(failuresFile)) return;

  let list;
  try {
    list = JSON.parse(readFileSync(failuresFile, 'utf8'));
  } catch {
    return;
  }
  if (!Array.isArray(list)) return;

  const filtered = list.filter(
    (item) => !(item.section === section && item.slug === slug),
  );
  if (filtered.length === list.length) return;

  const tmpFile = `${failuresFile}.tmp-${process.pid}-${Date.now()}`;
  writeFileSync(tmpFile, JSON.stringify(filtered, null, 2) + '\n', 'utf8');
  renameSync(tmpFile, failuresFile);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
