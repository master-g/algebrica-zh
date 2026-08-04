import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  validateTranslation,
  validateMathSyntax,
  validateVisibleMathText,
  validateShortcodeIntegrity,
  validateMarkdownStructureIntegrity,
  checkGlossaryMapping,
} from '../../scripts/lib/validate.mjs';

describe('validateMathSyntax', () => {
  it('can validate a translated fragment without frontmatter', () => {
    assert.deepEqual(validateMathSyntax('## 例子\n\n公式 $x + 1$。'), []);
    assert.ok(validateMathSyntax('## 例子\n\n错误 $，正文$。').some((error) => /KaTeX error/.test(error)));
  });

  it('does not parse display math a second time as inline math', () => {
    assert.deepEqual(
      validateMathSyntax('编号公式：\n\n$$x^2 + 1 \\tag{1}$$\n\n行内公式 $x+1$。'),
      [],
    );
  });

  it('rejects control characters that can corrupt LaTeX commands', () => {
    assert.deepEqual(
      validateMathSyntax('行内公式 $\u000cfrac{a}{b}$。'),
      ['control character in inline math: U+000C'],
    );
  });
});

describe('validateVisibleMathText', () => {
  it('rejects English prose that remains visible inside math text', () => {
    assert.deepEqual(
      validateVisibleMathText('$$x > 0 \\quad \\text{for all } x$$'),
      ['unlocalized English in math text: "for all"'],
    );
  });

  it('rejects CJK text because MathJax SVG sanitization makes it unreadable', () => {
    assert.deepEqual(
      validateVisibleMathText('$$x > 0 \\quad \\text{对所有 } x$$'),
      [
        'unsupported CJK in math text: "对所有"; use mathematical symbols or move the wording into prose',
      ],
    );
  });

  it('accepts conventional mathematical notation', () => {
    assert.deepEqual(
      validateVisibleMathText(
        '$\\text{Log} x + \\text{colog}_a x + \\text{P}$',
      ),
      [],
    );
  });
});

describe('validateShortcodeIntegrity', () => {
  const block = `[shortcode="intervals"]
| | $0$ | |
|---|---|---|
| | sign+r-in-c-h | |
[/shortcode]`;

  it('passes when the translated shortcode block is byte-identical', () => {
    assert.deepEqual(
      validateShortcodeIntegrity(`Before\n${block}\nAfter`, `之前\n${block}\n之后`),
      [],
    );
  });

  it('rejects changed or missing shortcode blocks', () => {
    assert.match(
      validateShortcodeIntegrity(block, block.replace('sign+r-in-c-h', 'sign+r-in-o-h'))[0],
      /shortcode block mismatch/,
    );
    assert.match(validateShortcodeIntegrity(block, '没有数轴')[0], /shortcode block mismatch/);
  });

  it('rejects malformed or orphan markers even when both sides contain them', () => {
    assert.match(
      validateShortcodeIntegrity('| [/shortcode] |', '| [/shortcode] |')[0],
      /orphan or malformed shortcode marker/,
    );
    assert.match(
      validateShortcodeIntegrity(
        '[shortcode=“intervals"]\n| sign+s |\n[/shortcode]',
        '[shortcode=“intervals"]\n| sign+s |\n[/shortcode]',
      )[0],
      /orphan or malformed shortcode marker/,
    );
  });
});

describe('validateMarkdownStructureIntegrity', () => {
  it('passes when headings, links, and images are structurally preserved', () => {
    const source = '## Definition\n\nRead [sets](../sets/) and ![diagram](svg/a.svg).';
    const translated = '## 定义\n\n阅读[集合](../sets/)以及![图示](/assets/a.svg)。';
    assert.deepEqual(validateMarkdownStructureIntegrity(source, translated), []);
  });

  it('preserves class table wrappers byte-for-byte while allowing table translation', () => {
    const source = '[class="table-1"]\n\n| Identity | Result |\n|---|---|\n\n[/class]';
    const translated = '[class="table-1"]\n\n| 恒等式 | 结果 |\n|---|---|\n\n[/class]';
    assert.deepEqual(validateMarkdownStructureIntegrity(source, translated), []);
    assert.match(
      validateMarkdownStructureIntegrity(source, translated.replace('table-1', 'table-sign'))[0],
      /class wrapper mismatch/,
    );
  });

  it('rejects a Markdown link converted into quoted text followed by a URL', () => {
    const source = 'Read [equations](../equations/).';
    const translated = '阅读「方程」(../equations/)。';
    assert.match(
      validateMarkdownStructureIntegrity(source, translated)[0],
      /Markdown link count mismatch/,
    );
  });
});

