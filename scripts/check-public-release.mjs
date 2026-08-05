#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkLicenseMetadata } from './check-licenses.mjs';
import { checkStaticSite } from './check-static-site.mjs';

const FORBIDDEN_PATHS = [
  /^public\/theme\//,
  /^public\/media\//,
  /^public\/styles\/zh-overrides\.css$/,
  /^reference\/(?:home|entry|category)\.html$/,
  /^scripts\/fetch-assets\.mjs$/,
];

export function checkSourceReleaseBoundary({ trackedFiles, packageJson, notices, provenance }) {
  const errors = [];
  for (const path of trackedFiles) {
    if (FORBIDDEN_PATHS.some((pattern) => pattern.test(path))) {
      errors.push(`forbidden tracked path: ${path}`);
    }
  }

  const entries = new Map((provenance.assets || []).map((entry) => [entry.path, entry]));
  for (const path of trackedFiles.filter((value) => value.endsWith('.zh.svg'))) {
    const entry = entries.get(path);
    if (!entry?.source || !entry?.author || !entry?.license || !entry?.changes) {
      errors.push(`derivative SVG missing complete provenance: ${path}`);
    }
  }

  for (const name of Object.keys(packageJson.dependencies || {})) {
    if (!notices.includes(`\`${name}\``)) {
      errors.push(`direct dependency not documented in THIRD_PARTY_NOTICES.md: ${name}`);
    }
  }
  return { errors };
}

function trackedFiles() {
  const output = execFileSync('git', ['ls-files'], { encoding: 'utf8' }).trim();
  return output ? output.split('\n') : [];
}

function main() {
  const files = trackedFiles();
  const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
  const lock = JSON.parse(readFileSync('package-lock.json', 'utf8'));
  const notices = readFileSync('THIRD_PARTY_NOTICES.md', 'utf8');
  const provenance = JSON.parse(readFileSync('public/assets/provenance.json', 'utf8'));

  const source = checkSourceReleaseBoundary({ trackedFiles: files, packageJson, notices, provenance });
  const licenses = checkLicenseMetadata({ packageJson, lock, notices });
  const errors = [...source.errors, ...licenses.errors];
  for (const entry of licenses.attention) console.warn(`license attention: ${entry}`);

  if (!existsSync('dist')) {
    errors.push('static build directory is missing: dist');
  } else {
    const site = checkStaticSite({ distDir: 'dist', siteBase: process.env.SITE_BASE || '/' });
    errors.push(...site.errors);
  }

  if (errors.length > 0) throw new Error(errors.join('\n'));
  console.log(`Public release gate passed: ${files.length} tracked files; ${licenses.attention.length} license attention entries`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
