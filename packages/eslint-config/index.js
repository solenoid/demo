module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'warn',
    'react/jsx-key': 'error',
  },
}
