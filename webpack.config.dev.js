const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign({}, baseConfig, {
  devtool: '#inline-source-map',

  entry: [
    baseConfig.entry,
    'webpack-dev-server/client?http://localhost:8081',
  ],

  output: Object.assign({}, baseConfig.output, {
    publicPath: 'http://127.0.0.1:8081/assets',
  }),

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      '__ENV__': '"development"',
      '__DEV__': true,
    }),
  ],
});
