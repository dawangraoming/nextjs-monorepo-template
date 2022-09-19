const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@dawangraoming/uikit']);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([[withBundleAnalyzer], [withTM]], {});
