// src/data/apps.ts
// 大雪クラフターズキャラバン - アプリ開発データ
// id を統一し、画像パスは constants/paths.ts で管理する形に変更

export const appsRaw = [
  {
    id: "smartstock" as const,
    title: {
      ja: "小規模向け在庫管理アプリ",
      en: "Inventory Management App for Small Businesses"
    },
    description: {
      ja: "小規模事業者向けシンプル在庫管理ツール。バーコードスキャンだけで簡単、自動通知、Firebase対応。",
      en: "Simple inventory management tool for small businesses. Barcode scan, auto notifications, Firebase support."
    },
    platform: "Android",
    status: "inDevelopment" as const,
    github: "https://github.com/taisetsuasahikawa-svg/smartstock",
    tags: ["inventory", "barcode"] as const,
  },
  {
    id: "candle-visualizer" as const,
    title: {
      ja: "Candle Visualizer",
      en: "Candle Visualizer"
    },
    description: {
      ja: "ARでキャンドルを部屋に置いてみられる簡易ビジュアライザー",
      en: "AR simple visualizer to place candles in your room."
    },
    platform: "Web / AR",
    status: "planning" as const,
    github: "#",
    tags: ["ar", "visualizer"] as const,
  },
  {
    id: "scentcraft" as const,
    title: {
      ja: "ScentCraft レシピ計算機",
      en: "ScentCraft Recipe Calculator"
    },
    description: {
      ja: "カスタマイズ可能な香料レシピ計算機",
      en: "Customizable fragrance recipe calculator for candle makers."
    },
    platform: "Web",
    status: "planning" as const,
    github: "#",
    tags: ["recipe", "calculator"] as const,
  },
  {
    id: "burn-simulator" as const,
    title: {
      ja: "Candle Burn Simulator",
      en: "Candle Burn Simulator"
    },
    description: {
      ja: "リアルなキャンドル燃焼シミュレーター",
      en: "Realistic candle burning simulation tool."
    },
    platform: "Web",
    status: "planning" as const,
    github: "#",
    tags: ["simulation"] as const,
  },
] as const;

// 型定義（他のファイルで import して使用可能）
export type AppRaw = typeof appsRaw[number];
export type AppId = typeof appsRaw[number]["id"];