import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';

const SECTIONS_YAML = join(process.cwd(), 'sections.yaml');

let cache = null;

export function getSections() {
  if (cache) return cache;
  const data = yaml.load(readFileSync(SECTIONS_YAML, 'utf8'));
  cache = (data.sections || []).slice().sort((a, b) => a.order - b.order);
  return cache;
}

export function getSection(dir) {
  return getSections().find((s) => s.dir === dir) || null;
}

export function getSectionsMap() {
  return new Map(getSections().map((s) => [s.dir, s]));
}

/**
 * Return the articles belonging to a section in deterministic index order.
 *
 * sections.yaml preserves the upstream editorial order, but the upstream
 * collection can gain an article before the manifest is refreshed. Keep the
 * configured entries first and append any collection-only entries instead of
 * silently dropping them from the navigation.
 */
export function orderSectionRows(section, rows = []) {
  const bySlug = new Map(
    rows
      .filter((row) => row?.section === section?.dir && row?.slug)
      .map((row) => [row.slug, row]),
  );
  const ordered = [];

  for (const slug of section?.entries || []) {
    const row = bySlug.get(slug);
    if (!row) continue;
    ordered.push(row);
    bySlug.delete(slug);
  }

  return [
    ...ordered,
    ...[...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug)),
  ];
}
