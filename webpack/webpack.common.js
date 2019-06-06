const webpack = require('webpack');
const helpers = require('./helpers');

const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = function(options) {
  isProd = options.env === 'production';
  return {
    entry: {
      'index': './src/index'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: [helpers.root('src'), helpers.root('node_modules')]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                configFileName: 'tsconfig.webpack.json'
              }
            }
          ],
          exclude: [/\.(spec|e2e)\.ts$/]
        }
      ]
    },
    plugins: [
      new CheckerPlugin(),
      new LoaderOptionsPlugin()
    ],
    target: 'node',
    node: {
      global: true,
      crypto: true,
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  }
}
