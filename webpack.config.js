// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  context: path.join(__dirname, '/src/'),
  entry: './index.js',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
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
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                '@babel/preset-env',
                '@babel/preset-typescript'
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties', { 'loose': true }],
                'babel-plugin-styled-components'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: 'url-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './public/'),
    filename: 'bundle.min.js'
  },
  performance: { hints: false }
}
