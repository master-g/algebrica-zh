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
});
