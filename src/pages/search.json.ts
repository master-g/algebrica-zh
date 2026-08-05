import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { buildTranslationIndex } from '../lib/translation-index.mjs';
import { getSections } from '../lib/sections.mjs';
import { loadGlossary } from '../lib/glossary.mjs';
import { getZhEntries } from './_zh-entries.mjs';
import { withSiteBase } from '../lib/site-path.mjs';

interface GlossaryTerm {
  en: string;
  zh: string;
  note?: string;
}

interface Glossary {
  terms: GlossaryTerm[];
  do_not_translate: string[];
}

interface SearchEntry {
  title_zh: string | null;
  title_en: string;
  tags: string[];
  keywords_zh: string[];
  url: string;
  section: string;
}

function normalizeTokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/-/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function termMatches(source: string, term: string): boolean {
  const tokens = normalizeTokens(source);
  const termLower = term.toLowerCase();
  const termWords = termLower.split(/\s+/).filter(Boolean);

  if (termWords.length === 0) return false;
  if (termWords.length === 1) {
    return tokens.some(
      (t) => t === termLower || t === `${termLower}s` || termLower === `${t}s`
    );
  }

  const text = tokens.join(' ');
  const phrase = termWords.join(' ');
  return text.includes(phrase);
}

function buildKeywords(
  titleEn: string,
  tags: string[],
  terms: GlossaryTerm[]
): string[] {
  const sources = [titleEn, ...tags];
  const matched = new Set<string>();
  for (const { en, zh } of terms) {
    if (sources.some((s) => termMatches(s, en))) {
      matched.add(zh);
    }
  }
  return Array.from(matched);
}

export const GET: APIRoute = async () => {
  const base = import.meta.env.BASE_URL;
  const glossary = loadGlossary() as Glossary;
  const articles = await getCollection('articles');
  const zhEntries = await getZhEntries();
  const rows = buildTranslationIndex(articles, zhEntries);
  const sections = getSections();

  const entries: SearchEntry[] = rows.map((row) => ({
    title_zh: row.zh?.data.title ?? null,
    title_en: row.en.data.title,
    tags: row.en.data.tags,
    keywords_zh: buildKeywords(row.en.data.title, row.en.data.tags, glossary.terms),
    url: withSiteBase(`/${row.slug}/`, base),
    section: row.section,
  }));

  for (const section of sections) {
    entries.push({
      title_zh: section.name_zh,
      title_en: section.name_en,
      tags: [],
      keywords_zh: [],
      url: withSiteBase(`/category/${section.dir}/`, base),
      section: section.dir,
    });
  }

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
