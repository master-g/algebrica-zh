#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectTranslationStatus } from './translation-status.mjs';
import { listArticleTargets } from '../src/lib/source-inventory.mjs';
import {
  classifySvgChange,
  collectMarkdownStructure,
  parseNameStatus,
} from '../src/lib/upstream-audit.mjs';
import { resolveUpstreamSourceDir } from '../src/lib/upstream-source.mjs';

const MODULE_PATH = fileURLToPath(import.meta.url);
const ROOT = join(dirname(MODULE_PATH), '..');
const UPSTREAM = resolveUpstreamSourceDir();

function git(args, { sourceRoot = UPSTREAM, allowFailure = false } = {}) {
  try {
    return execFileSync('git', ['-C', sourceRoot, ...args], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', allowFailure ? 'ignore' : 'pipe'],
    }).trimEnd();
  } catch (error) {
    if (allowFailure) return null;
    throw error;
  }
}

function gitFile(commit, path, sourceRoot) {
  return git(['show', `${commit}:${path}`], { sourceRoot, allowFailure: true });
}

function currentFile(path, sourceRoot) {
  const fullPath = join(sourceRoot, path);
  return existsSync(fullPath) ? readFileSync(fullPath, 'utf8') : null;
}

function changedLines(base, head, paths, sourceRoot) {
  const output = git(['diff', '--numstat', `${base}..${head}`, '--', ...paths], { sourceRoot });
  if (!output) return { added: 0, deleted: 0, total: 0 };
  let added = 0;
  let deleted = 0;
  for (const line of output.split('\n')) {
    const [additions, deletions] = line.split('\t');
    added += Number.parseInt(additions, 10) || 0;
    deleted += Number.parseInt(deletions, 10) || 0;
  }
  return { added, deleted, total: added + deleted };
}

