// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://taisetsuasahikawa-svg.github.io',
  base: '/portfolio/',
  trailingSlash: 'always',
  output: 'static',
  integrations: [mdx()],

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