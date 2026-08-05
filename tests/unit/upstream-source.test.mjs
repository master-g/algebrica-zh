import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import {
  normalizeRepositoryUrl,
  resolveUpstreamSourceDir,
  verifyUpstreamSource,
} from '../../src/lib/upstream-source.mjs';

const LOCK = {
  repository: 'https://github.com/antoniolupetti/algebrica.git',
  commit: '66b40a8f19a727d619ef324a9ee6a6b1c6299638',
};

describe('upstream content source', () => {
  it('uses an explicit source directory relative to the caller cwd', () => {
    assert.equal(
      resolveUpstreamSourceDir({ env: { ALGEBRICA_SOURCE_DIR: './vendor/algebrica' }, cwd: '/workspace/site' }),
      '/workspace/site/vendor/algebrica',
    );
  });

  it('resolves the default source beside the repository working directory', () => {
    assert.equal(
      resolveUpstreamSourceDir({ env: {}, cwd: '/workspace/algebrica-zh' }),
      '/workspace/algebrica',
    );
  });

  it('normalizes equivalent GitHub repository URLs', () => {
    assert.equal(normalizeRepositoryUrl('git@github.com:antoniolupetti/algebrica.git'), 'github.com/antoniolupetti/algebrica');
    assert.equal(normalizeRepositoryUrl('https://github.com/antoniolupetti/algebrica/'), 'github.com/antoniolupetti/algebrica');
  });

  it('accepts the pinned repository and commit', () => {
    const sourceDir = mkdtempSync(join(tmpdir(), 'algebrica-source-'));
    mkdirSync(join(sourceDir, '.git'));
    const git = (args) => args.includes('remote') ? LOCK.repository : LOCK.commit;
    assert.deepEqual(verifyUpstreamSource({ sourceDir, lock: LOCK, git }), {
      sourceDir,
      repository: 'github.com/antoniolupetti/algebrica',
      commit: LOCK.commit,
    });
  });

  it('fails explicitly for missing, wrong-remote, and wrong-commit sources', () => {
    assert.throws(
      () => verifyUpstreamSource({ sourceDir: '/definitely/missing/algebrica', lock: LOCK }),
      /does not exist/,
    );

    const sourceDir = mkdtempSync(join(tmpdir(), 'algebrica-source-'));
    mkdirSync(join(sourceDir, '.git'));
    assert.throws(
      () => verifyUpstreamSource({ sourceDir, lock: LOCK, git: (args) => args.includes('remote') ? 'https://example.com/fork.git' : LOCK.commit }),
      /remote mismatch/,
    );
    assert.throws(
      () => verifyUpstreamSource({ sourceDir, lock: LOCK, git: (args) => args.includes('remote') ? LOCK.repository : '0000000000000000000000000000000000000000' }),
      /commit mismatch/,
    );
  });
});
