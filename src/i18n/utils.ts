import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

// 言語切り替えリンク生成用
export function getRelativePath(url: URL, targetLang: 'ja' | 'en'): string {
  const path = url.pathname.replace(/^\/portfolio(\/en)?/, '');
  if (targetLang === 'en') {
    return `/portfolio/en${path}`;
  }
  return `/portfolio${path}`;
}