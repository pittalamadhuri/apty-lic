const webpackMerge = require('webpack-merge');
const helpers = require('./helpers');
const commonConfig = require('./webpack.common.js');

const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function(options) {
  return webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'cheap-module-source-map',
    output: {
      path: helpers.root('build/dev/'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[file].map',
      chunkFilename: '[id].chunk.js',
      library: 'ac_[name]',
      libraryTarget: 'var'
    },
    plugins: [
      new LoaderOptionsPlugin({
        debug: true,
        options: {

        }
      })
    ],

    watch: true,

    node: {
      global: true,
      crypto: true,
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  });
}