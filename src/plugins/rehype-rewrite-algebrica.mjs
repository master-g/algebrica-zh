import { visit } from 'unist-util-visit';

/**
 * Rehype plugin that rewrites Algebrica internal links and SVG image paths.
 *
 * Options:
 *   - slugMap: Map<slug, section> for articles.
 *   - dangling: { external: string[], text: string[] } known dangling classifications.
 *   - warn: function to emit build warnings (defaults to console.warn).
 *   - currentSection: optional override for the current markdown file's section.
 */
export default function rehypeRewriteAlgebrica({ slugMap = new Map(), dangling = { external: [], text: [] }, warn = console.warn, currentSection: currentSectionOverride } = {}) {
  const external = new Set(dangling.external || []);
  const text = new Set(dangling.text || []);

  return (tree, file) => {
    const currentSection = currentSectionOverride ?? inferCurrentSection(file);
    const sectionDirs = new Set(slugMap.values());

    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href !== 'string' || !href.startsWith('../')) return;

        const target = href.slice(3).replace(/\/$/, '');

        // Section directories take precedence over article slugs when a name is
        // both (e.g. functions/ has both a section index and functions/functions.md).
        if (sectionDirs.has(target)) {
          node.properties.href = `/category/${target}/`;
          return;
        }

        if (slugMap.has(target)) {
          node.properties.href = `/${target}/`;
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
          const value = (node.children || [])
            .filter((c) => c.type === 'text')
            .map((c) => c.value)
            .join('');
          if (parent && typeof index === 'number') {
            parent.children.splice(index, 1, { type: 'text', value });
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
          node.properties.src = `/assets/${currentSection}/svg/${src.slice(4)}`;
          return;
        }

        const cross = src.match(/^\.\.\/([^/]+)\/svg\/(.*)$/);
        if (cross) {
          const [, section, rest] = cross;
          node.properties.src = `/assets/${section}/svg/${rest}`;
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
