/* This file sets all of the eslint config properties that are reused into 
 * a common object that can be shared. 
 */

module.exports = {
  globalExtensions: [
    "plugin:jest/recommended", "plugin:lodash/canonical", "plugin:prettier/recommended"
  ],
  globalEnv: {
    "browser": true,
    "jest": true
  },
  globalParser: "babel-eslint",
  globalPlugins: [
    "jest", "jsdoc", "json", "lodash"
  ],
  globalRules: {
    "func-names": "error",
    "global-require": "error",
    "id-length": ["error", { "min": 2, "properties": "never", "exceptions": ["_", "i", "j"] }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "import/export": "error",
    "import/first": "warn",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/order": [
      "error",
      {
        "groups": [["builtin", "external"], ["parent", "sibling", "index"]],
        "newlines-between": "always"
      }
    ],
    "import/prefer-default-export": "warn",
    "jsdoc/check-param-names": "error",
    "jsdoc/check-tag-names": "error",
    "jsdoc/check-types": "error",
    "jsdoc/newline-after-description": "error",
    "jsdoc/require-description-complete-sentence": "error",
    "jsdoc/require-hyphen-before-param-description": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-param-type": "error",
    "jsdoc/require-param": "error",
    "jsdoc/require-returns-description": "error",
    "jsdoc/require-returns-type": "error",
    "lodash/chaining": ["error", "always"],
    "lodash/prefer-constant": ["error", false],
    "lodash/prefer-lodash-method": ["error", { "ignoreMethods": ["find", "startsWith"] }],
    "lodash/prefer-over-quantifier": "off",
    "max-len": ["error", 120],
    "new-parens": "error",
    "no-alert": "error",
    "no-console": "error",
    "no-mixed-operators": ["error", { "allowSamePrecedence": true }],
    "no-underscore-dangle": ["error", { "allow": ["__config", "__setMockValues"] }],
    "sort-keys": ["warn", "asc", { "caseSensitive": true, "natural": false }],
  },
  globalSettings: {
    "lodash": {
      "version": 4
    },
  }
}
