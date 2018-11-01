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
    "no-mixed-operators": ["error", { "allowSamePrecedence": true }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "sort-keys": ["warn", "asc", { "caseSensitive": true, "natural": false }]
  }
}
