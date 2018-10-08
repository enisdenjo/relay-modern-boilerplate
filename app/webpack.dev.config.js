/**
 *
 * Webpack development configuration
 *
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

/** plugins */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

/** package.json */
const pkg = require('./package.json');

module.exports = merge(require('./webpack.common.config'), {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  // we dont need any optimizations, especially
  // not chunk splitting since we have a DLL
  optimization: {
    minimize: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devtool: 'eval-source-map',
  plugins: [
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
    new webpack.DllReferencePlugin({
      sourceType: 'var',
      context: __dirname,
      manifest: path.join(path.resolve(pkg.dll.path), `${pkg.dll.name}.manifest.json`),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: true,
      appMountIds: ['root'],
      chunksSortMode: 'none', // NOTE: this fixes `Cyclic dependency` error.
    }),
    new AddAssetHtmlPlugin({
      filepath: path.join(path.resolve(pkg.dll.path), '*.dll.js'),
      includeSourcemap: false,
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: process.env.APP_PORT,
    progress: true,
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true, // All requests that do not map to an existing asset will instead by routed straight to `/`.
    proxy: {
      '/api/graphql': {
        target: `http://postgraphile:${process.env.POSTGRAPHILE_PORT}/graphql`,
        pathRewrite: { '^/api/graphql': '' },
      },
    },
  },
});
