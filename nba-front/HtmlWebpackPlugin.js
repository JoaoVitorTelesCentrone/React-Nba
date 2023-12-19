const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Adjust the entry point based on your project structure
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  // ... other webpack configurations ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
