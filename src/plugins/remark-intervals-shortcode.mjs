const OPEN_MARKER_RE = /^\[shortcode=(?:"|“|”|'|‘|’)([^"'“”‘’]+)(?:"|“|”|'|‘|’)\]$/;
const INTERVAL_BLOCK_RE = /(?:^[ \t]*\[shortcode=(?:"|“|”|'|‘|’)intervals(?:"|“|”|'|‘|’)\][ \t]*\r?\n[\s\S]*?^[ \t]*\[\/shortcode\][ \t]*$|^[ \t]*\[field_math\][ \t]*\r?\n[\s\S]*?^[ \t]*\[\/field_math\][ \t]*$)/gm;
const CLASS_OPEN_RE = /^\[class=(?:"|“|”|'|‘|’)([^"'“”‘’]+)(?:"|“|”|'|‘|’)\]$/;

/**
 * Convert Algebrica's interval shortcode tables into the HTML structure used
 * by the original theme. Astro parses the closing marker as a final GFM table
 * row, so this transformer deliberately handles that shape.
 */
export default function remarkIntervalsShortcode() {
  const originalParser = this.parser;
  this.parser = (document, file) => (
    originalParser.call(
      this,
      normalizeIntervalTableDelimiters(normalizeMultilineDisplayMath(document)),
      file,
    )
  );

  return (tree) => {
    for (let index = 0; index < tree.children.length; index++) {
      const classNames = parseClassOpenMarker(markerText(tree.children[index]));
      if (classNames) {
        const wrappedChildren = [];
        let consumed = null;
        for (let cursor = index + 1; cursor < tree.children.length; cursor++) {
          const node = tree.children[cursor];
          if (markerText(node) === '[/class]') {
            consumed = cursor - index + 1;
            break;
          }
          if (node.type === 'table' && tableRowText(node.children.at(-1)) === '[/class]') {
            node.children.pop();
            wrappedChildren.push(node);
            consumed = cursor - index + 1;
            break;
          }
          wrappedChildren.push(node);
        }
        if (consumed === null) {
          throw new Error('unclosed class wrapper');
        }

        tree.children.splice(index, consumed, {
          type: 'classWrapper',
          data: {
            hName: 'div',
            hProperties: {
              className: classNames,
            },
          },
          children: wrappedChildren,
        });
        continue;
      }

      const open = parseIntervalOpenMarker(markerText(tree.children[index]));
      if (!open) continue;

      const table = tree.children[index + 1];
      if (table?.type !== 'table') {
        throw new Error('intervals shortcode must contain a Markdown table');
      }

      let consumed = 2;
      const lastRow = table.children.at(-1);
      if (tableRowText(lastRow) === open.closeMarker) {
        // The original shortcode output retains a final empty row. Clearing
        // the GFM-swallowed closing marker reproduces that structure exactly.
        for (const cell of lastRow.children || []) cell.children = [];
      } else if (markerText(tree.children[index + 2]) === open.closeMarker) {
        consumed = 3;
        table.children.push({
          type: 'tableRow',
          children: (table.children[0]?.children || []).map(() => ({
            type: 'tableCell',
            children: [],
          })),
        });
      } else {
        throw new Error('unclosed intervals shortcode');
      }

      if (table.children.length < 2) {
        throw new Error('intervals shortcode table must contain a header and at least one row');
      }

      for (const row of table.children.slice(1)) {
        for (const cell of row.children || []) {
          const token = plainText(cell).trim();
          if (!token.startsWith('sign+')) continue;
          cell.children = token.split(/\s+/).map(intervalSignNode);
        }
      }

      tree.children.splice(index, consumed, {
        type: 'intervalsShortcode',
        data: {
          hName: 'div',
          hProperties: { className: ['table-intervals'] },
        },
        children: [table],
      });
    }
  };
}

function parseClassOpenMarker(text) {
  const match = text?.match(CLASS_OPEN_RE);
  if (!match) return null;
  const classNames = match[1].trim().split(/\s+/);
  if (
    classNames.length === 0 ||
    classNames.some((className) => !/^-?[A-Za-z_][A-Za-z0-9_-]*$/.test(className))
  ) {
    throw new Error(`invalid class wrapper: ${text}`);
  }
  return classNames;
}

/**
 * remark-math requires multiline display delimiters on their own lines.
 * Upstream commonly writes `$$\begin{align}` and `\end{align}$$`, which would
 * otherwise swallow the rest of the article into one math node.
 */
export function normalizeMultilineDisplayMath(markdown) {
  return markdown.replace(
    /(?<!\\)\$\$([\s\S]*?)(?<!\\)\$\$/g,
    (match, inner) => {
      if (!/\r?\n/.test(inner)) return match;
      const lineEnding = inner.includes('\r\n') ? '\r\n' : '\n';
      const content = inner
        .replace(/^\r?\n/, '')
        .replace(/\r?\n$/, '');
      return `$$${lineEnding}${content}${lineEnding}$$`;
    },
  );
}

/**
 * Some upstream interval tables use one dash in an otherwise valid GFM
 * delimiter cell (`|-|`). Normalize only shortcode delimiter rows before the
 * Markdown parser runs; otherwise the entire shortcode becomes plain text.
 */
export function normalizeIntervalTableDelimiters(markdown) {
  return markdown.replace(
    INTERVAL_BLOCK_RE,
    (block) => {
      const lines = block.split(/\r?\n/);
      if (lines.length < 4) return block;
      lines[2] = lines[2].split('|').map((cell) => {
        const trimmed = cell.trim();
        const match = trimmed.match(/^(:?)(-+)(:?)$/);
        if (!match || match[2].length >= 3) return cell;
        const [, left, , right] = match;
        return `${left}---${right}`;
      }).join('|');
      return lines.join(block.includes('\r\n') ? '\r\n' : '\n');
    },
  );
}

function parseIntervalOpenMarker(text) {
  if (text === '[field_math]') {
    return { closeMarker: '[/field_math]' };
  }
  const match = text?.match(OPEN_MARKER_RE);
  if (!match) return null;
  if (match[1] !== 'intervals') {
    throw new Error(`unsupported shortcode: ${match[1]}`);
  }
  return { closeMarker: '[/shortcode]' };
}

function markerText(node) {
  if (node?.type !== 'paragraph') return null;
  return plainText(node).trim();
}

function tableRowText(node) {
  if (node?.type !== 'tableRow') return null;
  return plainText(node).trim();
}

function plainText(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value || '';
  return (node.children || []).map(plainText).join('');
}

function intervalSignNode(token) {
  const classes = intervalSignClasses(token);
  if (!classes) {
    throw new Error(`unknown intervals sign token: ${token}`);
  }
  return {
    type: 'intervalSign',
    data: {
      hName: 'div',
      hProperties: { className: classes },
    },
    children: [],
  };
}

export function intervalSignClasses(token) {
  let match = token.match(/^sign\+([lr])(-in)?-([oc])(-h)?$/);
  if (match) {
    const [, side, inward, state, highlighted] = match;
    return [
      `sign-plus-${side === 'l' ? 'left' : 'right'}${inward || ''}`,
      state === 'o' ? '-open' : '-closed',
      ...(highlighted ? ['-highlight'] : []),
    ];
  }

  match = token.match(/^sign\+s(-h)?$/);
  if (match) {
    return ['sign-spacer', ...(match[1] ? ['-highlight'] : [])];
  }

  match = token.match(/^sign\+p-([ch])$/);
  if (match) {
    return [`sign-point-${match[1]}`];
  }

  return null;
}
