// src/i18n/ui.ts
export const supportedLangs = ['ja', 'en'] as const;
export type Lang = typeof supportedLangs[number];

export const langDisplayNames: Record<Lang, { ja: string; native: string }> = {
  ja: { ja: '日本語', native: '日本語' },
  en: { ja: '英語', native: 'English' },
} as const;

export const ui = {
  site: {
    title: {
      ja: '大雪クラフターズキャラバン',
      en: "Taisetsu Crafter's Caravan",
    },
    subtitle: {
      ja: 'NATURE / TECHNOLOGY / CANDLE',
      en: 'NATURE / TECHNOLOGY / CANDLE',
    },
  },
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
      ja: '素材販売',
      en: 'Materials',
    },
    contact: {
      ja: 'お問い合わせ',
      en: 'Contact',
    },
  },
  langSwitch: {
    ja: '言語を選択',
    en: 'Select Language',
  },
  hero: {
    title: {
      ja: '自然の美しさを\nキャンドルに',
      en: "Nature's Beauty\nin Candles",
    },
    subtitle: {
      ja: "Illuminating Earth's Ancient Memory",
      en: "Illuminating Earth's Ancient Memory",
    },
  },
  candle: {
    section: {
      title: {
        ja: '注目のキャンドル',
        en: 'Featured Candles',
      },
      desc: {
        ja: '',
        en: '',
      },
    },
    list: {
      title: {
        ja: 'キャンドル一覧',
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
      ja: 'ご購入いただいた方へ',
      en: 'Care & Safety Instructions',
    },
    searchPlaceholder: {
      ja: '作品名や説明で検索...',
      en: 'Search by name or description...',
    },
    detail: {
      burnTime: { ja: '燃焼時間', en: 'Burn Time' },
      size: { ja: 'サイズ', en: 'Size' },
    },
  },
  app: {
    section: {
      title: {
        ja: 'アプリ開発',
        en: 'App Development',
      },
    },
  },
  materials: {
    section: {
      title: {
        ja: '素材販売',
        en: 'Handmade Materials Sale',
      },
      description: {
        ja: 'ジェルワックスや顔料など、制作で使っている素材を少量から販売しています。',
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
      ja: 'Etsyで作品を見る →',
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
      ja: 'ただいま準備中です。',
      en: 'Currently under preparation...',
    },
    backToHome: {
      ja: 'トップページに戻る',
      en: 'Back to Home',
    },
    nopage: {
      ja: 'このページの英語版はまだありません。必要に応じてブラウザ翻訳をご利用ください。',
      en: "There is no English version of this page. Please use your browser's translation feature or similar tools.",
    },
  },
  footer: {
    description: {
      ja: 'IT技術を活かしながら、自然の美しさを表現する新しいキャンドル作りを目指しています。',
      en: 'We aim to create new candles that express the beauty of nature using IT technology.',
    },
    copyright: {
      ja: "© 2026 Taisetsu Crafter's Caravan",
      en: "© 2026 Taisetsu Crafter's Caravan",
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
      en: "One of Japan's largest handmade markets",
    },
    etsyName: {
      ja: 'Etsy',
      en: 'Etsy',
    },
    etsyDesc: {
      ja: '世界的なオンラインマーケットプレイス',
      en: 'Global Online Marketplace',
    },
  },
  mobile: {
    language: {
      ja: '言語',
      en: 'LANGUAGE',
    },
  },
  eventStatus: {
    ended: { ja: '終了', en: 'Ended' },
    upcoming: { ja: '開催前', en: 'Upcoming' },
    ongoing: { ja: '開催中', en: 'Ongoing' },
  },
  appStatus: {
    stable: { ja: '安定版', en: 'Stable' },
    beta: { ja: 'ベータ', en: 'Beta' },
    inDevelopment: { ja: '開発中', en: 'In Development' },
    planning: { ja: '企画中', en: 'Planning' },
  },
  newsTag: {
    new: { ja: '新着', en: 'New' },
    app: { ja: 'アプリ', en: 'App' },
    event: { ja: 'イベント', en: 'Event' },
    candle: { ja: 'キャンドル', en: 'Candle' },
    else: { ja: 'その他', en: 'Else' },
  },
  candleTag: {
    geode: { ja: 'ジオードシリーズ', en: 'Geode Series', color: '#8b5cf6', group: 'series' },
    mineral: { ja: '鉱石シリーズ', en: 'Mineral Series', color: '#f59e0b', group: 'series' },
    crystal: { ja: 'クリスタルシリーズ', en: 'Crystal Series', color: '#0ea5e9', group: 'series' },
    large: { ja: '大きめ', en: 'Large Size', color: '#525252', group: 'size' },
    small: { ja: '小さめ', en: 'Small Size', color: '#ec4899', group: 'size' },
    purple: { ja: 'パープル', en: 'Purple', color: '#a855f7', group: 'color' },
    yellow: { ja: 'イエロー', en: 'Yellow', color: '#facc15', group: 'color' },
    red: { ja: 'レッド', en: 'Red', color: '#ef4444', group: 'color' },
    black: { ja: 'ブラック', en: 'Black', color: '#27272a', group: 'color' },
    green: { ja: 'グリーン', en: 'Green', color: '#16a34a', group: 'color' },
    blue: { ja: 'ブルー', en: 'Blue', color: '#3b82f6', group: 'color' },
    pink: { ja: 'ピンク', en: 'Pink', color: '#f472b6', group: 'color' },
    paraffin: { ja: 'パラフィンワックス', en: 'Paraffin Wax', color: '#78716c', group: 'wax' },
    gel: { ja: 'ジェルワックス', en: 'Gel Wax', color: '#06b6d4', group: 'wax' },
    soy: { ja: 'ソイワックス', en: 'Soy Wax', color: '#f59e0b', group: 'wax' },
    scented: { ja: '香り付き', en: 'Scented', color: '#f43f5e', group: 'feature' },
  },
  tagGroup: {
    series: { ja: 'シリーズ', en: 'Series' },
    size: { ja: 'サイズ', en: 'Size' },
    color: { ja: 'カラー', en: 'Color' },
    wax: { ja: 'ワックス', en: 'Wax' },
    feature: { ja: '特徴', en: 'Feature' },
  },
  care: {
    title: {
      ja: 'キャンドルをご購入いただいた皆さまへ',
      en: 'To all who purchased our candles',
    },
    subtitle: {
      ja: '安全に長くお楽しみいただくためのご案内です。',
      en: 'A short guide for safe and enjoyable use.',
    },
    intro: {
      ja: '作品をお迎えいただきありがとうございます。<br />ご使用前に、以下の注意事項をご確認ください。',
      en: 'Thank you for choosing our candle.<br />Please review the safety notes below before use.',
    },
    safetyTitle: {
      ja: '安全にお使いいただくために',
      en: 'Safety Instructions',
    },
    careTitle: {
      ja: 'キャンドルを長く楽しむコツ',
      en: 'Tips to make your candle last longer',
    },
    items: {
      safety: [
        {
          id: 'safety1',
          ja: 'キャンドルは必ず平らで安定した耐熱性のある場所に置いてご使用ください。',
          en: 'Always place the candle on a stable, flat, heat-resistant surface (such as a heat-resistant plate).',
        },
        {
          id: 'safety2',
          ja: '芯は使用前に約5mmにカットしてください。',
          en: 'Trim the wick to about 5mm before each use.',
        },
        {
          id: 'safety3',
          ja: 'カーテンや紙などの燃えやすいものの近くや、風の当たる場所では使用しないでください。',
          en: 'Do not use near curtains, paper, or other flammable materials, or in windy areas.',
        },
        {
          id: 'safety4',
          ja: 'ガラス容器入りのキャンドルは、炎がガラスに直接当たらないようご注意ください。長時間の使用でガラスが割れる恐れがあります。',
          en: 'For candles in glass containers, ensure the flame does not directly touch the glass. Prolonged exposure may cause the glass to crack.',
        },
        {
          id: 'safety5',
          ja: 'キャンドルから離れる際は、必ず火を消してください。',
          en: 'Always extinguish the candle when leaving the room.',
        },
        {
          id: 'safety6',
          ja: '燃焼中は容器や周辺が熱くなります。やけどに十分ご注意ください。',
          en: 'The container and surrounding area become hot during burning. Take care to avoid burns.',
        },
        {
          id: 'safety7',
          ja: '1回の燃焼時間は2時間程度を目安にし、4時間を超えないようにしてください。使用中は適度に換気を行ってください。',
          en: 'Limit each burning session to about 2 hours, and do not exceed 4 hours. Ventilate the room regularly during use.',
        },
        {
          id: 'safety8',
          ja: '火を消す際は吹き消さず、スナッファーやピンセットなどを使用して煙やすすを抑えてください。',
          en: 'Do not blow out the candle. Use a snuffer or pinch the wick with tweezers and dip the tip into the melted wax to minimize soot.',
        },
        {
          id: 'safety9',
          ja: '消火後は芯をろうの中に倒したままにせず、まっすぐ整えておくと次回も点火しやすくなります。',
          en: 'After extinguishing, do not leave the wick in the wax; straighten it upright for easier relighting next time.',
        },
      ],
      care: [],
    },
    closing: {
      ja: '',
      en: '',
    },
    contact: {
      ja: 'ご不明点がありましたら、お気軽にお問い合わせください。',
      en: 'If you have any questions, please feel free to contact us.',
    },
  },
} as const;

export const candleTag = ui.candleTag;

