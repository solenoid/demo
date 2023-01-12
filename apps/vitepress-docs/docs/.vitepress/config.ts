// begin vitepress config

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Demo',
  cleanUrls: 'without-subfolders',
  lastUpdated: true,
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
