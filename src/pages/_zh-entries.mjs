import { existsSync, readdirSync } from 'node:fs';
import { getCollection } from 'astro:content';

export async function getZhEntries() {
  if (!existsSync('content-zh')) return [];
  const files = readdirSync('content-zh', { recursive: true, withFileTypes: true });
  if (!files.some((f) => f.isFile() && f.name.endsWith('.md'))) return [];
  return getCollection('articles-zh');
}
