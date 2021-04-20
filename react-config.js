const {
  globalExtensions,
  globalEnv,
  globalParser,
  globalPlugins,
  globalRules,
  globalSettings,
} = require('./global-config');

module.exports = {
  env: {
    browser: true,
    'cypress/globals': true,
    ...globalEnv,
  },
  extends: ['airbnb', ...globalExtensions],
  parser: globalParser,
  plugins: ['sort-imports-es6-autofix', 'cypress', 'react-hooks', ...globalPlugins],
  rules: {
    ...globalRules,
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/forbid-prop-types': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-fragments': 'off',
    'react/jsx-no-bind': 'error',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/no-string-refs': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'error',
    'react/require-default-props': 'warn',
    'react/state-in-constructor': ['error', 'never'],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
  settings: {
    ...globalSettings,
  },
};
