import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/svg';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeRewriteAlgebrica from '../plugins/rehype-rewrite-algebrica.mjs';
import dangling from '../lib/dangling-links.json' with { type: 'json' };

const ALGEBRICA_BASE = '../algebrica';

function buildSlugMap() {
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
    throw new Error(`slug collision: ${slug} (${[...new Set(sections)].join(', ')})`);
  }
  return map;
}

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
      a: ['href', 'title', 'target', 'rel', 'class'],
      '*': [...(base.attributes?.['*'] || []), 'className', 'class', 'style'],
    },
  };
}

const slugMap = buildSlugMap();

let processorPromise = null;

function getProcessor(currentSection = null) {
  if (!processorPromise) {
    processorPromise = createMarkdownProcessor({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeMathjax,
        [rehypeRewriteAlgebrica, { slugMap, dangling, currentSection }],
        [rehypeSanitize, makeMathSchema(defaultSchema)],
      ],
    });
  }
  return processorPromise;
}

export async function renderPageMarkdown(raw, { currentSection } = {}) {
  const processor = await getProcessor(currentSection);
  const result = await processor.render(raw);
  return result.code;
}
