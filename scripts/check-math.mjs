import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { visit } from 'unist-util-visit';
import config from '../astro.config.mjs';

const ALGEBRICA_BASE = '../algebrica';
const TORTURE_FILES = [
  'sets-and-numbers/properties-of-real-numbers.md',
  'probability-and-statistics/median-and-quantiles.md',
  'equations/irrational-equations.md',
  'limits/limits.md',
];

function listArticles() {
  const articles = [];
  for (const entry of readdirSync(ALGEBRICA_BASE, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === 'pages') continue;
    const section = entry.name;
    for (const file of readdirSync(join(ALGEBRICA_BASE, section))) {
      if (file.endsWith('.md')) {
        articles.push({ section, slug: file.slice(0, -3), path: join(ALGEBRICA_BASE, section, file) });
      }
    }
  }
  return articles;
}

function countSourceMath(source) {
  const counts = { inline: 0, display: 0 };
  const tree = unified().use(remarkParse).use(remarkGfm).use(remarkMath).parse(source);
  visit(tree, ['inlineMath', 'math'], (node) => {
    if (node.type === 'inlineMath') counts.inline++;
    else counts.display++;
  });
  return counts;
}

async function renderWithConfig(source, fileURL) {
  const processor = config.markdown.processor;
  const renderer = await processor.createRenderer({});
  return renderer.render(source, { fileURL });
}

function countRenderedMath(html) {
  const containers = (html.match(/<mjx-container/g) || []).length;
  const errors = (html.match(/mjx-error/g) || []).length;
  return { containers, errors };
}

async function checkFile(path) {
  const source = readFileSync(path, 'utf8');
  const src = countSourceMath(source);
  const srcTotal = src.inline + src.display;
  const { code } = await renderWithConfig(source, `file://${path}`);
  const rendered = countRenderedMath(code);
  const deviation = rendered.containers - srcTotal;
  return { path, source, src, srcTotal, rendered, deviation, html: code };
}

function formatResult(result) {
  const rel = result.path.replace(`${ALGEBRICA_BASE}/`, '');
  return `${rel}: source ${result.srcTotal} (inline ${result.src.inline}, display ${result.src.display}), rendered ${result.rendered.containers}, deviation ${result.deviation}, errors ${result.rendered.errors}`;
}

async function runTorture() {
  console.log('=== torture smoke ===');
  let failed = false;
  for (const rel of TORTURE_FILES) {
    const path = join(ALGEBRICA_BASE, rel);
    const result = await checkFile(path);
    console.log(formatResult(result));

    if (result.rendered.errors > 0) {
      console.error(`FAIL: ${rel} has ${result.rendered.errors} mjx-error(s)`);
      failed = true;
    }

    // Torture-specific assertions
    if (rel === 'properties-of-real-numbers.md') {
      const bTags = (result.html.match(/<b,/g) || []).length;
      const aLessB = (result.source.match(/\$a< b,\$/g) || []).length;
      if (bTags > 0) {
        console.error(`FAIL: ${rel} produced ${bTags} literal '<b,' sequences`);
        failed = true;
      }
      if (result.deviation !== 0) {
        console.error(`FAIL: ${rel} formula count mismatch`);
        failed = true;
      }
    }

    if (rel === 'median-and-quantiles.md') {
      const dollarText = (result.html.match(/\$/g) || []).length;
      const currency = (result.source.match(/\\\$/g) || []).length;
      // Currency should survive as literal $ text somewhere in output.
      if (dollarText < currency) {
        console.error(`FAIL: ${rel} currency dollars missing (expected at least ${currency}, got ${dollarText})`);
        failed = true;
      }
      if (result.deviation !== 0) {
        console.error(`FAIL: ${rel} math count mismatch`);
        failed = true;
      }
    }

    if (rel === 'irrational-equations.md') {
      const tables = (result.html.match(/<table/g) || []).length;
      if (tables === 0) {
        console.error(`FAIL: ${rel} table structure lost`);
        failed = true;
      }
      if (result.deviation !== 0) {
        console.error(`FAIL: ${rel} formula count mismatch`);
        failed = true;
      }
    }

    if (rel === 'limits/limits.md') {
      if (result.rendered.errors > 0) {
        console.error(`FAIL: ${rel} rendered with errors`);
        failed = true;
      }
      if (result.deviation !== 0) {
        console.error(`FAIL: ${rel} formula count mismatch`);
        failed = true;
      }
    }
  }
  return failed;
}

async function runCorpus() {
  console.log('=== corpus check ===');
  const articles = listArticles();
  let totalSrc = 0;
  let totalRendered = 0;
  let totalErrors = 0;
  let failed = false;
  const deviations = [];

  for (const article of articles) {
    const result = await checkFile(article.path);
    totalSrc += result.srcTotal;
    totalRendered += result.rendered.containers;
    totalErrors += result.rendered.errors;
    if (result.deviation !== 0 || result.rendered.errors > 0) {
      deviations.push(formatResult(result));
    }
  }

  console.log(`articles: ${articles.length}`);
  console.log(`source formulas: ${totalSrc}`);
  console.log(`rendered mjx-container: ${totalRendered}`);
  console.log(`deviation: ${totalRendered - totalSrc}`);
  console.log(`mjx-error occurrences: ${totalErrors}`);

  if (deviations.length) {
    console.log('--- deviations ---');
    deviations.forEach((d) => console.log(d));
    failed = true;
  }
  if (totalErrors > 0) failed = true;
  if (totalRendered - totalSrc !== 0) failed = true;

  return failed;
}

async function runSanitizeProof() {
  console.log('=== sanitize proof ===');
  const source = `<script>alert(1)</script>
<a href="javascript:alert(1)" onclick="alert(2)">click</a>
$ x = 1 $
$$ x = 2 $$
`;
  const { code } = await renderWithConfig(source);
  const hasScript = code.includes('<script');
  const hasJsHref = code.includes('javascript:');
  const hasMjx = code.includes('mjx-container');
  console.log(`script stripped: ${!hasScript}`);
  console.log(`javascript: href stripped: ${!hasJsHref}`);
  console.log(`mjx-container survives: ${hasMjx}`);
  return hasScript || hasJsHref || !hasMjx;
}

async function main() {
  const torture = process.argv.includes('--torture');
  const sanitize = process.argv.includes('--sanitize');
  const corpus = !torture && !sanitize;

  let failed = false;
  if (sanitize) failed = await runSanitizeProof();
  else if (torture) failed = await runTorture();
  else failed = await runCorpus();

  process.exit(failed ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
