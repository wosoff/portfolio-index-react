const {resolve} = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: resolve(__dirname, 'public', 'js', 'app.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'public/index.dev.html', to: 'index.html' },
    ]),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
    // splitChunks: {
    //   chunks: 'all'
    // }
  },
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 5555,
  }
};