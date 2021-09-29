const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');
 
/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireAliases.aliasesOptions({
        '@components': path.resolve(__dirname, `${paths.appSrc}/Components/`),
        '@assets': path.resolve(__dirname, `${paths.appSrc}/Components/Assets/`),
        '@screens': path.resolve(__dirname, `${paths.appSrc}/Components/Screens/`),
        '@styles': path.resolve(__dirname, `${paths.appSrc}/Components/styles/`),
        '@utils': path.resolve(__dirname, `${paths.appSrc}/Components/Util.js`),
        '@Images': path.resolve(__dirname, `${paths.appSrc}/Assets/Images.js`),
    })(config, env);
  return config;
}