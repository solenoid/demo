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
      // {
      //   text: 'Tutorials',
      //   items: [],
      // },
      {
        text: 'Guides',
        collapsible: true,
        items: [
          {
            text: 'Upgrading',
            link: '/upgrading',
          },
          {
            text: 'Bootstrapping Docs',
            link: '/bootstrapping-docs',
          },
        ],
      },
      // {
      //   text: 'References',
      //   collapsible: true,
      //   collapsed: true,
      //   items: [],
      // },
      // {
      //   text: 'Explanations',
      //   collapsible: true,
      //   collapsed: true,
      //   items: [],
      // },
    ],
  },
})

// end vitepress config
