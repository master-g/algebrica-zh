import yaml from 'js-yaml';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/svg';
import rehypeSanitize from 'rehype-sanitize';
import remarkDisplayMath from '../plugins/remark-display-math.mjs';
import remarkIntervalsShortcode from '../plugins/remark-intervals-shortcode.mjs';
import rehypeArticleOutline from '../plugins/rehype-article-outline.mjs';
import rehypeDedupeMathGlyphs from '../plugins/rehype-dedupe-math-glyphs.mjs';
import rehypeMarkStandaloneMath from '../plugins/rehype-mark-standalone-math.mjs';
import rehypeNotesToSidenotes from '../plugins/rehype-notes-to-sidenotes.mjs';
import rehypeRewriteAlgebrica from '../plugins/rehype-rewrite-algebrica.mjs';
import rehypeSectionizeAlgebrica from '../plugins/rehype-sectionize-algebrica.mjs';
import dangling from '../lib/dangling-links.json' with { type: 'json' };
import { mathSanitizeSchema } from '../lib/math-sanitize-schema.mjs';
import { buildSlugMap } from '../lib/slug-map.mjs';
import { normalizeSiteBase } from '../lib/site-path.mjs';

const slugMap = buildSlugMap({ source: 'fs', strictCollisions: true, strictEmpty: true, silent: true });

const processors = new Map();

function getProcessor(currentSection = null) {
  const siteBase = normalizeSiteBase(process.env.SITE_BASE);
  const processorKey = `${currentSection ?? ''}:${siteBase}`;
  if (!processors.has(processorKey)) {
    processors.set(
      processorKey,
      createMarkdownProcessor({
        remarkPlugins: [remarkMath, remarkDisplayMath, remarkIntervalsShortcode],
        rehypePlugins: [
          rehypeMathjax,
          rehypeMarkStandaloneMath,
          [rehypeRewriteAlgebrica, { slugMap, dangling, currentSection, siteBase }],
          rehypeSectionizeAlgebrica,
          rehypeArticleOutline,
          rehypeDedupeMathGlyphs,
          rehypeNotesToSidenotes,
          [rehypeSanitize, mathSanitizeSchema],
        ],
      }),
    );
  }
  return processors.get(processorKey);
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  return { data: yaml.load(match[1]) || {}, body: match[2] };
}

export async function renderPageMarkdown(raw, { currentSection } = {}) {
  const processor = await getProcessor(currentSection);
  const result = await processor.render(raw);
  return result.code;
}

export async function renderPageMarkdownWithFrontmatter(raw, { currentSection } = {}) {
  const { data, body } = parseFrontmatter(raw);
  const html = await renderPageMarkdown(body, { currentSection });
  return { data, html };
}
