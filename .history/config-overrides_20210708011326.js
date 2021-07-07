const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');
 
/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireAliases.aliasesOptions({
        '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
        '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
        '@screens': path.resolve(__dirname, `${paths.appSrc}/assets/`),
    })(config, env);
  return config;
}