import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';

function trackedFiles(pattern) {
  const args = ['-c', 'core.quotePath=false', 'ls-files'];
  if (pattern) args.push(pattern);
  const output = execFileSync('git', args, { encoding: 'utf8' }).trim();
  return output ? output.split('\n') : [];
}

describe('public repository release boundary', () => {
  it('documents separate licenses for code, translated content, fonts, and icons', () => {
    for (const path of [
      'LICENSE.md',
      'LICENSES/MIT.txt',
      'LICENSES/CC-BY-NC-4.0.txt',
      'LICENSES/OFL-Noto-Serif-SC.txt',
      'LICENSES/LUCIDE.txt',
      'README.md',
      'THIRD_PARTY_NOTICES.md',
    ]) {
      assert.equal(existsSync(path), true, `${path} must exist`);
    }

    const scope = readFileSync('LICENSE.md', 'utf8');
    assert.match(scope, /原创软件代码[\s\S]*MIT/);
    assert.match(scope, /中文译文[\s\S]*CC BY-NC 4\.0/);
    assert.match(scope, /Noto Serif SC[\s\S]*SIL Open Font License 1\.1/);
    assert.match(scope, /Lucide[\s\S]*(?:ISC|MIT)/);
  });

  it('keeps copied visual assets and snapshots out of the tracked tree', () => {
    const tracked = trackedFiles();
    const forbidden = tracked.filter((path) =>
      path.startsWith('public/theme/')
      || path.startsWith('public/media/')
      || /^reference\/(?:home|entry|category)\.html$/.test(path)
      || path === 'public/styles/zh-overrides.css'
      || path === 'scripts/fetch-assets.mjs',
    );
    assert.deepEqual(forbidden, []);
  });

  it('records every tracked Chinese SVG derivative in the provenance manifest', () => {
    const manifest = JSON.parse(readFileSync('public/assets/provenance.json', 'utf8'));
    const entries = new Map(manifest.assets.map((entry) => [entry.path, entry]));
    const derivatives = trackedFiles('public/assets/**/*.zh.svg');

    assert.ok(derivatives.length > 0, 'expected tracked Chinese SVG derivatives');
    for (const path of derivatives) {
      const entry = entries.get(path);
      assert.ok(entry, `${path} is missing from provenance.json`);
      assert.equal(entry.author, 'Antonio Lupetti / Algebrica');
      assert.equal(entry.license, 'CC BY-NC 4.0');
      assert.match(entry.source, /^https:\/\/github\.com\/antoniolupetti\/algebrica\/blob\/[0-9a-f]{40}\//);
      assert.match(entry.changes, /Chinese/);
    }
  });

  it('provides every localized SVG referenced by translated content with provenance', () => {
    const manifest = JSON.parse(readFileSync('public/assets/provenance.json', 'utf8'));
    const provenancePaths = new Set(manifest.assets.map(({ path }) => path));
    const contentPaths = readdirSync('content-zh', { recursive: true, withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
      .map((entry) => `${entry.parentPath}/${entry.name}`);
    for (const contentPath of contentPaths) {
      const content = readFileSync(contentPath, 'utf8');
      for (const match of content.matchAll(/\/assets\/[^)\s"'<>]+\.zh\.svg/g)) {
        const assetPath = `public${match[0]}`;
        assert.ok(existsSync(assetPath), `${contentPath} references missing ${assetPath}`);
        assert.ok(provenancePaths.has(assetPath), `${contentPath} references ${assetPath} without provenance`);
      }
    }
  });

  it('keeps attribution and modification notices consistent', () => {
    const readme = readFileSync('README.md', 'utf8');
    const about = readFileSync('src/pages/about.astro', 'utf8');
    const article = readFileSync('src/pages/[slug].astro', 'utf8');

    for (const text of [readme, about, article]) {
      assert.match(text, /Antonio Lupetti/);
      assert.match(text, /CC BY-NC 4\.0/);
      assert.match(text, /非官方/);
      assert.match(text, /(?:翻译|视觉)(?:和|或|与)?改动|视觉改编/);
    }
  });
});
