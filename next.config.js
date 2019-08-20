const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
  cssModules: true,
  webpack(config, options) {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, './'),
    });
    return config;
  }
});
