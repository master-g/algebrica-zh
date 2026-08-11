import { readFile, rename, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchArticleGraph } from '../src/lib/article-graph.mjs';
import { listArticleTargets } from '../src/lib/source-inventory.mjs';
import { parseFrontmatter, splitFrontmatter } from './lib/frontmatter.mjs';
import { resolveUpstreamSourceDir } from '../src/lib/upstream-source.mjs';

const MODULE_PATH = fileURLToPath(import.meta.url);
const ROOT = join(dirname(MODULE_PATH), '..');
const SOURCE_ROOT = resolveUpstreamSourceDir();
const OUTPUT = join(ROOT, 'src/data/article-graphs.json');
const CONCURRENCY = 8;
const MAX_ATTEMPTS = 3;

async function articleSources(sourceRoot = SOURCE_ROOT) {
  const entries = [];
  for (const target of listArticleTargets(sourceRoot)) {
    const markdown = await readFile(join(sourceRoot, target.section, `${target.slug}.md`), 'utf8');
    const data = parseFrontmatter(splitFrontmatter(markdown).frontmatter);
    if (data?.source) entries.push({ ...target, source: data.source });
  }
  return entries;
}

async function fetchHtmlWithRetry(url, fetchImpl = fetch) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);
    try {
      const response = await fetchImpl(url, {
        headers: { 'user-agent': 'algebrica-zh graph sync' },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS) {
        await new Promise((resolveDelay) => setTimeout(resolveDelay, attempt * 500));
      }
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new Error(`${url}: ${lastError?.message ?? 'request failed'}`);
}

function parseTarget(target) {
  const [section, slug, ...rest] = String(target || '').split('/');
  if (!section || !slug || rest.length > 0) {
    throw new Error(`invalid graph target: ${target}`);
  }
  return { section, slug };
}

async function readGraphs(output) {
  if (!existsSync(output)) return {};
  return JSON.parse(await readFile(output, 'utf8'));
}

async function writeGraphs(output, graphs) {
  const sorted = Object.fromEntries(
    Object.entries(graphs).sort(([left], [right]) => left.localeCompare(right)),
  );
  const temporary = `${output}.tmp-${process.pid}`;
  await writeFile(temporary, `${JSON.stringify(sorted, null, 2)}\n`);
  await rename(temporary, output);
}

export async function syncArticleGraphs({
  target = null,
  sourceRoot = SOURCE_ROOT,
  output = OUTPUT,
  fetchHtml = fetchHtmlWithRetry,
  log = console.log,
} = {}) {
  let sources = await articleSources(sourceRoot);
  const existingGraphs = await readGraphs(output);
  let graphs = {};

  if (target) {
    const requested = parseTarget(target);
    sources = sources.filter(({ section, slug }) => (
      section === requested.section && slug === requested.slug
    ));
    if (sources.length !== 1) throw new Error(`graph target not found: ${target}`);
    graphs = existingGraphs;
  }

  log(`[article-graphs] checking ${sources.length} upstream article${sources.length === 1 ? '' : 's'}`);
  const fetched = {};
  const errors = [];
  let cursor = 0;
  let completed = 0;

  async function worker() {
    while (cursor < sources.length) {
      const article = sources[cursor];
      cursor += 1;
      try {
        const graph = await fetchArticleGraph({ ...article, fetchHtml });
        if (graph) {
          const existingKey = Object.entries(existingGraphs)
            .find(([, existingGraph]) => existingGraph?.source === graph.source)?.[0];
          fetched[existingKey || article.slug] = graph;
        } else if (target) {
          throw new Error('graph module not found');
        }
      } catch (error) {
        errors.push(`${article.source}: ${error.message}`);
      }
      completed += 1;
      if (completed % 20 === 0 || completed === sources.length) {
        log(`[article-graphs] ${completed}/${sources.length}`);
      }
    }
  }

  const workerCount = target ? 1 : CONCURRENCY;
  await Promise.all(Array.from({ length: workerCount }, () => worker()));
  if (errors.length > 0) throw new Error(`Graph sync failed:\n${errors.join('\n')}`);

  if (!target) {
    const fetchedKeys = new Set(Object.keys(fetched));
    const missingExisting = Object.keys(existingGraphs).filter((key) => !fetchedKeys.has(key));
    if (Object.keys(fetched).length === 0) {
      throw new Error('Graph sync failed: no graph modules were parsed');
    }
    if (missingExisting.length > 0) {
      throw new Error(`Graph sync failed: ${missingExisting.length} existing graph modules disappeared`);
    }
  }

  await writeGraphs(output, target ? { ...graphs, ...fetched } : fetched);
  log(`[article-graphs] wrote ${Object.keys(target ? { ...graphs, ...fetched } : fetched).length} graphs to ${output}`);
  return fetched;
}

function cliTarget(args) {
  const index = args.indexOf('--target');
  if (index === -1) return null;
  if (!args[index + 1]) throw new Error('--target requires section/slug');
  return args[index + 1];
}

if (process.argv[1] && resolve(process.argv[1]) === MODULE_PATH) {
  syncArticleGraphs({ target: cliTarget(process.argv.slice(2)) }).catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
