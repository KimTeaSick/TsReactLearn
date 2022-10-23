const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  devtool:'eval', // 개발시에는 hidden-source-map
  resolve:{
    extensions:['.jsx','.js','.tsx','.ts']
  },
  entry:{
    app: './client'
  },
  module:{
    rules:[{
      test: /\.tsx?$/,
      loader: 'ts-loader',
    }]
  },
  plugins:[

  ],
  output:{
    filename:'[name].js',
    path: path.join(__dirname,'dist'),
  }
}