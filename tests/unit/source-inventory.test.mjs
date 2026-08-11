import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  buildTranslationInventory,
  listArticleTargets,
} from '../../src/lib/source-inventory.mjs';

function createFixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'algebrica-inventory-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  return root;
}

describe('upstream source inventory', () => {
  it('loads article Markdown while excluding category and page documents', (t) => {
    const root = createFixture(t);
    for (const directory of ['functions', 'logic', 'category', 'pages', '.github']) {
      mkdirSync(join(root, directory), { recursive: true });
    }
    writeFileSync(join(root, 'functions', 'functions.md'), 'source');
    writeFileSync(join(root, 'logic', 'propositional-logic.md'), 'source');
    writeFileSync(join(root, 'category', 'functions.md'), 'metadata');
    writeFileSync(join(root, 'pages', 'about.md'), 'page');
    writeFileSync(join(root, '.github', 'ignored.md'), 'internal');

    assert.deepEqual(listArticleTargets(root), [
      { section: 'functions', slug: 'functions' },
      { section: 'logic', slug: 'propositional-logic' },
    ]);
  });

  it('merges actual articles with configured targets and separates absent sources', (t) => {
    const root = createFixture(t);
    mkdirSync(join(root, 'functions'), { recursive: true });
    mkdirSync(join(root, 'pages'), { recursive: true });
    writeFileSync(join(root, 'functions', 'functions.md'), 'source');
    writeFileSync(join(root, 'functions', 'new-article.md'), 'source');
    writeFileSync(join(root, 'pages', 'bibliography.md'), 'source');
    writeFileSync(join(root, 'pages', 'editorial-process.md'), 'source');

    const sectionsFile = join(root, 'sections.yaml');
    writeFileSync(sectionsFile, `sections:\n  - dir: functions\n    entries:\n      - functions\n      - planned-article\n`);

    assert.deepEqual(buildTranslationInventory({ sourceRoot: root, sectionsFile }), {
      sourceTargets: [
        { section: 'functions', slug: 'functions' },
        { section: 'functions', slug: 'new-article' },
        { section: 'pages', slug: 'bibliography' },
        { section: 'pages', slug: 'editorial-process' },
      ],
      sourceAbsentTargets: [
        { section: 'functions', slug: 'planned-article' },
      ],
    });
  });

  it('keeps category Markdown excluded from the Astro collection', () => {
    const config = readFileSync('src/content.config.ts', 'utf8');
    assert.match(config, /!category\/\*\.md/);
  });
});
