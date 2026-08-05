import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeSiteBase, withSiteBase } from '../../src/lib/site-path.mjs';

describe('site base paths', () => {
  it('normalizes root and project bases', () => {
    assert.equal(normalizeSiteBase(undefined), '/');
    assert.equal(normalizeSiteBase('/'), '/');
    assert.equal(normalizeSiteBase('algebrica-zh'), '/algebrica-zh/');
    assert.equal(normalizeSiteBase('/algebrica-zh/'), '/algebrica-zh/');
  });

  it('adds a project base exactly once', () => {
    assert.equal(withSiteBase('/', '/algebrica-zh/'), '/algebrica-zh/');
    assert.equal(withSiteBase('/sets/', '/algebrica-zh/'), '/algebrica-zh/sets/');
    assert.equal(withSiteBase('/search.json', '/algebrica-zh/'), '/algebrica-zh/search.json');
    assert.equal(withSiteBase('/algebrica-zh/sets/', '/algebrica-zh/'), '/algebrica-zh/sets/');
    assert.equal(withSiteBase('/sets/', '/'), '/sets/');
  });

  it('leaves external and document-local references unchanged', () => {
    for (const value of ['https://algebrica.org/sets/', 'mailto:test@example.com', '#definition']) {
      assert.equal(withSiteBase(value, '/algebrica-zh/'), value);
    }
  });
});
