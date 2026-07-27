import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { fixedMappingChecks } from './glossary.mjs';
import { buildSlugMap, getSectionDirs } from '../../src/lib/slug-map.mjs';
import { splitFrontmatter, parseFrontmatter } from './frontmatter.mjs';

const DANGLING_FILE = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', 'src', 'lib', 'dangling-links.json');

/**
 * Validate a translated markdown file.
 *
 * Options:
 *  - dangling: { aliases: Record<string, string>, external: string[], text: string[] }
 *    known renamed and dangling targets.
 *
 * Returns { ok: boolean, errors: string[], warnings: string[] }.
 */
export async function validateTranslation(
  filePath,
  zhText,
  {
    dangling = { external: [], text: [] },
    checkVisibleMathText = true,
  } = {},
) {
  const errors = [];
  const warnings = [];

  const knownDangling = new Set([
    ...(dangling.external || []),
    ...(dangling.text || []),
  ]);
  const aliases = new Map(Object.entries(dangling.aliases || {}));

  const { frontmatter, body } = splitFrontmatter(zhText);
  if (!frontmatter) {
    errors.push('missing frontmatter');
    return { ok: false, errors, warnings };
  }

  const fm = parseFrontmatter(frontmatter) || {};

  // Schema checks
  const required = ['title', 'title_en', 'source', 'license', 'tags'];
  for (const key of required) {
    if (fm[key] === undefined) errors.push(`frontmatter missing ${key}`);
  }
  if (!fm.translation || typeof fm.translation !== 'object') {
    errors.push('frontmatter missing translation block');
  } else {
    for (const key of ['status', 'source_hash', 'translator', 'updated']) {
      if (fm.translation[key] === undefined) errors.push(`translation.${key} missing`);
    }
  }

  // Source URL sanity
  if (fm.source && !/^https?:\/\//.test(fm.source)) {
    errors.push(`source is not a URL: ${fm.source}`);
  }

  errors.push(...validateMathSyntax(body));
  if (checkVisibleMathText) {
    errors.push(...validateVisibleMathText(body));
  }

  // Internal link targets
  const slugMap = await buildSlugMap({ source: 'sections-yaml', strictCollisions: false, strictEmpty: false, unionFs: true, silent: true });
  const sectionDirs = getSectionDirs(slugMap);
  for (const link of extractInternalLinks(body)) {
    const target = link.replace(/^\.\.\//, '').replace(/\/$/, '');
    if (aliases.has(target)) {
      const canonical = aliases.get(target);
      if (!slugMap.has(canonical)) {
        errors.push(`internal link alias target missing: ${link} -> ${canonical}`);
      }
      continue;
    }
    if (knownDangling.has(target)) continue;
    if (target.includes('/')) {
      const [sec, slug] = target.split('/');
      if (!sectionDirs.has(sec) || slugMap.get(slug) !== sec) {
        errors.push(`internal link target missing: ${link}`);
      }
    } else if (!slugMap.has(target) && !sectionDirs.has(target)) {
      errors.push(`internal link target missing: ${link}`);
    }
  }

  // Raw HTML / javascript: URLs
  const rawHtml = /<[a-zA-Z][^>]*>/g;
  if (rawHtml.test(body)) {
    warnings.push('body contains raw HTML tags');
  }
  if (/javascript:/i.test(body)) {
    errors.push('body contains javascript: URL');
  }

  return { ok: errors.length === 0, errors, warnings };
}

export function validateMathSyntax(body) {
  const errors = [];
  const pairing = checkMathPairing(body);
  if (!pairing.ok) errors.push(`math delimiter mismatch: ${pairing.message}`);

  const mathSpans = extractMathSpans(body);
  for (const span of mathSpans) {
    try {
      katex.renderToString(span.content, {
        throwOnError: true,
        strict: true,
        displayMode: span.display,
      });
    } catch (err) {
      errors.push(`KaTeX error (${span.display ? 'display' : 'inline'}): ${err.message}`);
    }
  }
  return errors;
}

export function validateVisibleMathText(body) {
  const errors = new Set();
  const notation = /^(?:[A-Z]{1,4}|\(P[1-5]\)|rad|lcm|Log|colog)$/;

  for (const span of extractMathSpans(body)) {
    for (const match of span.content.matchAll(/\\text\{([^{}]*)\}/g)) {
      const value = match[1].trim();
      if (!/[A-Za-z]/.test(value)) continue;
      if (/[\u3400-\u9fff]/.test(value)) continue;
      if (notation.test(value)) continue;
      errors.add(`unlocalized English in math text: "${value}"`);
    }
  }

  return [...errors];
}

export function validateShortcodeIntegrity(sourceText, translatedText) {
  const sourceBlocks = extractShortcodeBlocks(sourceText);
  const translatedBlocks = extractShortcodeBlocks(translatedText);
  const sourceRemainder = removeShortcodeBlocks(sourceText);
  const translatedRemainder = removeShortcodeBlocks(translatedText);
  const sourceMarker = findShortcodeMarker(sourceRemainder);
  const translatedMarker = findShortcodeMarker(translatedRemainder);
  if (sourceMarker || translatedMarker) {
    return [
      `orphan or malformed shortcode marker: source=${sourceMarker || 'none'}, translation=${translatedMarker || 'none'}`,
    ];
  }
  if (
    sourceBlocks.length !== translatedBlocks.length ||
    sourceBlocks.some((block, index) => block !== translatedBlocks[index])
  ) {
    return [
      `shortcode block mismatch: source has ${sourceBlocks.length}, translation has ${translatedBlocks.length}`,
    ];
  }
  return [];
}

export function validateMarkdownStructureIntegrity(sourceText, translatedText) {
  const errors = [];
  const sourceBody = splitFrontmatter(sourceText).body;
  const translatedBody = splitFrontmatter(translatedText).body;

  const sourceLinkCount = countMarkdownLinks(sourceBody);
  const translatedLinkCount = countMarkdownLinks(translatedBody);
  if (sourceLinkCount !== translatedLinkCount) {
    errors.push(
      `Markdown link count mismatch: source has ${sourceLinkCount}, translation has ${translatedLinkCount}`,
    );
  }

  const sourceImageCount = countMatches(sourceBody, /!\[[^\]\n]*\]\([^) \n]+(?:\s+["'][^"']*["'])?\)/g);
  const translatedImageCount = countMatches(translatedBody, /!\[[^\]\n]*\]\([^) \n]+(?:\s+["'][^"']*["'])?\)/g);
  if (sourceImageCount !== translatedImageCount) {
    errors.push(
      `Markdown image count mismatch: source has ${sourceImageCount}, translation has ${translatedImageCount}`,
    );
  }

  const sourceHeadings = headingCounts(sourceBody);
  const translatedHeadings = headingCounts(translatedBody);
  if (sourceHeadings.some((count, index) => count !== translatedHeadings[index])) {
    errors.push(
      `Markdown heading structure mismatch: source ${sourceHeadings.join('/')}, translation ${translatedHeadings.join('/')}`,
    );
  }

  const sourceClassMarkers = extractClassMarkers(sourceBody);
  const translatedClassMarkers = extractClassMarkers(translatedBody);
  if (
    sourceClassMarkers.length !== translatedClassMarkers.length ||
    sourceClassMarkers.some((marker, index) => marker !== translatedClassMarkers[index])
  ) {
    errors.push(
      `class wrapper mismatch: source has ${sourceClassMarkers.length}, translation has ${translatedClassMarkers.length}`,
    );
  }

  return errors;
}

