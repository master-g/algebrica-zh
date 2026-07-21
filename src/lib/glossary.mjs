import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';

const GLOSSARY_PATH = join(process.cwd(), 'glossary.yaml');

let cached = null;

export function loadGlossary() {
  if (cached) return cached;
  const raw = readFileSync(GLOSSARY_PATH, 'utf8');
  const data = yaml.load(raw) || { terms: [], do_not_translate: [] };
  cached = data;
  return data;
}
