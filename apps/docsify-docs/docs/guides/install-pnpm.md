## Get pnpm

To get [`pnpm`](https://pnpm.io/motivation) run:

```zsh
curl -fsSL https://get.pnpm.io/install.sh | sh -
# for zsh you can do the following or restart your shell
source ~/.zshrc
```

Which is how you do it [on POSIX systems](https://pnpm.io/installation).

If you want tab completions which are helpful for local development run:

```zsh
pnpm install-completion # say y to change file
# for zsh you can do the following or restart your shell
source ~/.zshrc
```

### Verify pnpm installation

You can check what version of `pnpm` you have with these commands.

```console
$ pnpm -v
7.25.1

$ pnpm -h | head -1
Version 7.25.1 (compiled to binary; bundled Node.js v14.19.2)
```

Next you can [install node](install-node.md) with `pnpm env` to get the version
you want.
