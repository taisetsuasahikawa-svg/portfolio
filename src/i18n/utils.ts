// src/i18n/utils.ts
import { langDisplayNames, ui, supportedLangs, type Lang } from './ui.ts';

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

  if (langSegment && supportedLangs.includes(langSegment as Lang)) {
    return langSegment as Lang;
  }
  return 'ja';
}

// ==================== 指定した言語に直接切り替えるURLを生成 ====================
export function getSwitchLangUrl(currentUrl: URL, targetLang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // "/portfolio"

  // Astro.url.pathname から base を除去して「純粋なパス」を取得
  let pathname = currentUrl.pathname;

  // base（例: /portfolio）を取り除く
  if (base && base !== '/') {
    pathname = pathname.replace(new RegExp(`^${base}`), '') || '/';
  }

  // 既存の言語プレフィックス（ja以外）をすべて除去
  const nonDefaultLangs = supportedLangs.filter(l => l !== 'ja').join('|');
  if (nonDefaultLangs) {
    const langRegex = new RegExp(`^/(${nonDefaultLangs})/?`);
    pathname = pathname.replace(langRegex, '/');
  }

  // パスを正規化（常に / で始まるように）
  pathname = pathname.replace(/^\/+/, '/').replace(/\/$/, '') || '/';

  // 新しい言語のプレフィックスを付与
  let newPath: string;
  if (targetLang === 'ja') {
    newPath = pathname;                    // 日本語はプレフィックスなし
  } else {
    newPath = `/${targetLang}${pathname === '/' ? '' : pathname}`;
  }

  // base を再結合して返す
  const finalUrl = `${base}${newPath}`.replace(/\/+/g, '/');

  // trailingSlash: 'always' に合わせて末尾に / を付ける
  return finalUrl.endsWith('/') ? finalUrl : finalUrl + '/';
}

// ==================== 現在の言語の表示名を取得するヘルパー ====================
export function getLangDisplayName(lang: Lang, displayIn: 'ja' | 'native' = 'native'): string {
  return langDisplayNames[lang]?.[displayIn] || lang;
}