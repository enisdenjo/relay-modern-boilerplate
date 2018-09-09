/**
 *
 * Webpack configuration
 *
 * The minimal Webpack configuration required for running Relay Modern.
 *
 */

const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  mode: process.env.NODE_ENV,
  context: __dirname,
  target: 'web',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [
                [
                  // Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts.
                  'relay',
                  {
                    // Change artifact directory for easier navigation.
                    artifactDirectory: path.join(__dirname, 'src', 'artifacts'),
                  },
                ],
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import',
              ],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|jpg|png)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: true,
    }),
  ],
  devServer: {
    port: 4455,
    progress: true,
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true, // All requests that do not map to an existing asset will instead by routed straight to `/`.
    proxy: {
      '/api/graphql': {
        target: 'http://localhost:4466/',
        pathRewrite: { '^/api/graphql': '' },
      },
    },
  },
};
