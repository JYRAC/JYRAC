export type Lang = 'ja' | 'en';

export interface NavTranslations {
  home: string;
  about: string;
  services: string;
  history: string;
  news: string;
  recruitment: string;
  gioco: string;
  governance: string;
  sns: string;
  contact: string;
}

export interface SiteTranslations {
  siteTitle: string;
  siteDescription: string;
  nav: NavTranslations;
  common: {
    backToHome: string;
    viewDetails: string;
    apply: string;
    contact: string;
    openInNewTab: string;
  };
}

export const translations: Record<Lang, SiteTranslations> = {
  ja: {
    siteTitle: '特定非営利活動法人 日本若者防災復興協会（JYRAC）',
    siteDescription: '特定非営利活動法人 日本若者防災復興協会（JYRAC）公式サイト。若者の力で、防災を日常に。被災地に確かな未来を。',
    nav: {
      home: 'ホーム',
      about: 'JYRACについて',
      services: '事業案内',
      history: '活動実績・沿革',
      news: 'お知らせ',
      recruitment: 'メンバー募集',
      gioco: '教材・診断ツール',
      governance: '情報公開',
      sns: '公式SNS',
      contact: 'お問い合わせ',
    },
    common: {
      backToHome: '← ホームに戻る',
      viewDetails: '詳細を見る ➔',
      apply: '参加する',
      contact: 'お問い合わせ',
      openInNewTab: '↗',
    },
  },
  en: {
    siteTitle: 'Japan Youth Resilience Action Consortium (JYRAC)',
    siteDescription: 'Official portal of Japan Youth Resilience Action Consortium. Empowering youth to lead everyday disaster resilience and sustainable recovery.',
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      history: 'History',
      news: 'News',
      recruitment: 'Join Us',
      gioco: 'Tools & Diagnosis',
      governance: 'Governance',
      sns: 'Official SNS',
      contact: 'Contact',
    },
    common: {
      backToHome: '← Back to Home',
      viewDetails: 'View Details ➔',
      apply: 'Join Us',
      contact: 'Contact',
      openInNewTab: '↗',
    },
  },
};
