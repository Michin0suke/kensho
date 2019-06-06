var path = require('path');

module.exports = {
  context: path.join(__dirname, "/src/"),
  entry: "./index.js",
  module: {
    rules: [{
      test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { 'loose': true }],
              'babel-plugin-styled-components'
            ]
          }
        }]
      }]
    },
    output: {
      path: path.resolve(__dirname, "/public/"),
      filename: "bundle.min.js"
    }
};