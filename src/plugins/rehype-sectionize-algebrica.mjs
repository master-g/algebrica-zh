function isElement(node, tagName) {
  return node?.type === 'element' && node.tagName === tagName;
}

/**
 * Give every Markdown level-two heading an independent article section.
 * MathJax's
 * document-level companion style remains a sibling so section spacing and
 * borders do not treat it as article content.
 */
export default function rehypeSectionizeAlgebrica() {
  return (tree) => {
    if (tree?.type !== 'root' || !Array.isArray(tree.children)) return;

    const children = [];
    let section = null;

    for (const child of tree.children) {
      if (isElement(child, 'h2')) {
        section = {
          type: 'element',
          tagName: 'section',
          properties: { className: ['article-section'] },
          children: [child],
        };
        children.push(section);
      } else if (section && !isElement(child, 'style')) {
        section.children.push(child);
      } else {
        section = null;
        children.push(child);
      }
    }

    tree.children = children;
  };
}
