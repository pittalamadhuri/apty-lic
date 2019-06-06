const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = function(env) {
  return webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'source-map',
    output: {
      path: helpers.root('build/prod'),
      filename: '[name].bundle.js',
      sourceMapFilename: '[name].bundle.map',
      chunkFilename: '[id].chunk.js'
    },
    plugins: [
      new OptimizeJsPlugin({
        sourceMap: false
      }),
      new LoaderOptionsPlugin({
        minimize: true,
        debug: false
      })
    ],
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