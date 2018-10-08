/**
 *
 * Webpack shared/common configuration
 *
 */

const path = require('path');

// plugins
const IgnoreNotFoundExportPlugin = require('./IgnoreNotFoundExportPlugin');

const mode = process.env.NODE_ENV;

module.exports = {
  mode,
  context: __dirname,
  target: 'web',
  performance: { hints: false },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    pathinfo: false,
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
            options: {
              transpileOnly: mode === 'development',
              experimentalWatchApi: true,
              happyPackMode: true,
            },
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
  plugins: [new IgnoreNotFoundExportPlugin()],
};
