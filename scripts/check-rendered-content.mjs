#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function findRenderedContentLeaks(html) {
  const leaks = [];
  if (/\[(?:shortcode\s*=|field_math\])/i.test(html)) leaks.push('opening shortcode marker');
  if (/\[\/(?:shortcode|field_math)\]/i.test(html)) leaks.push('closing shortcode marker');
  if (/\[class\s*=/i.test(html)) leaks.push('opening class wrapper');
  if (/\[\/class\]/i.test(html)) leaks.push('closing class wrapper');
  if (/\bsign\+(?:l|r|s|p)(?:[-+][a-z]+)*/i.test(html)) {
    leaks.push('raw interval sign token');
  }
  return leaks;
}

export function checkRenderedDirectory(directory) {
  const failures = [];
  for (const file of walkHtmlFiles(directory)) {
    const leaks = findRenderedContentLeaks(readFileSync(file, 'utf8'));
    if (leaks.length) failures.push({ file, leaks });
  }
  return failures;
}

function walkHtmlFiles(directory) {
  if (!existsSync(directory)) return [];
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkHtmlFiles(path));
    else if (entry.isFile() && extname(entry.name) === '.html') files.push(path);
  }
  return files;
}

function main() {
  const directory = resolve(process.cwd(), process.argv[2] || 'dist');
  if (!existsSync(directory)) {
    throw new Error(`rendered content directory not found: ${directory}`);
  }
  const failures = checkRenderedDirectory(directory);
  if (failures.length) {
    for (const failure of failures) {
      console.error(`${failure.file}: ${failure.leaks.join(', ')}`);
    }
    process.exitCode = 1;
    return;
  }
  console.log(`Rendered content gate passed: ${directory}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
