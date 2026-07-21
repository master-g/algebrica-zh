/**
 * Chinese copywriting lint.
 *
 * Auto-fixes:
 *  - CJK ↔ latin/digit spacing (盘古空格)
 *
 * Reports (not auto-fixed):
 *  - half-width punctuation where full-width is expected
 *  - straight quotes instead of 「」
 *  - full-width digits
 */

const CJK_CHAR = '[\\u4e00-\\u9fff\\u3040-\\u309f\\u30a0-\\u30ff]';
const LATIN_DIGIT = '[A-Za-z0-9]';

export function lintChineseCopywriting(text) {
  // Blank out math spans and URLs with spaces so that line indices stay valid
  // in the original text while we lint only the prose.
  const blanked = text
    .replace(/\$\$[\s\S]*?\$\$/g, (m) => ' '.repeat(m.length))
    .replace(/\$[^$\n]+\$/g, (m) => ' '.repeat(m.length))
    .replace(/https?:\/\/[^\s)]+/g, (m) => ' '.repeat(m.length))
    .replace(/!?\[[^\]]*\]\(([^)]+)\)/g, (m, url) => {
      const idx = m.indexOf('(' + url);
      const before = m.slice(0, idx + 1);
      const after = m.slice(idx + 1 + url.length);
      return before + ' '.repeat(url.length) + after;
    });

  const fixed = fixSpacing(blanked);
  const reports = [];

  // Half-width punctuation commonly produced by translators.
  const halfWidthPunct = /(?<![\w\.])([,.;:!?](?=\s|$|[一-鿿]))/g;
  let m;
  while ((m = halfWidthPunct.exec(fixed)) !== null) {
    // Skip decimals like 3.14 and ellipses ...
    if (/\d\.\d/.test(fixed.slice(Math.max(0, m.index - 1), m.index + 3))) continue;
    // Skip initials like "A. Carreira"
    if (m[0] === '.' && /[A-Za-zÁÉÍÓÚáéíóúÄÖÜäöü]/.test(fixed[m.index - 1] || '') && fixed[m.index + 1] === ' ') continue;
    reports.push({ line: lineOf(text, m.index), message: `半角标点：${m[0]}` });
  }

  // Straight quotes in Chinese text.
  const straightQuotes = /"([^"]+)"|'([^']+)'/g;
  while ((m = straightQuotes.exec(fixed)) !== null) {
    reports.push({ line: lineOf(text, m.index), message: '建议改用「」引号' });
  }

  // Full-width digits.
  const fullWidthDigits = /[０-９]/g;
  while ((m = fullWidthDigits.exec(fixed)) !== null) {
    reports.push({ line: lineOf(text, m.index), message: `全角数字：${m[0]}` });
  }

  // Apply spacing fix to original text, not the blanked version, so URLs/math stay intact.
  return { text: fixSpacing(text), reports };
}

function fixSpacing(text) {
  // CJK followed by latin/digit
  const cjkBefore = new RegExp(`(${CJK_CHAR})(${LATIN_DIGIT})`, 'g');
  // latin/digit followed by CJK
  const cjkAfter = new RegExp(`(${LATIN_DIGIT})(${CJK_CHAR})`, 'g');
  return text
    .replace(cjkBefore, '$1 $2')
    .replace(cjkAfter, '$1 $2')
    .replace(/([^\s])\n/g, '$1\n') // keep line breaks
    .replace(/\n{3,}/g, '\n\n'); // collapse excessive blank lines
}

function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index; i++) {
    if (text[i] === '\n') line++;
  }
  return line;
}
