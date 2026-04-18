// src/constants/paths.ts
const BASE = import.meta.env.BASE_URL;

export const IMAGE_PATHS = {
  logo: `${BASE}images/icons/logo_tcc.png`,
  logoMinne: `${BASE}images/icons/logo_minne.png`,
  logoEtsy: `${BASE}images/icons/logo_Etsy.png`,
  logoX: `${BASE}images/icons/logo_x_black.png`,
  logoInstagram: `${BASE}images/icons/logo_Instagram.png`,
  mailIcon: `${BASE}images/icons/mail.png`,

  hero: 'https://picsum.photos/id/1015/2000/1200',

  // src/data/candles.tsのidと同じ名前にすること
  candles: {
    "geode": `${BASE}images/candles/geode_candle_bpy.png`,
    "mineral": `${BASE}images/candles/rock_candles_allcolors.jpg`,
    "crystal": `${BASE}images/candles/chrystal_candle_b.jpg`,
    "mini-geode": `${BASE}images/candles/mini_geode_candle_allcolors.jpg`,
  } as const,

  // src/data/apps.tsのidと同じ名前にすること
  apps: {
    "smartstock": `${BASE}images/apps/stockly-screenshot.png`,
    "candle-visualizer": `${BASE}images/apps/candle-visualizer.png`,
    "scentcraft": `${BASE}images/apps/scentcraft.png`,
    "burn-simulator": `${BASE}images/apps/burn-simulator.png`,
  } as const,
} as const;

export type CandleImageKey = keyof typeof IMAGE_PATHS.candles;
export type AppImageKey = keyof typeof IMAGE_PATHS.apps;