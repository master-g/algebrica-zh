#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  classifySvgChange,
  mergeLocalizedSvgText,
} from '../src/lib/upstream-audit.mjs';
import { resolveUpstreamSourceDir } from '../src/lib/upstream-source.mjs';

const ROOT = resolve(import.meta.dirname, '..');
const UPSTREAM = resolveUpstreamSourceDir();
const APPLY = process.argv.includes('--apply');
const MANUAL = new Set([
  'integrals/svg/fundamental-theorem-of-calculus-1.svg',
]);
const SOURCE_TEXT_TAIL = new Set([
  'integrals/svg/riemann-integrability-criteria-3.svg',
  'integrals/svg/riemann-integrability-criteria-4.svg',
]);
const MIGRATED_SVG = {
  source: 'integrals/svg/fundamental-theorem-of-calculus-2.svg',
  previousLocalized: 'integrals/svg/fundamental-theorem-of-calculus-1.zh.svg',
};

function git(args, { allowFailure = false } = {}) {
  try {
    return execFileSync('git', ['-C', UPSTREAM, ...args], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', allowFailure ? 'ignore' : 'pipe'],
    }).trimEnd();
  } catch (error) {
    if (allowFailure) return null;
    throw error;
  }
}

const lock = JSON.parse(readFileSync(join(ROOT, 'upstream-lock.json'), 'utf8'));
const head = git(['rev-parse', 'HEAD']);
const paths = git([
  '-c', 'core.quotePath=false', 'diff', '--name-only', `${lock.commit}..${head}`, '--', '*.svg',
]).split('\n').filter(Boolean);

let eligible = 0;
let changed = 0;
let manual = 0;
let migrated = 0;
for (const sourcePath of paths) {
  const before = git(['show', `${lock.commit}:${sourcePath}`], { allowFailure: true });
  if (before === null) continue;
  const after = readFileSync(join(UPSTREAM, sourcePath), 'utf8');
  if (classifySvgChange(before, after) !== 'structural') continue;

  const localizedPath = join(ROOT, 'public', 'assets', sourcePath.replace(/\.svg$/, '.zh.svg'));
  if (!existsSync(localizedPath)) continue;
  if (MANUAL.has(sourcePath)) {
    manual += 1;
    continue;
  }

  eligible += 1;
  const localized = readFileSync(localizedPath, 'utf8');
  const transformed = mergeLocalizedSvgText(after, localized, {
    allowSourceTail: SOURCE_TEXT_TAIL.has(sourcePath),
  });
  if (transformed === localized) continue;
  changed += 1;
  if (APPLY) writeFileSync(localizedPath, transformed);
}

const migratedSource = readFileSync(join(UPSTREAM, MIGRATED_SVG.source), 'utf8');
const migratedPath = join(ROOT, 'public', 'assets', MIGRATED_SVG.source.replace(/\.svg$/, '.zh.svg'));
const previousLocalizedPath = join(ROOT, 'public', 'assets', MIGRATED_SVG.previousLocalized);
const migratedExists = existsSync(migratedPath);
const migratedLocalized = readFileSync(migratedExists ? migratedPath : previousLocalizedPath, 'utf8');
const migratedResult = mergeLocalizedSvgText(migratedSource, migratedLocalized, {
  allowSourceTail: !migratedExists,
});
if (!migratedExists || migratedResult !== migratedLocalized) {
  migrated = 1;
  if (APPLY) writeFileSync(migratedPath, migratedResult);
}

console.log(`localized-svg-structure: eligible=${eligible} changed=${changed} migrated=${migrated} manual=${manual} mode=${APPLY ? 'apply' : 'check'}`);
