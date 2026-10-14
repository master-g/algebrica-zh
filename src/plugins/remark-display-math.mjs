function isBlank(node) {
  return node.type === 'text' && node.value.trim() === '';
}

function displayMathNode(value) {
  return {
    type: 'math',
    value,
    data: {
      hName: 'pre',
      hChildren: [
        {
          type: 'element',
          tagName: 'code',
          properties: { className: ['language-math', 'math-display'] },
          children: [{ type: 'text', value }],
        },
      ],
    },
  };
}

function visit(node, source) {
  if (!node.children) return;

  node.children = node.children.map((child) => {
    if (child.type !== 'paragraph') {
      visit(child, source);
      return child;
    }

    const children = child.children.filter((grandchild) => !isBlank(grandchild));
    const [math] = children;
    const start = math?.position?.start.offset;
    if (
      children.length === 1
      && math.type === 'inlineMath'
      && start !== undefined
      && source.startsWith('$$', start)
    ) {
      return displayMathNode(math.value);
    }
    return child;
  });
}

/**
 * Upstream writes display formulas as single-line `$$...$$` paragraphs.
 * remark-math 6 parses those as inline math, which drops `\tag{}` numbers
 * and renders fractions in text style, so promote them to display math.
 */
export default function remarkDisplayMath() {
  return (tree, file) => visit(tree, String(file.value ?? ''));
}
