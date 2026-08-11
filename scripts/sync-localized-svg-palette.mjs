#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  applySvgPaletteMapping,
  classifySvgChange,
  deriveSvgPaletteMapping,
} from '../src/lib/upstream-audit.mjs';
import { resolveUpstreamSourceDir } from '../src/lib/upstream-source.mjs';

const ROOT = resolve(import.meta.dirname, '..');
const UPSTREAM = resolveUpstreamSourceDir();
const APPLY = process.argv.includes('--apply');

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
let absent = 0;
for (const sourcePath of paths) {
  const before = git(['show', `${lock.commit}:${sourcePath}`], { allowFailure: true });
  if (before === null) continue;
  const after = readFileSync(join(UPSTREAM, sourcePath), 'utf8');
  if (classifySvgChange(before, after) !== 'palette-only') continue;

  const localizedPath = join(ROOT, 'public', 'assets', sourcePath.replace(/\.svg$/, '.zh.svg'));
  if (!existsSync(localizedPath)) {
    absent += 1;
    continue;
  }

  eligible += 1;
  const localized = readFileSync(localizedPath, 'utf8');
  const transformed = applySvgPaletteMapping(
    localized,
    deriveSvgPaletteMapping(before, after),
  );
  if (transformed === localized) continue;
  changed += 1;
  if (APPLY) writeFileSync(localizedPath, transformed);
}

console.log(`localized-svg-palette: eligible=${eligible} changed=${changed} source-only=${absent} mode=${APPLY ? 'apply' : 'check'}`);
