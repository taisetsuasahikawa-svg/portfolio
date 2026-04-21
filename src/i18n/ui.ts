// src/i18n/ui.ts
export const supportedLangs = ['ja', 'en'] as const;   // ← ここに 'zh', 'fr' などを追加。astro.config.mjsのi18nにも追加するのを忘れずに
export type Lang = typeof supportedLangs[number];
export const langDisplayNames: Record<Lang, { ja: string; native: string }> = {
  ja: { ja: '日本語', native: '日本語' },
  en: { ja: '英語', native: 'English' },
} as const;
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
    ja: '言語を選択',
    en: 'Select Language',
  },

  // ==================== ヒーローセクション ====================
  hero: {
    title: {
      ja: '自然の美しさを\nキャンドルに',
      en: "Nature's Beauty\nin Candles",
    },
    subtitle: {
      ja: 'Illuminating Earth\'s Ancient Memory',
      en: 'Illuminating Earth\'s Ancient Memory',
    },
  },

  // ==================== キャンドルセクション ====================
  candle: {
    section: {
      title: {
        ja: '主なキャンドル作品',
        en: 'Featured Candles',
      },
      desc: {
        ja: '',
        en: '',
      },
    },
    list: {
      title: {
        ja: 'キャンドル作品一覧',
        en: 'Candle Collection',
      },
      desc: {
        ja: '',
        en: '',
      },
    },
    goToCollection: {
        ja: 'キャンドル一覧を見る',
        en: 'View All Candles',
    },
    careTitle: {
      ja: 'キャンドルをご購入いただいた皆様へ',
      en: 'Care & Safety Instructions',
    },
    searchPlaceholder: {
      ja: '作品名や説明で検索...',
      en: 'Search by name or description...',
    },
    detail: {
    burnTime: { ja: '燃焼時間', en: 'Burn Time' },
    size:     { ja: 'サイズ',     en: 'Size' },
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
    emptyMessage: {
      ja: 'ただいま調整中です...',
      en: 'Currently under preparation...',
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
    minneName: {
      ja: 'minne',
      en: 'minne',
    },
    minneDesc: {
      ja: '国内最大級のハンドメイドマーケット',
      en: 'One of Japan\'s largest handmade markets',
    },
    etsyName: {
      ja: 'Etsy',
      en: 'Etsy',
    },
    etsyDesc: {
      ja: 'Global Online Marketplace',
      en: 'Global Online Marketplace',
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
    large:   { ja: '大きなサイズ',   en: 'Large Size' },
  },


// ==================== 取扱説明書（thanksページ） ====================
  care: {
    title: {
      ja: 'キャンドルをお買い上げいただいた皆様へ',
      en: 'To all who purchased our candles'
    },
    safetyTitle: {
      ja: '安全にお使いいただくために',
      en: 'Safety Instructions'
    },
    safetyList: {
      ja: [
        '火の近くで使用する際は、必ず目を離さないでください。',
        '燃えやすいものから十分離してご使用ください。',
        'お子様やペットの手の届かない場所でご使用ください。',
        '使用後は芯をしっかり消火し、完全に冷めてから保管してください。'
      ],
      en: [
        'Never leave a burning candle unattended.',
        'Keep away from flammable materials.',
        'Keep out of reach of children and pets.',
        'After use, extinguish the wick completely and let it cool before storing.'
      ]
    },
    careTitle: {
      ja: 'キャンドルの長持ちのコツ',
      en: 'Tips to make your candle last longer'
    },
    careList: {
      ja: [
        '初回使用時は、表面全体が溶けるまで2〜3時間燃やしてください（メモリーバーン）。',
        '芯は常に5〜7mm程度にトリミングしてください。',
        '直射日光や高温多湿を避けて保管してください。'
      ],
      en: [
        'On first burn, let the candle burn until the entire surface melts (2-3 hours).',
        'Always trim the wick to 5-7mm before each use.',
        'Store away from direct sunlight and high humidity.'
      ]
    },
    contact: {
      ja: 'ご質問・ご不明点がありましたら、お気軽にお問い合わせください。',
      en: 'If you have any questions, please feel free to contact us.'
    },
    backToHome: {
      ja: 'トップページに戻る',
      en: 'Back to Home'
    },
    subtitle: {
      ja: '大切に、長くお使いいただくためのガイドです',
      en: 'Guide to enjoy our candles safely and longer'
    }
  },

} as const;