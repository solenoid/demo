## Getting pnpm

There are many ways to [install pnpm](https://pnpm.io/installation) and for a
Mac OS the suggested way is to use curl as explained in the pnpm documentation.

```zsh
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Running this will get an OS specific build of pnpm that can run without already
having node on your system. The reason this is the suggested way vs.
`brew install pnpm` is installation via `brew` will need `node` to already be on
your system to work. Since we will be using `pnpm env` to manage the verison of
`node` we want to have a functional `pnpm` before having any `node` on your
system.

After running the above you should see output similar to the following assuming
you're using the `zsh` shell, which is the default on Mac OS.

```console
$ curl -fsSL https://get.pnpm.io/install.sh | sh -
==> Extracting pnpm binaries 7.25.1
Copying pnpm CLI from /private/var/.../pnpm to /Users/you/Library/pnpm/pnpm
Appended new lines to /Users/you/.zshrc

Next configuration changes were made:
export PNPM_HOME="/Users/you/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"

To start using pnpm, run:
source /Users/you/.zshrc
```

This will always install the latest `pnpm` if you want an older version instead
follow the documentation on how to use `PNPM_VERSION` to get a pinned version.

At the bottom of your `.zshrc` file a new section will be present.

```zsh
# pnpm
export PNPM_HOME="/Users/you/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end
```

Feel free to move that around in the file wherever you'd like. For example if
you have trailing section for profiling `zsh` like the following it's nice to
move that back to the end of the file.

```zsh
# uncomment for profiling along with beginning line
# zprof
# used to be end of file with one blank line afterwards
```

Like it said you can either run `source ~/.zshrc` in your current shell or start
a new shell will have the same effect.

## Get pnpm version information

You can see what version of `pnpm` you have with the following.

```console
# shorter version information also can use --version
$ pnpm -v
7.25.1

# longer version information including bundled Node.js info.
$ pnpm -h | head -1
Version 7.25.1 (compiled to binary; bundled Node.js v14.19.2)
```

This is helpful if you're trying to figure out if the `pnpm` version may be
causing an issue you're having and comparing versions with what other folks
have. Due to the rapid release cycle for `pnpm` it's unclear how often different
versions of `pnpm` may be the root cause for some problem you're seeing.

### Optionally get tab completions

You can get tab completion that is `pnpm` aware by following the
[Command line tab-completion docs](https://pnpm.io/completion) which links out
to
[this article](https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4)
showing it in use for the fish shell.

It says to do the following:

```zsh
pnpm install-completion
```

That will add the following to your `~/.zshrc` file if you say `y` change file.

```zsh
# tabtab source for packages
# uninstall by removing these lines
[[ -f ~/.config/tabtab/zsh/__tabtab.zsh ]] && . ~/.config/tabtab/zsh/__tabtab.zsh || true
```

It is helpful to add a note above that addition to remind yourself it was `pnpm`
related and again you can move it around in the file like with the original
`pnpm` install.

## Getting node

The suggested way to manage your `node` installs is using `pnpm env` which is a
nice replacement for `nvm`. After getting node via `pnpm env` you can remove
`nvm` which should speed up shell startup time because `nvm` is a known very
slow part of shell startup whereas `pnpm env` is not slow like `nvm` is.

The full `pnpm env` [docs](https://pnpm.io/cli/env) are available and from that
it's suggested to install only LTS releases based on your current needs. You can
look up which
[codenames](https://github.com/nodejs/Release/blob/main/CODENAMES.md) match
which number. So for example Hydrogen is the codename for 18 and there is a
subtle difference between those. When using the codename only versions of 18
after it was marked LTS will be available so `18.12.0` or later for Hydrogen. If
you run the following commands you can see the difference in versions available
for both.

```zsh
pnpm env ls --remote 18
pnpm env ls --remote Hydrogen
```

Once you know what version you want the suggestion is to get it via the major
number so it has the latest `node` for that major release. Following the example
of getting version 18 you can run this command.

```zsh
pnpm env use -g 18
```

That will get the latest version of `node` for that major version along with set
it as the system default `node` to use generally. You can always reset the
system default `node` to a past version by doing that after you've gotten the
later version. If you want a different version put it in place of 18 in the
command. To only use LTS (Long Term Support) releases make sure it's an even
number. If you want to learn more about what the difference between Current,
Active LTS, and Maintenance are for Node.js the
[release phases documentation](https://github.com/nodejs/release#release-phases)
helps clarify what those are and how they change over time.

Here is what a system with a few versions of `node` on it could look like
assuming `18.13.0` is the latest version 18 available.

```console
$ pnpm env ls
  16.19.0
  18.12.1
* 18.13.0
```

The `*` indicates which is your default version for the system.

If you wanted to roll back to the `16.19.0` version use this command.

```console
$ pnpm env use -g 16.19.0
Node.js 16.19.0 is activated
/Users/you/Library/pnpm/node -> /Users/you/Library/pnpm/nodejs/16.19.0/bin/node
$ pnpm env ls
* 16.19.0
  18.12.1
  18.13.0
```

Pick a reasonable default for your system and when it matters you can specify
which node other than the system default using the `.npmrc` file. If you've used
a `.nvmrc` file in the past the way to accomplish that in pnpm is with a
[`.npmrc` file](https://pnpm.io/npmrc#use-node-version)

So instead of reseting your system default you could put the following in your
`.npmrc` file.

```
use-node-version = 16.19.0
```

This will override the system default node when using `pnpm` and that `.npmrc`
file is in use. This will not impact the system default `node` version so be
aware that running `node` and `pnpm node` can have different versions depending
on `.npmrc` setups.

## Verifying node directories

If everything has worked out and your `~/.zshrc` file is all updated you can
verify with the following:

```console
$ which node
/Users/you/Library/pnpm/node
$ pnpm which node
/Users/you/Library/pnpm/nodejs/16.19.0/bin/node
```

## Get node version information

You can see what version of `node` you have with the following.

```console
$ node -v
v18.13.0

$ pnpm node -v
v16.19.0
```

This will show the system default `node` version and `.npmrc` specific `node`
version respectively.

If you want verify your `node` version along with your `pnpm` setup this can
help show information on what versions will be used for both.

```zsh
pnpm node -e 'console.log(`
Minimal debug info
node ${process.version}
npm_ua ${process.env.npm_config_user_agent}`)'
```

What this is doing is it's running `pnpm` (this verifies `pnpm` can run) and
`node` which will help verify the
[`.npmrc` file](https://pnpm.io/npmrc#use-node-version) is being respected if
you have one involved. It then does an `-e` which is the short option to
[eval](https://nodejs.org/api/cli.html#-e---eval-script) of a small snippet of
Javascript. That snippet of Javascript is a `console.log` using a
[Template literal aka Template String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
for what the contents of what it will "log". This has both the `node`
[process.version](https://nodejs.org/api/process.html#processversion) that is
the version of `node` you are using. After that it will show the "npm"
`user-agent` which is set for both `pnpm` or `npm` and follows the
[npm config Environment Variables casing rules](https://docs.npmjs.com/cli/v9/using-npm/config#environment-variables)
for the [user-agent](https://docs.npmjs.com/cli/v9/using-npm/config#user-agent).

The output should look similar to this.

```console
$ pnpm node -e 'console.log(`
Minimal debug info
node ${process.version}
npm_ua ${process.env.npm_config_user_agent}`)'

Minimal debug info
node v18.13.0
npm_ua pnpm/7.25.1 npm/? node/v14.19.2 darwin x64
```

Note that `npm/?` is in the user agent to follow the `npm` definition and is
prefixed with the `pnpm/version` information. Also note the `node` used in the
user agent string is the built in `v14.19.2` version of `node` but the script
itself is running `node` at `v18.13.0`.

## VPN complications

For some of the above there may be extra concerns required if you have something
like Zscaler as your corporate VPN that complicates things. A guess is something
like `NPM` config section for
[adding custom certs](https://help.zscaler.com/zia/adding-custom-certificate-application-specific-trust-store)
may be needed early on in process adapted to `pnpm` specific approach to allow
that MITM need that something like Zcaler requires. But that's a work impediment
so solving that issue is a work issue not a home one.
