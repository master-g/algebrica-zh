import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  mkdtempSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  findCurrentFailureConflicts,
  normalizeTargetKey,
  readFailureLedger,
  runTranslationStatus,
} from '../../scripts/translation-status.mjs';

function createTempDirectory(t) {
  const directory = mkdtempSync(join(tmpdir(), 'algebrica-status-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  return directory;
}

function statusWith({
  current = [],
  stale = [],
  missing = [],
  validationFailures = 0,
} = {}) {
  return { current, stale, missing, validationFailures };
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
      missing: [{ section: 'inequalities', slug: 'inequalities' }],
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
        missing: [{ section: 'inequalities', slug: 'inequalities' }],
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
});
