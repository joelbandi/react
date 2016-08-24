var webpack = require('webpack');
var path = require('path');
module.exports = {
  context: path.join(__dirname, "src"),
  devtool: "inline-sourcemap",
  entry: "./js/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      { 
        test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles','assets') 
      },
      { 
        test: /\.jpg$/,
        loader: 'file'
      },
      { 
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      }
    ]
  },
  output: {
    path: path.join(__dirname,'build'),
    filename: "index.min.js",
    publicPath: '/build/'
  },
  plugins:[
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, minimize:true }),
    new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
  ]
}