const STATUS_NAMES = {
  A: 'added',
  M: 'modified',
  D: 'deleted',
};

const SVG_COLOR_PATTERN = /#[0-9a-f]{3,8}\b|rgba?\([^)]*\)/gi;

export function parseNameStatus(raw) {
  if (!raw.trim()) return [];
  return raw.trim().split('\n').map((line) => {
    const [code, firstPath, secondPath] = line.split('\t');
    if (code.startsWith('R')) {
      return {
        status: 'renamed',
        path: secondPath,
        previousPath: firstPath,
        similarity: Number.parseInt(code.slice(1), 10),
      };
    }
    return {
      status: STATUS_NAMES[code] || code.toLowerCase(),
      path: firstPath,
    };
  });
}

function matches(raw, pattern) {
  return [...raw.matchAll(pattern)].map((match) => match[1]);
}

export function collectMarkdownStructure(raw) {
  const displayMatches = [
    ...raw.matchAll(/\$\$[\s\S]*?\$\$/g),
    ...raw.matchAll(/\\\[[\s\S]*?\\\]/g),
  ];
  const withoutDisplay = raw
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\\\[[\s\S]*?\\\]/g, '');

  return {
    links: matches(raw, /(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g),
    images: [
      ...matches(raw, /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g),
      ...matches(raw, /<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi),
    ],
    inlineMath: [...withoutDisplay.matchAll(/(?<!\\)\$(?!\$)[^\n$]+(?<!\\)\$/g)].length,
    displayMath: displayMatches.length,
    shortcodes: [...raw.matchAll(/\[(?:\/?shortcode(?:=[^\]]+)?|\/?field_math|\/?class(?:=[^\]]+)?)\]/g)]
      .map((match) => match[0]),
  };
}

function normalizeSvgWhitespace(raw) {
  return raw
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}

function normalizeSvgWithoutPalette(raw) {
  return normalizeSvgWhitespace(raw.replace(SVG_COLOR_PATTERN, '#COLOR'));
}

export function deriveSvgPaletteMapping(before, after) {
  if (classifySvgChange(before, after) !== 'palette-only') {
    throw new Error('SVG change is not palette-only');
  }

  const beforeColors = [...before.matchAll(SVG_COLOR_PATTERN)].map((match) => match[0]);
  const afterColors = [...after.matchAll(SVG_COLOR_PATTERN)].map((match) => match[0]);
  if (beforeColors.length !== afterColors.length) {
    throw new Error('palette-only SVGs have different color token counts');
  }

  const mapping = new Map();
  for (let index = 0; index < beforeColors.length; index += 1) {
    const oldColor = beforeColors[index].toLowerCase();
    const newColor = afterColors[index];
    if (mapping.has(oldColor) && mapping.get(oldColor).toLowerCase() !== newColor.toLowerCase()) {
      throw new Error(`ambiguous SVG palette mapping for ${beforeColors[index]}`);
    }
    mapping.set(oldColor, newColor);
  }
  return mapping;
}

export function applySvgPaletteMapping(localized, mapping) {
  const transformed = localized.replace(SVG_COLOR_PATTERN, (color) => (
    mapping.get(color.toLowerCase()) || color
  ));
  if (normalizeSvgWithoutPalette(localized) !== normalizeSvgWithoutPalette(transformed)) {
    throw new Error('SVG structure changed while applying palette mapping');
  }
  return transformed;
}

const SVG_TEXT_BLOCK_PATTERN = /(<text\b[^>]*>)([\s\S]*?)(<\/text>)/gi;

function maskSvgTextBlocks(raw) {
  return raw.replace(SVG_TEXT_BLOCK_PATTERN, '<TEXT/>');
}

export function mergeLocalizedSvgText(source, localized, { allowSourceTail = false } = {}) {
  const sourceBlocks = [...source.matchAll(SVG_TEXT_BLOCK_PATTERN)];
  const localizedBlocks = [...localized.matchAll(SVG_TEXT_BLOCK_PATTERN)];
  if (sourceBlocks.length < localizedBlocks.length) {
    throw new Error('localized SVG has more text blocks than the source SVG');
  }
  if (!allowSourceTail && sourceBlocks.length !== localizedBlocks.length) {
    throw new Error('source and localized SVG text block counts differ');
  }

  let index = 0;
  const merged = source.replace(SVG_TEXT_BLOCK_PATTERN, (block, opening, inner, closing) => {
    if (index >= localizedBlocks.length) return block;
    const localizedInner = localizedBlocks[index][2];
    index += 1;
    return `${opening}${localizedInner}${closing}`;
  });
  if (maskSvgTextBlocks(merged) !== maskSvgTextBlocks(source)) {
    throw new Error('non-text SVG structure changed while merging localized text');
  }
  return merged;
}

export function classifySvgChange(before, after) {
  if (before === after) return 'unchanged';
  if (normalizeSvgWhitespace(before) === normalizeSvgWhitespace(after)) return 'whitespace-only';
  return normalizeSvgWithoutPalette(before) === normalizeSvgWithoutPalette(after)
    ? 'palette-only'
    : 'structural';
}
