# Getting Started with pnpm

<aside>

## Assumptions

This tutorial requires you have
[gotten started with mise](./getting-started-with-mise.md) and that is working
on your system. If you run into issues see if it's due to your `mise` setup or
if it's related to `pnpm` more directly.

</aside>

## Check pnpm Install

The version of `pnpm` installed depends on what directory you are in. If you in
a directory that is trusted and has been configured with `mise` run the
following.

```shell
mise ls pnpm
```

Prior to being installed it will:

- show as **"(missing)"** until installed
- what **"Source"** configuration is used
- what version is being **"Requested"**

Here are examples for showing `pnpm` alone or all tools.

```shellsession
# limit to pnpm only
$ mise ls pnpm
Tool  Version            Source                  Requested
pnpm  10.1.0 (missing)   ~/repos/demo/mise.toml  10

# show all tools including pnpm and others
$ mise ls
Tool  Version            Source                  Requested
node  22.13.1 (missing)  ~/repos/demo/mise.toml  22
pnpm  10.1.0 (missing)   ~/repos/demo/mise.toml  10
```

If it's missing you should install to get it.

```shell
mise install pnpm # to install only pnpm
mise install # to install all tools, this is more common
```

After being installed it will:

- not show as **"(missing)"** anymore
- what **"Source"** configuration is used
- what version is being **"Requested"**

Here are examples for showing `pnpm` alone or all tools.

```shellsession
# limit to pnpm only
$ mise ls pnpm
Tool  Version  Source                  Requested
pnpm  10.1.0   ~/repos/demo/mise.toml  10

# show all tools including pnpm and others
$ mise ls
Tool  Version  Source                  Requested
node  22.13.1  ~/repos/demo/mise.toml  22
pnpm  10.1.0   ~/repos/demo/mise.toml  10
```

## Verify pnpm Version

After you have installed you can verify the version of `pnpm`.

```shell
pnpm -v
```

This should match what you saw from `mise ls` earlier.

```shellsession
$ pnpm -v
10.1.0
```

## pnpm install

The most common thing to do with `pnpm` is to get you packages.

```shell
pnpm install # gets dependencies and devDependencies
pnpm i # has a short alias since it's so common
```

<aside>

### `run` can be optional

If the task isn't a "pnpm command".

```shell
pnpm run build # with run
pnpm build # without run
```

</aside>

## pnpm run

Another common thing to do with `pnpm` is to run tasks.

```shell
pnpm run # lists all tasks that can be run
pnpm run build # executes the "build" script
```

## pnpm help

If you're looking for more help you can get a short version on the command line.

```shell
pnpm help # lists pnpm commands and aliases
pnpm help run # show help for run, with lots of flags
```

Or alternatively look at the [pnpm run docs](https://pnpm.io/cli/run) that is
part of the CLI Commands section with other docs that go into things like
motivation, configuration, and more.

## Conclusion

If you haven't already, go to your favorite repository and try out these
commands.

```shell
pnpm i
pnpm build
```

This will depend on your `node` setup, along with your `mise` setup. So if you
run into any issues please bring it up with folks that have it already setup. It
is common to have some issue if you haven't done this a lot already, and it
debugging issues with setup will become a skill you gain over time if it's not
clear what to try next to resolve your issue.
