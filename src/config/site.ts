/**
 * 站点全局配置 —— 改个人内容时优先编辑此文件
 * Site-wide config — edit this file first when customizing
 */
import { SITE_CONTENT } from '../data/siteContent';

export const SITE_CONFIG = {
  brand: {
    primary: SITE_CONTENT.personal.name,
    secondary: SITE_CONTENT.personal.englishName,
  },
  copyright: SITE_CONTENT.personal.name,
  footerNote: SITE_CONTENT.seo.description,
  github: SITE_CONTENT.social.github,
  social: {
    wechat: {
      url: SITE_CONTENT.social.wechat.url,
      tooltipHost: SITE_CONTENT.social.wechat.tooltipHost,
    },
    xiaohongshu: {
      url: SITE_CONTENT.social.xiaohongshu.url,
      tooltipHost: SITE_CONTENT.social.xiaohongshu.tooltipHost,
    },
    bilibili: {
      url: SITE_CONTENT.social.bilibili.url,
      tooltipHost: SITE_CONTENT.social.bilibili.tooltipHost,
    },
    px500: {
      url: SITE_CONTENT.social.px500.url,
      tooltipHost: SITE_CONTENT.social.px500.tooltipHost,
    },
  },
  basePath: '/kitty-D.github.io/',
} as const;
