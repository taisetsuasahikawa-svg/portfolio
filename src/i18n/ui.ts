// src/i18n/ui.ts
export const supportedLangs = ['ja', 'en'] as const;   // ← ここに 'zh', 'fr' などを追加
export type Lang = typeof supportedLangs[number];
export const ui = {
  // ==================== ページ全体共通 ====================
  site: {
    title: {
      ja: '大雪クラフターズキャラバン',
      en: "Taisetsu Crafter's Caravan"
    },
    subtitle: {
      ja: 'NATURE × TECHNOLOGY × CANDLE',
      en: 'NATURE × TECHNOLOGY × CANDLE'
    }
  },

  // ==================== ナビゲーション ====================
  nav: {
    home: {
      ja: 'HOME',
      en: 'HOME',
    },
    candles: {
      ja: 'キャンドル',
      en: 'Candles',
    },
    apps: {
      ja: 'アプリ',
      en: 'Apps',
    },
    materials: {
      ja: 'ハンドメイド資材',
      en: 'Materials',
    },
    contact: {
      ja: 'お問い合わせ',
      en: 'Contact',
    },
  },

  // ==================== 言語切り替え ====================
  langSwitch: {
    ja: 'English',
    en: '日本語',
  },

  // ==================== ヒーローセクション ====================
  hero: {
    title: {
      ja: '自然の美しさを\nキャンドルに',
      en: "Nature's Beauty\nin Candles",
    },
    subtitle: {
      ja: 'NATURE × TECHNOLOGY × CANDLE',
      en: 'NATURE × TECHNOLOGY × CANDLE',
    },
  },

  // ==================== キャンドルセクション ====================
  candle: {
    section: {
      title: {
        ja: 'キャンドル作品一覧',
        en: 'Candle Collection',
      },
      desc: {
        ja: '自然の鉱物をイメージしたオリジナルキャンドル',
        en: 'Original candles inspired by natural minerals and crystals',
      },
    },
    careTitle: {
      ja: 'キャンドルをご購入いただいた皆様へ',
      en: 'Care & Safety Instructions',
    },
    searchPlaceholder: {
      ja: '作品名や説明で検索...',
      en: 'Search by name or description...',
    },
  },

  // ==================== アプリセクション ====================
  app: {
    section: {
      title: {
      ja: 'アプリ開発',
      en: 'App Development',
      },
    },
  },

  // ==================== ハンドメイド資材セクション ====================
  materials: {
    section: {
      title: {
        ja: 'ハンドメイド資材販売',
        en: 'Handmade Materials Sale',
      },
      description: {
        ja: 'ジェルワックスや顔料など、少量からご購入いただけます。',
        en: 'Gel wax, pigments, and other handmade materials available in small quantities.',
      },
    },
    shopTitle: {
      ja: 'SHOP',
      en: 'SHOP',
    },
    shop: {
      mercari: {
        ja: 'メルカリShops',
        en: 'Mercari Shops',
      },
    },
  },

  // ==================== イベント・ニュース ====================
  events: {
    title: {
      ja: '出展イベント',
      en: 'Exhibition Events',
    },
  },

  news: {
    title: {
      ja: 'ニュース',
      en: 'News',
    },
  },


  // ==================== 共通 ====================
  common: {
    shop: {
      ja: 'SHOP',
      en: 'SHOP',
    },
    viewOnMinne: {
      ja: 'minneで作品を見る →',
      en: 'View on minne →',
    },
    viewOnEtsy: {
      ja: 'etsyで作品を見る →',
      en: 'View on Etsy →',
    },
    githubLink: {
      ja: 'GitHub →',
      en: 'GitHub →',
    },
    clearFilters: {
      ja: 'フィルターをクリア',
      en: 'Clear Filters',
    },
  },

  // ==================== フッター ====================
  footer: {
    description: {
      ja: 'IT技術を駆使して自然を表現する、新しいキャンドル作りを目指しています。',
      en: 'We aim to create new candles that express the beauty of nature using IT technology.',
    },
    copyright: {
      ja: '© 2026 Taisetsu Crafter\'s Caravan',
      en: '© 2026 Taisetsu Crafter\'s Caravan',
    },
    shop: {
      ja: 'SHOP',
      en: 'SHOP',
    },
    follow: {
      ja: 'FOLLOW US',
      en: 'FOLLOW US',
    },
    contact: {
      ja: 'CONTACT',
      en: 'CONTACT',
    },
  },

  // ==================== モバイルメニュー ====================
  mobile: {
    language: {
      ja: '言語',
      en: 'LANGUAGE',
    },
  },

  // ==================== ステータス ====================
  eventStatus: {
    ended: { ja: '終了', en: 'Ended' },
    upcoming: { ja: '開催予定', en: 'Upcoming' },
    ongoing: { ja: '開催中', en: 'Ongoing' },
  },
  appStatus: {
    stable:   { ja: '正式版',   en: 'Stable' },
    beta:     { ja: 'β版',      en: 'Beta' },
    inDevelopment: { ja: '開発中',   en: 'In Development' },
    planning: { ja: '構想中',   en: 'Planning' },
  },

  // ==================== タグ ====================
  newsTag: {
    new:   { ja: '新作',     en: 'New' },
    app:   { ja: 'アプリ',   en: 'App' },
    event: { ja: 'イベント', en: 'Event' },
    candle:{ ja: 'キャンドル', en: 'Candle' },
    else:  { ja: 'その他',   en: 'Else' },
  },

  candleTag: {
    geode:   { ja: 'ジオード系',     en: 'Geode Series' },
    mineral: { ja: '鉱物系',         en: 'Mineral Series' },
    crystal: { ja: 'クリスタル',     en: 'Crystal Series' },
  },


} as const;