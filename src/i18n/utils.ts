// src/i18n/utils.ts
import { ui, supportedLangs, type Lang } from './ui.ts';

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let current: any = ui;
    for (const k of keys) current = current?.[k];
    return current?.[lang] ?? current?.ja ?? key;
  };
}

// ==================== URLから現在の言語を取得（Layout.astro用） ====================
export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let pathname = url.pathname.replace(base, '');
  pathname = pathname.replace(/^\/+/, '').replace(/\/$/, '');

  const segments = pathname.split('/');
  const langSegment = segments[0];

  // supportedLangs に含まれる言語コードなら返す（jaは省略されるのでデフォルト）
  if (langSegment && supportedLangs.includes(langSegment as Lang)) {
    return langSegment as Lang;
  }
  return 'ja';
}

// ==================== 完全自動言語切り替え ====================
export function getSwitchLangUrl(currentUrl: URL, currentLang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let pathname = currentUrl.pathname;

  // 現在の言語コードを除去
  pathname = pathname
    .replace(/^\/portfolio\/(en|ko|zh|fr|de)\//, '/portfolio/')
    .replace(/\/$/, '');

  if (pathname === '' || pathname === '/portfolio') pathname = '/portfolio';

  // 次の言語を自動で決定（循環する）
  const currentIndex = supportedLangs.indexOf(currentLang);
  const nextIndex = (currentIndex + 1) % supportedLangs.length;
  const nextLang = supportedLangs[nextIndex];

  let newPath: string;
  if (nextLang === 'ja') {
    newPath = '/portfolio/';
  } else {
    newPath = `/portfolio/${nextLang}/`;
  }

  let fullUrl = (base + newPath.replace(/^\/portfolio/, '')).replace(/\/+/g, '/');
  if (!fullUrl.endsWith('/')) fullUrl += '/';

  return fullUrl + currentUrl.search;
}