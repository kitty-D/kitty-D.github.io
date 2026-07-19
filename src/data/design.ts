import { Category } from '../../types';

export const DESIGN_DATA = [
  {
    id: 'design-sample-1',
    common: {
      category: Category.UX,
      image: 'https://via.placeholder.com/800x600?text=Design+Project',
      figmaUrl: 'https://www.figma.com/design/example',
      gallery: [
        'https://via.placeholder.com/800x600?text=Gallery+1',
        'https://via.placeholder.com/800x600?text=Gallery+2',
      ],
    },
    zh: {
      title: '示例设计项目',
      subtitle: 'UI/UX 设计',
      description: '在此描述设计理念、视觉风格与成果。',
      role: 'UI 设计师',
      tags: ['Figma', '品牌', 'UI'],
      awards: [],
      concept: '设计概念与灵感来源。',
      roleDetail: '独立完成视觉系统与界面设计。',
    },
    en: {
      title: 'Sample Design Project',
      subtitle: 'UI/UX Design',
      description: 'Describe your design concept, visual style, and outcomes.',
      role: 'UI Designer',
      tags: ['Figma', 'Branding', 'UI'],
      awards: [],
      concept: 'Design concept and inspiration.',
      roleDetail: 'Completed visual system and interface design independently.',
    },
  },
];
