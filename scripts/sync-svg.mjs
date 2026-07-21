import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const SRC_ROOT = '../algebrica';
const DEST_ROOT = 'public/assets';

function main() {
  mkdirSync(DEST_ROOT, { recursive: true });

  let copied = 0;
  for (const dir of readdirSync(SRC_ROOT)) {
    const srcDir = join(SRC_ROOT, dir, 'svg');
    if (!existsSync(srcDir) || !statSync(srcDir).isDirectory()) continue;

    const destDir = join(DEST_ROOT, dir, 'svg');
    mkdirSync(destDir, { recursive: true });
    cpSync(srcDir, destDir, { recursive: true, dereference: true });
    copied++;
  }

  console.log(`sync-svg: mirrored SVG assets for ${copied} section(s)`);
}

main();
