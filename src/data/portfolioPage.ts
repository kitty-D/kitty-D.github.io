import { Language } from '../../types';

export interface PortfolioPageContent {
  title: string;
  description: string;
}

export const PORTFOLIO_PAGE_DATA: Record<Language, PortfolioPageContent> = {
  zh: {
    title: '作品',
    description: '近几年的作品积累与探索'
  },
  en: {
    title: 'Portfolio',
    description: 'Recent works and explorations'
  }
};
