// begin vitepress config

import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  cleanUrls: 'without-subfolders',
  lastUpdated: true,
  title: 'Demo Docs',
  description: 'Demo docs for what is built or destroyed',
  themeConfig: {
    sidebar: [
      {
        text: 'Guides',
        items: [
          {
            text: 'Bootstrapping Docs',
            link: '/bootstrapping-docs',
          },
          {
            text: 'Upgrading',
            link: '/upgrading',
          },
        ],
      },
    ],
  },
})

// end vitepress config
