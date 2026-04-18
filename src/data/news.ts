// src/data/news.ts
export const newsRaw = [
  {
    date: "2026.04.14",
    link: "https://taisetsuasahikawa-svg.github.io/portfolio/",
    tag: "else" as const,

    title: {
      ja: "ポートフォリオサイト公開",
      en: "Portfolio Website Launched"
    },
    description: {
      ja: "本サイトを公開しました。今後はキャンドル・アプリ開発のコンテンツを充実させ、最新の活動状況を掲載していく予定です。",
      en: "I have launched this website. Going forward, we plan to expand our content on candle and app development and post updates on our latest activities."
    }
  },
  {
    date: "2026.04.19",
    link: "https://taisetsuasahikawa-svg.github.io/portfolio/en/",
    tag: "else" as const,

    title: {
      ja: "The website is now available in English",
      en: "The website is now available in English"
    },
    description: {
      ja: "There is a language selector on the right side of the header.",
      en: "There is a language selector on the right side of the header."
    }
  },
] as const;