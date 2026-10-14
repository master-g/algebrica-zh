import GithubSlugger from 'github-slugger';

function isElement(node, tagName) {
  return node?.type === 'element' && node.tagName === tagName;
}

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

// Astro assigns heading ids only after custom rehype plugins and keeps ids
// that already exist, so assign them here with the same slugger and text rule.
function assignHeadingIds(node, slugger) {
  if (node.type === 'element' && /^h[1-6]$/.test(node.tagName)) {
    node.properties ||= {};
    if (typeof node.properties.id !== 'string') node.properties.id = slugger.slug(textOf(node));
    return;
  }
  for (const child of node.children || []) assignHeadingIds(child, slugger);
}

// The heading keeps the glyph <defs>; the copy only references them, so the
// page never contains two elements with the same id.
function cloneWithoutDefs(node) {
  if (node.type !== 'element') return { ...node };
  return {
    ...node,
    properties: { ...node.properties },
    children: (node.children || [])
      .filter((child) => !isElement(child, 'defs'))
      .map(cloneWithoutDefs),
  };
}

/**
 * List every article section heading in a margin note at the top of the
 * first section. Headings are copied from the rendered tree so formulas in
 * titles keep their MathJax output. Must run after rehypeSectionizeAlgebrica.
 */
export default function rehypeArticleOutline() {
  return (tree) => {
    assignHeadingIds(tree, new GithubSlugger());
    const sections = (tree.children || []).filter(
      (node) => isElement(node, 'section') && isElement(node.children?.[0], 'h2'),
    );
    const items = sections.map((section) => section.children[0]);
    if (items.length < 2) return;

    const outline = {
      type: 'element',
      tagName: 'aside',
      properties: { className: ['article-outline'], role: 'navigation' },
      children: [
        { type: 'element', tagName: 'strong', properties: {}, children: [{ type: 'text', value: '本页大纲' }] },
        {
          type: 'element',
          tagName: 'ol',
          properties: {},
          children: items.map((heading) => ({
            type: 'element',
            tagName: 'li',
            properties: {},
            children: [{
              type: 'element',
              tagName: 'a',
              properties: { href: `#${heading.properties.id}` },
              children: heading.children.map(cloneWithoutDefs),
            }],
          })),
        },
      ],
    };

    sections[0].children.splice(1, 0, outline);
  };
}
