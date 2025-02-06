# Getting Started with mise

<aside>

## Assumptions

This tutorial is written for macOS users with `zsh` as the shell (macOS has zsh
as the default shell). Please refer to the `mise` documentation if you use a
different shell (yes fish is well supported along with bash). See
[installing mise](https://mise.jdx.dev/installing-mise.html) or
[getting started](https://mise.jdx.dev/getting-started.html) for all the options
available across OSes and shells if you are not using `zsh` on macOS. You can
check your shell on macOS by running `dscl . -read ~ UserShell` you should see
`zsh` in the output by default.

</aside>

## Install mise

The first step is to install `mise` on your system. This guide is trying to
remove options and choices. If you want to see all options and decide how you
want to proceed please see [the mise docs](https://mise.jdx.dev/) instead.

```shell
curl https://mise.run | sh
```

## Setup Activation and Shims

This will add activation along with shims so you can work on an interactive
command line or in an IDE because it is setup for both ways.

### Setup Activation

Add activation line to `.zshrc` file. This works best for interactive shells
(that show you a prompt).

```shell
echo 'eval "$(~/.local/bin/mise activate zsh)"' >> ~/.zshrc
```

If you like to mark sections in your `.zsrhc` file do this instead which has
comments above and below.

```shell
# Marking the section for mise
echo '# mise' >> ~/.zshrc
echo 'eval "$(~/.local/bin/mise activate zsh)"' >> ~/.zshrc
echo '# mise end' >> ~/.zshrc
```

### Setup Shims

Add shims line to `.zprofile` file. You want shims because IDEs work better with
shims.

```shell
echo 'eval "$(~/.local/bin/mise activate zsh --shims)"' >> ~/.zprofile
```

If you like to mark sections in your `.zprofile` file do this instead which has
comments above and below.

```shell
# marking the section
echo '# mise' >> ~/.zprofile
echo 'eval "$(~/.local/bin/mise activate zsh --shims)"' >> ~/.zprofile
echo '# mise end' >> ~/.zprofile
```

Note that `mise activate` will remove the shims directory so it's fine to call
`mise activate --shims` in the profile file then later call `mise activate` in
an interactive session.

<aside>

### Migration from nvm

Comment out or delete lines from your `~/.zshrc` file that start like this.

`export NVM_DIR ...`

`[ -s "$NVM_DIR ...`

Restart your shell and `nvm ls` should no longer work. If completely removing.

`rm -rf ~/.nvm/`

The `.nvmrc` file can be read by `mise` so leave that file if it exists.

</aside>

## Verify mise Setup

Like `brew` there is a helpful way to verify your `mise` setup. This is very
helpful if you are trying to debug issues with your setup.

```shell
mise doctor # to verify your setup
```

You see something comparable to this.

```shellsession
$ mise doctor
version: 2025.1.17 macos-x64 (2025-01-31)
activated: yes
... lots more information about your setup
No problems found
```

<aside>

### Trust State

If you want to see where `mise` keeps track of state it is in
`~/.local/state/mise/`

Split into these 3 directories.

1. `tracked-configs`
2. `trusted-configs`
3. `ignored-configs`

</aside>

## Trust Configuration

The first time you work in a directory from an organization you trust you should
tell `mise` it should trust that directory now and in the future.

```shell
# Trust the directory you are in
mise trust # a directory that you know
# optional: If you're not sure if you should trust
mise trust --show # to see if it's trusted or not
mise trust --ignore # if you don't want to trust
```

See [trust documentation](https://mise.jdx.dev/cli/trust.html) for more
information.

<aside>

### Install gpg

The tools you install will try and verify with `gpg`. If it's not available you
will get a warning like "mise WARN gpg not found, skipping verification".

For greater security and to stop getting those warnings you can install `gpg`
with brew.

`brew install gpg`

</aside>

## Install Tools

After you have established trust with a directory you can install the tools that
are configured so they're available with the configured versions.

```shell
# Install tools already configured
mise install # to get configured tools
# optional: Add new tool, updates configuration
mise use < tool >@< version > # if not configured
# e.g. mise use node@22 or mise use node@lts
```

## Refresh Tools

More recent versions of tools come out all the time. When you want to get the
latest tools based on the current configuration these are helpful commands to
upgrade, look, and cleanup.

```shell
# Move to more recent tools
mise upgrade # to most recent versions of configured tools
mise up # up is an alias for upgrade if you wanted to type less
mise up -n # shows what would be upgraded
# optional: See if more recent tools exist
mise outdated # shows what tools have more recent versions
# optional: Check state of tools
mise ls # to see what is in use
# optional: Removes no longer used tools
mise prune # remove tools that are not configured
```

## Upgrade Tools and Configuration

When you need to change tools to a more recent version it's the same as when you
added a new tool. Checking what is in use or cleaning up is the same as with a
tool refresh.

```shell
# Install a more recent version of a tool, updates configuration
mise use < tool >@< version > # if not configured
# e.g. mise use node@22 or mise use node@24 etc.
# optional: Check state of tools
mise ls # to see what is in use
# optional: Removes no longer used tools
mise prune # Remove tools that are not configured
```

<aside>

### Roadmap for mise

There is a good [mise roadmap](https://mise.jdx.dev/roadmap.html) that explains
what the project is focused towards. It also lists the
[Anti-goals](https://mise.jdx.dev/roadmap.html#anti-goals) for clarity on what
it isn't focused towards.

</aside>

## Upgrade mise Itself

In general `mise` is an active project that is constantly updating. It has a
built in way to upgrade itself to the most recent version. It also values
backwards compatibility so there is very little risk to upgrading early and
often. It uses Calendar Versioning and explains how in the
[versioning section of the roadmap](https://mise.jdx.dev/roadmap.html#versioning).

```shell
# optional: Check version
mise --version # or mise -v for the short flag
mise self-update # to update mise itself
```

## IDE Integration

To get `mise` setup for you IDE see the
[IDE Integration documentation](https://mise.jdx.dev/ide-integration.html) in
general.

For [VSCode](https://mise.jdx.dev/ide-integration.html#vscode) specifically you
should get the
[Mise VSCode](https://marketplace.visualstudio.com/items?itemName=hverlin.mise-vscode)
plugin that is suggested. It will be very helpful on understanding, editing, and
highlighting the configuration file. It also provides great IDE integration
beyond just the configuration file.

## Conclusion

If you haven't already, go to your favorite repository that has a `mise.toml`
file and try out a `mise install` to see if it's all working for you.
