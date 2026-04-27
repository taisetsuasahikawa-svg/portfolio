// src/lib/GetCandleContents.ts
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui.ts';

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

/** 
 * フォルダから言語を判定（content/ja/ や content/en/ 対応）
 * entry.id の例: "ja/amethyst-geode" または "en/amethyst-geode"
 */
export function getLangFromId(id: string): Lang {
  if (!id) return 'ja';
  
  const parts = id.split('/');
  const firstPart = parts[0]?.toLowerCase();

  if (firstPart === 'en') return 'en';
  if (firstPart === 'ja') return 'ja';
  
  // 念のためフォルダ名に "ja" や "en" が含まれているかチェック
  if (id.includes('/ja/')) return 'ja';
  if (id.includes('/en/')) return 'en';

  return 'ja'; // デフォルト
}

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