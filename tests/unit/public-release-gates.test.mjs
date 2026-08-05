import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { checkLicenseMetadata } from '../../scripts/check-licenses.mjs';
import { checkSourceReleaseBoundary } from '../../scripts/check-public-release.mjs';
import { checkStaticSite } from '../../scripts/check-static-site.mjs';

describe('public release gates', () => {
  it('rejects forbidden tracked assets and missing derivative provenance', () => {
    const result = checkSourceReleaseBoundary({
      trackedFiles: ['public/theme/style.css', 'public/assets/demo.zh.svg'],
      provenance: { assets: [] },
    });
    assert.ok(result.errors.some((error) => error.includes('public/theme/style.css')));
    assert.ok(result.errors.some((error) => error.includes('public/assets/demo.zh.svg')));
  });

  it('rejects undocumented direct dependencies and missing lockfile licenses', () => {
    const result = checkLicenseMetadata({
      packageJson: { dependencies: { astro: '1.0.0', mystery: '1.0.0' } },
      lock: {
        packages: {
          '': {},
          'node_modules/astro': { version: '1.0.0', license: 'MIT' },
          'node_modules/mystery': { version: '1.0.0' },
        },
      },
      notices: '| `astro` | 1.0.0 | MIT | source |',
    });
    assert.ok(result.errors.some((error) => error.includes('mystery') && error.includes('not documented')));
    assert.ok(result.errors.some((error) => error.includes('mystery') && error.includes('missing license')));
  });

  it('reports attention licenses without rejecting known metadata', () => {
    const result = checkLicenseMetadata({
      packageJson: { dependencies: { astro: '1.0.0' } },
      lock: {
        packages: {
          '': {},
          'node_modules/astro': { version: '1.0.0', license: 'MIT' },
          'node_modules/optional': { version: '1.0.0', license: 'MPL-2.0' },
        },
      },
      notices: '| `astro` | 1.0.0 | MIT | source |',
    });
    assert.deepEqual(result.errors, []);
    assert.ok(result.attention.some((entry) => entry.includes('MPL-2.0')));
  });

  it('rejects broken internal links and forbidden runtime hosts', () => {
    const distDir = mkdtempSync(join(tmpdir(), 'algebrica-dist-'));
    writeFileSync(
      join(distDir, 'index.html'),
      '<a href="/algebrica-zh/missing/">missing</a><script src="https://www.googletagmanager.com/gtag/js"></script>',
    );
    const result = checkStaticSite({ distDir, siteBase: '/algebrica-zh/' });
    assert.ok(result.errors.some((error) => error.includes('/missing/')));
    assert.ok(result.errors.some((error) => error.includes('googletagmanager.com')));
  });

  it('accepts resolvable project-base pages and assets', () => {
    const distDir = mkdtempSync(join(tmpdir(), 'algebrica-dist-'));
    mkdirSync(join(distDir, 'about'));
    mkdirSync(join(distDir, '_astro'));
    writeFileSync(join(distDir, 'index.html'), '<a href="/algebrica-zh/about/">about</a><link rel="stylesheet" href="/algebrica-zh/_astro/site.css">');
    writeFileSync(join(distDir, 'about', 'index.html'), '<a href="/algebrica-zh/">home</a>');
    writeFileSync(join(distDir, '_astro', 'site.css'), 'body { color: black; }');
    const result = checkStaticSite({ distDir, siteBase: '/algebrica-zh/' });
    assert.deepEqual(result.errors, []);
    assert.equal(result.htmlFiles, 2);
  });
});
