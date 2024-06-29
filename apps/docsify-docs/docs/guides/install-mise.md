## Get mise

To get `mise` aka [mise-en-place](https://mise.jdx.dev/) you can follow the
[getting started](https://mise.jdx.dev/getting-started.html) steps. The first
step to install is:

```shell
curl https://mise.run | sh
```

The difference between shims and activate is still being evaluated.

Once you have activate or shims in place you can manage tools like
[Node.js](https://mise.jdx.dev/lang/node.html),
[Java](https://mise.jdx.dev/lang/java.html),
[Python](https://mise.jdx.dev/lang/python.html), and others.

If you're new to `mise` some common commands are:

```
mise install # fetches and installs tools
mise doctor  # check your setup
mise help    # see what's available
mise use ... # add or change tools and versions
mise rm  ... # uninstall a tool
mise ls      # show tools on your system
```

Here is how you can install and verify tools needed in this repository.

```shell
# get tools, pacakage managers, and packages installed
mise install
pnpm install

# verify tool versions
mise -v
pnpm -v
node -v
```

This repository auto enables [corepack](https://github.com/nodejs/corepack) by
having [`MISE_NODE_COREPACK`](https://mise.jdx.dev/lang/node.html#configuration)
turned on in the env configuration. This means that [pnpm](https://pnpm.io/) is
available and the version to use is specified in `package.json` using the
[packageManager](https://nodejs.org/api/packages.html#packagemanager) field.
