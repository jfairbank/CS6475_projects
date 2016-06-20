const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const config = require('./webpack.config.dev');

const app = express();

app.use('/assets/bundle.js', proxy({ target: 'http://127.0.0.1:8081' }));

app.use(
  '/assets',

  express.static(path.resolve(__dirname, 'public/assets'), {
    fallthrough: true,
  })
);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

const server = new WebpackDevServer(webpack(config), {
  contentBase: path.resolve(__dirname, 'public'),
  publicPath: '/assets/',
});

server.listen(8081, '127.0.0.1', () => {});
app.listen(8080);
