module.exports = {
  root: true,
  // See https://eslint.org/docs/latest/developer-guide/shareable-configs
  // for npm scoped and prefix naming convention rules
  extends: ["@solenoid"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
