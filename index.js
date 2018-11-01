module.exports = {
  "extends": ["airbnb-base", "plugin:jest/recommended", "plugin:lodash/canonical", "plugin:prettier/recommended"],
  "parser": "babel-eslint",
  "plugins": ["jest", "jsdoc", "json", "lodash"],
  "env": {
    "browser": true,
    "jest": true
  },
  "globals": {},
  "settings": {
    "lodash": {
      "version": 4
    },
    "import/resolver": {
      "webpack": {
        "config": "config/webpack.config.dev.js"
      }
    }
  },
  "rules": {
    "func-names": "error",
    "id-length": ["error", { "min": 2, "properties": "never", "exceptions": ["_", "P"] }],
    "max-len": ["error", 120],
    "no-alert": "error",
    "no-console": "error",
    "no-mixed-operators": ["error", { "allowSamePrecedence": true }],
    "import/export": "error",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/order": [
      "error",
      {
        "groups": [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always"
      }
    ],
    "lodash/chaining": ["error", "always"],
    "lodash/prefer-constant": ["error", false],
    "lodash/prefer-lodash-method": ["error", { "ignoreMethods": ["find"] }],
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
    "sort-keys": ["warn", "asc", { "caseSensitive": true, "natural": false }]
  }
}
