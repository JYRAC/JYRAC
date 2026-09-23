// src/lib/i18n.ts

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

export interface LegalTranslations {
  orgNameLabel: string;
  orgNameValue: string;
  corporateNumberLabel: string;
  corporateNumberValue: string;
  corporateNumberSub: string;
  certRegistrationLabel: string;
  certRegistrationValue: string;
  representativeLabel: string;
  representativeValue: string;
  officeLocationLabel: string;
  officeLocationValue: string;
  missionLabel: string;
  missionValue: string;
  missionSub: string;
  domainNoteLabel: string;
  domainNoteValue: string;
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
  footer: {
    orgName: string;
    corporateNumber: string;
    address: string;
    domainNote: string;
    copyright: string;
  };
  legal: LegalTranslations;
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
    footer: {
      orgName: '特定非営利活動法人 日本若者防災復興協会（JYRAC）',
      corporateNumber: '法人番号：2010005042019',
      address: '東京都文京区小日向四丁目4番6-603号',
      domainNote: '※本公式サイトのドメイン（jyrac.stki.org）は協力団体「TRANs」より公式無償貸与を受けて運用しております。',
      copyright: '© 2024-2026 Japan Youth Resilience Action Consortium. All Rights Reserved.',
    },
    legal: {
      orgNameLabel: '法人・団体名称',
      orgNameValue: '特定非営利活動法人 日本若者防災復興協会（英語略称：JYRAC / カナ：ニホンワカモノボウサイフッコウキョウカイ）',
      corporateNumberLabel: '法人番号',
      corporateNumberValue: '2010005042019',
      corporateNumberSub: '（国税庁指定法人番号）',
      certRegistrationLabel: '認証日・設立登記日',
      certRegistrationValue: '認証日：令和8年6月18日（東京都認証） / 設立登記日：令和8年6月21日',
      representativeLabel: '代表者',
      representativeValue: '理事長 久保 壮太郎',
      officeLocationLabel: '主たる事務所の所在地',
      officeLocationValue: '東京都文京区小日向四丁目4番6-603号',
      missionLabel: '定款の目的・活動領域',
      missionValue: '若者が主体となって防災、減災及び災害復興に取り組むための事業を行い、地域社会の防災力向上と安全で安心な持続可能社会の実現に寄与することを目的とする。',
      missionSub: '（活動領域：防災教育・実践体験、被災地復興支援・文化継承、街頭啓蒙・募金、国際交流、政策提言）',
      domainNoteLabel: 'ドメインの運用について',
      domainNoteValue: '当団体の公式ウェブサイトおよびシステム運用ドメイン（jyrac.stki.org）は、初期運用コストの最適化のため、協力関係にある学生支援組織「TRANs」より正式な許諾を得て無償貸与を受けて運用しております。',
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
    footer: {
      orgName: 'Japan Youth Resilience Action Consortium (JYRAC)',
      corporateNumber: 'Corporate Number: 2010005042019',
      address: '603, 4-4-6 Kohinata, Bunkyo-ku, Tokyo, 112-0006, Japan',
      domainNote: 'Official domain provided and supported under gratuitous loan by youth platform "TRANs".',
      copyright: '© 2024-2026 Japan Youth Resilience Action Consortium. All Rights Reserved.',
    },
    legal: {
      orgNameLabel: 'Organization Name',
      orgNameValue: 'Japan Youth Resilience Action Consortium (Specified Non-Profit Corporation)',
      corporateNumberLabel: 'Corporate Number',
      corporateNumberValue: '2010005042019',
      corporateNumberSub: '(National Tax Agency Corporate Number)',
      certRegistrationLabel: 'Certification / Registration Date',
      certRegistrationValue: 'Certified: June 18, 2026 (Tokyo Metropolitan Government) / Registered: June 21, 2026',
      representativeLabel: 'Representative',
      representativeValue: 'President Sohtaro Kubo',
      officeLocationLabel: 'Principal Office',
      officeLocationValue: '603, 4-4-6 Kohinata, Bunkyo-ku, Tokyo, 112-0006, Japan',
      missionLabel: 'Mission & Activities',
      missionValue: 'Promoting youth-led disaster mitigation, prevention, and recovery initiatives to build resilient communities and a sustainable society.',
      missionSub: '(Key Domains: Disaster Prevention Education, Recovery Support, Community Fundraising, Global Initiatives, Policy Advocacy)',
      domainNoteLabel: 'Domain & Infrastructure',
      domainNoteValue: 'The official domain (jyrac.stki.org) of JYRAC is operated under official authorization and gratuitous loan by our partner youth platform "TRANs".',
    },
  },
};
