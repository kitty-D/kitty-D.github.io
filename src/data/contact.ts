import { Language } from '../../types';
import { SITE_CONTENT } from './siteContent';

export interface SocialLinks {
  wechat: string;
  xiaohongshu: string;
  bilibili: string;
  px500: string;
}

export interface ContactContent {
  baseLabel: string;
  locationValue: string;
  contactLabel: string;
  emailMeLabel: string;
  email: string;
  hello: string;
  intro: string;
  socials: SocialLinks;
  tooltip?: string;
  githubLabel: string;
  footerDesign: string;
}

export const CONTACT_DATA: Record<Language, ContactContent> = {
  zh: {
    baseLabel: SITE_CONTENT.contact.baseLabel,
    locationValue: SITE_CONTENT.contact.locationValue,
    contactLabel: SITE_CONTENT.contact.contactLabel,
    emailMeLabel: SITE_CONTENT.contact.emailMeLabel,
    email: SITE_CONTENT.contact.email,
    hello: SITE_CONTENT.contact.hello,
    intro: SITE_CONTENT.contact.intro,
    socials: {
      wechat: SITE_CONTENT.social.wechat.handle,
      xiaohongshu: SITE_CONTENT.social.xiaohongshu.handle,
      bilibili: SITE_CONTENT.social.bilibili.handle,
      px500: SITE_CONTENT.social.px500.handle
    },
    githubLabel: 'GitHub',
    footerDesign: SITE_CONTENT.seo.description,
    tooltip: SITE_CONTENT.contact.tooltip
  },
  en: {
    baseLabel: SITE_CONTENT.contact.baseLabel,
    locationValue: SITE_CONTENT.contact.locationValue,
    contactLabel: 'Get in touch',
    emailMeLabel: 'Email Me',
    email: SITE_CONTENT.contact.email,
    hello: 'Hello ;-)',
    intro: 'Welcome to discuss & cooperate.',
    socials: {
      wechat: SITE_CONTENT.social.wechat.handle,
      xiaohongshu: SITE_CONTENT.social.xiaohongshu.handle,
      bilibili: SITE_CONTENT.social.bilibili.handle,
      px500: SITE_CONTENT.social.px500.handle
    },
    githubLabel: 'GitHub',
    footerDesign: SITE_CONTENT.seo.description,
    tooltip: 'Add a short note about your location'
  }
};
