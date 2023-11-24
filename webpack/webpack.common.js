const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
    login: Path.resolve(__dirname, '../src/scripts/login.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: Path.resolve(__dirname, '../public'), to: 'public' }],
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html', // Use [name] to dynamically generate filenames.
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/login.html'),
      filename: 'login.html', // Use [name] to dynamically generate filenames.
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/upgrades.html'),
      filename: 'upgrades.html', // Use [name] to dynamically generate filenames.
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/test.html'),
      filename: 'test.html', // Use [name] to dynamically generate filenames.
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/bank.html'),
      filename: 'bank.html', // Use [name] to dynamically generate filenames.
    }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        type: 'asset'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
