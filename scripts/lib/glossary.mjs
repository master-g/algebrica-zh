import { loadGlossary } from '../../src/lib/glossary.mjs';

export { loadGlossary };

export function glossaryPromptSection(sourceText = null) {
  const { terms, do_not_translate } = loadGlossary();
  const sourceLower = sourceText?.toLowerCase() ?? null;
  const relevantTerms = sourceLower
    ? terms.filter((term) => sourceLower.includes(term.en.toLowerCase()))
    : terms;
  const relevantNames = sourceLower
    ? do_not_translate?.filter((name) => sourceLower.includes(name.toLowerCase()))
    : do_not_translate;
  const lines = [];
  lines.push('术语表（本文命中项，固定译法，不得改动）：');
  for (const t of relevantTerms) {
    lines.push(`  ${t.en} → ${t.zh}${t.note ? `（${t.note}）` : ''}`);
  }
  if (relevantNames?.length) {
    lines.push('以下专有名词保留原文，不译：');
    lines.push(`  ${relevantNames.join('、')}`);
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
