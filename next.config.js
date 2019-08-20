const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent.js");
const path = require('path');

module.exports = withCss(withSass({
  cssModules: true,
  cssLoaderOptions: {
    getLocalIdent: function(context, localIdentName, localName, options) {
      const hz = context.resourcePath.replace(context.rootContext, "");
      if (/node_modules/.test(hz)) {
        return localName;
      } else {
        return cssLoaderGetLocalIdent(context, localIdentName, localName, options); 
      }
    }
  },
  webpack(config, options) {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, './'),
    });
    return config;
  },
}));
