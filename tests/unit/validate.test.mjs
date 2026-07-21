import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateTranslation, checkGlossaryMapping } from '../../scripts/lib/validate.mjs';

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
});
