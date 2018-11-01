const {
  globalExtensions,
  globalEnv,
  globalPlugins,
  globalRules,
  globalSettings
} = require("./global-config");

module.exports = {
  env: {
    ...globalEnv
  },
  extends: ["airbnb-base", ...globalExtensions],
  globals: {},
  plugins: [...globalPlugins],
  rules: {
    ...globalRules
  },
  settings: {
    ...globalSettings
  }
};
