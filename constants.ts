import { Category, Project, Experience, Skill, Language, HonorsData, Article, ArticleCategory } from './types';
import { Sparkles, Image, History, Send } from 'lucide-react';
import { PROJECT_DATA } from './src/data/projects';
import { ARTICLE_DATA } from './src/data/articles';

export const CATEGORY_LABELS: Record<Language, Record<string, string>> = {
  zh: {
    'All': '全部',
    'Product Design': '产品设计',
    'User Experience': '用户体验',
    'Brand Design Research': '品牌设计研究',
    'INTERNSHIP': '实习积累'
  },
  en: {
    'All': 'All',
    'Product Design': 'Product Design',
    'User Experience': 'User Experience',
    'Brand Design Research': 'Brand Design Research',
    'INTERNSHIP': 'Internship'
  }
};

export const ARTICLE_LABELS: Record<Language, Record<string, string>> = {
  zh: {
    'All': '全部',
    [ArticleCategory.DIT]: 'DiT | 数媒与课程',
    [ArticleCategory.LUNA]: 'LUNA | 影像相关',
    [ArticleCategory.TALK]: '瞎叨be叨 | 杂记',
    [ArticleCategory.AFTER8]: 'After8 | 聊艺术',
    [ArticleCategory.SERENITY]: '山海疗养院 | 游记'
  },
  en: {
    'All': 'All',
    [ArticleCategory.DIT]: 'DiT | DMT & Courses',
    [ArticleCategory.LUNA]: 'LUNA | Visual Arts',
    [ArticleCategory.TALK]: 'Random Thoughts',
    [ArticleCategory.AFTER8]: 'After8 | Art Talk',
    [ArticleCategory.SERENITY]: 'Serenity Vista | Travel'
  }
};

const INTERNSHIP_PROJECT_ORDER = ['mw_ip', 'dwp', 'gimbal', 'charger', 'selfiestick'];

const orderedProjectData = [...PROJECT_DATA].sort((a: any, b: any) => {
  const aIndex = INTERNSHIP_PROJECT_ORDER.indexOf(a.id);
  const bIndex = INTERNSHIP_PROJECT_ORDER.indexOf(b.id);

  if (aIndex === -1 && bIndex === -1) return 0;
  if (aIndex === -1) return 1;
  if (bIndex === -1) return -1;
  return aIndex - bIndex;
});

export const PROJECTS: Record<Language, Project[]> = {
  zh: orderedProjectData.map((p: any) => {
    if (p.common) {
      return {
        id: p.id,
        ...p.common,
        ...p.zh,
        bilingualTitle: {
          zh: p.zh.title,
          en: p.en.title
        }
      };
    }
    return {
      id: p.id,
      ...p
    };
  }),
  en: orderedProjectData.map((p: any) => {
    if (p.common) {
      return {
        id: p.id,
        ...p.common,
        ...p.en,
        bilingualTitle: {
          zh: p.zh.title,
          en: p.en.title
        }
      };
    }
    return {
      id: p.id,
      ...p
    };
  })
};

export const ARTICLES: Record<Language, Article[]> = {
  zh: ARTICLE_DATA.map(a => ({
    id: a.id,
    ...a.common,
    ...a.zh
  })),
  en: ARTICLE_DATA.map(a => ({
    id: a.id,
    ...a.common,
    ...a.en
  }))
};
