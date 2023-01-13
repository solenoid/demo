# Bootstrapping Documentation

To get the documentation going the steps to
[getting started](https://vitepress.vuejs.org/guide/getting-started) with
VitePress were mostly followed. There are some opinions to have it fit in with
the current norms for this repo:

1. Make `package.json` conventional in what fields are used and ordering.
2. Drop the `docs:` prefix on scripts to treat docs as a standalone and
   equivalent app in what script commands are available, and also avoid the
   "using : in script name" norm that help `nx` be easy to use.

```zsh
# from the root of the mono repo
cd apps
mkdir vitepress-docs # fits in with apps naming conventions so far
cd vitepress-docs
pnpm init # pnpm is what is used for this mono repo
# edited by hand to fit in with other package.json files in this repo
pnpm add --save-dev vitepress vue
# add script section from https://vitepress.vuejs.org/guide/getting-started
# dropping the `docs:` prefix to fit in with the no colon rules
mkdir docs && echo '# Hello VitePress' > docs/index.md
pnpm dev # see things working
touch docs/bootstrapping-docs.md
# write this document you're reading now and view it
open http://localhost:5173/bootstrapping-docs.html

# add in a minimal .gitignore file
echo '# Relevant for this vitepress app while figuring things out' > .gitignore
echo 'docs/.vitepress/cache' >> .gitignore
echo 'docs/.vitepress/dist' >> .gitignore

# decide to have this be the stopping point before sprawling into the sidebar
# commit work so far
cd ../..
git add apps/vitepress-docs
git add pnpm-lock.yaml
git commit -m 'vitepress-docs bootstrapped'
```

That should get you a up and running with a no config setup. The things that is
very important to have that comes from having config is at least a sidebar.

```zsh
# create the vitepress config file
touch apps/vitepress-docs/docs/.vitepress/config.ts

# way to make the starter config through the shell
cat <<EOF > apps/vitepress-docs/docs/.vitepress/config.ts
// begin vitepress config

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Demo',
  cleanUrls: 'without-subfolders',
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Guides',
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
    ],
  },
})

// end vitepress config
EOF
```

After this you should have some docs with a sidebar.
