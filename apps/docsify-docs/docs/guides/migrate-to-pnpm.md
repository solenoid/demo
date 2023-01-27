If you have used `nvm` or `volta` in the past to manage the version of `node`
then the following will help migrate to using `pnpm env` instead. If you haven't
used `nvm` or `volta` in the past go [install pnpm](guides/install-pnpm.md) and
skip these migration steps.

## Migrating from Nvm

The essential step is to take all things Nvm out of your path.

```zsh
# In your ~/.zshrc file comment out lines like

# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# this takes it out of your path and more extensive clean up can happen as needed
```

## Migrating from Volta

The essential step is to take all things Volta out of your path.

```zsh
# In your ~/.zshrc file comment out lines like

# export VOLTA_HOME="$HOME/.volta"
# export PATH="$VOLTA_HOME/bin:$PATH"

# this takes it out of your path and more extensive clean up can happen as needed
```

## After migration

At this point we've taken out the old way to manage `node` versions on your
system. You will now need to [install pnpm](guides/install-pnpm.md) which allows
you to use the `pnpm env` command to [install node](guides/install-node.md) if
you have not already done so.
