module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      1,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'chore'],
    ],
    'header-max-length': [0, 'always', 140],
  },
};
