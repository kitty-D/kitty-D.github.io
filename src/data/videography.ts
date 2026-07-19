import { Project, Category } from '../../types';

export const VIDEOGRAPHY_DATA: Project[] = [
  {
    id: 'video-sample-1',
    common: {
      category: Category.INTERNSHIP,
      image: 'https://via.placeholder.com/1920x1080?text=Video+Cover',
      bilibiliId: 'BVxxxxxxx',
    },
    zh: {
      title: '示例视频项目',
      subtitle: '纪录片 / 短片',
      description: '在此描述视频主题、拍摄手法与创作过程。',
      role: '导演 / 剪辑',
      tags: ['纪录片', '4K'],
      awards: [],
      concept: '',
      roleDetail: '',
    },
    en: {
      title: 'Sample Video Project',
      subtitle: 'Documentary / Short Film',
      description: 'Describe the theme, shooting approach, and creative process.',
      role: 'Director / Editor',
      tags: ['Documentary', '4K'],
      awards: [],
      concept: '',
      roleDetail: '',
    },
  },
];
