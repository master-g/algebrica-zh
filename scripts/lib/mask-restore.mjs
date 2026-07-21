import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';

const TOKEN_RE = /__(MATH|LINK|IMG|TITLE)_\d+__/g;

/**
 * Mask a markdown article for translation.
 *
 * Masks:
 *  - frontmatter `title` value (only the value)
 *  - $$...$$ display math and $...$ inline math
 *  - markdown link URLs `[text](url)` and autolinks `<url>`
 *  - markdown image paths `![alt](path)`
 *
 * Returns { masked, placeholders, frontmatter }.
 * `frontmatter` contains original title, source, license, tags, and rawTitle.
 */
export function mask(markdown, { maskTitle = true } = {}) {
  const { fmText, body, bodyStart } = splitFrontmatter(markdown);
  const frontmatter = parseFrontmatter(fmText || '');

  const placeholders = {
    title: [],
    math: [],
    link: [],
    img: [],
  };

  let maskedFm = '';
  if (fmText && maskTitle) {
    maskedFm = maskTitleInFrontmatter(fmText, placeholders);
  } else if (fmText) {
    maskedFm = fmText;
  }

  let maskedBody = body;

  // Display math must be masked before inline math, otherwise $ inside $$ could
  // be consumed by the inline regex.
  maskedBody = maskPattern(maskedBody, placeholders.math, 'MATH', displayMathRegex());
  maskedBody = maskPattern(maskedBody, placeholders.math, 'MATH', inlineMathRegex());
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
  const flat = [];
  for (const type of ['title', 'math', 'link', 'img']) {
    for (let i = 0; i < placeholders[type].length; i++) {
      flat[i] = flat[i] || {};
      flat[i][type] = placeholders[type][i];
    }
  }

  const seen = new Map();
  const restored = maskedTranslation.replace(TOKEN_RE, (token) => {
    const m = token.match(/__(MATH|LINK|IMG|TITLE)_(\d+)__/);
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

function verifyCoverage(maskedTranslation, placeholders, seen) {
  const expected = new Set();
  for (const type of ['title', 'math', 'link', 'img']) {
    for (let i = 0; i < placeholders[type].length; i++) {
      expected.add(`${type.toUpperCase()}_${i}`);
    }
  }

  const present = new Set();
  let m;
  const re = /__(MATH|LINK|IMG|TITLE)_(\d+)__/g;
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

function splitFrontmatter(markdown) {
  if (!markdown.startsWith('---\n') && !markdown.startsWith('---\r\n')) {
    return { fmText: null, body: markdown, bodyStart: 0 };
  }
  const end = markdown.indexOf('\n---', 3);
  if (end === -1) {
    throw new Error('frontmatter start marker without end marker');
  }
  const fmText = markdown.slice(4, end);
  let bodyStart = end + 4;
  if (markdown[bodyStart] === '\r') bodyStart++;
  if (markdown[bodyStart] === '\n') bodyStart++;
  const body = markdown.slice(bodyStart);
  return { fmText, body, bodyStart };
}

function parseFrontmatter(fmText) {
  const fm = { title: null, source: null, license: null, tags: [], rawTitle: null };
  if (!fmText) return fm;

  let parsed;
  try {
    parsed = yaml.load(fmText) || {};
  } catch {
    parsed = {};
  }

  for (const key of ['title', 'source', 'license']) {
    if (parsed[key] !== undefined) fm[key] = String(parsed[key]);
  }
  if (parsed.title !== undefined) fm.rawTitle = `title: ${parsed.title}`;
  if (Array.isArray(parsed.tags)) {
    fm.tags = parsed.tags.map((t) => String(t));
  }
  return fm;
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

function maskPattern(text, store, prefix, regex) {
  let count = store.length;
  return text.replace(regex, (match, ...args) => {
    const groups = args[args.length - 1];
    const original = prefix === 'MATH' ? match : (groups.url || groups.path || groups.autolink || groups.title || match);
    store.push(original);
    const placeholder = `__${prefix}_${count}__`;
    count++;
    if (prefix === 'MATH') return placeholder;
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
