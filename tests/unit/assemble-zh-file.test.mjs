import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import yaml from 'js-yaml';
import { assembleZhFile } from '../../scripts/translate.mjs';

describe('assembleZhFile', () => {
  it('emits parseable YAML frontmatter and round-trips scalar fields', () => {
    const frontmatter = {
      title: 'Example Title',
      source: 'https://algebrica.org/example/',
      license: 'CC BY-NC 4.0',
      tags: ['foo', 'bar'],
    };
    const body = '# 示例标题\n\n正文段落。';
    const sourceHash = 'abc123';

    const emitted = assembleZhFile({ frontmatter, body, sourceHash });

    // The updated field must end with a closing quote and be parseable as a string.
    assert.ok(/updated: "[^"]+"\n---/.test(emitted), 'updated should be a quoted string without trailing comma');

    const docs = yaml.loadAll(emitted);
    assert.equal(docs.length, 2);
    const parsed = docs[0];
    assert.equal(parsed.title, '示例标题');
    assert.equal(parsed.title_en, 'Example Title');
    assert.equal(parsed.source, 'https://algebrica.org/example/');
    assert.equal(parsed.license, 'CC BY-NC 4.0');
    assert.deepEqual(parsed.tags, ['foo', 'bar']);
    assert.equal(parsed.translation.status, 'current');
    assert.equal(parsed.translation.source_hash, 'abc123');
    assert.equal(parsed.translation.translator, 'omp');
    assert.equal(typeof parsed.translation.updated, 'string');
    assert.ok(parsed.translation.updated.length > 0);

    assert.equal(parsed.body, undefined);
    assert.ok(emitted.endsWith('正文段落。\n'));
  });
});
