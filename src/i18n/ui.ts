export const defaultLang = 'ja';

export const languages = {
  ja: '日本語',
  en: 'English',
} as const;

export const ui = {
  ja: {
    // ナビゲーション
    'nav.home': 'HOME',
    'nav.candles': 'キャンドル',
    'nav.apps': 'アプリ',
    'nav.materials': 'ハンドメイド資材',
    'nav.contact': 'お問い合わせ',

    // ヒーロー
    'hero.title': '自然の美しさを\nキャンドルに',
    'hero.subtitle': 'NATURE × TECHNOLOGY × CANDLE',

    // セクションタイトル
    'section.candles': 'キャンドル作品一覧',
    'section.candles.desc': '自然の鉱物をイメージしたオリジナルキャンドル',
    'section.apps': 'アプリ開発',
    'section.materials': 'ハンドメイド資材販売',

    // フッター
    'footer.shop': 'SHOP',
    'footer.follow': 'FOLLOW US',
    'footer.contact': 'CONTACT',
    'footer.description': 'IT技術を駆使して自然を表現する、新しいキャンドル作りを目指しています。',
    'footer.copyright': '© 2026 Taisetsu Crafter\'s Caravan',

    // その他（後で追加してください）
    'candle.search.placeholder': '作品名や説明で検索...',
    'button.clear': 'フィルターをクリア',
    'shop.minne.desc': '日本最大級ハンドメイドマーケット',
    'shop.etsy.desc': 'International Handmade Market',
  },

  en: {
    'nav.home': 'HOME',
    'nav.candles': 'Candles',
    'nav.apps': 'Apps',
    'nav.materials': 'Materials',
    'nav.contact': 'Contact',

    'hero.title': 'Nature\'s Beauty\nin Candles',
    'hero.subtitle': 'NATURE × TECHNOLOGY × CANDLE',

    'section.candles': 'Candle Collection',
    'section.candles.desc': 'Original candles inspired by natural minerals and crystals',
    'section.apps': 'App Development',
    'section.materials': 'Handmade Materials',

    'footer.shop': 'SHOP',
    'footer.follow': 'FOLLOW US',
    'footer.contact': 'CONTACT',
    'footer.description': 'We create candles that express the beauty of nature using modern technology.',
    'footer.copyright': '© 2026 Taisetsu Crafter\'s Caravan',

    'candle.search.placeholder': 'Search by name or description...',
    'button.clear': 'Clear Filters',
    'shop.minne.desc': 'Japan\'s Largest Handmade Market',
    'shop.etsy.desc': 'International Handmade Market',
  },
} as const;