/**
 *
 * Webpack DLL configuration
 *
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const pullAll = require('lodash/pullAll');

/** plugins */
const CleanWebpackPlugin = require('clean-webpack-plugin');

/** package.json */
const pkg = require('./package.json');

module.exports = merge(require('./webpack.common.config'), {
  entry: {
    [pkg.dll.name]: pullAll(Object.keys(pkg.dependencies), pkg.dll.exclude || []),
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(pkg.dll.path),
    library: '[name]_[hash]',
    libraryTarget: 'var',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(pkg.dll.path)]),
    new webpack.DllPlugin({
      path: path.join(path.resolve(pkg.dll.path), '[name].manifest.json'),
      name: '[name]_[hash]',
    }),
  ],
});
