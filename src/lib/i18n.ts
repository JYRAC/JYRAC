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

export interface AboutTranslations {
  header: {
    sub: string;
    title: string;
    desc: string;
  };
  mission: {
    sub: string;
    heading: string;
    leadQuote: string;
    body: string;
  };
  president: {
    sub: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    orgName: string;
    roleAndName: string;
  };
  members: {
    sub: string;
    heading: string;
  };
  org: {
    sub: string;
    heading: string;
    desc: string;
    divisionsTitle: string;
    divisions: string[];
    projectsTitle: string;
    projects: string[];
    policyTitle: string;
    policy: string[];
  };
  legal: {
    sub: string;
    heading: string;
    nameLabel: string;
    nameValue: string;
    corpNumLabel: string;
    corpNumValue: string;
    corpNumSub: string;
    certDateLabel: string;
    certDateValue: string;
    repLabel: string;
    repValue: string;
    addressLabel: string;
    addressValue: string;
    purposeLabel: string;
    purposeValue: string;
    purposeSub: string;
    achievementsLabel: string;
    achievementsValue: string;
    contactLabel: string;
    contactSub: string;
    domainLabel: string;
    domainValue: string;
  };
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
  about: AboutTranslations;
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
    about: {
      header: {
        sub: 'ABOUT JYRAC',
        title: '当法人について',
        desc: '特定非営利活動法人日本若者防災復興協会の理念・設立の想い・役員体制・組織概要です。',
      },
      mission: {
        sub: 'MISSION & VISION',
        heading: '組織理念・目指す社会',
        leadQuote: '「いつもの暮らし」が、いちばん強い。\n若者から始める、新しい防災と復興。',
        body: '私たちは、災害の悲しみをただの記憶で終わらせません。若者ならではの柔軟な発想力と圧倒的な行動力をもって、お堅い「お勉強」としての防災を刷新し、誰もが主体的に関わりたくなる新しい防災・復興のスタンダードを築きます。地域と世代の壁を越え、すべての人が手を取り合って災害に立ち向かえる、安全で持続可能な社会を私たちが先頭に立って創り上げます。',
      },
      president: {
        sub: 'MESSAGE FROM THE PRESIDENT',
        heading: '理事長 挨拶',
        p1: '災害は、ある日突然、私たちの日常を奪います。しかし同時に、そこから立ち上がろうとする人々の歩みの中には、地域の強さ、人と人とのつながり、未来を担う若者の可能性が確かに存在しています。',
        p2: '私たちは、被災地への一時的な支援にとどまらず、若者が継続的に地域と関わり、学び、行動し、社会に提言していく仕組みをつくっていきたいと考えています。防災を「特別な人だけが担うもの」ではなく、すべての若者が自分ごととして考え、参加できる社会へ。その実現こそが、JYRACの使命です。',
        p3: '災害の記憶を風化させず、次の行動へつなげること。支援する側とされる側を超え、ともに未来をつくる仲間になること。JYRACはその先頭に立ち、若者の挑戦を社会の力へと変えていきます。',
        orgName: '特定非営利活動法人 日本若者防災復興協会',
        roleAndName: '理事長 久保 壮太郎',
      },
      members: {
        sub: 'BOARD OF DIRECTORS',
        heading: '役員紹介',
      },
      org: {
        sub: 'ORGANIZATION STRUCTURE',
        heading: '組織体制・ガバナンス',
        desc: '最高意思決定機関である理事会および監査を行う監事のもと、各局・各事業本部・政務調査会が連携して活動を展開しています。',
        divisionsTitle: '各局（法人基盤・統括）',
        divisions: [
          '事務局（総務・会計・法務・情報部）',
          '人事局（採用・メンバー育成）',
          '広報局（デザイン課・SNS発信課・メディアプレス課）',
          '外務局（渉外・パートナーシップ）',
        ],
        projectsTitle: '各事業本部（プロジェクト推進）',
        projects: [
          '防災事業本部（生徒会サミット・避難所環境改善）',
          '復興事業本部（能登現地支援・伝統食文化継承）',
          '地域事業本部 / 募金事業本部（街頭募金・地域防災出展）',
          '国際事業本部（Y-VITAL・模擬防災国連）',
        ],
        policyTitle: '政務調査会 ＆ 連携コミュニティ',
        policy: [
          '政務調査会（政策提言・法案調査・意見交換）',
          '中高生コミュニティ NSF PROJECTS',
          '超党派避難所議連 事務局支援',
        ],
      },
      legal: {
        sub: 'ORGANIZATION OVERVIEW',
        heading: '法人概要',
        nameLabel: '法人・団体名称',
        nameValue: '特定非営利活動法人 日本若者防災復興協会（英語略称：JYRAC / カナ：ニホンワカモノボウサイフッコウキョウカイ）',
        corpNumLabel: '法人番号',
        corpNumValue: '2010005042019',
        corpNumSub: '（国税庁指定法人番号）',
        certDateLabel: '認証日・設立登記日',
        certDateValue: '認証日：令和8年6月18日（東京都認証） / 設立登記日：令和8年6月21日',
        repLabel: '代表者',
        repValue: '理事長 久保 壮太郎',
        addressLabel: '主たる事務所の所在地',
        addressValue: '東京都文京区小日向四丁目4番6-603号',
        purposeLabel: '定款の目的・主な活動領域',
        purposeValue: '若者が主体となって防災、減災及び災害復興に取り組むための事業を行い、地域社会の防災力向上と安全で安心な持続可能社会の実現に寄与することを目的とする。',
        purposeSub: '（活動領域：防災教育・実践体験、被災地復興支援・文化継承、街頭啓蒙・募金、国際交流、政策提言）',
        achievementsLabel: '主な実績',
        achievementsValue: '内閣府共催「全国生徒会防災サミット2026」開催、避難所環境改善・政策提言、能登半島現地復興ボランティア、街頭募金活動59回（総額260万円超）',
        contactLabel: '公式連絡先',
        contactSub: '（広報窓口：jyrac.pr@gmail.com）',
        domainLabel: 'ドメインの運用について',
        domainValue: '当団体の公式ウェブサイトおよびシステム運用ドメイン（jyrac.stki.org）は、初期運用コストの最適化のため、協力関係にある学生支援組織「TRANs」より正式な許諾を得て無償貸与を受けて運用しております。',
      },
    },
  },
  en: {
    // 英語タイトルでも正式名称を併記
    siteTitle: '特定非営利活動法人 日本若者防災復興協会 (Japan Youth Resilience Action Consortium / JYRAC)',
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
      // 正式名称（日本語）＋英語表記
      orgName: '特定非営利活動法人 日本若者防災復興協会 (Japan Youth Resilience Action Consortium / JYRAC)',
      corporateNumber: 'Corporate Number: 2010005042019',
      address: '603, 4-4-6 Kohinata, Bunkyo-ku, Tokyo, 112-0006, Japan',
      domainNote: 'Official domain provided and supported under gratuitous loan by youth platform "TRANs".',
      copyright: '© 2024-2026 Japan Youth Resilience Action Consortium. All Rights Reserved.',
    },
    about: {
      header: {
        sub: 'ABOUT JYRAC',
        title: 'About Our Organization',
        desc: 'Information regarding the mission, vision, officers, and structure of Japan Youth Resilience Action Consortium.',
      },
      mission: {
        sub: 'MISSION & VISION',
        heading: 'Our Philosophy & Mission',
        leadQuote: 'Everyday resilience is our greatest strength.\nYouth-led innovation for disaster prevention and recovery.',
        body: 'We ensure that the lessons and sorrow of past disasters are not forgotten. Leveraging the flexibility and initiative of youth, we transform rigid disaster drills into accessible, everyday habits. Bridging generations and local communities, we stand at the forefront of building a secure, sustainable society where everyone can take action against disaster risks.',
      },
      president: {
        sub: 'MESSAGE FROM THE PRESIDENT',
        heading: 'Message from the President',
        p1: 'Disasters can strip away daily lives in an instant. Yet amidst the hardship, the resilience of local communities, human bonds, and the immense potential of youth shine through.',
        p2: 'We are committed not only to emergency relief, but to establishing sustainable platforms where young people actively engage with communities, learn, act, and propose impactful policies. Disaster resilience should not be limited to specialists—it must be an active duty embraced by all. Fulfilling this vision is the core mission of JYRAC.',
        p3: 'Preserving collective memory, translating knowledge into immediate action, and moving beyond the divide of helpers and those helped to build the future together. JYRAC leads this path, transforming youth commitment into real societal impact.',
        orgName: '特定非営利活動法人 日本若者防災復興協会 (JYRAC)',
        roleAndName: 'President: Sohtaro Kubo',
      },
      members: {
        sub: 'BOARD OF DIRECTORS',
        heading: 'Board Members',
      },
      org: {
        sub: 'ORGANIZATION STRUCTURE',
        heading: 'Governance & Structure',
        desc: 'Guided by the Board of Directors as the supreme decision-making body and the Auditors, our divisions, project bureaus, and policy council work in close collaboration.',
        divisionsTitle: 'Corporate Divisions (Operations & Governance)',
        divisions: [
          'Secretariat (General Affairs, Accounting, Legal & IT)',
          'Human Resources (Recruiting & Development)',
          'Public Relations (Design, Social Media & Media Press)',
          'External Relations (Partnerships & Alliances)',
        ],
        projectsTitle: 'Project Bureaus (Program Execution)',
        projects: [
          'Disaster Prevention Bureau (Student Summits & Shelter Improvements)',
          'Disaster Recovery Bureau (Noto Field Relief & Culinary Culture Heritage)',
          'Regional & Fundraising Bureau (Street Fundraising & Local Disaster Expos)',
          'Global Initiatives Bureau (Y-VITAL & Model Disaster UN)',
        ],
        policyTitle: 'Policy Research Council & Communities',
        policy: [
          'Policy Research Council (Policy Proposals & Legislative Research)',
          'Youth Community NSF PROJECTS',
          'Cross-Party Evacuation Shelter Parliamentary Group Secretariat Support',
        ],
      },
      legal: {
        sub: 'ORGANIZATION OVERVIEW',
        heading: 'Legal Details',
        nameLabel: 'Organization Legal Name',
        // 正式名称（日本語）＋英語表記
        nameValue: '特定非営利活動法人 日本若者防災復興協会 (Japan Youth Resilience Action Consortium / JYRAC)',
        corpNumLabel: 'Corporate Number',
        corpNumValue: '2010005042019',
        corpNumSub: '(National Tax Agency Corporate Number)',
        certDateLabel: 'Certification / Registration Date',
        certDateValue: 'Certified: June 18, 2026 (Tokyo Metropolitan Government) / Registered: June 21, 2026',
        repLabel: 'Representative',
        repValue: 'President: Sohtaro Kubo',
        addressLabel: 'Principal Office',
        addressValue: '603, 4-4-6 Kohinata, Bunkyo-ku, Tokyo, 112-0006, Japan',
        purposeLabel: 'Statutory Purpose & Key Domains',
        purposeValue: 'Engaging in youth-led disaster prevention, mitigation, and post-disaster recovery to enhance community disaster preparedness and contribute to the realization of a safe, resilient, and sustainable society.',
        purposeSub: '(Focus Domains: Resilience Education, On-site Disaster Relief, Community Outreach & Fundraising, Global Exchange, Policy Advocacy)',
        achievementsLabel: 'Major Achievements',
        achievementsValue: 'Co-hosted National Student Disaster Summit 2026 with the Cabinet Office, evacuation shelter policy proposals, Noto on-site volunteer relief, 59 street fundraising campaigns (over 2.6 million JPY raised).',
        contactLabel: 'Official Contact',
        contactSub: '(PR Office: jyrac.pr@gmail.com)',
        domainLabel: 'Domain & Infrastructure',
        domainValue: 'The official domain (jyrac.stki.org) is operated under formal authorization and gratuitous loan by our partner youth platform "TRANs".',
      },
    },
  },
};