function extractClassMarkers(text) {
  return [...text.matchAll(/^[ \t]*(\[\/?class(?:=[^\]\r\n]+)?\])[ \t]*$/gm)]
    .map((match) => match[1]);
}

function countMarkdownLinks(text) {
  return (
    countMatches(text, /(?<!!)\[[^\]\n]+\]\([^) \n]+(?:\s+["'][^"']*["'])?\)/g) +
    countMatches(text, /<https?:\/\/[^>\n]+>/g)
  );
}

function countMatches(text, regex) {
  return [...text.matchAll(regex)].length;
}

function headingCounts(text) {
  const counts = Array(6).fill(0);
  for (const match of text.matchAll(/^(#{1,6})[ \t]+/gm)) {
    counts[match[1].length - 1]++;
  }
  return counts;
}

function extractShortcodeBlocks(text) {
  return [...text.matchAll(
    /(?:^[ \t]*\[shortcode=(?:"[^"\r\n]+"|'[^'\r\n]+'|“[^”\r\n]+”|‘[^’\r\n]+’)\][ \t]*\r?\n[\s\S]*?^[ \t]*\[\/shortcode\][ \t]*$|^[ \t]*\[field_math\][ \t]*\r?\n[\s\S]*?^[ \t]*\[\/field_math\][ \t]*$)/gm,
  )].map((match) => match[0]);
}

function removeShortcodeBlocks(text) {
  return text.replace(
    /(?:^[ \t]*\[shortcode=(?:"[^"\r\n]+"|'[^'\r\n]+'|“[^”\r\n]+”|‘[^’\r\n]+’)\][ \t]*\r?\n[\s\S]*?^[ \t]*\[\/shortcode\][ \t]*$|^[ \t]*\[field_math\][ \t]*\r?\n[\s\S]*?^[ \t]*\[\/field_math\][ \t]*$)/gm,
    '',
  );
}

function findShortcodeMarker(text) {
  return text.match(/\[\/?shortcode(?:=[^\]\r\n]+)?\]|\[\/?field_math\]/)?.[0] || null;
}

export function checkGlossaryMapping(enBody, zhBody) {
  const errors = [];
  const mappings = [...fixedMappingChecks()]
    .sort((left, right) => right.en.length - left.en.length);
  let unmatchedSource = enBody;
  for (const { en, zh: expectedZh } of mappings) {
    // Whole-word-ish match for EN: boundary before/after, case-insensitive.
    const pattern = `(^|[^A-Za-z-])${escapeRegExp(en)}([^A-Za-z-]|$)`;
    const enRe = new RegExp(pattern, 'i');
    const zhRe = new RegExp(escapeRegExp(expectedZh));
    if (enRe.test(unmatchedSource) && !zhRe.test(zhBody)) {
      errors.push(`glossary mapping: source contains "${en}" but translation missing "${expectedZh}"`);
    }
    unmatchedSource = unmatchedSource.replace(
      new RegExp(pattern, 'gi'),
      (match) => ' '.repeat(match.length),
    );
  }
  return errors;
}

function checkMathPairing(text) {
  let inline = 0;
  let display = 0;
  let i = 0;
  while (i < text.length) {
    if (text[i] === '\\' && text[i + 1] === '$') {
      i += 2;
      continue;
    }
    if (text[i] === '$') {
      if (text[i + 1] === '$') {
        display++;
        i += 2;
      } else {
        inline++;
        i++;
      }
    } else {
      i++;
    }
  }
  if (inline % 2 !== 0) return { ok: false, message: `inline $ count ${inline}` };
  if (display % 2 !== 0) return { ok: false, message: `display $$ count ${display}` };
  return { ok: true };
}

function extractMathSpans(text) {
  const spans = [];
  // Display first so inline regex does not consume $ inside display delimiters.
  const displayRe = /(?<!\\)\$\$([\s\S]*?)(?<!\\)\$\$/g;
  let m;
  while ((m = displayRe.exec(text)) !== null) {
    spans.push({ content: m[1].trim(), display: true });
  }
  const withoutDisplayMath = text.replace(
    /(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$/g,
    (displayMath) => ' '.repeat(displayMath.length),
  );
  const inlineRe = /(?<!\\)\$([^$\n]+)(?<!\\)\$/g;
  while ((m = inlineRe.exec(withoutDisplayMath)) !== null) {
    spans.push({ content: m[1].trim(), display: false });
  }
  return spans;
}

function extractInternalLinks(text) {
  const links = [];
  const mdRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = mdRe.exec(text)) !== null) {
    const url = m[2];
    if (url.startsWith('../')) links.push(url);
  }
  return links;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

let danglingCache = null;
export function loadDangling() {
  if (danglingCache) return danglingCache;
  try {
    danglingCache = JSON.parse(readFileSync(DANGLING_FILE, 'utf8'));
  } catch {
    danglingCache = { external: [], text: [] };
  }
  return danglingCache;
}
