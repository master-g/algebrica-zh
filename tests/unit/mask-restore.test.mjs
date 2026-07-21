import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mask, restore } from '../../scripts/lib/mask-restore.mjs';

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

  it('throws when placeholder order is wrong', () => {
    const { masked, placeholders } = mask(FIXTURE);
    const corrupted = masked.replace('__MATH_0__', '__MATH_9__');
    assert.throws(() => restore(corrupted, placeholders), /__MATH_9__ has no stored original value/);
  });

  it('preserves escaped dollar signs as text', () => {
    const { masked, placeholders } = mask('| \\$1,500 |');
    assert.equal(placeholders.math.length, 0);
    assert.ok(masked.includes('\\$1,500'));
    assert.equal(restore(masked, placeholders), '| \\$1,500 |');
  });
});
