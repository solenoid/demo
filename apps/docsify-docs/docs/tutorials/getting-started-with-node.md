# Getting Started with node

<aside>

## Assumptions

This tutorial requires you have
[gotten started with mise](./getting-started-with-mise.md) and that is working
on your system. If you run into issues see if it's due to your `mise` setup or
if it's related to `node` more directly.

</aside>

## Check node Install

The version of `node` installed depends on what directory you are in. If you in
a directory that is trusted and has been configured with `mise` run the
following.

```shell
mise ls node
```

Prior to being installed it will:

- show as **"(missing)"** until installed
- what **"Source"** configuration is used
- what version is being **"Requested"**

Here are examples for showing `node` alone or all tools.

```shellsession
# limit to node only
$ mise ls node
Tool  Version            Source                  Requested
node  22.13.1 (missing)  ~/repos/demo/mise.toml  22

# show all tools including node and others
$ mise ls
Tool  Version            Source                  Requested
node  22.13.1 (missing)  ~/repos/demo/mise.toml  22
pnpm  10.1.0 (missing)   ~/repos/demo/mise.toml  10
```

If it's missing you should install to get it.

```shell
mise install node # to install only node
mise install # to install all tools, this is more common
```

After being installed it will:

- not show as **"(missing)"** anymore
- what **"Source"** configuration is used
- what version is being **"Requested"**

Here are examples for showing `node` alone or all tools.

```shellsession
# limit to node only
$ mise ls node
Tool  Version  Source                  Requested
node  22.13.1  ~/repos/demo/mise.toml  22

# show all tools including node and others
$ mise ls
Tool  Version  Source                  Requested
node  22.13.1  ~/repos/demo/mise.toml  22
pnpm  10.1.0   ~/repos/demo/mise.toml  10
```

## Verify node Version

After you have installed you can verify the version of `node`.

```shell
node -v
```

This should match what you saw from `mise ls` earlier.

```shellsession
$ node -v
v22.13.1
```

## Conclusion

To effectively use `node` you often need to make sure you package manager is
working. The most common package manager is `npm`. An alternative is `pnpm` that
solves some issues, even if it isn't the most common.
