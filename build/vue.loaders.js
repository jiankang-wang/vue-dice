'use strict'
const utils = require('./utils')
const config = require('../config')

const publicLoaders = [
  ...(config.dev.useEslint ? [utils.createLintingRule()] : []),
  {
    test: /\.vue$/,
    use: [{
      loader: 'vue-loader',
    }]
  },
  {
    test: /\.js$/,
    use: ['babel-loader'],
    include: [utils.resolve('src'), utils.resolve('node_modules/webpack-dev-server/client'), utils.resolve('test')]
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: [{
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }]
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    use: [{
      loader:'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    }]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    use: [{
      loader:'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
  }
]

// module.exports = publicLoaders
module.exports = publicLoaders