// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://taisetsuasahikawa-svg.github.io',
  base: '/portfolio',   
  output: 'static',

  i18n: {
    defaultLocale: 'ja',                 // 日本語をデフォルト
    locales: ['ja', 'en'],               // サポート言語
    routing: {
      prefixDefaultLocale: false         // 日本語は /portfolio/ のまま、英語は /portfolio/en/
    }
  },
  fallback: {
      en: "ja", // 英語ページがない場合は日本語を表示
    },
  vite: {
    plugins: [tailwindcss()]
  },

  trailingSlash: 'never',
});