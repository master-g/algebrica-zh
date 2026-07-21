import { readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import katex from 'katex';
import { fixedMappingChecks } from './glossary.mjs';

const UPSTREAM = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'algebrica');
const SECTIONS_YAML = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', 'sections.yaml');

/**
 * Validate a translated markdown file.
 *
 * Options:
 *  - dangling: { external: string[], text: string[] } known dangling targets to allow.
 *
 * Returns { ok: boolean, errors: string[], warnings: string[] }.
 */
export async function validateTranslation(filePath, zhText, { dangling = { external: [], text: [] } } = {}) {
  const errors = [];
  const warnings = [];

  const externalDangling = new Set(dangling.external || []);

  const { frontmatter, body } = splitFrontmatter(zhText);
  if (!frontmatter) {
    errors.push('missing frontmatter');
    return { ok: false, errors, warnings };
  }

  const fm = parseYamlFrontmatter(frontmatter);

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

  // Math delimiter pairing
  const pairing = checkMathPairing(body);
  if (!pairing.ok) errors.push(`math delimiter mismatch: ${pairing.message}`);

  // KaTeX strict re-parse
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

  // Internal link targets
  const slugMap = await buildSlugMapFromUpstream();
  const sectionDirs = new Set(slugMap.values());
  for (const link of extractInternalLinks(body)) {
    const target = link.replace(/^\.\.\//, '').replace(/\/$/, '');
    if (externalDangling.has(target)) continue;
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

export function checkGlossaryMapping(enBody, zhBody) {
  const errors = [];
  const mappings = fixedMappingChecks();
  for (const { en, zh: expectedZh } of mappings) {
    // Whole-word-ish match for EN: boundary before/after, case-insensitive.
    const enRe = new RegExp(`(^|[^A-Za-z-])${escapeRegExp(en)}([^A-Za-z-]|$)`, 'i');
    const zhRe = new RegExp(escapeRegExp(expectedZh));
    if (enRe.test(enBody) && !zhRe.test(zhBody)) {
      errors.push(`glossary mapping: source contains "${en}" but translation missing "${expectedZh}"`);
    }
  }
  return errors;
}

function splitFrontmatter(text) {
  if (!text.startsWith('---\n') && !text.startsWith('---\r\n')) {
    return { frontmatter: null, body: text };
  }
  const end = text.indexOf('\n---', 3);
  if (end === -1) return { frontmatter: null, body: text };
  const frontmatter = text.slice(4, end + 1); // YAML content only, excluding --- markers
  let bodyStart = end + 4;
  if (text[bodyStart] === '\r') bodyStart++;
  if (text[bodyStart] === '\n') bodyStart++;
  return { frontmatter, body: text.slice(bodyStart) };
}

function parseYamlFrontmatter(frontmatterText) {
  try {
    return yaml.load(frontmatterText.replace(/^---\n?/, '')) || {};
  } catch (err) {
    return { _parseError: err.message };
  }
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
  const inlineRe = /(?<!\\)\$([^$\n]+)(?<!\\)\$/g;
  while ((m = inlineRe.exec(text)) !== null) {
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

export async function buildSlugMapFromUpstream() {
  const sections = yaml.load(readFileSync(SECTIONS_YAML, 'utf8')) || { sections: [] };
  const map = new Map();
  for (const sec of sections.sections || []) {
    for (const slug of sec.entries || []) {
      map.set(slug, sec.dir);
    }
  }

  // Also scan actual upstream files for any slugs not in sections.yaml.
  try {
    const dirs = await readdir(UPSTREAM, { withFileTypes: true });
    for (const dir of dirs) {
      if (!dir.isDirectory() || dir.name === 'pages') continue;
      const files = await readdir(resolve(UPSTREAM, dir.name), { withFileTypes: true });
      for (const f of files) {
        if (!f.isFile() || !f.name.endsWith('.md')) continue;
        const slug = f.name.slice(0, -3);
        if (!map.has(slug)) map.set(slug, dir.name);
      }
    }
  } catch (err) {
    // upstream read failure is handled downstream.
  }
  return map;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
