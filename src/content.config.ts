import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    status: z.enum(['In production', 'Prototype', 'Published package']),
    number: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    outcome: z.string(),
    draft: z.boolean().default(true),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    order: z.number(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, notes };
