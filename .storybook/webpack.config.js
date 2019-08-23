// const path = require("path");
// module.exports = ({ config }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     use: [
//       {
//         loader: require.resolve("react-docgen-typescript-loader")
//       },
//       {
//         loader: require.resolve('@storybook/addon-storysource/loader'),
//         options: { parser: 'typescript' }
//       }
//     ]
//   });
//   config.resolve.extensions.push(".ts", ".tsx");
//   return config;
// };

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  context: path.join(__dirname, '/src/'),
  entry: [ './index.tsx' ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.jpg', '.png']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("react-docgen-typescript-loader")
          },
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: { parser: 'typescript' }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'targets': { 'browsers': [ 'chrome 40', 'ie >= 11' ] },
                    'useBuiltIns': 'usage',
                    'corejs': 3
                  }
                ],
                [
                  '@babel/preset-react',
                  {
                    'useBuiltIns': 'usage'
                  }
                ],
                '@babel/preset-typescript'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                'babel-plugin-styled-components',
                '@babel/plugin-transform-object-assign'
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
    filename: 'storybook.min.js'
  },
  performance: { hints: false }
}
