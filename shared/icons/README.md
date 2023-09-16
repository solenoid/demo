# Icons

The preference is to use the Line Awesome set of icons for consistency.

You can see them over in a [preview](https://icons8.com/line-awesome) and get
them from the [source](https://github.com/icons8/line-awesome).

For now copy any icons, standard or custom, into the `svg-src` directory and
then they will be available as React Comoponents after the next `npm run build`
that happens.

The `barbell-solid.svg` is a variation of a similar icon from that set.

## Builds

Are done at `npm run build` time and use `npx` aka `npm exec` extensively. The
versions are pinned exactly in those commands which means the npx cache is used
for them instead of `devDependencies` for a similar purpose.
