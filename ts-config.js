const { globalExtensions, globalEnv, globalPlugins, globalRules, globalSettings } = require('./global-config');

module.exports = {
  env: {
    ...globalEnv,
  },
  extends: ['airbnb-base', ...globalExtensions],
  parser: '@typescript-eslint/parser',
  plugins: [...globalPlugins, '@typescript-eslint', 'eslint-plugin-tsdoc'],
  rules: {
    ...globalRules,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'off',
    'jsdoc/check-tag-names': 'off',
    'jsdoc/require-param-type': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'tsdoc/syntax': 'error',
  },
  settings: {
    ...globalSettings,
    jsdoc: { mode: 'typescript' },
  },
};
