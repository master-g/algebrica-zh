import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  articleGraphSourceCandidates,
  extractArticleGraph,
  fetchArticleGraph,
  layoutArticleGraph,
} from '../../src/lib/article-graph.mjs';
import {
  applyArticleGraphTranslation,
  getArticleGraph,
  resolveArticleGraphEntry,
} from '../../src/lib/article-graphs.mjs';
import { syncArticleGraphs } from '../../scripts/sync-article-graphs.mjs';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const graphHtml = `
<section class="collapsible-tree no-mobile">
  <div class="collapsible-tree-description">A conceptual map.</div>
  <div class="s-c-t-c-node-type">Concept</div>
  <div class="difficulty-level dl-2"><div></div><div></div><div></div><div></div>Intermediate</div>
  <div class="s-c-t-c-item-count">0</div><div class="s-c-t-c-label">Requires</div>
  <div class="s-c-t-c-item-count">11</div><div class="s-c-t-c-label">Enables</div>
</section>
<script>
  var dataset = {"name":"root","children":[{"name":"foundations","children":[{"name":"definition"},{"name":"membership"}]}]};
  var fixedCanvasHeight = 440;
</script>`;

const dataAttributeGraphHtml = `
<section class="collapsible-tree no-mobile">
  <div class="collapsible-tree-description">A current conceptual map.</div>
  <div class="s-c-t-c-node-type">Concept</div>
  <div class="difficulty-level dl-1"><div class="difficulty-level-item"></div>Basic</div>
  <div class="s-c-t-c-item-count">1</div><div class="s-c-t-c-label">Requires</div>
  <div class="s-c-t-c-item-count">3</div><div class="s-c-t-c-label">Enables</div>
  <div class="collapsible-tree__canvas"
    data-collapsible-tree-data="{&quot;name&quot;:&quot;root&quot;,&quot;children&quot;:[{&quot;name&quot;:&quot;current&quot;}]}"
    data-collapsible-tree-height="420"></div>
</section>`;

