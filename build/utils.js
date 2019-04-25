'use strict'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('../config')
const packageConfig = require('../package.json')

exports.createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [exports.resolve('src'), exports.resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

exports.assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = () => {
  const isProduct = process.env.NODE_ENV === 'production';
  const options = {
    sourceMap: isProduct ? config.build.productionSourceMap :config.dev.cssSourceMap
  }

  const cssLoader = {
    loader: 'css-loader',
    options
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options
  }

  const MinLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      sourceMap: options.sourceMap
    }
  }

  const resourcesSass = []
  if (config.static.scss) {
    resourcesSass.push({
      loader:'sass-resources-loader',
      options:{
        resources:path.resolve(__dirname, config.static.scss)
      }
    })
  }

  function generateLoaders (loader, loaderOptions) {
    //default loaders ( css-loader, postcss-loader )
    const loaders = [cssLoader, postcssLoader]
    
    if (isProduct) loaders.unshift(MinLoader)

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, options)
      })
    }
    return ['vue-style-loader'].concat(loaders)

  }

    return {
      css: generateLoaders(),
      postcss: generateLoaders(),
      less: generateLoaders('less'),
      sass: generateLoaders('sass', { indentedSyntax: true }),
      scss: [...generateLoaders('sass'), ...resourcesSass],
      stylus: generateLoaders('stylus'),
      styl: generateLoaders('stylus')
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function () {
  const output = []
  const loaders = exports.cssLoaders()

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return
    const error = errors[0]
    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.webpackError,
      subtitle: error.file || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

exports.external = () => {
  const { externals } = config
  const opt = { 
    externals: {},
    js: [],
    css: []
  }

  if (!externals) return opt
  for (let i in externals) {
    const { module, js, css } = externals[i]
    opt.externals[i] = module
    if (js) opt.js.push(js)
    if (css) opt.css.push(css)
  }
  
  return opt
}