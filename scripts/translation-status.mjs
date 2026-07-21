#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import yaml from 'js-yaml';
import { validateTranslation } from './lib/validate.mjs';

const UPSTREAM = resolve('..', 'algebrica');
const CONTENT_ZH = resolve('content-zh');
const SECTIONS_YAML = resolve('sections.yaml');
const DANGLING_FILE = resolve('src', 'lib', 'dangling-links.json');

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

async function main() {
  const args = process.argv.slice(2);
  const verify = args.includes('--verify');

  const targets = listSourceTargets();
  const dangling = loadDangling();
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
    const fm = parseFrontmatter(zhText);
    const actual = fm?.translation?.source_hash;
    if (actual === expected) {
      current.push({ section, slug });
      if (verify) {
        const result = await validateTranslation(zhPath, zhText, { dangling });
        if (!result.ok) {
          validationFailures++;
          console.log(`FAIL ${section}/${slug}: ${result.errors.join('; ')}`);
        }
      }
    } else {
      stale.push({ section, slug, expected, actual });
    }
  }

  console.log(`current: ${current.length}`);
  for (const t of current) console.log(`  ${t.section}/${t.slug}`);
  console.log(`stale: ${stale.length}`);
  for (const t of stale) console.log(`  ${t.section}/${t.slug}`);
  console.log(`missing: ${missing.length}`);
  for (const t of missing) console.log(`  ${t.section}/${t.slug}${t.note ? ` (${t.note})` : ''}`);

  if (verify && validationFailures > 0) {
    console.error(`\n${validationFailures} current translations failed validation`);
    process.exit(1);
  }
}

function parseFrontmatter(text) {
  if (!text.startsWith('---\n') && !text.startsWith('---\r\n')) return null;
  const end = text.indexOf('\n---', 3);
  if (end === -1) return null;
  try {
    return yaml.load(text.slice(4, end));
  } catch {
    return null;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
