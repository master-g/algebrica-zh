import {
  cpSync,
  existsSync,
  mkdirSync,
  lstatSync,
  readFileSync,
  readdirSync,
  statSync,
} from 'node:fs';
import { join } from 'node:path';
import { resolveUpstreamSourceDir } from '../src/lib/upstream-source.mjs';

const SRC_ROOT = resolveUpstreamSourceDir();
const DEST_ROOT = 'public/assets';

function loadSectionDirs() {
  try {
    const text = readFileSync('sections.yaml', 'utf8');
    return new Set([...text.matchAll(/^ {2}- dir: (.+)$/gm)].map((m) => m[1].trim()));
  } catch {
    return new Set();
  }
}

const SECTION_DIRS = loadSectionDirs();

function isBrokenSymlink(src) {
  const lstat = lstatSync(src);
  if (!lstat.isSymbolicLink()) return false;
  try {
    statSync(src);
    return false;
  } catch {
    return true;
  }
}

function main() {
  mkdirSync(DEST_ROOT, { recursive: true });

  let copied = 0;
  for (const dir of readdirSync(SRC_ROOT)) {
    const srcDir = join(SRC_ROOT, dir, 'svg');
    if (!existsSync(srcDir) || !statSync(srcDir).isDirectory()) {
      if (SECTION_DIRS.has(dir)) {
        console.info(`sync-svg: no svg directory for ${dir}, skipping`);
      }
      continue;
    }

    const destDir = join(DEST_ROOT, dir, 'svg');
    mkdirSync(destDir, { recursive: true });
    cpSync(srcDir, destDir, {
      recursive: true,
      filter(src) {
        if (isBrokenSymlink(src)) {
          console.warn(`sync-svg: skipping broken symlink ${src}`);
          return false;
        }
        return true;
      },
    });
    copied++;
  }

  console.log(`sync-svg: mirrored SVG assets for ${copied} section(s)`);
}

main();
