const {
  globalExtensions,
  globalEnv,
  globalParser,
  globalPlugins,
  globalRules,
  globalSettings
} = require("./global-config");

module.exports = {
  env: {
    browser: true,
    "cypress/globals": true,
    mocha: true,
    ...globalEnv
  },
  extends: ["airbnb", ...globalExtensions],
  parser: globalParser,
  plugins: ["cypress", ...globalPlugins],
  rules: {
    ...globalRules,
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "react/jsx-filename-extension": "warn",
    "react/forbid-prop-types": "warn",
    "react/jsx-no-bind": "error",
    "react/jsx-no-target-blank": "warn",
    "react/no-danger": "warn",
    "react/no-find-dom-node": "warn",
    "react/no-string-refs": "warn",
    "react/no-unused-prop-types": "warn",
    "react/prefer-stateless-function": "warn",
    "react/prop-types": "error",
    "react/require-default-props": "warn"
  },
  settings: {
    ...globalSettings
  }
};
