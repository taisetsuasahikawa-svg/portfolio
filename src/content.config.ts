// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const candles = defineCollection({
  loader: glob({
    base: './src/content/candles',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    major: z.boolean().default(false),
    title: z.object({
      ja: z.string(),
      en: z.string(),
    }),
    description: z.object({
      ja: z.string(),
      en: z.string(),
    }),
    tags: z.array(z.string()).default([]),
    burnTime: z.object({ ja: z.string(), en: z.string() }).optional(),
    size: z.object({ ja: z.string(), en: z.string() }).optional(),

    // ★★★ ここを修正：オブジェクトの配列として定義 ★★★
    images: z.array(
      z.object({
        path: z.string(),
        alt: z.object({
          ja: z.string(),
          en: z.string(),
        }).optional(),   // altは任意でもOKに
      })
    ).default([]),
  }),
});

export const collections = { candles };