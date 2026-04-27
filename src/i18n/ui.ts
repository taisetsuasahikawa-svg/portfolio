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
    backToHome: {
      ja: 'トップページに戻る',
      en: 'Back to Home'
    },
    nopage: {
      ja: 'こちらのページの日本語版はありません。ブラウザの翻訳機能等を使用してください。',
      en: 'There is no English version of this page. Please use your browser\'s translation feature or similar tools.',
    }
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
    // シリーズ
    geode:   { ja: 'ジオード系',     en: 'Geode Series' },
    mineral: { ja: '鉱物系',         en: 'Mineral Series' },
    crystal: { ja: 'クリスタル',     en: 'Crystal Series' },
    // サイズ
    large:   { ja: '大きなサイズ',   en: 'Large Size' },
    // カラー
    purple:  { ja: 'パープル',  en: 'Color:Purple' },
    yellow:  { ja: 'イエロー',  en: 'Color:Yellow' },
    red:  { ja: 'レッド',  en: 'Color:Red' },
    black:  { ja: 'ブラック',  en: 'Color:Black' },
    green:  { ja: 'グリーン',  en: 'Color:Green' },
    blue:  { ja: 'ブルー',  en: 'Color:Blue' },
    pink:  { ja: 'ピンク',  en: 'Color:Pink' },
    // 素材
    paraffin: { ja: 'パラフィンワックス', en: 'Paraffin Wax'},
    gel: { ja: 'ジェルワックス', en: 'Gel Wax'},
    soy: { ja: 'ソイワックス', en: 'Soy Wax'},
    // オプション
    scented: {ja: '香り付き', en: 'Scented'},
  },


// ==================== 取扱説明書（thanksページ） ====================
  care: {
    title: {
      ja: 'キャンドルをお買い上げいただいた皆様へ',
      en: 'To all who purchased our candles'
    },
    subtitle: {
      ja: '',
      en: ''
    },
    intro: {
      ja: '',
      en: ''
    },
    safetyTitle: {
      ja: '安全にお使いいただくために',
      en: 'Safety Instructions'
    },
    careTitle: {
      ja: 'キャンドルの長持ちのコツ',
      en: 'Tips to make your candle last longer'
    },
    items: {
      safety: [
        {
          id: 'safety1',
          ja: 'キャンドルは必ず安定した平らな耐熱面（耐熱皿など）の上に置いてご使用ください。',
          en: 'Always place the candle on a stable, flat, heat-resistant surface (such as a heat-resistant plate).'
        },
        {
          id: 'safety2',
          ja: '芯は使用前に5mm程度にカットしてください。',
          en: 'Trim the wick to about 5mm before each use.'
        },
        {
          id: 'safety3',
          ja: 'カーテン、紙類などの可燃物の近くや、風の当たる場所では使用しないでください。',
          en: 'Do not use near curtains, paper, or other flammable materials, or in windy areas.'
        },
        {
          id: 'safety4',
          ja: 'ガラス容器を使用したキャンドルは、火がガラスに直接当たらないよう十分にご注意ください。長時間火を当て続けるとガラスが割れる恐れがあります。',
          en: 'For candles in glass containers, ensure the flame does not directly touch the glass. Prolonged exposure may cause the glass to crack.'
        },
        {
          id: 'safety5',
          ja: 'キャンドルから離れる際は、必ず火を消してください。',
          en: 'Always extinguish the candle when leaving the room.'
        },
        {
          id: 'safety6',
          ja: '燃焼中は容器や周辺が熱くなります。やけどに十分ご注意ください。',
          en: 'The container and surrounding area become hot during burning. Take care to avoid burns.'
        },
        {
          id: 'safety7',
          ja: '一度の燃焼時間は2時間程度を目安にし、長くても4時間を超えないようにしてください。また、使用中は定期的に換気を行ってください。',
          en: 'Limit each burning session to about 2 hours, and do not exceed 4 hours. Ventilate the room regularly during use.'
        },
        {
          id: 'safety8',
          ja: '消火する際は、息を吹きかけず、ろうそく消し（スナッファー）をご使用になるか、ピンセットなどで芯をつまみ、芯先を溶けたロウに浸すようにして消すと、ススが出にくくなります。',
          en: 'Do not blow out the candle. Use a snuffer or pinch the wick with tweezers and dip the tip into the melted wax to minimize soot.'
        },
        {
          id: 'safety9',
          ja: '消火後は、芯をロウに浸したままにせず、まっすぐに立てて整えておくと、次回もきれいに点火しやすくなります。',
          en: 'After extinguishing, do not leave the wick in the wax; straighten it upright for easier relighting next time.'
        }
      ],
      care: [] // 必要に応じて追加可能
    },
    closing: {
      ja: '',
      en: ''
    },
    contact: {
      ja: 'ご質問・ご不明点がありましたら、お気軽にお問い合わせください。',
      en: 'If you have any questions, please feel free to contact us.'
    }
  },

} as const;