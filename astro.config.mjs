JavaScriptimport { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://taisetsuasahikawa-svg.github.io',   // ← あなたのGitHubユーザー名.github.io
  base: '/portfolio',                                // ← リポジトリ名が「portfolio」の場合（末尾に / は不要）
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  }
});