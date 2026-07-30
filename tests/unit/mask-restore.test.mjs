import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  localizeMathText,
  mask,
  normalizeInlineMathPunctuation,
  normalizeInlineMathSpacing,
  restore,
} from '../../scripts/lib/mask-restore.mjs';

const FIXTURE = `---
title: Median and Quantiles
source: https://algebrica.org/median-and-quantiles/
license: CC BY-NC 4.0
tags:
  - median
  - quantiles
---
## The central position

The median is a measure of central tendency. While the [mean](../introduction-to-the-mean/) is the numerical balance, the median is stable. The [arithmetic mean](../arithmetic-mean/) works too.

Formally, let $n$ numerical observations be arranged in order:

$$x_{1} \\leq x_{2} \\leq \\dots \\leq x_{n}$$

If $n$ is odd, the median is the central element:

$$\\tilde{M} = x_{\\left(\\frac{n+1}{2}\\right)}$$

| Salary (\\$) |
|:---:|
| \\$1,500 |

![diagram](svg/median-diagram.svg)

See also <https://example.com/note>.
`;

describe('mask-restore', () => {
  it('masks and restores token-identically', () => {
    const { masked, placeholders } = mask(FIXTURE);

    assert.ok(!masked.includes('Median and Quantiles'));
    assert.ok(masked.includes('__TITLE_0__'));
    assert.ok(masked.includes('source: https://algebrica.org/median-and-quantiles/'));
    assert.ok(masked.includes('__LINK_0__'));
    assert.ok(!masked.includes('svg/median-diagram.svg'));
    assert.ok(masked.includes('__IMG_0__'));
    assert.ok(!masked.includes('x_{1}'));
    assert.ok(masked.includes('__MATH_0__'));
    assert.ok(masked.includes('__MATH_1__'));
    assert.ok(masked.includes('__MATH_2__'));

    assert.equal(placeholders.title[0], 'Median and Quantiles');
    assert.equal(placeholders.link[0], '../introduction-to-the-mean/');
    assert.equal(placeholders.img[0], 'svg/median-diagram.svg');
    assert.ok(placeholders.math.includes('$n$'));
    assert.ok(placeholders.math.some((m) => m.startsWith('$$')));
    assert.ok(placeholders.math.some((m) => m.includes('x_{1}')));

    const restored = restore(masked, placeholders);
    assert.equal(restored, FIXTURE);
  });

  it('throws when placeholder count is corrupted', () => {
    const { masked, placeholders } = mask(FIXTURE);
    const corrupted = masked.replace('__MATH_1__', '');
    assert.throws(() => restore(corrupted, placeholders), /placeholder count\/order mismatch/);
  });

  it('throws when a placeholder ID is unknown', () => {
    const { masked, placeholders } = mask(FIXTURE);
    const corrupted = masked.replace('__MATH_0__', '__MATH_9__');
    assert.throws(() => restore(corrupted, placeholders), /__MATH_9__ has no stored original value/);
  });

  it('allows valid placeholders to move with translated sentence structure', () => {
    const { masked, placeholders } = mask('First $x$, then $y$.');
    const corrupted = masked
      .replace('__MATH_0__', '__SWAP__')
      .replace('__MATH_1__', '__MATH_0__')
      .replace('__SWAP__', '__MATH_1__');

    assert.equal(restore(corrupted, placeholders), 'First $y$, then $x$.');
  });

  it('moves trailing prose punctuation outside inline math before translation', () => {
    const { masked, placeholders } = mask('For $x,$ then $y.$ Up to $n:$');

    assert.equal(masked, 'For __MATH_0__, then __MATH_1__. Up to __MATH_2__:');
    assert.deepEqual(placeholders.math, ['$x$', '$y$', '$n$']);
    assert.equal(
      restore('对于 __MATH_0__，然后是 __MATH_1__。直到 __MATH_2__：', placeholders),
      '对于 $x$，然后是 $y$。直到 $n$：',
    );
  });

  it('preserves factorial operators while extracting prose punctuation', () => {
    const { masked, placeholders } = mask('Define $a_n=n!$; use $n!,$ then compare $k!.$');

    assert.equal(masked, 'Define __MATH_0__; use __MATH_1__, then compare __MATH_2__.');
    assert.deepEqual(placeholders.math, ['$a_n=n!$', '$n!$', '$k!$']);
    assert.equal(
      restore('定义 __MATH_0__；使用 __MATH_1__，再比较 __MATH_2__。', placeholders),
      '定义 $a_n=n!$；使用 $n!$，再比较 $k!$。',
    );
  });

  it('normalizes legacy inline-math punctuation without duplicating existing Chinese punctuation', () => {
    assert.equal(
      normalizeInlineMathPunctuation('若 $x,$，则 $y.$ Next；并令 $z,$ follows。'),
      '若 $x$，则 $y$。 Next；并令 $z$， follows。',
    );
  });

  it('adds spaces only between CJK prose and inline math', () => {
    assert.equal(
      normalizeInlineMathSpacing('若$x<y$则成立；见[$n$ 次根](../radicals/)。\n\n$$x<y$$'),
      '若 $x<y$ 则成立；见[$n$ 次根](../radicals/)。\n\n$$x<y$$',
    );
    assert.equal(normalizeInlineMathSpacing('若 $x$，则 $y$。'), '若 $x$，则 $y$。');
    assert.equal(
      normalizeInlineMathSpacing('取[有理指数](../powers/)$q$，且$x$为[实数](../real-numbers/)，$y$[亦然](../same/)。'),
      '取[有理指数](../powers/) $q$，且 $x$ 为[实数](../real-numbers/)，$y$ [亦然](../same/)。',
    );
  });

  it('preserves escaped dollar signs as text', () => {
    const { masked, placeholders } = mask('| \\$1,500 |');
    assert.equal(placeholders.math.length, 0);
    assert.ok(masked.includes('\\$1,500'));
    assert.equal(restore(masked, placeholders), '| \\$1,500 |');
  });

  it('localizes visible prose inside math text without changing notation', () => {
    assert.equal(
      localizeMathText(
        '$$x > 0 \\quad \\text{if } y > 0 \\quad \\text{and} \\quad ' +
        'N_{\\text{invalid}} \\quad \\text{undefined} \\quad \\text{Log} x$$',
      ),
      '$$x > 0 \\quad \\text{若 } y > 0 \\quad \\text{且} \\quad ' +
      'N_{\\text{不合条件}} \\quad \\text{未定义} \\quad \\text{Log} x$$',
    );
  });

  it('masks an intervals shortcode as one opaque placeholder and restores it byte-for-byte', () => {
    const block = `[shortcode="intervals"]
|     | $a$ | $b$ |     |
|:----|-----|-----|-----|
|     | sign+l-in-o-h | sign+r-in-c |     |
[/shortcode]`;
    const source = `Before.\n\n${block}\n\nAfter.`;
    const { masked, placeholders } = mask(source);

    assert.equal(masked, 'Before.\n\n__SHORTCODE_0__\n\nAfter.');
    assert.deepEqual(placeholders.shortcode, [block]);
    assert.equal(restore(masked, placeholders), source);
  });

  it('also masks smart-quoted shortcode blocks byte-for-byte', () => {
    const block = `[shortcode=“intervals”]
| $a$ | $b$ |
|---|---|
| sign+l-in-o-h | sign+r-in-o-h |
[/shortcode]`;
    const { masked, placeholders } = mask(block);

    assert.equal(masked, '__SHORTCODE_0__');
    assert.deepEqual(placeholders.shortcode, [block]);
    assert.equal(restore(masked, placeholders), block);
  });

  it('rejects an unclosed shortcode before translation starts', () => {
    assert.throws(
      () => mask('[shortcode="intervals"]\n| $a$ |\n|---|\n| sign+s |'),
      /unclosed shortcode/,
    );
  });

  it('rejects an orphan closing shortcode hidden inside a table cell', () => {
    assert.throws(
      () => mask('| [/shortcode] |'),
      /orphan closing shortcode/,
    );
  });

  it('also masks the upstream field_math alias as an opaque structural block', () => {
    const block = `[field_math]
| | $-4$ | $k^2-4$ | |
|---|---|---|---|
| | sign+l-in-c-h | sign+r-in-c-h | |
[/field_math]`;
    const { masked, placeholders } = mask(block);

    assert.equal(masked, '__SHORTCODE_0__');
    assert.deepEqual(placeholders.shortcode, [block]);
    assert.equal(restore(masked, placeholders), block);
  });

  it('rejects link placeholders that are moved outside Markdown link syntax', () => {
    const { masked, placeholders } = mask('Read [equations](../equations/).');
    const corrupted = masked.replace('[equations]', '「方程」');

    assert.throws(
      () => restore(corrupted, placeholders),
      /link placeholder lost Markdown link structure/,
    );
  });

  it('rejects image placeholders that are moved outside Markdown image syntax', () => {
    const { masked, placeholders } = mask('![diagram](svg/example.svg)');
    const corrupted = masked.replace('![diagram]', 'diagram');

    assert.throws(
      () => restore(corrupted, placeholders),
      /image placeholder lost Markdown image structure/,
    );
  });

  it('requires structural shortcode placeholders to remain on their own line', () => {
    const source = `[shortcode="intervals"]
| | $a$ |
|---|---|
| | sign+s |
[/shortcode]`;
    const { masked, placeholders } = mask(source);

    assert.throws(
      () => restore(`Prefix ${masked}`, placeholders),
      /shortcode placeholder must remain on its own line/,
    );
  });
});
