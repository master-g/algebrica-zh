import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';

const EXCLUDED_ARTICLE_DIRECTORIES = new Set(['category', 'pages']);
const TRACKED_PAGES = ['bibliography', 'editorial-process'];

function compareTargets(left, right) {
  return `${left.section}/${left.slug}`.localeCompare(`${right.section}/${right.slug}`);
}

function targetKey({ section, slug }) {
  return `${section}/${slug}`;
}

export function listArticleTargets(sourceRoot) {
  if (!existsSync(sourceRoot)) return [];

  const targets = [];
  for (const directory of readdirSync(sourceRoot, { withFileTypes: true })) {
    if (
      !directory.isDirectory()
      || directory.name.startsWith('.')
      || EXCLUDED_ARTICLE_DIRECTORIES.has(directory.name)
    ) {
      continue;
    }

    const directoryPath = join(sourceRoot, directory.name);
    for (const file of readdirSync(directoryPath, { withFileTypes: true })) {
      if (!file.isFile() || !file.name.endsWith('.md')) continue;
      targets.push({
        section: directory.name,
        slug: file.name.slice(0, -3),
      });
    }
  }

  return targets.sort(compareTargets);
}

export function listConfiguredTargets(sectionsFile) {
  const data = yaml.load(readFileSync(sectionsFile, 'utf8')) || { sections: [] };
  const targets = [];
  for (const section of data.sections || []) {
    for (const slug of section.entries || []) {
      targets.push({ section: section.dir, slug });
    }
  }
  return targets.sort(compareTargets);
}

export function buildTranslationInventory({ sourceRoot, sectionsFile }) {
  const sourceTargets = listArticleTargets(sourceRoot);
  const sourceKeys = new Set(sourceTargets.map(targetKey));
  const sourceAbsentTargets = listConfiguredTargets(sectionsFile)
    .filter((target) => !sourceKeys.has(targetKey(target)));

  for (const slug of TRACKED_PAGES) {
    const target = { section: 'pages', slug };
    if (existsSync(join(sourceRoot, 'pages', `${slug}.md`))) {
      sourceTargets.push(target);
    } else {
      sourceAbsentTargets.push(target);
    }
  }

  return {
    sourceTargets: sourceTargets.sort(compareTargets),
    sourceAbsentTargets: sourceAbsentTargets.sort(compareTargets),
  };
}
