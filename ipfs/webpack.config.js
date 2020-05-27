const resolve = require('path').resolve

module.exports = {
  entry: {
    'ipfs-worker': './ipfs-worker.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    ]
  },
  output: {
    path: resolve('../static'),
    filename: '[name].js'
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      zlib: 'browserify-zlib-next'
    }
  }
}