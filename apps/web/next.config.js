const withTM = require('next-transpile-modules')(['@dawangraoming/uikit']);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    modularizeImports: {
      '@dawangraoming/uikit': {
        transform: '@dawangraoming/uikit',
        preventFullImport: true,
        skipDefaultConversion: true,
      },
    },
  },
};

module.exports = withBundleAnalyzer(withTM(config));
