const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

module.exports = Object.assign({}, baseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      '__ENV__': '"production"',
      '__DEV__': false,
    }),

    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
});
