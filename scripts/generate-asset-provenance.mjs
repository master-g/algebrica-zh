import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const UPSTREAM_COMMIT = '66b40a8f19a727d619ef324a9ee6a6b1c6299638';
const OUTPUT = 'public/assets/provenance.json';

function trackedChineseSvgFiles() {
  const output = execFileSync('git', ['ls-files', 'public/assets/**/*.zh.svg'], {
    encoding: 'utf8',
  }).trim();
  return output ? output.split('\n').sort() : [];
}

function makeEntry(path) {
  const parts = path.split('/');
  const section = parts[2];
  const file = parts.at(-1).replace(/\.zh\.svg$/, '.svg');
  return {
    path,
    source: `https://github.com/antoniolupetti/algebrica/blob/${UPSTREAM_COMMIT}/${section}/svg/${file}`,
    author: 'Antonio Lupetti / Algebrica',
    license: 'CC BY-NC 4.0',
    changes: 'Chinese labels and/or typography',
  };
}

const manifest = {
  schema_version: 1,
  upstream_commit: UPSTREAM_COMMIT,
  assets: trackedChineseSvgFiles().map(makeEntry),
};

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`asset-provenance: recorded ${manifest.assets.length} derivative SVG files`);
