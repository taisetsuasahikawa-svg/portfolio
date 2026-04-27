// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const candles = defineCollection({
  loader: glob({
    base: './src/content/candles',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    major: z.boolean().default(false),

    title: z.string(),
    description: z.string(),
    desc1: z.string().optional(),
    desc2: z.string().optional(),

    tags: z.array(z.string()).default([]),
    burnTime: z.string().optional(),
    size: z.string().optional(),

    images: z.array(
      z.object({
        path: z.string(),
        alt: z.string().optional(),        // 言語ごとに1つの文字列のみ
      })
    ).default([]),
  }),
});

export const collections = { candles };