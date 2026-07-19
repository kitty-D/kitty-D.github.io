import { Project, Category } from '../../types';

export const PHOTOGRAPHY_PROJECTS: Project[] = [
  {
    id: 'photo-1',
    common: {
      category: Category.HANDMADE,
      image: 'https://via.placeholder.com/1920x1080?text=Photo+Cover',
    },
    zh: {
      title: '示例摄影集',
      subtitle: '风光 / 街拍',
      description: '在此描述摄影系列的主题与创作背景。',
      role: '摄影师',
      tags: ['风光', '街拍'],
      awards: [],
      concept: '',
      roleDetail: '',
    },
    en: {
      title: 'Sample Photo Series',
      subtitle: 'Landscape / Street',
      description: 'Describe the theme and creative background of this photo series.',
      role: 'Photographer',
      tags: ['Landscape', 'Street'],
      awards: [],
      concept: '',
      roleDetail: '',
    },
  },
];
