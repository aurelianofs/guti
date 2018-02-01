const path = require('path');

module.exports = {
  entry: './front/src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './front/js')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
