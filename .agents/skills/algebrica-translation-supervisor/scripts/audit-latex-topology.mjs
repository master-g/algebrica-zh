#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = resolve(SKILL_DIR, '..', '..', '..');
const CONTENT_ZH = resolve(ROOT, 'content-zh');
const UPSTREAM = resolve(ROOT, '..', 'algebrica');

function usage() {
  console.error('Usage: node audit-latex-topology.mjs <section/slug> [--json]');
  console.error('       node audit-latex-topology.mjs --all [--json]');
}

function lineAt(text, offset) {
  return text.slice(0, offset).split('\n').length;
}

function extractMathSpans(text) {
  const spans = [];
  const displayPattern = /(?<!\\)\$\$([\s\S]*?)(?<!\\)\$\$/g;
  let match;
  while ((match = displayPattern.exec(text)) !== null) {
    spans.push({
      kind: 'display',
      content: match[1].trim(),
      line: lineAt(text, match.index),
      start: match.index,
      length: match[0].length,
    });
  }

  const masked = [...text];
  for (const span of spans) {
    masked.fill(' ', span.start, span.start + span.length);
  }
  const inlineText = masked.join('');
  const inlinePattern = /(?<!\\)\$([^$\n]+)(?<!\\)\$/g;
  while ((match = inlinePattern.exec(inlineText)) !== null) {
    spans.push({
      kind: 'inline',
      content: match[1].trim(),
      line: lineAt(text, match.index),
      start: match.index,
      length: match[0].length,
    });
  }

  return spans.sort((left, right) => left.start - right.start);
}

function topology(content) {
  const result = {
    rowBreaks: 0,
    escapedBraces: 0,
    otherDoubleBackslashes: 0,
    literalDoubleSlashes: (content.match(/\/\//g) || []).length,
    singleTrailingBackslashes: 0,
    environments: [...content.matchAll(/\\(begin|end)\{([^{}]+)\}/g)]
      .map((match) => `${match[1]}:${match[2]}`),
  };

  for (let index = 0; index < content.length - 1; index++) {
    if (content[index] !== '\\' || content[index + 1] !== '\\') continue;
    const next = content[index + 2] || '';
    if (next === '{' || next === '}') {
      result.escapedBraces++;
    } else if (next === '[' || /\s/.test(next)) {
      result.rowBreaks++;
    } else {
      result.otherDoubleBackslashes++;
    }
    index++;
  }

  for (const line of content.split('\n')) {
    if (/(?<!\\)\\[ \t]*$/.test(line)) result.singleTrailingBackslashes++;
  }

  return result;
}

function compareFile(sourcePath, translatedPath) {
  const sourceText = readFileSync(sourcePath, 'utf8');
  const translatedText = readFileSync(translatedPath, 'utf8');
  const sourceSpans = extractMathSpans(sourceText);
  const translatedSpans = extractMathSpans(translatedText);
  const issues = [];

  const sourceDisplay = sourceSpans.filter((span) => span.kind === 'display');
  const translatedDisplay = translatedSpans.filter((span) => span.kind === 'display');
  if (sourceSpans.length !== translatedSpans.length) {
    issues.push(
      `math span count differs: source=${sourceSpans.length}, translation=${translatedSpans.length}`,
    );
  }
  if (sourceDisplay.length !== translatedDisplay.length) {
    issues.push(
      `display math count differs: source=${sourceDisplay.length}, translation=${translatedDisplay.length}`,
    );
  }

  const comparableDisplayCount = sourceDisplay.length === translatedDisplay.length
    ? sourceDisplay.length
    : 0;
  for (let index = 0; index < comparableDisplayCount; index++) {
    const source = sourceDisplay[index];
    const translated = translatedDisplay[index];
    const sourceTopology = topology(source.content);
    const translatedTopology = topology(translated.content);
    for (const key of [
      'rowBreaks',
      'escapedBraces',
      'otherDoubleBackslashes',
      'literalDoubleSlashes',
      'singleTrailingBackslashes',
    ]) {
      if (sourceTopology[key] !== translatedTopology[key]) {
        issues.push(
          `display span ${index + 1} ${key} differs: ` +
          `source line ${source.line}=${sourceTopology[key]}, ` +
          `translation line ${translated.line}=${translatedTopology[key]}`,
        );
      }
    }
    if (sourceTopology.environments.join(',') !== translatedTopology.environments.join(',')) {
      issues.push(
        `display span ${index + 1} environments differ: source line ${source.line}=` +
        `${sourceTopology.environments.join('/') || 'none'}, translation line ` +
        `${translated.line}=${translatedTopology.environments.join('/') || 'none'}`,
      );
    }
  }

  const aggregate = (spans) => spans.reduce(
    (totals, span) => {
      const current = topology(span.content);
      totals.rowBreaks += current.rowBreaks;
      totals.escapedBraces += current.escapedBraces;
      totals.otherDoubleBackslashes += current.otherDoubleBackslashes;
      totals.literalDoubleSlashes += current.literalDoubleSlashes;
      totals.singleTrailingBackslashes += current.singleTrailingBackslashes;
      totals.environments.push(...current.environments);
      return totals;
    },
    {
      spans: spans.length,
      rowBreaks: 0,
      escapedBraces: 0,
      otherDoubleBackslashes: 0,
      literalDoubleSlashes: 0,
      singleTrailingBackslashes: 0,
      environments: [],
    },
  );

  const sourceAggregate = aggregate(sourceSpans);
  const translatedAggregate = aggregate(translatedSpans);
  for (const key of [
    'rowBreaks',
    'escapedBraces',
    'otherDoubleBackslashes',
    'literalDoubleSlashes',
    'singleTrailingBackslashes',
  ]) {
    if (sourceAggregate[key] !== translatedAggregate[key]) {
      issues.push(
        `aggregate ${key} differs: source=${sourceAggregate[key]}, ` +
        `translation=${translatedAggregate[key]}`,
      );
    }
  }
  if (sourceAggregate.environments.join(',') !== translatedAggregate.environments.join(',')) {
    issues.push('aggregate environment sequence differs');
  }

  return { source: sourceAggregate, translation: translatedAggregate, issues };
}

function walkMarkdown(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkMarkdown(path));
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path);
  }
  return files;
}

