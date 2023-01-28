## Get a version of node

A prerequisite is to [install pnpm](install-pnpm.md), so please do that if you
have not already done so.

To get `node` aka [Node.js](https://nodejs.org/) run:

```shell
pnpm env use -g 18
```

This will get that version and use it as the system default node using
[pnpm env](https://pnpm.io/cli/env).

## List versions of node

Running `pnpm env ls` will show what versions of node you have installed. The
system default will have a `*` before it.

```shellsession
$ pnpm env ls
  16.19.0
* 18.13.0
```

The `*` indicates which is your default version for the system. You can safely
remove any version you would like and it will reinstalled as needed.

## Remove a version of node

To remove a version from the list do this for the version you want to remove.

```shell
pnpm env rm -g 16.19.0
```

## Pin a version of node using .npmrc

Add the version as output from the list into a
[`.npmrc` file](https://pnpm.io/npmrc#use-node-version)

```
use-node-version = 16.19.0
```

This will override the system default node when using `pnpm` and that `.npmrc`
file. This will not impact the system default `node` version so be aware that
running `node` and `pnpm node` can have different versions depending on your
`.npmrc` setups.

## Verify node location

If everything has worked out and your `~/.zshrc` file is all updated you can
verify with the following:

```shellsession
$ which node
/Users/you/Library/pnpm/node
$ pnpm which node
/Users/you/Library/pnpm/nodejs/16.19.0/bin/node
```

The important part to note is that `node` is inside the `~/Library/pnpm/`
directory and uses either the system default or the `.npmrc` specific version.

If you've had Nvm or Volta on your system in the past to manage `node` versions,
there are more required steps to [migrate to pnpm](migrate-to-pnpm.md).

If you are still have problems verifying your `node` location after you've tried
to [migrate to pnpm](migrate-to-pnpm.md) please ask for help.

## Verify node installation

You can check what version of `node` you have with these commands.

```shellsession
$ node -v
v18.13.0

$ pnpm node -v
v16.19.0
```

This will verify your whole setup showing minimal debug information.

```shell
pnpm node -e 'console.log(`
Minimal debug info
node ${process.version}
npm_ua ${process.env.npm_config_user_agent}`)'
```

The output should look similar to this.

```shellsession
$ pnpm node -e 'console.log(`
Minimal debug info
node ${process.version}
npm_ua ${process.env.npm_config_user_agent}`)'

Minimal debug info
node v18.13.0
npm_ua pnpm/7.25.1 npm/? node/v14.19.2 darwin x64
```

If your output does not look like you are expecting please ask for help.
