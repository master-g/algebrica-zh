import { readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractArticleGraph } from '../src/lib/article-graph.mjs';
import { parseFrontmatter, splitFrontmatter } from './lib/frontmatter.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_ROOT = join(ROOT, '..', 'algebrica');
const OUTPUT = join(ROOT, 'src/data/article-graphs.json');
const CONCURRENCY = 8;
const MAX_ATTEMPTS = 3;

async function articleSources() {
  const entries = [];
  const directories = await readdir(SOURCE_ROOT, { withFileTypes: true });

  for (const directory of directories) {
    if (!directory.isDirectory() || directory.name === 'pages') continue;
    const dir = join(SOURCE_ROOT, directory.name);
    for (const filename of await readdir(dir)) {
      if (!filename.endsWith('.md')) continue;
      const markdown = await readFile(join(dir, filename), 'utf8');
      const data = parseFrontmatter(splitFrontmatter(markdown).frontmatter);
      if (data?.source) entries.push(data.source);
    }
  }

  return [...new Set(entries)].sort();
}

async function fetchHtml(url) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);
    try {
      const response = await fetch(url, {
        headers: { 'user-agent': 'algebrica-zh graph sync' },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < MAX_ATTEMPTS) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 500));
      }
    } finally {
      clearTimeout(timeout);
    }
  }
  throw new Error(`${url}: ${lastError?.message ?? 'request failed'}`);
}

function slugFromUrl(url) {
  return new URL(url).pathname.split('/').filter(Boolean).at(-1);
}

async function main() {
  const sources = await articleSources();
  const graphs = {};
  const errors = [];
  let cursor = 0;
  let completed = 0;

  console.log(`[article-graphs] checking ${sources.length} upstream articles`);

  async function worker() {
    while (cursor < sources.length) {
      const source = sources[cursor];
      cursor += 1;
      try {
        const graph = extractArticleGraph(await fetchHtml(source));
        if (graph) graphs[slugFromUrl(source)] = { source, ...graph };
      } catch (error) {
        errors.push(error.message);
      }
      completed += 1;
      if (completed % 20 === 0 || completed === sources.length) {
        console.log(`[article-graphs] ${completed}/${sources.length}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  if (errors.length > 0) {
    throw new Error(`Graph sync failed:\n${errors.join('\n')}`);
  }

  const sortedGraphs = Object.fromEntries(
    Object.entries(graphs).sort(([left], [right]) => left.localeCompare(right)),
  );
  await writeFile(OUTPUT, `${JSON.stringify(sortedGraphs, null, 2)}\n`);
  console.log(`[article-graphs] wrote ${Object.keys(sortedGraphs).length} graphs to ${OUTPUT}`);
}

await main();
