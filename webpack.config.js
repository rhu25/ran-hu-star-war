const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    watch: true,
    
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{
              loader: 'babel-loader',
              options: {
                  presets: [
                    "@babel/preset-react"
                  ]
              }
          }]
        }, 
        {
          test: /\.less$/,
          loaders: ["style-loader", "css-loder", "less-loader"]
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(js|jsx)$/,
            use: ["source-map-loader"],
            enforce: "pre"
        },
      ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Star War',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
  };