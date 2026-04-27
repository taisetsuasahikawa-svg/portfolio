// src/lib/GetCandleContents.ts
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui.ts';
import { getLangFromId } from '../i18n/utils.ts';

export type ProcessedCandle = {
  title: string;
  description: string;
  desc1: string;
  desc2: string;
  burnTime?: string;
  size?: string;
  images: any[];
  tags: string[];
  slug: string;
  lang: Lang;
  [key: string]: any;
};


/** 指定言語のキャンドルだけ取得 */
export async function getCandleEntries(lang: Lang) {
  const allEntries = await getCollection('candles');
  return allEntries.filter(entry => getLangFromId(entry.id) === lang);
}

/** エントリを整形 */
export function processCandleEntry(
  entry: CollectionEntry<'candles'>,
  lang: Lang
): ProcessedCandle {
  const data = entry.data;

  // slug取得（安全版）
  const slug = entry.id
    .split('/')
    .pop()
    ?.replace(/\.mdx?$/, '') || 'unknown';

  return {
    ...data,
    slug,
    lang,
  } as ProcessedCandle;
}

/** 全キャンドル */
export async function getAllProcessedCandles(lang: Lang) {
  const entries = await getCandleEntries(lang);
  return entries.map(entry => processCandleEntry(entry, lang));
}

/** major=trueのみ */
export async function getMajorCandles(lang: Lang) {
  const all = await getAllProcessedCandles(lang);
  return all.filter(c => c.major === true);
}