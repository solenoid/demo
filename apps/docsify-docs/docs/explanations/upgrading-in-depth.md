# Upgrading in Depth

## Top Level Upgrades

Some dependencies are managed at the top level of the mono repo. They are things
like `nx` for mono repo management, or shared formatting concerns like
`prettier` that want benefit from being the same across all apps and shared
concerns. Other aspects like testing could be managed here with per package
overrides as needed. If [Rome Tools](https://rome.tools/) were to get adopted it
would be at this top level and replace aspects like `prettier` if that happens.

To check the state of the top level dependencies run:

```zsh
pnpm outdated
```

If that has not output that's great news it means those are all up to date!

If it shows something that needs an update like `nx` for example run:

```zsh
pnpm update --latest nx
```

Running without any packages will update all that are outdated, so that's a
quick way to update all when appropriate.

You can also do updates with an interactive prompt on the command line. This
lets you pick of all the potential updates which ones you want to do now.

```zsh
pnpm update --interactive --latest
pnpm update -iL
```

Check that things still work well and commit the `package.json` changes along
with the `pnpm-lock.yaml` changes and continue with the others that need
upgrades.

## Shared Upgrades

Shared packages are used across apps and are made up of a mix of concerns:

- shared library code like UI elements, or icons
- configs for things like linting or typescript
- other concerns like utils and build tools

To check the state of the "shared" dependencies run:

```zsh
pnpm outdated --filter './shared/**' -r
pnpm outdated --filter '{shared/**}...' -r
```

For more information on how `--filter` works in `pnpm` and specifically the
"glob" support we're using here see
[`--filter ./<glob>, --filter {<glob>}`](https://pnpm.io/filtering#--filter-glob---filter-glob).
Also always remember to put single `'` or double `"` quotes around your globs so
they are given to `pnpm` and your shell doesn't try and expand them. Note also
the `-r` or `--recursive` option is used since all "shared" or "apps" are nested
and not at the top level.

To update things that are outdated run:

```zsh
# to update everything
pnpm update --filter './shared/**' -r --latest
# to update a specific package or packages eslint in this case
pnpm update --filter './shared/**' -r --latest eslint
# with an interactive prompt using short option names
pnpm update -F './shared/**' -irL eslint
```

Check that things still work well and commit the `package.json` changes along
with the `pnpm-lock.yaml` changes and continue with the others that need
upgrades.

A special note for `eslint-config-next` is you should keep the version it uses
in coordination with any `next` version in the apps. This seems annoying and is
another vote in the direction of moving to something like
[Rome](https://rome.tools/) to avoid this config and application coordination
dance on versions. If that comes up combine a shared upgrade of that with the
`next` version that would show up in the next app specific upgrades.

```zsh
# check both config and next together
pnpm -r --filter './apps/**' --filter './shared/**' outdated eslint-config-next next
# update both config and next together to the latest
pnpm -r --filter './apps/**' --filter './shared/**' update --latest eslint-config-next next
```

## Application Upgrades

Applications (apps) combine shared concerns into a stand alone application. Each
folder in "apps" is a standalone application that can be independently build and
deployed.

To check if any of the "apps" are outdated run:

```zsh
pnpm outdated --filter './apps/**' -r
pnpm outdated --filter '{apps/**}...' -r
```

To update things that are outdated run:

```zsh
# to update everything
pnpm update --filter './apps/**' -r --latest
# to update a specific package or packages vite and astro in this case
pnpm update --filter './apps/**' -r --latest vite astro
```

## All at once

You can take out `--filter` options from above and do things mono repo wide when
applicable if you prefer.

```zsh
# check outdated top level
pnpm outdated
# update to the latest top level
pnpm update --latest
# check outdated recursively
pnpm -r outdated
# update to the latest recursively
pnpm -r update --latest
# update using an interactive prompt for what to update
pnpm -r update --latest --interactive
# update with short options same as the last
pnpm update -irL
```