function makeZhFile(overrides = {}) {
  const fm = {
    title: '示例标题',
    title_en: 'Example Title',
    source: 'https://algebrica.org/example/',
    license: 'CC BY-NC 4.0',
    tags: ['example'],
    translation: {
      status: 'current',
      source_hash: 'deadbeef',
      translator: 'omp',
      updated: '2026-07-21T00:00:00.000Z',
    },
    ...overrides,
  };
  const yamlLines = [
    '---',
    `title: ${fm.title}`,
    `title_en: ${fm.title_en}`,
    `source: ${fm.source}`,
    `license: ${fm.license}`,
    'tags:',
    ...(fm.tags.length ? fm.tags.map((t) => `  - ${t}`) : ['  []']),
    'translation:',
    `  status: ${fm.translation.status}`,
    `  source_hash: ${fm.translation.source_hash}`,
    `  translator: ${fm.translation.translator}`,
    `  updated: "${fm.translation.updated}"`,
    '---',
  ];
  return yamlLines.join('\n') + '\n' + (overrides.body || '');
}

describe('validateTranslation', () => {
  it('passes a minimal valid zh file', async () => {
    const body = `这是正文。公式 $x+y=z$ 成对，还有内部链接 [集合](../sets-and-numbers/sets/)。\n`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), { dangling: { external: [], text: [] } });
    assert.equal(result.ok, true);
    assert.deepEqual(result.errors, []);
  });

  it('errors on missing frontmatter key and names it', async () => {
    const text = makeZhFile({}).replace(/^title_en:.*$/m, '');
    const result = await validateTranslation('example.md', text, { dangling: { external: [], text: [] } });
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((e) => /frontmatter missing title_en/.test(e)));
  });

  it('errors on missing translation block fields', async () => {
    const text = makeZhFile({}).replace(/^  source_hash:.*$/m, '');
    const result = await validateTranslation('example.md', text, { dangling: { external: [], text: [] } });
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((e) => /translation\.source_hash missing/.test(e)));
  });

  it('errors when source is not a URL', async () => {
    const text = makeZhFile({ source: 'not-a-url' });
    const result = await validateTranslation('example.md', text, { dangling: { external: [], text: [] } });
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((e) => /source is not a URL/.test(e)));
  });

  it('errors on inline math delimiter mismatch', async () => {
    const body = `不平衡的 $x+y=z。`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), { dangling: { external: [], text: [] } });
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((e) => /math delimiter mismatch/.test(e)));
  });

  it('errors on display math delimiter mismatch', async () => {
    const body = `$$x+y=z`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), { dangling: { external: [], text: [] } });
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((e) => /math delimiter mismatch/.test(e)));
  });

  it('errors on math that breaks KaTeX strict', async () => {
    const body = `$\\definitelyNotACommand{$`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), { dangling: { external: [], text: [] } });
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((e) => /KaTeX error/.test(e)));
  });

  it('errors on internal link to unknown slug', async () => {
    const body = `[未知](../no-such-section/no-such-slug/)`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), { dangling: { external: [], text: [] } });
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((e) => /internal link target missing/.test(e)));
  });

  it('allows internal link to dangling-links.json external-class slug', async () => {
    // "acceleration" is listed in dangling-links.json external class.
    const body = `[加速度](../acceleration/)`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), { dangling: { external: ['acceleration'], text: [] } });
    assert.equal(result.ok, true);
    assert.deepEqual(result.errors, []);
  });

  it('allows internal link to dangling-links.json text-class slug', async () => {
    const body = `[符号函数](../sign-functions/)`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), {
      dangling: { external: [], text: ['sign-functions'] },
    });
    assert.equal(result.ok, true);
    assert.deepEqual(result.errors, []);
  });

  it('allows an internal link whose explicit alias resolves to an article', async () => {
    const body = `[欧拉公式](../eulers-formula/)`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), {
      dangling: {
        aliases: { 'eulers-formula': 'euler-formula' },
        external: [],
        text: [],
      },
    });
    assert.equal(result.ok, true);
    assert.deepEqual(result.errors, []);
  });

  it('warns on raw HTML tags', async () => {
    const body = `<div>原始 HTML</div>`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), { dangling: { external: [], text: [] } });
    assert.equal(result.ok, true);
    assert.ok(result.warnings.some((w) => /raw HTML tags/.test(w)));
  });

  it('errors on javascript: URL link', async () => {
    const body = `[点击](javascript:alert(1))`;
    const result = await validateTranslation('example.md', makeZhFile({ body }), { dangling: { external: [], text: [] } });
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((e) => /javascript: URL/.test(e)));
  });
});

describe('checkGlossaryMapping', () => {
  it('flags when source contains "function" but translation lacks "函数"', () => {
    const errors = checkGlossaryMapping('This is a function.', '这是一个映射。');
    assert.ok(errors.length > 0);
    assert.ok(errors.some((e) => /function.*函数/.test(e)));
  });

  it('passes when source contains "function" and translation contains "函数"', () => {
    const errors = checkGlossaryMapping('This is a function.', '这是一个函数。');
    assert.deepEqual(errors, []);
  });

  it('does not require component terms inside a matched longer glossary term', () => {
    const errors = checkGlossaryMapping(
      'A commutative ring can be an integral domain.',
      '交换环可以是整环。',
    );
    assert.deepEqual(errors, []);
  });
});
