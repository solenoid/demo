To check the state of dependencies run:

```shell
# short options
pnpm -r outdated
# long options
pnpm --recursive outdated
```

To update (aka upgrade) to the latest interactively run:

```shell
# short options
pnpm -irL update
# long options
pnpm --interactive --recursive --latest update
```

To update `shared` run:

```shell
# short options
pnpm -irLF './shared/**' update
# long options
pnpm --interactive --recursive --latest --filter './shared/**' update
```

To update `apps` run:

```shell
# short options
pnpm -irLF './apps/**' update
# long options
pnpm --interactive --recursive --latest --filter './apps/**' update
```

Check that things still work well.

Then commit any `package.json` and `pnpm-lock.yaml` files that changed.
