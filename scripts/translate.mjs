#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { tmpdir } from 'node:os';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { promisify } from 'node:util';
import { mask, restore } from './lib/mask-restore.mjs';
import { glossaryPromptSection } from './lib/glossary.mjs';
import { lintChineseCopywriting } from './lib/copywriting-lint.mjs';
import { validateTranslation, checkGlossaryMapping, loadDangling } from './lib/validate.mjs';
import { buildSlugMap } from '../src/lib/slug-map.mjs';

const execFileAsync = promisify(execFile);

const __dirname = dirname(fileURLToPath(import.meta.url));
const UPSTREAM = resolve(__dirname, '..', '..', 'algebrica');
const CONTENT_ZH = resolve(__dirname, '..', 'content-zh');
const FAILURES_FILE = resolve(__dirname, '..', 'translation-failures.json');
const PAGE_TITLES = {
  bibliography: { title_en: 'Bibliography', title_zh: '参考文献' },
  'editorial-process': { title_en: 'Editorial Process', title_zh: '编辑流程' },
};

const MAX_RETRIES = 2;
const OMP_TIMEOUT = '10m';
const OMP_EXEC_OPTIONS = { timeout: 11 * 60 * 1000, maxBuffer: 16 * 1024 * 1024, killSignal: 'SIGTERM' };

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const allMissing = args.includes('--all-missing');
  const target = args.find((a) => !a.startsWith('--'));

  if (allMissing) {
    await runAllMissing({ dryRun });
    return;
  }

  if (!target) {
    console.error('Usage: node scripts/translate.mjs [--dry-run] <section/slug>');
    console.error('       node scripts/translate.mjs --all-missing [--dry-run]');
    process.exit(1);
  }

  const { section, slug } = parseTarget(target);
  const result = await translateOne(section, slug, { dryRun });
  if (!result.ok) {
    console.error(result.reason);
    process.exit(1);
  }
  console.log(`OK ${section}/${slug}`);
  if (result.path) console.log(`  → ${result.path}`);
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

export async function translateOne(section, slug, { dryRun = false } = {}) {
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

  let lastError = null;
  let translation = null;
  let currentPrompt = buildPrompt(frontmatter.title, maskedBody);
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const tmpFile = resolve(tmpdir(), `algebrica-zh-${process.pid}-${section}-${slug}-${attempt}.txt`);
    try {
      writeFileSync(tmpFile, currentPrompt, 'utf8');
      const start = Date.now();
      const { stdout } = await execFileAsync('omp', [
        '-p',
        '--no-session',
        '--no-tools',
        '--max-time',
        OMP_TIMEOUT,
        `@${tmpFile}`,
      ], OMP_EXEC_OPTIONS);
      const wallMs = Date.now() - start;
      const cleaned = cleanStdout(stdout);
      if (!cleaned || cleaned.trim().length === 0) {
        throw new Error('omp returned empty output');
      }
      const restored = restore(cleaned, placeholders);
      const { text: linted, reports } = lintChineseCopywriting(restored);

      // Rewrite image paths to the public /assets/ mount: the zh overlay has no
      // section-local svg/ dirs, and Astro's content-assets plugin resolves
      // relative markdown images against content-zh/ (where they don't exist).
      const withAssets = rewriteImagePaths(linted, section);

      const zhFile = assembleZhFile({
        frontmatter,
        body: withAssets,
        sourceHash,
      });

      const validation = await validateTranslation(zhFile, zhFile, { dangling: loadDangling() });
      const glossaryWarnings = checkGlossaryMapping(raw, zhFile);
      const allErrors = validation.errors;

      if (allErrors.length) {
        throw new Error(`validation failed: ${allErrors.join('; ')}`);
      }
      if (glossaryWarnings.length) {
        console.warn(`  glossary warnings for ${section}/${slug}: ${glossaryWarnings.join('; ')}`);
      }

      translation = { zhFile, lintReports: reports, wallMs };
      break;
    } catch (err) {
      lastError = err;
      if (attempt < MAX_RETRIES) {
        console.warn(`  retry ${attempt + 1} for ${section}/${slug}: ${err.message}`);
        currentPrompt = buildPrompt(frontmatter.title, maskedBody, err.message);
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

  if (!translation) {
    const reason = `terminal failure after ${MAX_RETRIES + 1} attempts: ${lastError?.message || lastError}`;
    recordFailure(section, slug, reason);
    return { ok: false, reason };
  }

  if (dryRun) {
    return { ok: true, path: null, wallMs: translation.wallMs, lintReports: translation.lintReports };
  }

  const zhDir = resolve(CONTENT_ZH, section);
  mkdirSync(zhDir, { recursive: true });
  const zhPath = resolve(zhDir, `${slug}.md`);
  writeFileSync(zhPath, translation.zhFile, 'utf8');
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

function rewriteImagePaths(markdown, section) {
  return markdown
    .replace(/(!\[[^\]]*\]\()svg\//g, `$1/assets/${section}/svg/`)
    .replace(/(!\[[^\]]*\]\()\.\.\/([^/]+\/svg\/)/g, '$1/assets/$2');
}

function buildPrompt(title, maskedBody, previousError = null) {
  const lines = [
    '输出仅译文正文，禁止前言、代码围栏、解释、工具调用。',
    '将以下数学文章翻译成简体中文。',
    '',
    glossaryPromptSection(),
    '',
    `文章标题：${title}`,
    '',
    '占位符规则：',
    '  - __MATH_0__、__LINK_0__、__IMG_0__ 等必须原样保留，不要翻译、不要改编号、不要增删。',
    '',
    '第一行必须是 "# 中文标题"，然后空一行，接着是译文正文。',
    '',
    maskedBody,
  ];
  if (previousError) {
    lines.push(
      '',
      '上一轮输出存在以下问题,请修正后重新输出完整译文:',
      previousError,
    );
  }
  return lines.join('\n');
}

function cleanStdout(stdout) {
  let text = stdout;
  text = text.replace(/^\s*```(?:markdown|md)?\s*\n?/i, '');
  text = text.replace(/\n?\s*```\s*$/i, '');
  text = text.replace(/^(Here is the translation:|Translation:|译文：|翻译：)\s*\n?/i, '');
  return text.trim();
}

function assembleZhFile({ frontmatter, body, sourceHash }) {
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
    `  updated: "${updated}",`,
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

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
