var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/only-dev-server', 
        APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : [
            'react-hot',
            'babel'
        ]
      },
      {
        test: /\.css$/,
        loader:'style!css!'
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
     }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};

module.exports = config;
