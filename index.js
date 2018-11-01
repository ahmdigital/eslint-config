const {
  globalExtensions,
  globalEnv,
  globalPlugins,
  globalRules,
  globalSettings
} = require("./globalConfig");

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
