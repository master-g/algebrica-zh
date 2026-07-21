import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/svg';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import rehypeRewriteAlgebrica from './src/plugins/rehype-rewrite-algebrica.mjs';
import dangling from './src/lib/dangling-links.json' with { type: 'json' };

const ALGEBRICA_BASE = '../algebrica';

/**
 * Build a slug -> section map by scanning ../algebrica with plain fs.
 * Mirrors the logic in src/lib/slug-map.mjs but without Astro collection APIs.
 */
function buildSlugMapFromFs() {
  const map = new Map();
  const collisions = new Map();

  for (const entry of readdirSync(ALGEBRICA_BASE, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === 'pages') continue;
    const section = entry.name;
    const sectionPath = join(ALGEBRICA_BASE, section);

    for (const file of readdirSync(sectionPath)) {
      if (!file.endsWith('.md')) continue;
      const slug = file.slice(0, -3);

      if (map.has(slug)) {
        if (!collisions.has(slug)) collisions.set(slug, [map.get(slug)]);
        collisions.get(slug).push(section);
      } else {
        map.set(slug, section);
      }
    }
  }

  if (collisions.size > 0) {
    const [slug, sections] = collisions.entries().next().value;
    throw new Error(`slug collision: ${slug} (sections: ${[...new Set(sections)].join(', ')})`);
  }
  if (map.size === 0) {
    throw new Error('articles collection is empty');
  }

  console.log(`[astro-config] built slug map: ${map.size} articles`);
  return map;
}

const slugMap = buildSlugMapFromFs();

/**
 * Extend the default rehype-sanitize schema to allow MathJax SVG output.
 * Keeps script stripping and javascript: URL blocking intact.
 */
function makeMathSchema(base) {
  return {
    ...base,
    tagNames: [
      ...(base.tagNames || []),
      'mjx-container',
      'mjx-assistive-mml',
      'mjx-math',
      'mjx-mrow',
      'mjx-mi',
      'mjx-mo',
      'mjx-mn',
      'mjx-mtext',
      'mjx-mspace',
      'mjx-msub',
      'mjx-msup',
      'mjx-msubsup',
      'mjx-mfrac',
      'mjx-msqrt',
      'mjx-mroot',
      'mjx-munder',
      'mjx-mover',
      'mjx-munderover',
      'mjx-mtable',
      'mjx-mtr',
      'mjx-mtd',
      'mjx-semantics',
      'mjx-annotation',
      'svg',
      'g',
      'path',
      'defs',
      'use',
      'line',
      'rect',
      'circle',
      'ellipse',
      'polygon',
      'polyline',
      'text',
      'tspan',
      'clipPath',
      'linearGradient',
      'radialGradient',
      'stop',
      'symbol',
    ],
    attributes: {
      ...(base.attributes || {}),
      'mjx-container': ['class', 'jax', 'display', 'justify', 'width', 'role', 'style', 'tabIndex'],
      'mjx-assistive-mml': ['role'],
      'mjx-math': ['xmlns', 'display', 'alttext'],
      svg: ['xmlns', 'width', 'height', 'role', 'focusable', 'viewBox', 'xmlnsXlink', 'style', 'preserveAspectRatio'],
      g: ['stroke', 'fill', 'strokeWidth', 'transform', 'dataMmlNode'],
      path: ['id', 'd'],
      use: ['dataC', 'xlinkHref', 'href', 'transform'],
      line: ['x1', 'y1', 'x2', 'y2', 'stroke', 'strokeWidth'],
      rect: ['x', 'y', 'width', 'height', 'rx', 'ry', 'stroke', 'strokeWidth', 'fill'],
      circle: ['cx', 'cy', 'r'],
      ellipse: ['cx', 'cy', 'rx', 'ry'],
      polygon: ['points'],
      polyline: ['points'],
      text: ['x', 'y', 'dx', 'dy', 'fontSize', 'fontFamily', 'textAnchor'],
      tspan: ['x', 'y', 'dx', 'dy'],
      clipPath: ['id'],
      linearGradient: ['id', 'x1', 'y1', 'x2', 'y2'],
      radialGradient: ['id', 'cx', 'cy', 'r'],
      stop: ['offset', 'stopColor'],
      symbol: ['id'],
      '*': [...(base.attributes?.['*'] || []), 'style'],
    },
  };
}

export default defineConfig({
  compressHTML: true,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeMathjax,
        [rehypeRewriteAlgebrica, { slugMap, dangling, warn: console.warn }],
        [rehypeSanitize, makeMathSchema(defaultSchema)],
      ],
    }),
  },
});
