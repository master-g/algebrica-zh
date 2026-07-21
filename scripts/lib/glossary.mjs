import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import yaml from 'js-yaml';

const GLOSSARY_PATH = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', 'glossary.yaml');

let cached = null;

export function loadGlossary() {
  if (cached) return cached;
  const raw = readFileSync(GLOSSARY_PATH, 'utf8');
  const data = yaml.load(raw) || { terms: [], do_not_translate: [] };
  cached = data;
  return data;
}

export function glossaryPromptSection() {
  const { terms, do_not_translate } = loadGlossary();
  const lines = [];
  lines.push('术语表（固定译法，不得改动）：');
  for (const t of terms) {
    lines.push(`  ${t.en} → ${t.zh}${t.note ? `（${t.note}）` : ''}`);
  }
  if (do_not_translate?.length) {
    lines.push('以下专有名词保留原文，不译：');
    lines.push(`  ${do_not_translate.join('、')}`);
  }
  return lines.join('\n');
}

/**
 * Return fixed-mapping checks: array of {en, zh} pairs to validate word-boundary
 * presence of the target translation in the Chinese text.
 */
export function fixedMappingChecks() {
  const { terms } = loadGlossary();
  return terms.map((t) => ({ en: t.en, zh: t.zh }));
}
