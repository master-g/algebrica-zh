import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildSlugMap } from '../../src/lib/slug-map.mjs';
import { buildTranslationIndex } from '../../src/lib/translation-index.mjs';

describe('slug-map', () => {
  it('throws on slug collision and names the slug', () => {
    assert.throws(
      () =>
        buildSlugMap(
          [
            { id: 'integrals/definite-integrals' },
            { id: 'functions/definite-integrals' },
          ],
          { silent: true },
        ),
      /slug collision: definite-integrals/,
    );
  });
});

describe('translation-index', () => {
  it('reports missing translations with zh: null and status missing', () => {
    const rows = buildTranslationIndex([{ id: 'integrals/definite-integrals', data: {} }], []);
    assert.equal(rows.length, 1);
    assert.equal(rows[0].slug, 'definite-integrals');
    assert.equal(rows[0].section, 'integrals');
    assert.equal(rows[0].zh, null);
    assert.equal(rows[0].status, 'missing');
  });
});
