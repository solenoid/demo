module.exports = {
  extends: ['next', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'warn',
    'react/jsx-key': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        // TODO consider if true is a good idea for this or not
        allowArrowFunction: true,
      },
    ],
  },
}
