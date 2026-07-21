import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import yaml from 'js-yaml';

const SECTIONS_YAML = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'sections.yaml');

/**
 * Build a slug -> section map from Astro glob entries.
 * Entry ids are expected to be "section/slug" (e.g. "integrals/definite-integrals").
 * Throws on slug collisions and enforces the 234-entry build assertion.
 */
export function buildSlugMap(entries, { silent = false } = {}) {
  if (!Array.isArray(entries)) {
    throw new TypeError('buildSlugMap expects an array of entries');
  }

  const map = new Map();
  const collisions = new Map();

  for (const entry of entries) {
    const id = entry?.id;
    if (typeof id !== 'string') {
      throw new TypeError(`entry missing id: ${JSON.stringify(entry)}`);
    }
    const [section, slug] = id.split('/');
    if (!section || !slug) {
      throw new TypeError(`unexpected entry id: ${id}`);
    }

    if (map.has(slug)) {
      if (!collisions.has(slug)) collisions.set(slug, [map.get(slug)]);
      collisions.get(slug).push(section);
    } else {
      map.set(slug, section);
    }
  }

  if (collisions.size > 0) {
    const [slug, sections] = collisions.entries().next().value;
    throw new Error(`slug collision: ${slug} (sections: ${[...new Set(sections)].join(', ')})`);
  }

  if (entries.length === 0) {
    throw new Error('articles collection is empty');
  }
  if (entries.length !== 234) {
    throw new Error(`expected 234 articles, got ${entries.length}`);
  }

  if (!silent) {
    logDiff(map);
  }

  return map;
}

function logDiff(map) {
  let sections;
  try {
    sections = yaml.load(readFileSync(SECTIONS_YAML, 'utf8'));
  } catch (err) {
    console.warn(`[slug-map] could not read sections.yaml: ${err.message}`);
    return;
  }

  const knownAbsent = new Set(sections.known_absent || []);
  const yamlSlugs = new Set();
  for (const sec of sections.sections || []) {
    for (const slug of sec.entries || []) {
      yamlSlugs.add(slug);
    }
  }

  const articleSlugs = new Set(map.keys());
  const missing = [...yamlSlugs].filter((s) => !articleSlugs.has(s) && !knownAbsent.has(s));
  const extra = [...articleSlugs].filter((s) => !yamlSlugs.has(s));

  console.log(
    `[slug-map] articles: ${articleSlugs.size}; sections.yaml entries: ${yamlSlugs.size}; missing: ${missing.length}; extra: ${extra.length}`,
  );
  if (missing.length) {
    console.warn(`[slug-map] missing from collection: ${missing.join(', ')}`);
  }
  if (extra.length) {
    console.warn(`[slug-map] not in sections.yaml: ${extra.join(', ')}`);
  }
}

/** Derive section directories from a slug->section map. */
export function getSectionDirs(slugMap) {
  return new Set(slugMap.values());
}
