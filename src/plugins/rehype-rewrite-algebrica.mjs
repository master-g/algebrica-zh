import { visit } from 'unist-util-visit';
import { withSiteBase } from '../lib/site-path.mjs';

/**
 * Rehype plugin that rewrites Algebrica internal links and SVG image paths.
 *
 * Options:
 *   - slugMap: Map<slug, section> for articles.
 *   - dangling: { aliases: Record<string, string>, external: string[], text: string[] }
 *     known renamed and dangling classifications.
 *   - warn: function to emit build warnings (defaults to console.warn).
 *   - currentSection: optional override for the current markdown file's section.
 *
 * Section resolution precedence:
 *   1. The explicit `currentSection` option, if provided.
 *   2. Inference from the file path (history[0], path, or cwd + history[0]).
 *   3. null, in which case relative SVG paths cannot be rewritten and a warning is emitted.
 */
export default function rehypeRewriteAlgebrica({ slugMap = new Map(), dangling = { external: [], text: [] }, warn = console.warn, currentSection: currentSectionOverride, siteBase = '/' } = {}) {
  const external = new Set(dangling.external || []);
  const text = new Set(dangling.text || []);
  const aliases = new Map(Object.entries(dangling.aliases || {}));

  return (tree, file) => {
    const currentSection = currentSectionOverride ?? inferCurrentSection(file);
    const sectionDirs = new Set(slugMap.values());

    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href !== 'string' || !href.startsWith('../')) return;

        const target = href.replace(/^(\.\.\/)+/, '').replace(/\/$/, '');

        if (aliases.has(target)) {
          const canonical = aliases.get(target);
          if (slugMap.has(canonical)) {
            node.properties.href = withSiteBase(`/${canonical}/`, siteBase);
          } else {
            warn(`alias target missing: ${target} -> ${canonical}`);
          }
          return;
        }

        // Repo-relative ../../<section>/<slug>/ form (e.g. equations/loss-of-roots.md
        // links ../../polynomials/roots-of-a-polynomial/) resolves to the article route.
        if (target.includes('/')) {
          const [sec, slug] = target.split('/');
          if (sectionDirs.has(sec) && slugMap.get(slug) === sec) {
            node.properties.href = withSiteBase(`/${slug}/`, siteBase);
            return;
          }
        }

        // Section directories take precedence over article slugs when a name is
        // both (e.g. functions/ has both a section index and functions/functions.md).
        if (sectionDirs.has(target)) {
          node.properties.href = withSiteBase(`/category/${target}/`, siteBase);
          return;
        }

        if (slugMap.has(target)) {
          node.properties.href = withSiteBase(`/${target}/`, siteBase);
          return;
        }

        if (external.has(target)) {
          node.properties.href = `https://algebrica.org/${target}/`;
          node.properties.target = '_blank';
          node.properties.rel = 'noopener';
          addClass(node, 'external-en');
          return;
        }

        if (text.has(target)) {
          // Unwrap the link, preserving all children (including math spans).
          if (parent && typeof index === 'number') {
            parent.children.splice(index, 1, ...(node.children || []));
          }
          return;
        }

        warn(`new dangling: ${target}`);
        return;
      }

      if (node.tagName === 'img') {
        const src = node.properties?.src;
        if (typeof src !== 'string') return;

        if (src.startsWith('svg/')) {
          if (!currentSection) {
            warn(`cannot rewrite relative SVG path without current section: ${src}`);
            return;
          }
          node.properties.src = withSiteBase(`/assets/${currentSection}/svg/${src.slice(4)}`, siteBase);
          return;
        }

        const cross = src.match(/^\.\.\/([^/]+)\/svg\/(.*)$/);
        if (cross) {
          const [, section, rest] = cross;
          node.properties.src = withSiteBase(`/assets/${section}/svg/${rest}`, siteBase);
        }
      }
    });
  };
}

function inferCurrentSection(file) {
  if (!file) return null;
  const candidates = [
    file.history?.[0],
    file.path,
    file.cwd && file.history?.[0] ? `${file.cwd}/${file.history[0]}` : undefined,
  ].filter(Boolean);

  for (const p of candidates) {
    const m = String(p).match(/(?:algebrica|content-zh)\/([^/]+)\/[^/]+\.md$/);
    if (m) return m[1];
  }
  return null;
}

function addClass(node, cls) {
  const existing = node.properties.class || '';
  const set = new Set(String(existing).split(/\s+/).filter(Boolean));
  set.add(cls);
  node.properties.class = [...set].join(' ');
}
