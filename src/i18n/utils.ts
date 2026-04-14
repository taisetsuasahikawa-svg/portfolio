// src/i18n/utils.ts
import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL): 'ja' | 'en' {
  const pathname = url.pathname;

  // base: '/portfolio' を考慮した安全な判定
  if (pathname.includes('/en/') || pathname.endsWith('/en')) {
    return 'en';
  }

  return 'ja'; // デフォルトは常に日本語
}

export function useTranslations(lang: 'ja' | 'en') {
  return function t(key: keyof typeof ui['ja']) {
    // 安全に翻訳を取得（見つからなければキー名を返す）
    return ui[lang]?.[key] ?? ui[defaultLang]?.[key] ?? key;
  };
}

export function getRelativePath(currentUrl: URL, targetLang: 'ja' | 'en'): string {
  const base = '/portfolio';
  if (targetLang === 'en') {
    return `${base}/en`;
  }
  return base;
}