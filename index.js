const { globalExtensions, globalEnv, globalPlugins, globalRules, globalSettings } = require('./globalConfig');

module.exports = {
  "extends": ["airbnb-base", ...globalExtensions],
  "plugins": [...globalPlugins],
  "env": {
    ...globalEnv
  },
  "globals": {},
  "settings": {
    ...globalSettings
  },
  "rules": {
    ...globalRules,
  }
}