describe('article graph data', () => {
  it('extracts the upstream graph dataset and presentation metadata', () => {
    assert.deepEqual(extractArticleGraph(graphHtml), {
      dataset: {
        name: 'root',
        children: [
          {
            name: 'foundations',
            children: [{ name: 'definition' }, { name: 'membership' }],
          },
        ],
      },
      type: 'Concept',
      description: 'A conceptual map.',
      difficulty: { level: 2, label: 'Intermediate' },
      requires: 0,
      enables: 11,
      canvasHeight: 440,
    });
  });

  it('returns null when an article has no graph module', () => {
    assert.equal(extractArticleGraph('<article>No graph here.</article>'), null);
  });

  it('extracts the current data-attribute graph payload', () => {
    const graph = extractArticleGraph(dataAttributeGraphHtml);
    assert.deepEqual(graph.dataset, {
      name: 'root',
      children: [{ name: 'current' }],
    });
    assert.equal(graph.description, 'A current conceptual map.');
    assert.equal(graph.difficulty.level, 1);
    assert.equal(graph.difficulty.label, 'Basic');
    assert.equal(graph.requires, 1);
    assert.equal(graph.enables, 3);
    assert.equal(graph.canvasHeight, 420);
  });

  it('resolves a translated graph by source URL when the local slug differs', () => {
    const entry = resolveArticleGraphEntry(
      'determinant-of-a-square-matrix',
      'https://algebrica.org/determinant/',
    );
    assert.equal(entry?.key, 'determinant');
    assert.equal(entry?.graph?.source, 'https://algebrica.org/determinant/');

    const graph = getArticleGraph(
      'determinant-of-a-square-matrix',
      'https://algebrica.org/determinant/',
    );
    assert.equal(graph?.dataset?.name, '行列式');
    assert.equal(graph?.type, '概念');
    assert.equal(graph?.difficulty?.label, '中级');
  });

  it('falls back from a stale source slug to the local article slug', async () => {
    const requests = [];
    const result = await fetchArticleGraph({
      source: 'https://algebrica.org/eulers-formula/',
      slug: 'euler-formula',
      fetchHtml: async (url) => {
        requests.push(url);
        return url.endsWith('/euler-formula/')
          ? graphHtml
          : '<article>No graph here.</article>';
      },
    });

    assert.deepEqual(articleGraphSourceCandidates(
      'https://algebrica.org/eulers-formula/',
      'euler-formula',
    ), [
      'https://algebrica.org/eulers-formula/',
      'https://algebrica.org/euler-formula/',
    ]);
    assert.deepEqual(requests, [
      'https://algebrica.org/eulers-formula/',
      'https://algebrica.org/euler-formula/',
    ]);
    assert.equal(result.source, 'https://algebrica.org/euler-formula/');
    assert.equal(result.type, 'Concept');
  });

  it('lays out every node and link without invalid coordinates', () => {
    const graph = extractArticleGraph(graphHtml);
    const layout = layoutArticleGraph(graph.dataset, { height: graph.canvasHeight });

    assert.equal(layout.nodes.length, 4);
    assert.equal(layout.links.length, 3);
    assert.equal(layout.nodes[0].depth, 0);
    assert.equal(layout.nodes.find((node) => node.name === 'root').y, 228);
    assert.equal(layout.nodes.find((node) => node.name === 'definition').y, 218);
    assert.equal(layout.nodes.find((node) => node.name === 'membership').y, 238);
    assert.ok(layout.nodes.every((node) => Number.isFinite(node.x) && Number.isFinite(node.y)));
    assert.ok(layout.links.every((link) => !link.path.includes('NaN')));
  });

  it('applies Chinese graph text without losing upstream numeric metadata', () => {
    const source = {
      ...extractArticleGraph(graphHtml),
      source: 'https://algebrica.org/example/',
    };
    const translated = applyArticleGraphTranslation(source, {
      dataset: {
        name: '根',
        children: [
          {
            name: '基础',
            children: [{ name: '定义' }, { name: '隶属关系' }],
          },
        ],
      },
      type: '概念',
      description: '本文概念之间的关系图。',
      difficulty: { label: '中级' },
    });

    assert.equal(translated.dataset.children[0].name, '基础');
    assert.equal(translated.difficulty.level, 2);
    assert.equal(translated.difficulty.label, '中级');
    assert.equal(translated.requires, 0);
    assert.equal(translated.enables, 11);
    assert.equal(translated.source, 'https://algebrica.org/example/');
  });

  it('updates one requested graph without modifying sibling entries', async (t) => {
    const root = mkdtempSync(join(tmpdir(), 'algebrica-graphs-'));
    t.after(() => rmSync(root, { recursive: true, force: true }));
    const sourceRoot = join(root, 'source');
    const output = join(root, 'graphs.json');
    mkdirSync(join(sourceRoot, 'logic'), { recursive: true });
    writeFileSync(join(sourceRoot, 'logic', 'propositional-logic.md'), `---\ntitle: Propositional Logic\nsource: https://algebrica.org/propositional-logic/\n---\n`);
    writeFileSync(output, `${JSON.stringify({ untouched: { source: 'https://algebrica.org/untouched/' } }, null, 2)}\n`);

    await syncArticleGraphs({
      target: 'logic/propositional-logic',
      sourceRoot,
      output,
      fetchHtml: async () => graphHtml,
      log: () => {},
    });

    const graphs = JSON.parse(readFileSync(output, 'utf8'));
    assert.equal(graphs.untouched.source, 'https://algebrica.org/untouched/');
    assert.equal(graphs['propositional-logic'].dataset.name, 'root');
  });

  it('preserves an existing graph key that is linked by a legacy source URL', async (t) => {
    const root = mkdtempSync(join(tmpdir(), 'algebrica-graphs-'));
    t.after(() => rmSync(root, { recursive: true, force: true }));
    const sourceRoot = join(root, 'source');
    const output = join(root, 'graphs.json');
    mkdirSync(join(sourceRoot, 'vectors'), { recursive: true });
    writeFileSync(join(sourceRoot, 'vectors', 'determinant-of-a-square-matrix.md'), `---\ntitle: Determinant\nsource: https://algebrica.org/determinant/\n---\n`);
    writeFileSync(output, `${JSON.stringify({ determinant: { source: 'https://algebrica.org/determinant/' } }, null, 2)}\n`);

    await syncArticleGraphs({
      target: 'vectors/determinant-of-a-square-matrix',
      sourceRoot,
      output,
      fetchHtml: async () => graphHtml,
      log: () => {},
    });

    const graphs = JSON.parse(readFileSync(output, 'utf8'));
    assert.deepEqual(Object.keys(graphs), ['determinant']);
    assert.equal(graphs.determinant.dataset.name, 'root');
  });

  it('does not overwrite graph data when a single-target fetch fails', async (t) => {
    const root = mkdtempSync(join(tmpdir(), 'algebrica-graphs-'));
    t.after(() => rmSync(root, { recursive: true, force: true }));
    const sourceRoot = join(root, 'source');
    const output = join(root, 'graphs.json');
    mkdirSync(join(sourceRoot, 'logic'), { recursive: true });
    writeFileSync(join(sourceRoot, 'logic', 'propositional-logic.md'), `---\ntitle: Propositional Logic\nsource: https://algebrica.org/propositional-logic/\n---\n`);
    const original = '{\n  "existing": true\n}\n';
    writeFileSync(output, original);

    await assert.rejects(() => syncArticleGraphs({
      target: 'logic/propositional-logic',
      sourceRoot,
      output,
      fetchHtml: async () => { throw new Error('offline'); },
      log: () => {},
    }), /offline/);
    assert.equal(readFileSync(output, 'utf8'), original);
  });

  it('does not overwrite graph data when a full sync parses no graph modules', async (t) => {
    const root = mkdtempSync(join(tmpdir(), 'algebrica-graphs-'));
    t.after(() => rmSync(root, { recursive: true, force: true }));
    const sourceRoot = join(root, 'source');
    const output = join(root, 'graphs.json');
    mkdirSync(join(sourceRoot, 'logic'), { recursive: true });
    writeFileSync(join(sourceRoot, 'logic', 'propositional-logic.md'), `---\ntitle: Propositional Logic\nsource: https://algebrica.org/propositional-logic/\n---\n`);
    const original = '{\n  "existing": true\n}\n';
    writeFileSync(output, original);

    await assert.rejects(() => syncArticleGraphs({
      sourceRoot,
      output,
      fetchHtml: async () => '<article>No graph here.</article>',
      log: () => {},
    }), /no graph modules were parsed/);
    assert.equal(readFileSync(output, 'utf8'), original);
  });
});
