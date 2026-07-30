import { readFileSync } from 'node:fs';
import { splitFrontmatter, parseFrontmatter } from './frontmatter.mjs';

const PLACEHOLDER_TYPES = ['title', 'math', 'link', 'img', 'shortcode'];
const TOKEN_RE = /__(MATH|LINK|IMG|TITLE|SHORTCODE)_(\d+)__/g;
const SHORTCODE_BLOCK_RE = /(?:^[ \t]*\[shortcode=(?:"[^"\r\n]+"|'[^'\r\n]+'|“[^”\r\n]+”|‘[^’\r\n]+’)\][ \t]*\r?\n[\s\S]*?^[ \t]*\[\/shortcode\][ \t]*$|^[ \t]*\[field_math\][ \t]*\r?\n[\s\S]*?^[ \t]*\[\/field_math\][ \t]*$)/gm;
const SHORTCODE_MARKER_RE = /\[\/?shortcode(?:=[^\]\r\n]+)?\]|\[\/?field_math\]/;

/**
 * Mask a markdown article for translation.
 *
 * Masks:
 *  - frontmatter `title` value (only the value)
 *  - $$...$$ display math and $...$ inline math
 *  - markdown link URLs `[text](url)` and autolinks `<url>`
 *  - markdown image paths `![alt](path)`
 *  - complete shortcode blocks (opaque structural content)
 *
 * Returns { masked, placeholders, frontmatter }.
 * `frontmatter` contains original title, source, license, tags, and rawTitle.
 */
export function mask(markdown, { maskTitle = true } = {}) {
  if (
    (markdown.startsWith('---\n') || markdown.startsWith('---\r\n')) &&
    markdown.indexOf('\n---', 3) === -1
  ) {
    throw new Error('frontmatter start marker without end marker');
  }

  const { frontmatter: fmText, body } = splitFrontmatter(markdown);
  const parsed = parseFrontmatter(fmText || '') || {};
  const frontmatter = {
    title: parsed.title != null ? String(parsed.title) : null,
    source: parsed.source != null ? String(parsed.source) : null,
    license: parsed.license != null ? String(parsed.license) : null,
    tags: Array.isArray(parsed.tags) ? parsed.tags.map((t) => String(t)) : [],
    rawTitle: parsed.title !== undefined ? `title: ${parsed.title}` : null,
  };

  const placeholders = {
    title: [],
    math: [],
    link: [],
    img: [],
    shortcode: [],
  };

  let maskedFm = '';
  if (fmText && maskTitle) {
    maskedFm = maskTitleInFrontmatter(fmText, placeholders);
  } else if (fmText) {
    maskedFm = fmText;
  }

  let maskedBody = body;

  // Structural shortcode blocks must be hidden before their formulas and
  // tables are processed, so the model cannot alter sign tokens or markers.
  maskedBody = maskShortcodeBlocks(maskedBody, placeholders.shortcode);

  // Display math must be masked before inline math, otherwise $ inside $$ could
  // be consumed by the inline regex.
  maskedBody = maskPattern(maskedBody, placeholders.math, 'MATH', displayMathRegex());
  maskedBody = maskPattern(maskedBody, placeholders.math, 'MATH', inlineMathRegex(), {
    extractTrailingPunctuation: true,
  });
  maskedBody = maskPattern(maskedBody, placeholders.img, 'IMG', imageRegex());
  maskedBody = maskPattern(maskedBody, placeholders.link, 'LINK', markdownLinkRegex());
  maskedBody = maskPattern(maskedBody, placeholders.link, 'LINK', autolinkRegex());

  const masked = fmText ? `---\n${maskedFm}\n---${body ? '\n' + maskedBody : ''}` : maskedBody;
  return { masked, placeholders, frontmatter };
}

/**
 * Restore placeholders into the masked translation.
 *
 * Verifies placeholder counts and indices match exactly. Any mismatch is a
 * hard error (throws).
 */
export function restore(maskedTranslation, placeholders) {
  verifyPlaceholderContainers(maskedTranslation);

  const flat = [];
  for (const type of PLACEHOLDER_TYPES) {
    for (let i = 0; i < placeholders[type].length; i++) {
      flat[i] = flat[i] || {};
      flat[i][type] = placeholders[type][i];
    }
  }

  const seen = new Map();
  const restored = maskedTranslation.replace(TOKEN_RE, (token) => {
    const m = token.match(/__(MATH|LINK|IMG|TITLE|SHORTCODE)_(\d+)__/);
    if (!m) return token;
    const [, type, idxStr] = m;
    const idx = Number(idxStr);
    const key = `${type}_${idx}`;
    if (seen.has(key)) {
      throw new Error(`duplicate placeholder in translation output: ${token}`);
    }
    seen.set(key, true);
    const value = placeholders[type.toLowerCase()]?.[idx];
    if (value === undefined) {
      throw new Error(`placeholder ${token} has no stored original value`);
    }
    return value;
  });

  verifyCoverage(maskedTranslation, placeholders, seen);
  return restored;
}

function verifyPlaceholderContainers(text) {
  for (const match of text.matchAll(/__(LINK|IMG|SHORTCODE)_(\d+)__/g)) {
    const [token, type] = match;
    const start = match.index;
    const end = start + token.length;
    const before = text.slice(0, start);
    const after = text.slice(end);

    if (type === 'LINK') {
      const markdownLink = /(?<!!)\[[^\]\n]*\]\($/.test(before) && after.startsWith(')');
      const autolink = before.endsWith('<') && after.startsWith('>');
      if (!markdownLink && !autolink) {
        throw new Error(`link placeholder lost Markdown link structure: ${token}`);
      }
    }

    if (type === 'IMG') {
      const markdownImage = /!\[[^\]\n]*\]\($/.test(before) && after.startsWith(')');
      if (!markdownImage) {
        throw new Error(`image placeholder lost Markdown image structure: ${token}`);
      }
    }

    if (type === 'SHORTCODE') {
      const lineStart = text.lastIndexOf('\n', start - 1) + 1;
      const nextNewline = text.indexOf('\n', end);
      const lineEnd = nextNewline === -1 ? text.length : nextNewline;
      if (text.slice(lineStart, lineEnd).trim() !== token) {
        throw new Error(`shortcode placeholder must remain on its own line: ${token}`);
      }
    }
  }
}

/**
 * Normalize files produced before inline prose punctuation was extracted by
 * mask(). Formula contents are unchanged apart from a trailing prose comma or
 * period; an existing Chinese punctuation mark immediately after the formula
 * takes precedence.
 */
export function normalizeInlineMathPunctuation(markdown) {
  return markdown.replace(
    /(?<!\\)\$(?!\$)((?:[^$\n]|\\\$)+?)([,.])(?<!\\)\$(?!\$)([，。；：！？]?)/g,
    (_, inner, asciiPunctuation, existingChinesePunctuation) => (
      `$${inner}$${existingChinesePunctuation || (asciiPunctuation === ',' ? '，' : '。')}`
    ),
  );
}

/**
 * Keep inline formulae visually separated from adjacent CJK prose. Display
 * math, punctuation, Markdown delimiters, and already-spaced formulae are left
 * unchanged.
 */
export function normalizeInlineMathSpacing(markdown) {
  const cjk = /[\u3400-\u9fff\u3040-\u309f\u30a0-\u30ff]/;
  return markdown.replace(
    /(?<!\\)(?<!\$)\$(?!\$)(?:[^$\n]|\\\$)+?(?<!\\)\$(?!\$)/g,
    (formula, offset, source) => {
      const before = source[offset - 1] || '';
      const after = source[offset + formula.length] || '';
      const beforeIsCjkLink = /(?<!!)\[[^\]\n]*[\u3400-\u9fff\u3040-\u309f\u30a0-\u30ff][^\]\n]*\]\([^)\n]+\)$/.test(
        source.slice(0, offset),
      );
      const afterIsCjkLink = /^\[[^\]\n]*[\u3400-\u9fff\u3040-\u309f\u30a0-\u30ff]/.test(
        source.slice(offset + formula.length),
      );
      return `${cjk.test(before) || beforeIsCjkLink ? ' ' : ''}${formula}${cjk.test(after) || afterIsCjkLink ? ' ' : ''}`;
    },
  );
}

