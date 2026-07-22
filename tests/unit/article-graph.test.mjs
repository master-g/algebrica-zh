import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  extractArticleGraph,
  layoutArticleGraph,
} from '../../src/lib/article-graph.mjs';

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
});
