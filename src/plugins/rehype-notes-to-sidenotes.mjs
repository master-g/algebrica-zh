function visit(node) {
  if (!node || typeof node !== 'object') return;

  if (node.type === 'element' && node.tagName === 'blockquote') {
    node.tagName = 'aside';
    node.properties = {
      ...(node.properties || {}),
      className: ['sidenote'],
      role: 'note',
    };
  }

  for (const child of node.children || []) visit(child);
}

/**
 * The translated corpus uses Markdown blockquotes for editorial supplements,
 * not attributed quotations. Expose those supplements as semantic notes so
 * the desktop layout can place them in the Tufte margin.
 */
export default function rehypeNotesToSidenotes() {
  return (tree) => visit(tree);
}
