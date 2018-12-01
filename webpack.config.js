const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
  // ,
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  //   modules: [path.resolve(__dirname, '/client/src'), 'node_modules']
  // },
  // devServer: {
  //   contentBase: path.join(__dirname, 'public/'), 
  //   port: 3030, 
  //   publicPath: 'http://localhost:8081/dist/', 
  //   hotOnly: true,
  // }
};