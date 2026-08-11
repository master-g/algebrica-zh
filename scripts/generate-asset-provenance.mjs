import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { loadUpstreamLock } from '../src/lib/upstream-source.mjs';

const OUTPUT = 'public/assets/provenance.json';
const upstreamLock = loadUpstreamLock();
const upstreamSourceUrl = upstreamLock.repository.replace(/\.git\/?$/, '');

function chineseSvgFiles(directory = 'public/assets') {
  const paths = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...chineseSvgFiles(path));
    else if (entry.isFile() && entry.name.endsWith('.zh.svg')) paths.push(path);
  }
  return paths.sort();
}

function makeEntry(path) {
  const parts = path.split('/');
  const section = parts[2];
  const file = parts.at(-1).replace(/\.zh\.svg$/, '.svg');
  return {
    path,
    source: `${upstreamSourceUrl}/blob/${upstreamLock.commit}/${section}/svg/${file}`,
    author: 'Antonio Lupetti / Algebrica',
    license: 'CC BY-NC 4.0',
    changes: 'Chinese labels and/or typography',
  };
}

const manifest = {
  schema_version: 1,
  upstream_commit: upstreamLock.commit,
  assets: chineseSvgFiles().map(makeEntry),
};

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`asset-provenance: recorded ${manifest.assets.length} derivative SVG files`);
