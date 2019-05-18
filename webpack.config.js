const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const js = { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' };
const serverConfig = {
  mode: 'development',
  target: 'node',
  node: { __dirname: false, __filename: false },
  externals: [nodeExternals()],
  entry: { 'server.js': path.resolve(__dirname, './server.js') },
  module: { rules: [js] },
  output: { path: path.resolve(__dirname, 'dist'), filename: '[name]' }
};
const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: { 'client.js': path.resolve(__dirname, './client/index.js') },
  module: { rules: [js, { test: /\.css$/, use: ['style-loader', 'css-loader'] }] },
  optimization: { splitChunks: { chunks: 'all' } },
  output: { path: path.resolve(__dirname, 'dist/public'), filename: '[name]' }
};

module.exports = [serverConfig, clientConfig];