function targetPaths(target) {
  if (!/^[^/]+\/[^/]+$/.test(target)) {
    throw new Error(`target must be section/slug, got ${target}`);
  }
  const translatedPath = resolve(CONTENT_ZH, `${target}.md`);
  const sourcePath = resolve(UPSTREAM, `${target}.md`);
  return { target, translatedPath, sourcePath };
}

function main() {
  const args = process.argv.slice(2);
  const json = args.includes('--json');
  const all = args.includes('--all');
  const target = args.find((arg) => !arg.startsWith('--'));

  if ((!all && !target) || (all && target)) {
    usage();
    process.exit(2);
  }

  const targets = all
    ? walkMarkdown(CONTENT_ZH).map((translatedPath) => {
        const relativePath = relative(CONTENT_ZH, translatedPath);
        return {
          target: relativePath.replace(/\.md$/, ''),
          translatedPath,
          sourcePath: resolve(UPSTREAM, relativePath),
        };
      })
    : [targetPaths(target)];

  const results = [];
  for (const current of targets) {
    if (!existsSync(current.sourcePath)) {
      results.push({ target: current.target, issues: ['upstream source is missing'] });
      continue;
    }
    if (!existsSync(current.translatedPath)) {
      results.push({ target: current.target, issues: ['translation is missing'] });
      continue;
    }
    results.push({
      target: current.target,
      ...compareFile(current.sourcePath, current.translatedPath),
    });
  }

  const failures = results.filter((result) => result.issues.length > 0);
  if (json) {
    console.log(JSON.stringify({
      checked: results.length,
      passed: results.length - failures.length,
      failed: failures.length,
      results,
    }, null, 2));
  } else {
    for (const result of results) {
      if (result.issues.length === 0) {
        console.log(
          `PASS ${result.target}: ${result.translation.spans} math spans, ` +
          `${result.translation.rowBreaks} row breaks, ` +
          `${result.translation.escapedBraces} escaped braces, ` +
          `${result.translation.literalDoubleSlashes} literal // tokens`,
        );
      } else {
        console.log(`FAIL ${result.target}`);
        for (const issue of result.issues) console.log(`  ${issue}`);
      }
    }
    console.log(
      `Summary: ${results.length - failures.length} passed, ${failures.length} failed`,
    );
  }

  process.exitCode = failures.length > 0 ? 1 : 0;
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(2);
}
