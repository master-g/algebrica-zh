import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  collectTranslationStatus,
  findCurrentFailureConflicts,
  normalizeTargetKey,
  readFailureLedger,
  runTranslationStatus,
} from '../../scripts/translation-status.mjs';
import { hashSource } from '../../src/lib/translation-index.mjs';

function createTempDirectory(t) {
  const directory = mkdtempSync(join(tmpdir(), 'algebrica-status-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  return directory;
}

function statusWith({
  current = [],
  stale = [],
  missingTranslation = [],
  sourceAbsent = [],
  validationFailures = 0,
} = {}) {
  return { current, stale, missingTranslation, sourceAbsent, validationFailures };
}

describe('translation status failure ledger', () => {
  it('normalizes section and slug into the status index key', () => {
    assert.equal(
      normalizeTargetKey('/algebraic-structures/', '\\groups\\'),
      'algebraic-structures/groups',
    );
  });

  it('treats a missing ignored ledger as an empty ledger', (t) => {
    const directory = createTempDirectory(t);

    assert.deepEqual(
      readFailureLedger(join(directory, 'translation-failures.json')),
      [],
    );
  });

  it('rejects malformed and non-array ledgers', (t) => {
    const directory = createTempDirectory(t);
    const failuresFile = join(directory, 'translation-failures.json');

    writeFileSync(failuresFile, '{');
    assert.throws(() => readFailureLedger(failuresFile), /invalid JSON/);

    writeFileSync(failuresFile, '{}');
    assert.throws(() => readFailureLedger(failuresFile), /must contain an array/);
  });

  it('rejects duplicate targets after normalization', (t) => {
    const directory = createTempDirectory(t);
    const failuresFile = join(directory, 'translation-failures.json');
    writeFileSync(failuresFile, JSON.stringify([
      { section: 'algebraic-structures', slug: 'groups', reason: 'first' },
      { section: '/algebraic-structures/', slug: '/groups/', reason: 'second' },
    ]));

    assert.throws(
      () => readFailureLedger(failuresFile),
      /duplicate failure target: algebraic-structures\/groups/,
    );
  });

  it('reports current conflicts while retaining missing and stale failures', () => {
    const status = statusWith({
      current: [{ section: 'algebraic-structures', slug: 'groups' }],
      stale: [{ section: 'algebraic-structures', slug: 'rings' }],
      missingTranslation: [{ section: 'inequalities', slug: 'inequalities' }],
    });
    const failures = [
      { section: 'algebraic-structures', slug: 'groups', reason: 'historical' },
      { section: 'algebraic-structures', slug: 'rings', reason: 'still stale' },
      { section: 'inequalities', slug: 'inequalities', reason: 'still missing' },
    ];

    assert.deepEqual(findCurrentFailureConflicts(status, failures), [
      'algebraic-structures/groups',
    ]);
  });

  it('makes --verify fail with the conflicting current target', async (t) => {
    const directory = createTempDirectory(t);
    const failuresFile = join(directory, 'translation-failures.json');
    writeFileSync(failuresFile, JSON.stringify([
      { section: 'algebraic-structures', slug: 'groups', reason: 'historical' },
    ]));
    const output = [];
    const errors = [];

    const exitCode = await runTranslationStatus({
      args: ['--verify'],
      failuresFile,
      collectStatus: async () => statusWith({
        current: [{ section: 'algebraic-structures', slug: 'groups' }],
      }),
      log: (message) => output.push(message),
      error: (message) => errors.push(message),
    });

    assert.equal(exitCode, 1);
    assert.match(errors.join('\n'), /algebraic-structures\/groups/);
    assert.match(errors.join('\n'), /current translations remain in the failure ledger/);
  });

  it('allows genuine missing and stale failure records during --verify', async (t) => {
    const directory = createTempDirectory(t);
    const failuresFile = join(directory, 'translation-failures.json');
    writeFileSync(failuresFile, JSON.stringify([
      { section: 'algebraic-structures', slug: 'rings', reason: 'still stale' },
      { section: 'inequalities', slug: 'inequalities', reason: 'still missing' },
    ]));

    const exitCode = await runTranslationStatus({
      args: ['--verify'],
      failuresFile,
      collectStatus: async () => statusWith({
        stale: [{ section: 'algebraic-structures', slug: 'rings' }],
        missingTranslation: [{ section: 'inequalities', slug: 'inequalities' }],
      }),
      log: () => {},
      error: () => {},
    });

    assert.equal(exitCode, 0);
  });

  it('allows --verify when the ignored ledger does not exist', async (t) => {
    const directory = createTempDirectory(t);

    const exitCode = await runTranslationStatus({
      args: ['--verify'],
      failuresFile: join(directory, 'translation-failures.json'),
      collectStatus: async () => statusWith({
        current: [{ section: 'sets-and-numbers', slug: 'sets' }],
      }),
      log: () => {},
      error: () => {},
    });

    assert.equal(exitCode, 0);
  });

  it('reports current, stale, missing_translation, and source_absent separately', async (t) => {
    const root = createTempDirectory(t);
    const upstream = join(root, 'upstream');
    const contentZh = join(root, 'content-zh');
    for (const directory of [
      join(upstream, 'functions'),
      join(contentZh, 'functions'),
    ]) {
      mkdirSync(directory, { recursive: true });
    }

    const currentSource = '---\ntitle: Current\n---\n\nCurrent.\n';
    const staleSource = '---\ntitle: Stale\n---\n\nUpdated.\n';
    writeFileSync(join(upstream, 'functions', 'current.md'), currentSource);
    writeFileSync(join(upstream, 'functions', 'stale.md'), staleSource);
    writeFileSync(join(upstream, 'functions', 'missing.md'), 'source');
    writeFileSync(join(contentZh, 'functions', 'current.md'), `---\ntranslation:\n  source_hash: ${hashSource(currentSource)}\n---\n`);
    writeFileSync(join(contentZh, 'functions', 'stale.md'), `---\ntranslation:\n  source_hash: old\n---\n`);

    const status = await collectTranslationStatus({
      upstream,
      contentZh,
      inventory: {
        sourceTargets: [
          { section: 'functions', slug: 'current' },
          { section: 'functions', slug: 'missing' },
          { section: 'functions', slug: 'stale' },
        ],
        sourceAbsentTargets: [{ section: 'functions', slug: 'planned' }],
      },
    });

    assert.deepEqual(status.current.map(({ section, slug }) => ({ section, slug })), [
      { section: 'functions', slug: 'current' },
    ]);
    assert.deepEqual(status.stale.map(({ section, slug }) => ({ section, slug })), [
      { section: 'functions', slug: 'stale' },
    ]);
    assert.deepEqual(status.missingTranslation, [
      { section: 'functions', slug: 'missing' },
    ]);
    assert.deepEqual(status.sourceAbsent, [
      { section: 'functions', slug: 'planned' },
    ]);
  });
});
