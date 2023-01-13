# Switch from Volta to pnpm

The essential step is to take all things Volta out of your path.

```zsh
# In your ~/.zshrc file comment out lines like

# export VOLTA_HOME="$HOME/.volta"
# export PATH="$VOLTA_HOME/bin:$PATH"

# this takes it out of your path and more extensive clean up can happen as needed
```

If you haven't gotten `pnpm` yet you can `brew install pnpm` to get it and it
will stay updated with the very frequent update cycle if you
`brew update && brew update` later on.

```zsh
# brew add pnpm
brew install pnpm

# optionally add command line completions
pnpm install-completion
```

After the above you should see something along these lines:

```zsh
# the old end of your ~/.zshrc file
# or if your default shell is bash or fish it may be different

# pnpm
export PNPM_HOME="/Users/solen/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"
# pnpm end

# after running `pnpm install-completion` and saying y to change file
# tabtab source for packages
# uninstall by removing these lines
[[ -f ~/.config/tabtab/zsh/__tabtab.zsh ]] && . ~/.config/tabtab/zsh/__tabtab.zsh || true

# the new end of your ~/.zshrc file
```

After all shell refreshes you can verify your setup by doing:

```zsh
$ pnpm env ls
* 18.12.1
```

Which is something you'd see if you ran `pnpm env use -g 18` in the past.

```zsh
$ which node
/Users/<your_user>/Library/pnpm/node
$ node -v
v18.12.1
```

Will let you know that you don't have some other `node` in your path ahead of
the one that is there from `pnpm env`.
