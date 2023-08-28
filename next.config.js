const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      oneOf: [
        {
          use: ['@svgr/webpack']
        }
      ]
    })
    return config
  },
  sassOptions: {
    /// Global mixins&variables
    additionalData: [
      'src/styles/config/variables',
      'src/styles/config/breakpoints',
      'src/styles/config/mixins'
    ]
      .map((p) => `@import '${p}';`)
      .join(''),
    /// import paths lookup for easy access to styles&assets
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'assets')
    ]
  }
}
