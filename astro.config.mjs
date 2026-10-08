import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import { visit } from 'unist-util-visit';
import rehypeMathjax from 'rehype-mathjax/svg';
import rehypeSanitize from 'rehype-sanitize';
import remarkIntervalsShortcode from './src/plugins/remark-intervals-shortcode.mjs';
import rehypeMarkStandaloneMath from './src/plugins/rehype-mark-standalone-math.mjs';
import rehypeNotesToSidenotes from './src/plugins/rehype-notes-to-sidenotes.mjs';
import rehypeRewriteAlgebrica from './src/plugins/rehype-rewrite-algebrica.mjs';
import rehypeSectionizeAlgebrica from './src/plugins/rehype-sectionize-algebrica.mjs';
import dangling from './src/lib/dangling-links.json' with { type: 'json' };
import { buildSlugMap } from './src/lib/slug-map.mjs';
import { mathSanitizeSchema } from './src/lib/math-sanitize-schema.mjs';
import { normalizeSiteBase } from './src/lib/site-path.mjs';

const slugMap = buildSlugMap({ source: 'fs', strictCollisions: true, strictEmpty: true, silent: true });
const siteBase = normalizeSiteBase(process.env.SITE_BASE);
const cacheKey = siteBase === '/' ? 'root' : siteBase.slice(1, -1).replace(/[^a-zA-Z0-9_-]+/g, '-');
console.log(`[astro-config] built slug map: ${slugMap.size} articles`);

// ponytail: 上游 81d44d7 把 sets-and-numbers 拆成 numbers/ 与 sets/ 后，
// functions/absolute-value-function.md 仍引用旧目录下的两张图，Astro 解析不到会让构建失败。
// 上游修正引用后删除这张表和下面的插件。
const MOVED_UPSTREAM_IMAGES = {
  '../sets-and-numbers/svg/real-numbers-1.svg': '../numbers/svg/real-numbers-1.svg',
  '../sets-and-numbers/svg/absolute-value-1.svg': '../numbers/svg/absolute-value-1.svg',
};

function remarkFixMovedUpstreamImages() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      node.url = MOVED_UPSTREAM_IMAGES[node.url] ?? node.url;
    });
  };
}

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: siteBase,
  // Rendered Markdown contains base-prefixed links. Keep each deployment base in
  // its own cache so a root build cannot contaminate a GitHub Pages build.
  cacheDir: fileURLToPath(new URL(`./.astro/${cacheKey}/`, import.meta.url)),
  experimental: {
    collectionStorage: 'chunked',
  },
  compressHTML: true,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkFixMovedUpstreamImages, remarkMath, remarkIntervalsShortcode],
      rehypePlugins: [
        rehypeMathjax,
        rehypeMarkStandaloneMath,
        [rehypeRewriteAlgebrica, { slugMap, dangling, warn: console.warn, siteBase }],
        rehypeSectionizeAlgebrica,
        rehypeNotesToSidenotes,
        [rehypeSanitize, mathSanitizeSchema],
      ],
    }),
  },
});
