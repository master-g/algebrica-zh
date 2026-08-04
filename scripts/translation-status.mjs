#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import yaml from 'js-yaml';
import { validateTranslation } from './lib/validate.mjs';
import { splitFrontmatter, parseFrontmatter } from './lib/frontmatter.mjs';

const MODULE_PATH = fileURLToPath(import.meta.url);
const __dirname = dirname(MODULE_PATH);
const UPSTREAM = resolve(__dirname, '..', '..', 'algebrica');
const CONTENT_ZH = resolve(__dirname, '..', 'content-zh');
const SECTIONS_YAML = resolve(__dirname, '..', 'sections.yaml');
const DANGLING_FILE = resolve(__dirname, '..', 'src', 'lib', 'dangling-links.json');
const FAILURES_FILE = resolve(__dirname, '..', 'translation-failures.json');

function hashSource(raw) {
  return createHash('sha256').update(raw).digest('hex');
}

function loadDangling() {
  if (!existsSync(DANGLING_FILE)) return { external: [], text: [] };
  try {
    return JSON.parse(readFileSync(DANGLING_FILE, 'utf8'));
  } catch {
    return { external: [], text: [] };
  }
}

function listSourceTargets() {
  const targets = [];
  const sections = yaml.load(readFileSync(SECTIONS_YAML, 'utf8')) || { sections: [] };
  for (const sec of sections.sections || []) {
    for (const slug of sec.entries || []) {
      targets.push({ section: sec.dir, slug });
    }
  }
  // Pages
  for (const slug of ['bibliography', 'editorial-process']) {
    targets.push({ section: 'pages', slug });
  }
  return targets;
}

function sourcePath(section, slug) {
  if (section === 'pages') return resolve(UPSTREAM, 'pages', `${slug}.md`);
  return resolve(UPSTREAM, section, `${slug}.md`);
}

function normalizeTargetPart(value, label) {
  if (typeof value !== 'string') {
    throw new Error(`${label} must be a string`);
  }
  const normalized = value
    .trim()
    .replaceAll('\\', '/')
    .replace(/^\/+|\/+$/g, '')
    .replace(/\/+/g, '/');
  if (!normalized) {
    throw new Error(`${label} must not be empty`);
  }
  return normalized;
}

export function normalizeTargetKey(section, slug) {
  return [
    normalizeTargetPart(section, 'section'),
    normalizeTargetPart(slug, 'slug'),
  ].join('/');
}

export function readFailureLedger(failuresFile = FAILURES_FILE) {
  if (!existsSync(failuresFile)) {
    return [];
  }

  let failures;
  try {
    failures = JSON.parse(readFileSync(failuresFile, 'utf8'));
  } catch (error) {
    throw new Error(`failure ledger contains invalid JSON: ${error.message}`);
  }
  if (!Array.isArray(failures)) {
    throw new Error('failure ledger must contain an array');
  }

  const seen = new Set();
  return failures.map((failure, index) => {
    if (!failure || typeof failure !== 'object' || Array.isArray(failure)) {
      throw new Error(`failure ledger entry ${index} must be an object`);
    }

    let section;
    let slug;
    try {
      section = normalizeTargetPart(failure.section, 'section');
      slug = normalizeTargetPart(failure.slug, 'slug');
    } catch (error) {
      throw new Error(`failure ledger entry ${index}: ${error.message}`);
    }

    const key = normalizeTargetKey(section, slug);
    if (seen.has(key)) {
      throw new Error(`duplicate failure target: ${key}`);
    }
    seen.add(key);
    return { ...failure, section, slug };
  });
}

export function findCurrentFailureConflicts(status, failures) {
  const currentKeys = new Set(
    (status.current || []).map(({ section, slug }) => normalizeTargetKey(section, slug)),
  );
  return [
    ...new Set(
      failures
        .map(({ section, slug }) => normalizeTargetKey(section, slug))
        .filter((key) => currentKeys.has(key)),
    ),
  ].sort();
}

export async function collectTranslationStatus({
  verify = false,
  targets = listSourceTargets(),
  dangling = loadDangling(),
  log = console.log,
} = {}) {
  const current = [];
  const stale = [];
  const missing = [];
  let validationFailures = 0;

  for (const { section, slug } of targets) {
    const src = sourcePath(section, slug);
    if (!existsSync(src)) {
      missing.push({ section, slug, note: 'source missing upstream' });
      continue;
    }
    const raw = readFileSync(src, 'utf8');
    const expected = hashSource(raw);
    const zhPath = resolve(CONTENT_ZH, section, `${slug}.md`);
    if (!existsSync(zhPath)) {
      missing.push({ section, slug });
      continue;
    }
    const zhText = readFileSync(zhPath, 'utf8');
    const { frontmatter } = splitFrontmatter(zhText);
    const fm = parseFrontmatter(frontmatter);
    const actual = fm?.translation?.source_hash;
    if (actual === expected) {
      current.push({ section, slug });
      if (verify) {
        // Status verification covers repository-wide structural validity and the
        // failure ledger. Editorial math-text rules are enforced by the strict,
        // per-target admission command so legacy debt does not redefine whether
        // an otherwise current translation is current.
        const result = await validateTranslation(zhPath, zhText, {
          dangling,
          checkVisibleMathText: false,
        });
        if (!result.ok) {
          validationFailures++;
          log(`FAIL ${section}/${slug}: ${result.errors.join('; ')}`);
        }
      }
    } else {
      stale.push({ section, slug, expected, actual });
    }
  }

  return { current, stale, missing, validationFailures };
}

function printStatus(status, log) {
  log(`current: ${status.current.length}`);
  for (const t of status.current) log(`  ${t.section}/${t.slug}`);
  log(`stale: ${status.stale.length}`);
  for (const t of status.stale) log(`  ${t.section}/${t.slug}`);
  log(`missing: ${status.missing.length}`);
  for (const t of status.missing) {
    log(`  ${t.section}/${t.slug}${t.note ? ` (${t.note})` : ''}`);
  }
}

export async function runTranslationStatus({
  args = process.argv.slice(2),
  failuresFile = FAILURES_FILE,
  collectStatus = collectTranslationStatus,
  log = console.log,
  error = console.error,
} = {}) {
  const verify = args.includes('--verify');
  const status = await collectStatus({ verify, log });
  printStatus(status, log);

  let failed = false;

  if (verify && status.validationFailures > 0) {
    error(`\n${status.validationFailures} current translations failed validation`);
    failed = true;
  }

  if (verify) {
    let failures;
    try {
      failures = readFailureLedger(failuresFile);
    } catch (ledgerError) {
      error(`\nFailure ledger verification failed: ${ledgerError.message}`);
      return 1;
    }

    const conflicts = findCurrentFailureConflicts(status, failures);
    for (const key of conflicts) {
      error(`FAIL failure ledger conflict: ${key}`);
    }
    if (conflicts.length > 0) {
      error(`\n${conflicts.length} current translations remain in the failure ledger`);
      failed = true;
    }
  }

  return failed ? 1 : 0;
}

if (process.argv[1] && resolve(process.argv[1]) === MODULE_PATH) {
  runTranslationStatus()
    .then((exitCode) => {
      process.exitCode = exitCode;
    })
    .catch((err) => {
      console.error(err);
      process.exitCode = 1;
    });
}
