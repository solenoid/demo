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
            text: 'How-To Guides',
            link: '/guides',
          },
          {
            text: 'Upgrading',
            link: '/guides/upgrading',
          },
        ],
      },
      {
        text: 'Explanations',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Upgrading in Depth',
            link: '/explanations/upgrading-in-depth',
          },
        ],
      },
      // {
      //   text: 'References',
      //   collapsible: true,
      //   collapsed: true,
      //   items: [],
      // },
      {
        text: 'Historical References',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Bootstrapping Docs',
            link: '/historical/bootstrapping-docs',
          },
        ],
      },
    ],
  },
})

// end vitepress config
