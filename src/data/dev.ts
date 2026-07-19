import { Project, Category } from '../../types';

export const DEV_DATA: Project[] = [
  {
    id: 'dev-sample-1',
    common: {
      category: Category.INTERNSHIP,
      image: 'https://via.placeholder.com/800x600?text=Dev+Project',
      icon: 'terminal',
      websiteUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/your-repo',
    },
    zh: {
      title: '示例开发项目',
      subtitle: 'React / TypeScript',
      description: '在此描述你的项目功能与亮点。',
      role: '独立开发',
      tags: ['React', 'TypeScript'],
      roleDetail: '负责前后端设计与实现。',
    },
    en: {
      title: 'Sample Dev Project',
      subtitle: 'React / TypeScript',
      description: 'Describe your project features and highlights here.',
      role: 'Solo Developer',
      tags: ['React', 'TypeScript'],
      roleDetail: 'Designed and built the full stack.',
    },
  },
];
