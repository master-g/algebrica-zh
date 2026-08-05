import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { resolveUpstreamSourceDir } from './lib/upstream-source.mjs';

const translationSchema = z.object({
  status: z.enum(['current', 'stale']),
  source_hash: z.string(),
  translator: z.string(),
  updated: z.string(),
});

const articles = defineCollection({
  loader: glob({
    base: resolveUpstreamSourceDir(),
    pattern: ['*/*.md', '!pages/*.md'],
  }),
  schema: z.object({
    title: z.string(),
    source: z.string().url(),
    license: z.string(),
    tags: z.array(z.string()),
    translation: translationSchema.optional(),
  }),
});

const articlesZh = defineCollection({
  loader: glob({
    base: './content-zh',
    pattern: ['*/*.md'],
  }),
  schema: z.object({
    title: z.string(),
    title_en: z.string(),
    source: z.string().url(),
    license: z.string(),
    tags: z.array(z.string()),
    translation: translationSchema,
  }),
});

export const collections = { articles, 'articles-zh': articlesZh };
