/* This file sets all of the eslint config properties that are reused into
 * a common object that can be shared.
 */

module.exports = {
  globalEnv: {
    jest: true,
    mocha: true,
    node: true,
  },
  globalExtensions: [
    'plugin:jest/recommended',
    'plugin:lodash/canonical',
    'plugin:prettier/recommended',
    'plugin:lodash-fp/recommended',
  ],
  globalParser: 'babel-eslint',
  globalPlugins: ['jest', 'jsdoc', 'json', 'lodash', 'prettier'],
  globalRules: {
    'arrow-body-style': ['error', 'as-needed'],
    'func-names': 'error',
    'global-require': 'error',
    'id-length': ['error', { exceptions: ['_', 'i', 'j'], min: 2, properties: 'never' }],
    'import/export': 'error',
    'import/first': 'warn',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowObject: true,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'warn',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/require-description-complete-sentence': 'error',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'lodash/prefer-lodash-method': 'off',
    'lodash/chaining': ['error', 'always'],
    'lodash/prefer-constant': ['error', false],
    'lodash/prefer-over-quantifier': 'off',
    'lodash-fp/consistent-compose': ['warn', 'flow'],
    'lodash-fp/no-chain': 'warn',
    'lodash-fp/no-extraneous-partials': 'error',
    'lodash-fp/use-fp': 'warn',
    'new-parens': 'error',
    'no-alert': 'error',
    'no-console': 'error',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-underscore-dangle': ['error', { allow: ['__config', '__setMockValues'] }],
    'prettier/prettier': ['error', { printWidth: 120, singleQuote: true, trailingComma: 'all' }],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, natural: false }],
  },
  globalSettings: {
    lodash: {
      version: 4,
    },
  },
};
