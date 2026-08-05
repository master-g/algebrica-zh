import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getSections, orderSectionRows } from '../../src/lib/sections.mjs';

describe('section index ordering', () => {
  it('provides a Chinese description for every public section', () => {
    for (const section of getSections()) {
      assert.equal(
        typeof section.description_zh,
        'string',
        `${section.dir} must provide description_zh`,
      );
      assert.ok(
        section.description_zh.trim(),
        `${section.dir} must not have an empty description_zh`,
      );
    }
  });

  it('keeps manifest order and appends collection-only articles', () => {
    const section = {
      dir: 'sets-and-numbers',
      entries: ['sets', 'natural-numbers'],
    };
    const rows = [
      { section: 'sets-and-numbers', slug: 'topology-of-the-real-line' },
      { section: 'sets-and-numbers', slug: 'natural-numbers' },
      { section: 'other', slug: 'sets' },
      { section: 'sets-and-numbers', slug: 'sets' },
      { section: 'sets-and-numbers', slug: 'cardinality-and-countable-sets' },
    ];

    assert.deepEqual(
      orderSectionRows(section, rows).map((row) => row.slug),
      ['sets', 'natural-numbers', 'cardinality-and-countable-sets', 'topology-of-the-real-line'],
    );
  });

  it('does not manufacture links for manifest entries absent from the collection', () => {
    const section = { dir: 'sets-and-numbers', entries: ['sets', 'missing'] };
    assert.deepEqual(
      orderSectionRows(section, [{ section: 'sets-and-numbers', slug: 'sets' }]).map(
        (row) => row.slug,
      ),
      ['sets'],
    );
  });
});