const MATH_TEXT_TRANSLATIONS = new Map([
  ['and', '且'],
  ['exists', '存在'],
  ['for', '当'],
  ['for all', '对所有'],
  ['for each', '对每个'],
  ['for every', '对每个'],
  ['for some', '存在某个'],
  ['if', '若'],
  ['induction axiom', '归纳公理'],
  ['invalid', '不合条件'],
  ['or', '或'],
  ['summands', '个加数'],
  ['times', '次'],
  ['total', '总计'],
  ['undefined', '未定义'],
  ['valid', '符合条件'],
  ['where', '其中'],
  ['with', '其中'],
]);

/**
 * Localize visible prose embedded in otherwise immutable LaTeX spans.
 *
 * The translator never sees math placeholders, so small `\text{...}` labels
 * require a deterministic post-restore pass. Unknown labels remain unchanged
 * and are rejected later by the independent visible-math admission gate.
 */
export function localizeMathText(text) {
  return text.replace(/\\text\{([^{}]*)\}/g, (full, raw) => {
    const translated = MATH_TEXT_TRANSLATIONS.get(raw.trim());
    if (!translated) return full;
    const leading = raw.match(/^\s*/)?.[0] ?? '';
    const trailing = raw.match(/\s*$/)?.[0] ?? '';
    return `\\text{${leading}${translated}${trailing}}`;
  });
}

