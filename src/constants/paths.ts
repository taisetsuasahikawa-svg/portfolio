// src/constants/paths.ts
const BASE = import.meta.env.BASE_URL;
// ==================== 画像パス ====================
export const IMAGE_PATHS = {
  logo: `${BASE}/images/icons/logo_tcc.png`,
  logoMinne: `${BASE}/images/icons/logo_minne.png`,
  logoEtsy: `${BASE}/images/icons/logo_Etsy.png`,
  logoX: `${BASE}/images/icons/logo_x_black.png`,
  logoInstagram: `${BASE}/images/icons/logo_Instagram.png`,
  mailIcon: `${BASE}/images/icons/mail.png`,
  languageIcon: `${BASE}/images/icons/language_selection.png`,

  hero: 'https://picsum.photos/id/1015/2000/1200',

  // src/data/candles.tsのidと同じ名前にすること
  candles: {
    "geode": `${BASE}/images/candles/geode_candle_bpy.png`,
    "mineral": `${BASE}/images/candles/rock_candles_allcolors.jpg`,
    "crystal": `${BASE}/images/candles/chrystal_candle_b.jpg`,
    "mini-geode": `${BASE}/images/candles/mini_geode_candle_allcolors.jpg`,
  } as const,

  // src/data/apps.tsのidと同じ名前にすること
  apps: {
    "smartstock": `${BASE}/images/apps/stockly-screenshot.png`,
    "candle-visualizer": `${BASE}/images/apps/candle-visualizer.png`,
    "scentcraft": `${BASE}/images/apps/scentcraft.png`,
    "burn-simulator": `${BASE}/images/apps/burn-simulator.png`,
  } as const,

  care: {
    safety1: ``,
    safety2: ``,
    safety3: ``,
    safety4: ``,
    safety5: ``,
    safety6: ``,
    safety7: ``,
    safety8: ``,
    safety9: ``,
  } as const,
} as const;

// ==================== 連絡先情報 ====================
export const CONTACT_INFO = {
  email: 'taisetsu.asahikawa@gmail.com',
  minne: 'https://minne.com/@tcc2024/',
  etsy: 'https://www.etsy.com/shop/MineralArtCandlesJP/',
  x: 'https://x.com/TaisetsuCC/',
  instagram: 'https://www.instagram.com/taisetsucc/',
  github: 'https://github.com/taisetsuasahikawa-svg/',
} as const;

export type CandleImageKey = keyof typeof IMAGE_PATHS.candles;
export type AppImageKey = keyof typeof IMAGE_PATHS.apps;