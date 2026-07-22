import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const baseLayout = readFileSync('src/layouts/BaseLayout.astro', 'utf8');
const homePage = readFileSync('src/pages/index.astro', 'utf8');
const articlePage = readFileSync('src/pages/[slug].astro', 'utf8');
const overrides = readFileSync('public/styles/zh-overrides.css', 'utf8');

describe('visual theme contracts', () => {
  it('keeps the desktop header spacer used by the upstream breadcrumb layout', () => {
    assert.match(baseLayout, /<header id="header" class="header">/);
    assert.doesNotMatch(baseLayout, /<header id="header" class="header only-mobile">/);
  });

  it('keeps linked module index headings on the upstream ink color', () => {
    assert.match(homePage, /class="module-index-heading__title"/);
    assert.match(
      overrides,
      /\.module-index-heading__title a\s*\{[^}]*color:\s*#312f2f;/s,
    );
  });

  it('centers standalone Markdown illustrations inside article sections', () => {
    assert.match(
      overrides,
      /\.post-section p > img:only-child\s*\{[^}]*display:\s*block;[^}]*margin-inline:\s*auto;/s,
    );
  });

  it('centers paragraph-only MathJax formulas without changing inline math', () => {
    assert.match(
      overrides,
      /\.post-section p\.standalone-math > mjx-container\s*\{[^}]*display:\s*block;[^}]*text-align:\s*center;/s,
    );
  });

  it('renders the optional article graph before the attribution footer', () => {
    assert.match(articlePage, /import ArticleGraph from/);
    assert.match(articlePage, /<ArticleGraph graph=\{graph\}/);
    assert.ok(
      articlePage.indexOf('<ArticleGraph graph={graph}')
        < articlePage.indexOf('<footer class="post-footer-attribution">'),
    );
  });
});
