import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { lintChineseCopywriting } from '../../scripts/lib/copywriting-lint.mjs';

describe('lintChineseCopywriting', () => {
  it('auto-fixes CJK↔latin spacing', () => {
    const { text, reports } = lintChineseCopywriting('中文ABC中文');
    assert.equal(text, '中文 ABC 中文');
    assert.equal(reports.length, 0);
  });

  it('auto-fixes CJK↔digit spacing', () => {
    const { text, reports } = lintChineseCopywriting('中文123');
    assert.equal(text, '中文 123');
    assert.equal(reports.length, 0);
  });

  it('reports half-width punctuation in Chinese prose without fixing it', () => {
    const input = '你好, 世界';
    const { text, reports } = lintChineseCopywriting(input);
    assert.equal(text, input);
    assert.ok(reports.some((r) => /半角标点/.test(r.message)));
  });

  it('reports straight quotes in Chinese text', () => {
    const input = '他说"你好"。';
    const { text, reports } = lintChineseCopywriting(input);
    assert.equal(text, input);
    assert.ok(reports.some((r) => /建议改用/.test(r.message)));
  });

  it('reports full-width digits', () => {
    const { text, reports } = lintChineseCopywriting('数字１２３');
    assert.equal(text, '数字１２３');
    assert.ok(reports.some((r) => /全角数字/.test(r.message)));
  });

  it('does not mangle inline math, display math, URLs, or markdown links', () => {
    const input = '令 $a<b,$ 且 $$\\sum_{i=1}^{n} i$$，访问 https://example.com/foo 或 [链接](https://example.com/bar)。';
    const { text, reports } = lintChineseCopywriting(input);
    assert.equal(text, input);
    assert.ok(!reports.some((r) => /半角标点|建议改用|全角数字/.test(r.message)));
  });

  it('treats escaped dollar signs as text, not math', () => {
    const input = '\\$1,500，另一半高于 \\$1,500';
    const { text, reports } = lintChineseCopywriting(input);
    assert.equal(text, '\\$1,500，另一半高于 \\$1,500');
    assert.ok(!reports.some((r) => /半角标点/.test(r.message)));
  });

  it('does not treat LaTeX prime as a straight quote', () => {
    const input = '导数 $f\'(x)$ 存在。';
    const { text, reports } = lintChineseCopywriting(input);
    assert.equal(text, '导数 $f\'(x)$ 存在。');
    assert.ok(!reports.some((r) => /建议改用/.test(r.message)));
  });
});
