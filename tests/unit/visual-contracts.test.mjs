import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const baseLayout = readFileSync('src/layouts/BaseLayout.astro', 'utf8');
const homePage = readFileSync('src/pages/index.astro', 'utf8');
const categoryPage = readFileSync('src/pages/category/[section]/index.astro', 'utf8');
const articlePage = readFileSync('src/pages/[slug].astro', 'utf8');
const searchBox = readFileSync('src/components/SearchBox.astro', 'utf8');
const articleGraph = readFileSync('src/components/ArticleGraph.astro', 'utf8');
const siteCss = readFileSync('src/styles/site.css', 'utf8');

describe('public redesign visual contracts', () => {
  it('keeps copied upstream visual assets and snapshots out of the repository', () => {
    for (const path of [
      'public/theme',
      'public/media',
      'public/styles/zh-overrides.css',
      'reference/home.html',
      'reference/entry.html',
      'reference/category.html',
      'scripts/fetch-assets.mjs',
    ]) {
      assert.equal(existsSync(path), false, `${path} must not be restored`);
    }
  });

  it('uses an independent text-first shell without upstream theme assets', () => {
    assert.match(baseLayout, /import '\.\.\/styles\/site\.css'/);
    assert.match(baseLayout, /class="site-brand"/);
    assert.match(baseLayout, />Algebrica 中文译本</);
    assert.match(baseLayout, /class="theme-switch"/);
    assert.doesNotMatch(baseLayout, /\/theme\/|icon-algebrica|zh-overrides/);
    assert.doesNotMatch(homePage, /<video|\/media\//);
    assert.doesNotMatch(searchBox, /\/theme\/|<img/);
  });

  it('uses a warm parchment light palette without pure-white surfaces', () => {
    const lightTokens = siteCss.match(/:root\s*\{([^}]*)\}/)?.[1] || '';
    assert.match(siteCss, /:root\s*\{[^}]*--canvas:\s*#faf9f5;[^}]*--paper:\s*#faf9f5;/s);
    assert.match(siteCss, /html\[data-theme="black"\]\s*\{[^}]*--canvas:\s*#151515;[^}]*--paper:\s*#151515;/s);
    assert.match(siteCss, /:root\s*\{[^}]*--note:\s*#f5f0e8;/s);
    assert.match(siteCss, /:root\s*\{[^}]*--hairline:\s*#e6dfd8;/s);
    assert.doesNotMatch(lightTokens, /(?:--canvas|--paper):\s*#(?:fff|ffffff);/);
  });

  it('uses an accessible inline search icon without an icon runtime', () => {
    assert.match(
      searchBox,
      /<button[^>]*class="site-search__submit"[^>]*aria-label="搜索"[^>]*>/,
    );
    assert.match(searchBox, /<svg[^>]*class="site-search__icon"[^>]*aria-hidden="true"/);
    assert.doesNotMatch(searchBox, />\s*搜索\s*<\/button>/);
    assert.match(siteCss, /\.site-search__submit\s*\{[^}]*display:\s*inline-grid;[^}]*place-items:\s*center;/s);
    assert.match(siteCss, /\.site-search__icon\s*\{[^}]*width:\s*16px;[^}]*height:\s*16px;/s);
  });

  it('loads the accepted OFL Chinese serif subset and forbids synthetic italics', () => {
    assert.match(siteCss, /@font-face\s*\{[^}]*font-family:\s*"Noto Serif SC Algebrica"/s);
    assert.match(siteCss, /url\("\.\.\/assets\/fonts\/noto-serif-sc-algebrica\.woff2"\)/);
    assert.match(siteCss, /--font-serif:\s*"Noto Serif SC Algebrica"/);
    assert.match(siteCss, /font-synthesis:\s*none/);
    assert.doesNotMatch(siteCss, /\.article-(?:title|deck|section-title)[^{]*\{[^}]*font-style:\s*italic/s);
  });

  it('keeps the full ordered section index on home and category pages', () => {
    assert.match(homePage, /orderSectionRows\(section, rows\)/);
    assert.match(homePage, /class="section-index"/);
    assert.match(categoryPage, /orderSectionRows\(section, buildTranslationIndex\(articles, zhEntries\)\)/);
    assert.match(categoryPage, /class="chapter-list"/);
    assert.match(articlePage, /const sectionRows = orderSectionRows\(section, rows\)/);
    assert.match(articlePage, /nextSlug: sectionRows\[index \+ 1\]\?\.slug/);
  });

  it('keeps the Chinese shell language while scoping untranslated content to English', () => {
    assert.match(articlePage, /<BaseLayout title=\{pageTitle\}>/);
    assert.match(articlePage, /<div class="article-content" lang=\{pageLang\}>/);
    assert.doesNotMatch(articlePage, /<BaseLayout lang=\{pageLang\}/);
  });

  it('keeps section descriptions in Chinese and removes the repeated article deck', () => {
    assert.match(homePage, /<p lang="zh-CN">\{section\.description_zh\}<\/p>/);
    assert.doesNotMatch(homePage, /description_zh \|\| section\.description_en/);
    assert.doesNotMatch(categoryPage, /description_zh \|\| section\.description_en/);
    assert.doesNotMatch(articlePage, /article-deck|description_en/);
  });

  it('uses editorial supplements as desktop sidenotes and inline mobile notes', () => {
    assert.match(
      siteCss,
      /\.article-section \.sidenote\s*\{[^}]*background:\s*var\(--note\);/s,
    );
    assert.match(
      siteCss,
      /@media \(min-width: 1040px\)[\s\S]*\.article-section \.sidenote\s*\{[^}]*float:\s*right;[^}]*width:\s*240px;[^}]*margin:\s*4px -320px 28px 40px;[^}]*background:\s*transparent;/s,
    );
  });

  it('centers illustrations and standalone formulas without changing inline math', () => {
    assert.match(
      siteCss,
      /\.article-section p > img:only-child\s*\{[^}]*display:\s*block;[^}]*margin-inline:\s*auto;/s,
    );
    assert.match(
      siteCss,
      /\.article-section p\.standalone-math > mjx-container\s*\{[^}]*display:\s*block;[^}]*text-align:\s*center;/s,
    );
    assert.match(
      siteCss,
      /\.article-section mjx-container\[display="true"\]\s*\{[^}]*text-align:\s*center;/s,
    );
  });

  it('contains formulas and tables inside the mobile reading column', () => {
    assert.match(
      siteCss,
      /\.article-section mjx-container\[display="true"\],[^}]*\.article-section p\.standalone-math > mjx-container\s*\{[^}]*max-width:\s*100%;[^}]*overflow-x:\s*auto;/s,
    );
    assert.match(
      siteCss,
      /\.article-section li > mjx-container:not\(\[display="true"\]\)\s*\{[^}]*display:\s*inline-block;[^}]*max-width:\s*100%;[^}]*overflow-x:\s*auto;/s,
    );
    assert.match(
      siteCss,
      /\.article-section table\s*\{[^}]*display:\s*block;[^}]*max-width:\s*100%;[^}]*overflow-x:\s*auto;/s,
    );
  });

  it('renders the same accessible graph on desktop and mobile', () => {
    assert.match(articlePage, /<ArticleGraph graph=\{graph\}/);
    assert.ok(
      articlePage.indexOf('<ArticleGraph graph={graph}')
        < articlePage.indexOf('<footer class="article-attribution">'),
    );
    assert.match(articleGraph, /class="article-graph"/);
    assert.match(articleGraph, /class="article-graph__scroll"/);
    assert.doesNotMatch(articleGraph, /no-mobile/);
    assert.match(siteCss, /\.article-graph__canvas\s*\{[^}]*width:\s*798px;[^}]*min-width:\s*798px;/s);
    assert.match(siteCss, /\.article-graph__layout\s*\{[^}]*position:\s*relative;[^}]*width:\s*798px;[^}]*min-width:\s*798px;/s);
    assert.match(siteCss, /\.article-graph__meta\s*\{[^}]*position:\s*absolute;[^}]*right:\s*20px;[^}]*width:\s*300px;/s);
  });
});
