# Bootstrapping Documentation

To get the documentation going the steps to
[getting started](https://docsify.js.org/#/quickstart) with Docsify were
somewhat followed. There are some opinions to have it fit in with the current
norms for this repo:

1. Make `package.json` conventional in what fields are used and ordering.
2. Pick a port other than `3000` to serve on to avoid port collisions.

```zsh
# from the root of the mono repo
cd apps
mkdir docsify-docs # fits in with apps naming conventions so far
cd docsify-docs
pnpm init # pnpm is what is used for this mono repo
# edited by hand to fit in with other package.json files in this repo
pnpm add --save-dev docsify-cli
# add script section with common names using port 9000
pnpm docsify init ./docs
pnpm dev # see things working
touch docs/bootstrapping-docs.md
# write this document you're reading now and view it
open http://localhost:9000/bootstrapping-docs.html

# decide to have this be the stopping point before sprawling into the sidebar
# commit work so far
cd ../..
git add apps/docsify-docs
git add pnpm-lock.yaml
git commit -m 'docsify-docs bootstrapped'
```

That should get you a up and running with a no config setup. The things that is
very important to have that comes from having config is at least a sidebar.

With docsify you change config in `index.html`, this will turn on the sidebar.

```diff
apps/docsify-docs/docs/index.html
     <script>
       window.$docsify = {
+        loadSidebar: true,
       }
     </script>
```

You can create the `_sidebar.md` file however you want. Here is a way to do it
on the command line.

```zsh
# way to make the starter sidebar through the shell
cat <<EOF > apps/docsify-docs/docs/_sidebar.md
- Guides

  - [Upgrading](upgrading.md)

- Explanations

  - [Upgrading in Depth](upgrading-in-depth.md)

- Historical References

  - [Bootstrapping Docs](bootstrapping-docs.md)
EOF
```

After this you should have some docs with a sidebar.
