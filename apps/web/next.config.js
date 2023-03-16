const webpack = require('webpack')
const { parsed: myEnv } = require('dotenv').config({
  path: '../../.env',
})

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'payload-cms'],
  swcMinify: true,
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  },
  experimental: {
    appDir: true,
  },
}
