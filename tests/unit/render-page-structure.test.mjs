import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { renderPageMarkdown } from '../../src/pages/_render-page.mjs';

describe('renderPageMarkdown article structure', () => {
  it('wraps every level-two heading and its content in an article section', async () => {
    const html = await renderPageMarkdown(`## Introduction

First paragraph.

## Properties

Second paragraph.
`);

    const sections = html.match(/<section class="article-section">/g) || [];
    assert.equal(sections.length, 2);
    assert.match(
      html,
      /<section class="article-section"><h2[^>]*>Introduction<\/h2>\s*<p>First paragraph\.<\/p>\s*<\/section>/,
    );
    assert.match(
      html,
      /<section class="article-section"><h2[^>]*>Properties<\/h2>\s*<p>Second paragraph\.<\/p>\s*<\/section>/,
    );
  });

  it('keeps the trailing MathJax companion style outside the themed sections', async () => {
    const html = await renderPageMarkdown(`## Formula

$x + y$
`);

    assert.match(html, /<\/section>\s*<style>/);
    assert.match(html, /<\/style>$/);
    assert.equal((html.match(/<section class="article-section">/g) || []).length, 1);
  });

  it('marks paragraph-only inline MathJax output for display-style centering', async () => {
    const html = await renderPageMarkdown(`## Formula

$$x + y$$

The value $x + y$ stays inline.
`);

    assert.match(
      html,
      /<p class="standalone-math"><mjx-container class="MathJax" jax="SVG">/,
    );
    assert.doesNotMatch(html, /<p class="standalone-math">The value/);
  });

  it('applies class wrappers to Markdown tables without leaking markers', async () => {
    const html = await renderPageMarkdown(`[class="table-1 -right"]
| 恒等式 | 结果 |
|---|---|
| $a^2-b^2$ | $(a-b)(a+b)$ |
[/class]
`);

    assert.match(html, /<div class="table-1 -right">\s*<table>/);
    assert.doesNotMatch(html, /\[\/?class/);
    assert.doesNotMatch(html, /<td>\[\/class\]<\/td>/);
  });

  it('keeps prose between a class marker and its table inside the wrapper', async () => {
    const html = await renderPageMarkdown(`[class="table-sign"]

下表给出符号变化。

| 区间 | 符号 |
|---|---|
| $x>0$ | $+$ |

[/class]
`);

    assert.match(
      html,
      /<div class="table-sign">\s*<p>下表给出符号变化。<\/p>\s*<table>/,
    );
    assert.doesNotMatch(html, /\[\/?class/);
  });

  it('renders intervals shortcodes as themed number-line tables without leaking markers', async () => {
    const html = await renderPageMarkdown(`[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-o-h | sign+r-in-c |     |
[/shortcode]
`);

    assert.match(html, /<div class="table-intervals">\s*<table>/);
    assert.match(html, /<div class="sign-plus-left-in -open -highlight"><\/div>/);
    assert.match(html, /<div class="sign-plus-right-in -closed"><\/div>/);
    assert.match(html, /<tr><td align="left"><\/td><td><\/td><td><\/td><td><\/td><\/tr><\/tbody>/);
    assert.match(html, /<mjx-container[^>]*>[\s\S]*<\/mjx-container>/);
    assert.doesNotMatch(html, /\[\/?shortcode/);
    assert.doesNotMatch(html, /sign\+/);
  });

  it('renders adjacent interval signs from the same table cell as sibling elements', async () => {
    const html = await renderPageMarkdown(`[shortcode="intervals"]
|     | $0$ |     |
|:----|-----|-----|
|     | sign+r-o-h sign+l-o-h |     |
[/shortcode]
`);

    assert.match(
      html,
      /<td><div class="sign-plus-right -open -highlight"><\/div><div class="sign-plus-left -open -highlight"><\/div><\/td>/,
    );
  });

  it('accepts the upstream shorthand one-dash table delimiter', async () => {
    const html = await renderPageMarkdown(`[shortcode="intervals"]
| | $-5$ | $1$ | |
|-|---|---|---|
| | | sign+l-c-h | |
[/shortcode]
`);

    assert.match(html, /<div class="table-intervals">\s*<table>/);
    assert.match(html, /<div class="sign-plus-left -closed -highlight"><\/div>/);
    assert.doesNotMatch(html, /\[\/?shortcode|sign\+/);
  });

  it('does not let upstream multiline display math swallow a following shortcode', async () => {
    const html = await renderPageMarkdown(`$$\\begin{align}
x &< 1 \\\\
y &> 2
\\end{align}$$

[shortcode="intervals"]
| | $1$ | |
|-|---|---|
| | sign+l-c-h | |
[/shortcode]
`);

    assert.match(html, /<mjx-container class="MathJax" jax="SVG"/);
    assert.match(html, /<div class="table-intervals">\s*<table>/);
    assert.doesNotMatch(html, /\[\/?shortcode|sign\+/);
  });

  it('renders the upstream field_math alias as the same interval table structure', async () => {
    const html = await renderPageMarkdown(`[field_math]
| | $-4$ | $k^2-4$ | |
|---|---|---|---|
| | sign+l-in-c-h | sign+r-in-c-h | |
[/field_math]
`);

    assert.match(html, /<div class="table-intervals">\s*<table>/);
    assert.match(html, /<div class="sign-plus-left-in -closed -highlight"><\/div>/);
    assert.match(html, /<div class="sign-plus-right-in -closed -highlight"><\/div>/);
    assert.doesNotMatch(html, /\[\/?field_math|sign\+/);
  });
});
