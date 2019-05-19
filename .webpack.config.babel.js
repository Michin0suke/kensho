import path from 'path';

export default {
  mode: 'development',
  entry:[
    path.resolve(__dirname, 'src/index.jsx')
  ],
  output:{  
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve:{
    extensions: ['.js','.json','.jsx']
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react'],
                ['@babel/preset-env',
                  {
                    "targets": {
                      "ie": 11
                    },
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          }
        ],
        include: path.resolve(__dirname, 'src')
      }
    ]
  }
};