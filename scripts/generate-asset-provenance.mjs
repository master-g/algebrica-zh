import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { loadUpstreamLock } from '../src/lib/upstream-source.mjs';

const OUTPUT = 'public/assets/provenance.json';
const upstreamLock = loadUpstreamLock();
const upstreamSourceUrl = upstreamLock.repository.replace(/\.git\/?$/, '');

function trackedChineseSvgFiles() {
  const output = execFileSync(
    'git',
    ['-c', 'core.quotePath=false', 'ls-files', 'public/assets/**/*.zh.svg'],
    {
    encoding: 'utf8',
    },
  ).trim();
  return output ? output.split('\n').sort() : [];
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
  assets: trackedChineseSvgFiles().map(makeEntry),
};

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`asset-provenance: recorded ${manifest.assets.length} derivative SVG files`);
