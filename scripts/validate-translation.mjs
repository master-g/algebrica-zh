#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  validateTranslation,
  validateShortcodeIntegrity,
  validateMarkdownStructureIntegrity,
  loadDangling,
} from './lib/validate.mjs';
import { lintChineseCopywriting } from './lib/copywriting-lint.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_ZH = resolve(__dirname, '..', 'content-zh');
const UPSTREAM = resolve(__dirname, '..', '..', 'algebrica');

async function main() {
  const args = process.argv.slice(2);
  const target = args.find((a) => !a.startsWith('--'));
  const all = args.includes('--all');

  const files = [];
  if (all) {
    if (!existsSync(CONTENT_ZH)) {
      console.error('content-zh directory not found');
      process.exit(1);
    }
    const entries = readdirSync(CONTENT_ZH, { recursive: true, withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(resolve(entry.parentPath || entry.path, entry.name));
      }
    }
  } else if (target) {
    const zhPath = resolve(CONTENT_ZH, `${target}.md`);
    if (!existsSync(zhPath)) {
      console.error(`translation not found: ${zhPath}`);
      process.exit(1);
    }
    files.push(zhPath);
  } else {
    console.error('Usage: node scripts/validate-translation.mjs <section/slug>');
    console.error('       node scripts/validate-translation.mjs --all');
    process.exit(1);
  }

  const dangling = loadDangling();
  let allOk = true;
  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    const result = await validateTranslation(file, text, { dangling });
    const relativePath = relative(CONTENT_ZH, file);
    const sourcePath = resolve(UPSTREAM, relativePath);
    if (!existsSync(sourcePath)) {
      result.errors.push(`upstream source not found: ${sourcePath}`);
      result.ok = false;
    } else {
      const sourceText = readFileSync(sourcePath, 'utf8');
      result.errors.push(...validateShortcodeIntegrity(sourceText, text));
      result.errors.push(...validateMarkdownStructureIntegrity(sourceText, text));
      result.ok = result.errors.length === 0;
    }
    const lint = lintChineseCopywriting(text);
    const id = file.replace(`${CONTENT_ZH}/`, '').replace(/\.md$/, '');
    if (lint.errors.length) result.ok = false;
    const hasReports = result.errors.length || result.warnings.length;
    const hasLint = lint.reports.length > 0 || lint.errors.length > 0;
    if (hasReports || hasLint) {
      console.log(`${result.ok ? 'WARN' : 'FAIL'} ${id}`);
      for (const e of result.errors) console.log(`  ERROR: ${e}`);
      for (const w of result.warnings) console.log(`  WARN: ${w}`);
      for (const r of lint.reports) console.log(`  LINT: line ${r.line}: ${r.message}`);
      for (const e of lint.errors) console.log(`  LINT-ERROR: line ${e.line}: ${e.message}`);
    } else {
      console.log(`OK ${id}`);
    }
    if (!result.ok) allOk = false;
  }

  process.exit(allOk ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
