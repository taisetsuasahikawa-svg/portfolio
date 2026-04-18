// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://taisetsuasahikawa-svg.github.io',
  base: '/portfolio/',
  trailingSlash: 'always',
  output: 'static',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: "ja"
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },

  
});