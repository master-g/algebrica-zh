import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function loadUpstreamLock(path = resolve(process.cwd(), 'upstream-lock.json')) {
  const lock = JSON.parse(readFileSync(path, 'utf8'));
  if (!/^https:\/\//.test(lock.repository || '')) {
    throw new Error(`upstream lock repository is invalid: ${lock.repository ?? '(missing)'}`);
  }
  if (!/^[0-9a-f]{40}$/.test(lock.commit || '')) {
    throw new Error(`upstream lock commit is invalid: ${lock.commit ?? '(missing)'}`);
  }
  return lock;
}

export function resolveUpstreamSourceDir({ env = process.env, cwd = process.cwd() } = {}) {
  const configured = env.ALGEBRICA_SOURCE_DIR?.trim();
  return resolve(cwd, configured || '../algebrica');
}

export function normalizeRepositoryUrl(url) {
  return String(url || '')
    .trim()
    .replace(/^git@([^:]+):/, '$1/')
    .replace(/^[a-z][a-z\d+.-]*:\/\//i, '')
    .replace(/\.git\/?$/, '')
    .replace(/\/+$/, '')
    .toLowerCase();
}

function runGit(sourceDir, args) {
  return execFileSync('git', ['-C', sourceDir, ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

export function verifyUpstreamSource({
  sourceDir = resolveUpstreamSourceDir(),
  lock = loadUpstreamLock(),
  git = (args) => runGit(sourceDir, args),
} = {}) {
  if (!existsSync(sourceDir)) {
    throw new Error(`upstream source directory does not exist: ${sourceDir}`);
  }
  if (!existsSync(resolve(sourceDir, '.git'))) {
    throw new Error(`upstream source is not a Git checkout: ${sourceDir}`);
  }

  const actualRepository = normalizeRepositoryUrl(git(['remote', 'get-url', 'origin']));
  const expectedRepository = normalizeRepositoryUrl(lock.repository);
  if (actualRepository !== expectedRepository) {
    throw new Error(`upstream remote mismatch: expected ${expectedRepository}, received ${actualRepository}`);
  }

  const actualCommit = git(['rev-parse', 'HEAD']);
  if (actualCommit !== lock.commit) {
    throw new Error(`upstream commit mismatch: expected ${lock.commit}, received ${actualCommit}`);
  }

  return { sourceDir, repository: actualRepository, commit: actualCommit };
}
