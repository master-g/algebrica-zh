// hast spells `xlink:href` either way depending on the parser.
const HREF_KEYS = ['xLinkHref', 'href'];

function eachElement(node, visitor) {
  if (node?.type !== 'element' && node?.type !== 'root') return;
  if (node.type === 'element') visitor(node);
  for (const child of node.children || []) eachElement(child, visitor);
}

/**
 * MathJax SVG output inlines a private copy of every glyph path in every
 * formula (fontCache: 'local'), so formula-dense pages repeat the same paths
 * thousands of times. Keep the first <path> for each `d`, drop the rest and
 * point their <use> references at the kept id. Ported from the vault site.
 * Must run after rehype-mathjax.
 */
export default function rehypeDedupeMathGlyphs() {
  return (tree) => {
    const canonicalByShape = new Map();
    const rename = new Map();

    eachElement(tree, (node) => {
      if (node.tagName !== 'path') return;
      const { id, d } = node.properties || {};
      if (typeof id !== 'string' || typeof d !== 'string') return;
      const canonical = canonicalByShape.get(d);
      if (canonical === undefined) canonicalByShape.set(d, id);
      else if (canonical !== id) rename.set(id, canonical);
    });
    if (rename.size === 0) return;

    eachElement(tree, (node) => {
      if (node.tagName !== 'use' || !node.properties) return;
      for (const key of HREF_KEYS) {
        const value = node.properties[key];
        if (typeof value !== 'string' || !value.startsWith('#')) continue;
        const canonical = rename.get(value.slice(1));
        if (canonical) node.properties[key] = `#${canonical}`;
      }
    });

    eachElement(tree, (node) => {
      if (!node.children?.length) return;
      // ponytail: emptied <defs> stay behind; they render nothing.
      node.children = node.children.filter(
        (child) => !(isPath(child) && rename.has(child.properties?.id)),
      );
    });
  };
}

function isPath(node) {
  return node.type === 'element' && node.tagName === 'path';
}