function verifyCoverage(maskedTranslation, placeholders, seen) {
  const expected = new Set();
  for (const type of PLACEHOLDER_TYPES) {
    for (let i = 0; i < placeholders[type].length; i++) {
      expected.add(`${type.toUpperCase()}_${i}`);
    }
  }

  const present = new Set();
  let m;
  const re = /__(MATH|LINK|IMG|TITLE|SHORTCODE)_(\d+)__/g;
  while ((m = re.exec(maskedTranslation)) !== null) {
    const [, type, idx] = m;
    present.add(`${type}_${idx}`);
  }

  const missing = [];
  for (const key of expected) {
    if (!present.has(key)) missing.push(key);
  }
  if (missing.length) {
    throw new Error(`placeholder count/order mismatch: missing ${missing.join(', ')}`);
  }

  const extra = [];
  for (const key of seen.keys()) {
    if (!expected.has(key)) extra.push(key);
  }
  if (extra.length) {
    throw new Error(`placeholder count/order mismatch: unexpected ${extra.join(', ')}`);
  }

}

function maskShortcodeBlocks(text, store) {
  let count = store.length;
  const masked = text.replace(SHORTCODE_BLOCK_RE, (block) => {
    store.push(block);
    return `__SHORTCODE_${count++}__`;
  });

  const leftover = masked.match(SHORTCODE_MARKER_RE);
  if (leftover) {
    const kind = /\[\/(?:shortcode|field_math)\]/.test(leftover[0])
      ? 'orphan closing shortcode'
      : 'unclosed shortcode';
    throw new Error(`${kind}: ${leftover[0].trim()}`);
  }
  return masked;
}

function maskTitleInFrontmatter(fmText, placeholders) {
  return fmText.replace(/^(title:\s*)(.+)$/m, (_, prefix, value) => {
    placeholders.title.push(unquote(value.trim()));
    return `${prefix}__TITLE_${placeholders.title.length - 1}__`;
  });
}

function unquote(value) {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function maskPattern(text, store, prefix, regex, { extractTrailingPunctuation = false } = {}) {
  let count = store.length;
  return text.replace(regex, (match, ...args) => {
    const groups = args[args.length - 1];
    let original = prefix === 'MATH' ? match : (groups.url || groups.path || groups.autolink || groups.title || match);
    let trailingPunctuation = '';
    if (prefix === 'MATH' && extractTrailingPunctuation) {
      const inner = match.slice(1, -1);
      const punctuationMatch = inner.match(/([,.;:?])$/);
      if (punctuationMatch) {
        trailingPunctuation = punctuationMatch[1];
        original = `$${inner.slice(0, -1)}$`;
      }
    }
    store.push(original);
    const placeholder = `__${prefix}_${count}__`;
    count++;
    if (prefix === 'MATH') return `${placeholder}${trailingPunctuation}`;
    if (prefix === 'IMG') return `![${groups.alt || ''}](${placeholder})`;
    if (prefix === 'LINK') {
      if (groups.autolink) return `<${placeholder}>`;
      return `[${groups.text || ''}](${placeholder})`;
    }
    return placeholder;
  });
}

function displayMathRegex() {
  // (?<!\$)\$\$(?!\$)  =>  $$ not part of $$$
  return /(?<!\\)(?<!\$)\$\$(?!\$)([\s\S]*?)(?<!\\)\$\$(?!\$)/g;
}

function inlineMathRegex() {
  return /(?<!\\)\$(?!\$)((?:[^$\n]|\\\$)+?)(?<!\\)\$(?!\$)/g;
}

function imageRegex() {
  return /!\[(?<alt>[^\]]*)\]\((?<path>[^)\s]+)(?:\s+["'][^"']*["'])?\)/g;
}

function markdownLinkRegex() {
  return /(?<!!)\[(?<text>[^\]]+)\]\((?<url>[^)\s]+)(?:\s+["'][^"']*["'])?\)/g;
}

function autolinkRegex() {
  return /<(?<autolink>https?:\/\/[^>]+)>/g;
}

/**
 * Convenience: mask a source file by path.
 */
export function maskFile(filePath) {
  return mask(readFileSync(filePath, 'utf8'));
}
