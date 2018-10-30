module.exports = {
  "extends": ["airbnb", "plugin:jest/recommended", "plugin:lodash/canonical", "plugin:prettier/recommended"],
  "parser": "babel-eslint",
  "plugins": ["jest", "jsdoc", "lodash", "json", "cypress"],
  "env": {
    "browser": true,
    "cypress/globals": true,
    "jest": true,
    "mocha": true,
    "node": true
  },
  "globals": {
    "should": false,
    "__SERVER__": false,
    "__CLIENT__": false,
    "__DEVELOPMENT__": false,
    "__TEST__": false
  },
  "settings": {
    "lodash": {
      "version": 4
    }
  },
  "rules": {
    "func-names": "error",
    "global-require": "error",
    "id-length": ["error", { "min": 2, "properties": "never", "exceptions": ["_", "i", "j"] }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "new-parens": "error",
    "no-alert": "error",
    "no-console": "error",
    "no-underscore-dangle": ["error", { "allow": ["__config", "__setMockValues"] }],
    "import/export": "error",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "lodash/chaining": ["error", "always"],
    "lodash/prefer-constant": ["error", false],
    "lodash/prefer-lodash-method": ["error", { "ignoreMethods": ["find", "startsWith"] }],
    "lodash/prefer-over-quantifier": "off",
    "react/jsx-no-bind": "error",
    "react/prop-types": "error",
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

    "react/no-unused-prop-types": "warn",
    "jsx-a11y/href-no-hash": "warn",
    "react/no-find-dom-node": "warn",
    "import/prefer-default-export": "warn",
    "react/prefer-stateless-function": "warn",
    "react/jsx-filename-extension": "warn",
    "react/no-string-refs": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/require-default-props": "warn",
    "import/first": "warn",
    "react/forbid-prop-types": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "react/no-danger": "warn",
    "import/order": [
      "error",
      {
        "groups": [["builtin", "external"], ["parent", "sibling", "index"]],
        "newlines-between": "always"
      }
    ]
  }
}
