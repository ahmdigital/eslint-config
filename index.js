const { globalExtensions, globalEnv, globalParser, globalPlugins, globalRules, globalSettings } = require('./globalConfig');

module.exports = {
  "extends": ["airbnb-base", ...globalExtensions],
  "parser": globalParser,
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
