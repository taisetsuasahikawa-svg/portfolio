// src/data/candles.ts
export const candlesRaw = [
  {
    id: "geode" as const,
    href: "#",
    tags: ["geode"] as const,

    title: {
      ja: "ジオードキャンドル",
      en: "Geode Candle"
    },
    description: {
      ja: "大きな水晶ジオードをかたどったキャンドル。全7種。",
      en: "Large candles modeled after natural crystal geodes. 7 types available."
    },
  },
  {
    id: "mineral" as const,
    href: "#",
    tags: ["mineral"] as const,

    title: {
      ja: "鉱物キャンドル",
      en: "Mineral Candle"
    },
    description: {
      ja: "球形に磨いた鉱物のような個性的なキャンドル。新作は随時追加予定。",
      en: "Unique spherical candles resembling polished minerals. New items added regularly."
    },
  },
  {
    id: "crystal" as const,
    href: "#",
    tags: ["crystal"] as const,

    title: {
      ja: "クリスタルキャンドル",
      en: "Crystal Candle"
    },
    description: {
      ja: "水晶クラスターから型取りしたキャンドル。全7種。",
      en: "Candles cast from quartz clusters. 7 types with beautiful transparency."
    },
  },
  {
    id: "mini-geode" as const,
    href: "#",
    tags: ["geode"] as const,

    title: {
      ja: "ミニジオードキャンドル",
      en: "Mini Geode Candle"
    },
    description: {
      ja: "ディテールはそのままに、1/4サイズに凝縮したジオードキャンドル。",
      en: "1/4 scale version of the Geode Candle. Perfect as a gift."
    },
  },
] as const;

export type Candle = typeof candlesRaw[number];