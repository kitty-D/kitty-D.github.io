import { Language, Category } from '../../types';

export interface SiteContent {
  personal: {
    name: string;
    englishName: string;
    heroTitle: string;
    about: string;
  };
  contact: {
    baseLabel: string;
    locationValue: string;
    contactLabel: string;
    emailMeLabel: string;
    email: string;
    hello: string;
    intro: string;
    tooltip: string;
  };
  social: {
    github: {
      url: string;
      handle: string;
    };
    wechat: {
      url: string;
      tooltipHost: string;
      handle: string;
    };
    xiaohongshu: {
      url: string;
      tooltipHost: string;
      handle: string;
    };
    bilibili: {
      url: string;
      tooltipHost: string;
      handle: string;
    };
    px500: {
      url: string;
      tooltipHost: string;
      handle: string;
    };
  };
  seo: {
    title: string;
    description: string;
    themeColor: string;
  };
  assets: {
    logo: string;
    avatar: string;
  };
  home: Record<Language, {
    heroItems: { text: string; annotation: string; category: Category | null }[];
    intro: string;
    selectedWorks: string;
    years: string;
  }>;
  projects: {
    photography: Array<any>;
    design: Array<any>;
    dev: Array<any>;
    videography: Array<any>;
  };
}

export const SITE_CONTENT: SiteContent = {
  personal: {
    name: '',
    englishName: 'Kitty Duan',
    heroTitle: '苟日新，日日新，又日新',
    about: '宁波大学 2020-2024本科 工业设计｜福州大学 2024-2027研究生 设计学',
  },
  contact: {
    baseLabel: 'BASE',
    locationValue: 'Xiamen, China',
    contactLabel: '取得联系',
    emailMeLabel: '邮箱',
    email: '2569503257@qq.com',
    hello: '你好 ;-)',
    intro: '欢迎探讨与合作。',
    tooltip: '目前在厦门读研，工作地点都可以接受',
  },
  social: {
    github: { url: 'https://github.com/yourusername', handle: '@yourusername' },
    wechat: { url: 'https://example.com/wechat-profile', tooltipHost: 'mp.weixin.qq.com', handle: 'YourWeChatID' },
    xiaohongshu: { url: 'https://www.xiaohongshu.com/user/profile/your-id', tooltipHost: 'xiaohongshu.com', handle: 'YourID' },
    bilibili: { url: 'https://space.bilibili.com/your-id', tooltipHost: 'bilibili.com', handle: 'YourID' },
    px500: { url: 'https://500px.com.cn/yourusername', tooltipHost: '500px.com.cn', handle: 'YourID' },
  },
  seo: {
    title: 'Kitty Duan — Portfolio',
    description: '',
    themeColor: '#ffffff',
  },
  assets: {
    logo: '/logo.svg',
    avatar: '/avatar.jpg',
  },
  home: {
    zh: {
      heroItems: [
        { text: '用户体验', annotation: '（研究生方向）', category: Category.UX },
        { text: '产品设计', annotation: '（作品积累）', category: Category.PRODUCT },
        { text: '品牌设计研究', annotation: '（前期调研）', category: Category.BRAND },
        { text: '实习积累', annotation: '（一些收获）', category: Category.INTERNSHIP },
      ],
      intro: '苟日新，日日新，又日新',
      selectedWorks: '精品作品',
      years: '[ 2020 — 2026 ]',
    },
    en: {
      heroItems: [
        { text: 'User Experience', annotation: 'Research Direction', category: Category.UX },
        { text: 'Product Design', annotation: 'Portfolio', category: Category.PRODUCT },
        { text: 'Brand Design Research', annotation: 'Preliminary Research', category: Category.BRAND },
        { text: 'Internship', annotation: 'Experience', category: Category.INTERNSHIP },
      ],
      intro: 'Always Learning. Always Creating.',
      selectedWorks: 'Selected Works',
      years: '[ 2020 — 2026 ]',
    },
  },
  projects: {
    photography: [],
    design: [],
    dev: [],
    videography: [],
  },
};