function same(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function markdownChangeDetails(change, { base, head, sourceRoot }) {
  const oldPath = change.previousPath || change.path;
  const before = gitFile(base, oldPath, sourceRoot);
  const after = currentFile(change.path, sourceRoot);
  const beforeStructure = collectMarkdownStructure(before || '');
  const afterStructure = collectMarkdownStructure(after || '');
  return {
    ...change,
    lines: changedLines(base, head, [oldPath, change.path], sourceRoot),
    structure: {
      linksChanged: !same(beforeStructure.links, afterStructure.links),
      latexChanged: beforeStructure.inlineMath !== afterStructure.inlineMath
        || beforeStructure.displayMath !== afterStructure.displayMath,
      imagesChanged: !same(beforeStructure.images, afterStructure.images),
      shortcodesChanged: !same(beforeStructure.shortcodes, afterStructure.shortcodes),
      before: beforeStructure,
      after: afterStructure,
    },
  };
}

function isArticleMarkdown(path) {
  return path.endsWith('.md')
    && !path.startsWith('category/')
    && !path.startsWith('pages/')
    && path.split('/').length === 2;
}

function localizedSvgPath(sourcePath) {
  return join(ROOT, 'public', 'assets', sourcePath.replace(/\.svg$/, '.zh.svg'));
}

function walkMarkdownSlugs(directory) {
  if (!existsSync(directory)) return new Set();
  const slugs = new Set();
  for (const section of readdirSync(directory, { withFileTypes: true })) {
    if (!section.isDirectory()) continue;
    for (const file of readdirSync(join(directory, section.name), { withFileTypes: true })) {
      if (file.isFile() && file.name.endsWith('.md')) slugs.add(file.name.slice(0, -3));
    }
  }
  return slugs;
}

function readJson(path) {
  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : {};
}

export async function collectUpstreamAudit({
  sourceRoot = UPSTREAM,
  root = ROOT,
} = {}) {
  const lock = readJson(join(root, 'upstream-lock.json'));
  const base = lock.commit;
  const head = git(['rev-parse', 'HEAD'], { sourceRoot });
  const changes = parseNameStatus(git([
    '-c', 'core.quotePath=false', 'diff', '--name-status', '-M', `${base}..${head}`, '--', '*.md', '*.svg',
  ], { sourceRoot }));
  const translationStatus = await collectTranslationStatus({ upstream: sourceRoot });

  const articleChanges = changes
    .filter((change) => isArticleMarkdown(change.path) || isArticleMarkdown(change.previousPath || ''))
    .map((change) => markdownChangeDetails(change, { base, head, sourceRoot }));

  const svgChanges = changes
    .filter((change) => change.path.endsWith('.svg'))
    .map((change) => {
      const oldPath = change.previousPath || change.path;
      const before = gitFile(base, oldPath, sourceRoot);
      const after = currentFile(change.path, sourceRoot);
      const localizedPath = localizedSvgPath(change.path);
      return {
        ...change,
        kind: before === null || after === null ? change.status : classifySvgChange(before, after),
        localized: existsSync(localizedPath),
        localizedPath: existsSync(localizedPath) ? localizedPath : null,
      };
    });

  const articleSlugs = listArticleTargets(sourceRoot).map(({ slug }) => slug);
  const translatedSlugs = walkMarkdownSlugs(join(root, 'content-zh'));
  const englishGraphs = readJson(join(root, 'src/data/article-graphs.json'));
  const chineseGraphs = readJson(join(root, 'src/data/article-graphs-zh.json'));

  return {
    base,
    head,
    status: {
      current: translationStatus.current.length,
      stale: translationStatus.stale.length,
      missing_translation: translationStatus.missingTranslation.length,
      source_absent: translationStatus.sourceAbsent.length,
    },
    articles: {
      added: articleChanges.filter(({ status }) => status === 'added'),
      modified: articleChanges.filter(({ status }) => status === 'modified'),
      renamed: articleChanges.filter(({ status }) => status === 'renamed'),
      deleted: articleChanges.filter(({ status }) => status === 'deleted'),
    },
    categoryDocuments: changes.filter(({ path }) => path.startsWith('category/') && path.endsWith('.md')),
    pageDocuments: changes.filter(({ path }) => path.startsWith('pages/') && path.endsWith('.md')),
    svg: {
      added: svgChanges.filter(({ status }) => status === 'added'),
      whitespaceOnly: svgChanges.filter(({ kind }) => kind === 'whitespace-only'),
      paletteOnly: svgChanges.filter(({ kind }) => kind === 'palette-only'),
      structural: svgChanges.filter(({ kind }) => kind === 'structural'),
      deleted: svgChanges.filter(({ status }) => status === 'deleted'),
      localizedAffected: svgChanges.filter(({ localized }) => localized),
    },
    knowledgeGraphs: {
      missingEnglish: articleSlugs.filter((slug) => !englishGraphs[slug]).sort(),
      missingChinese: articleSlugs.filter((slug) => (
        translatedSlugs.has(slug) && englishGraphs[slug] && !chineseGraphs[slug]
      )).sort(),
    },
  };
}

function printAudit(audit, log = console.log) {
  log(`upstream: ${audit.base.slice(0, 7)} -> ${audit.head.slice(0, 7)}`);
  for (const [label, count] of Object.entries(audit.status)) log(`${label}: ${count}`);
  log(`articles_added: ${audit.articles.added.length}`);
  log(`articles_modified: ${audit.articles.modified.length}`);
  log(`articles_renamed: ${audit.articles.renamed.length}`);
  log(`articles_deleted: ${audit.articles.deleted.length}`);
  for (const change of Object.values(audit.articles).flat()) {
    log(`  ${change.status} ${change.previousPath ? `${change.previousPath} -> ` : ''}${change.path} (${change.lines.total} lines)`);
  }
  log(`svg_added: ${audit.svg.added.length}`);
  log(`svg_whitespace_only: ${audit.svg.whitespaceOnly.length}`);
  log(`svg_palette_only: ${audit.svg.paletteOnly.length}`);
  log(`svg_structural: ${audit.svg.structural.length}`);
  log(`svg_localized_affected: ${audit.svg.localizedAffected.length}`);
  log(`graphs_missing_english: ${audit.knowledgeGraphs.missingEnglish.length}`);
  log(`graphs_missing_chinese: ${audit.knowledgeGraphs.missingChinese.length}`);
}

if (process.argv[1] && resolve(process.argv[1]) === MODULE_PATH) {
  collectUpstreamAudit()
    .then((audit) => {
      if (process.argv.includes('--json')) console.log(JSON.stringify(audit, null, 2));
      else printAudit(audit);
    })
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}
