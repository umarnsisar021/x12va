const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');
 
/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireAliases.aliasesOptions({
        '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
        '@assets': path.resolve(__dirname, `${paths.appSrc}/components/Assets/`),
        '@screens': path.resolve(__dirname, `${paths.appSrc}/components/Screens/`),
        '@styles': path.resolve(__dirname, `${paths.appSrc}/components/styles/`),
        '@utils': path.resolve(__dirname, `${paths.appSrc}/components/Util.js`),
    })(config, env);
  return config;
}