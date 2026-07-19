import { Language, Experience, HonorsData } from '../../types';

export interface EducationPageContent {
  title: string;
  about: string;
  openToWork: string;
  viewHonorsLabel: string;
  honorsTitle: string;
  competitionsTitle: string;
  scholarshipsLabel: string;
  titlesLabel: string;
  experiences: Experience[];
  honors: HonorsData;
}

export const EDUCATION_DATA: Record<Language, EducationPageContent> = {
  zh: {
    title: "教育经历",
    about: "",
    openToWork: "边学边做+等待机会",
    viewHonorsLabel: "查看在校荣誉",
    honorsTitle: "在校荣誉",
    competitionsTitle: "竞赛奖项",
    scholarshipsLabel: "奖学金",
    titlesLabel: "荣誉称号",
    experiences: [
      {
        id: '1',
        year: '2024 - 2027',
        title: '交叉学科 / 设计学',
        institution: '福州大学',
        description: '从感性工学出发，结合设计学和工学，探索人机交互和用户体验设计',
        type: 'education'
      },
      {
        id: '2',
        year: '2020 - 2024',
        title: '工科 / 工业设计',
        institution: '宁波大学',
        description: '本科方向为文创设计，从叙事设计角度探索设计创意',
        type: 'education'
      },
    ],
    honors: {
      scholarships: [
        "浙江省奖学金",
        "宁波大学校奖学金",
        "福州大学中期二等奖学金"
      ],
      titles: [
        "宁波大学优秀团干部",
        "宁波大学优秀校学生会干事"
      ],
      competitions: [
        {
          level: "竞赛类",
          awards: [
            "一等奖 | 全国大学生创新体验竞赛国赛",
            "国奖若干 | 全国三维数字化创新设计大赛",
            "奖项若干 | 米兰设计周大赛",
            "奖项若干 | NCDA未来设计师设计大赛",
            "全国三等奖 | UXDA国际用户体验创新大赛",
            "省级二等奖 | 中美青年创客大赛"
          ]
        }
      ]
    }
  },
  en: {
    title: "Education",
    about: "A brief introduction about your educational background and passions.",
    openToWork: "Learning by Doing + Seeking Internship",
    viewHonorsLabel: "View Honors & Awards",
    honorsTitle: "Honors & Awards",
    competitionsTitle: "Competition Awards",
    scholarshipsLabel: "Scholarships",
    titlesLabel: "Honorary Titles",
    experiences: [
      {
        id: '1',
        year: '20XX - Present',
        title: 'Degree / Major',
        institution: 'Your University',
        description: 'Brief description of your studies.',
        type: 'education'
      }
    ],
    honors: {
      scholarships: [
        "Zhejiang Provincial Scholarship",
        "Ningbo University Scholarship",
        "Fuzhou University Mid-term Second-class Scholarship"
      ],
      titles: [
        "Outstanding Youth League Cadre, Ningbo University",
        "Outstanding Student Union Officer, Ningbo University"
      ],
      competitions: [
        {
          level: "Competitions",
          awards: [
            "National First Prize | National College Student Innovation Experience Competition",
            "Multiple National Awards | National 3D Digital Innovation Design Competition",
            "Multiple Awards | Milan Design Week Competition",
            "Multiple Awards | NCDA Future Designer Competition",
            "National Third Prize | UXDA International User Experience Innovation Competition"
          ]
        }
      ]
    }
  }
};