module.exports = {
  root: true,
  // See https://eslint.org/docs/latest/developer-guide/shareable-configs
  // for npm scoped and prefix naming convention rules
  extends: ['shared'],
  settings: {
    next: {
      // See https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
      rootDir: ['apps/*/*-nextjs/'],
    },
  },
}
