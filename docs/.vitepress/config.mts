import { defineConfig } from 'vitepress';
import { pt } from './pt';
import { en } from './en';

export default defineConfig({
  head: [['link', { rel: 'icon', href: '../../public/logo.png' }]],
  title: "Utilify",
  description: "A practical library of utility functions",
  lastUpdated: true,
  cleanUrls: true,
  rewrites: {
    'en/:rest*': ':rest*'
  },
  locales: {
    root: {
      label: "English",
      ...en
    },
    pt: {
      label: "Português",
      ...pt
    },
  },
  themeConfig: {
    i18nRouting: true,
    logo: '../logo.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pattuzzoj/utilis' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright ©2025'
    }
  },
  markdown: {
    lineNumbers: false
  },
  ignoreDeadLinks: true
})