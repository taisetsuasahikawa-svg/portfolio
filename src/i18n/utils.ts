// src/i18n/utils.ts
import { ui } from './ui.ts';

export type Lang = 'ja' | 'en';   // 将来 'zh' | 'ko' などを追加するだけ

const defaultLang: Lang = 'ja';

export function getLangFromUrl(url: URL): Lang {
  const path = url.pathname;
  if (path.startsWith('/en/') || path === '/en') return 'en';
  return 'ja';
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let current: any = ui;

    for (const k of keys) {
      if (typeof current !== 'object' || current === null) {
        console.warn(`[i18n] 翻訳キーが見つかりません: ${key}`);
        return key;
      }
      current = current[k];
    }

    if (typeof current === 'object' && current !== null) {
      return (current as any)[lang] ?? (current as any).ja ?? key;
    }

    console.warn(`[i18n] 翻訳キーが不正です: ${key}`);
    return key;
  };
}

// === 言語切り替え用URL生成関数（シンプル版）===
export function getSwitchLangUrl(currentUrl: URL, targetLang: Lang): string {
  const pathname = currentUrl.pathname;
  const search = currentUrl.search;        // ?tab=1 などを保持

  // 現在の言語プレフィックスを除去
  let newPath = pathname
    .replace(/^\/en\/?/, '/')   // /en/ や /en を / に
    .replace(/^\/ja\/?/, '/');  // 念のためjaも除去

  if (newPath === '') newPath = '/';

  // 対象言語が英語なら /en を付ける
  if (targetLang === 'en') {
    newPath = newPath === '/' ? '/en' : `/en${newPath}`;
  }

  return `/portfolio${newPath}${search}`;
}