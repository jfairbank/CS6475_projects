const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/main'),

  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
};
