import { Language } from '../../types';

export const NAV_ITEMS: Record<Language, { id: string; label: string }[]> = {
  zh: [
    { id: 'dashboard', label: '主页' },
    { id: 'portfolio', label: '作品' },
    // Article module temporarily hidden.
    // Re-enable when blog content is ready.
    { id: 'about', label: '教育' },
    { id: 'contact', label: '联系' }
  ],
  en: [
    { id: 'dashboard', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    // Article module temporarily hidden.
    // Re-enable when blog content is ready.
    { id: 'about', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]
};
