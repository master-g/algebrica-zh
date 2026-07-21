#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { validateTranslation, loadDangling } from './lib/validate.mjs';
import { lintChineseCopywriting } from './lib/copywriting-lint.mjs';

const CONTENT_ZH = resolve('content-zh');

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
    const lint = lintChineseCopywriting(text);
    const id = file.replace(`${CONTENT_ZH}/`, '').replace(/\.md$/, '');
    const hasReports = result.errors.length || result.warnings.length;
    const hasLint = lint.reports.length > 0;
    if (hasReports || hasLint) {
      console.log(`${result.ok ? 'WARN' : 'FAIL'} ${id}`);
      for (const e of result.errors) console.log(`  ERROR: ${e}`);
      for (const w of result.warnings) console.log(`  WARN: ${w}`);
      for (const r of lint.reports) console.log(`  LINT: line ${r.line}: ${r.message}`);
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
