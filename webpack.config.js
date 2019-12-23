const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components']
          }
        }
      }
    ]
  },
  mode: 'development'
};
