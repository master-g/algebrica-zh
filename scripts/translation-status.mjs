#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import yaml from 'js-yaml';
import { validateTranslation } from './lib/validate.mjs';
import { splitFrontmatter, parseFrontmatter } from './lib/frontmatter.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const UPSTREAM = resolve(__dirname, '..', '..', 'algebrica');
const CONTENT_ZH = resolve(__dirname, '..', 'content-zh');
const SECTIONS_YAML = resolve(__dirname, '..', 'sections.yaml');
const DANGLING_FILE = resolve(__dirname, '..', 'src', 'lib', 'dangling-links.json');

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
    const { frontmatter } = splitFrontmatter(zhText);
    const fm = parseFrontmatter(frontmatter);
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

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
