# Upgrading

## Upgrades and Updates

To check the state of dependencies run:

```zsh
# short options
pnpm -r outdated
# long options
pnpm --recursive outdated
```

To update to the latest interactively run:

```zsh
# short options
pnpm -irL update
# long options
pnpm --interactive --recursive --latest update
```

To update `shared` run:

```zsh
# short options
pnpm -irLF './shared/**' update
# long options
pnpm --interactive --recursive --latest --filter './shared/**' update
```

To update `apps` run:

```zsh
# short options
pnpm -irLF './apps/**' update
# long options
pnpm --interactive --recursive --latest --filter './apps/**' update
```

Check that things still work well.

Then commit any `package.json` and `pnpm-lock.yaml` files that changed.
