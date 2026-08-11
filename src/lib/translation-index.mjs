import { createHash } from 'node:crypto';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { resolveUpstreamSourceDir } from './upstream-source.mjs';

/**
 * Shared hash function used by the translation index and U6 status scripts.
 * Returns a sha256 hex digest of the raw file content.
 */
export function hashSource(raw) {
  return createHash('sha256').update(raw).digest('hex');
}

const DISPLAY_STATES = {
  current: {
    language: '简体中文',
    label: '当前译文',
    notice: null,
  },
  stale: {
    language: '简体中文',
    label: '待同步译文',
    notice: '本文译文对应较早的英文版本，正在等待同步。',
  },
  missing: {
    language: '英文原文',
    label: '待翻译',
    notice: '本文尚未翻译，以下为英文原文。',
  },
};

export function translationDisplayState(status) {
  const state = DISPLAY_STATES[status];
  if (!state) throw new TypeError(`unknown translation status: ${status}`);
  return state;
}

/**
 * Build the single source-of-truth join view for the site.
 *
 * @param {Array} enEntries - Astro articles collection entries (id like "section/slug").
 * @param {Array} zhEntries - Astro articles-zh collection entries.
 * @param {Object} options
 * @param {string} options.enBase - Directory where the EN markdown source lives.
 * @returns {Array<>} One row per EN article: { slug, section, en, zh, status }.
 */
export function buildTranslationIndex(enEntries, zhEntries, { enBase = resolveUpstreamSourceDir() } = {}) {
  const zhBySlug = new Map();
  for (const entry of zhEntries || []) {
    const slug = entry?.id?.split('/')?.[1];
    if (slug) zhBySlug.set(slug, entry);
  }

  const rows = [];
  for (const en of enEntries || []) {
    const id = en?.id;
    const [section, slug] = typeof id === 'string' ? id.split('/') : [];
    if (!section || !slug) {
      throw new TypeError(`unexpected EN entry id: ${id}`);
    }

    const zh = zhBySlug.get(slug) || null;
    let status = 'missing';

    if (zh) {
      const sourcePath = resolve(enBase, `${id}.md`);
      if (!existsSync(sourcePath)) {
        throw new Error(`source missing for EN entry ${id}`);
      }
      const raw = readFileSync(sourcePath, 'utf8');
      const expected = hashSource(raw);
      const actual = zh.data?.translation?.source_hash;
      status = actual === expected ? 'current' : 'stale';
    }

    rows.push({ slug, section, en, zh, status });
  }

  rows.sort((a, b) => a.slug.localeCompare(b.slug));
  return rows;
}
