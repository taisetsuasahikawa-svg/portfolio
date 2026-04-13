import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  site: 'https://taisetsuasahikawa-svg.github.io',   // 例: https://tcc2024.github.io
  base: '/portfolio',                                 // 例: /taisetsu-crafters （ユーザー名.github.io リポジトリの場合は '/' または省略可）
  output: 'static',                                     // 静的サイトとして必須
  vite: {
    plugins: [tailwindcss()]
  }
});