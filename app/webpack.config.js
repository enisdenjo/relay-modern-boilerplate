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
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
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
      // Required for supporting react-relay-network-modern
      // see: https://github.com/aws/aws-amplify/issues/686#issuecomment-387710340
      {
        test: /\.mjs$/,
        include: /node_modules\/react-relay-network-modern/,
        type: 'javascript/auto',
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
};
