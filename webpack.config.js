const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
  filename: 'bundle.js',
  path: DIST_DIR
},
  module : {
    rules : [
      {
        test : /\.(js|jsx)/,
        exclude: /node_modules/,
        include : SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      } 
    ]
  }
};