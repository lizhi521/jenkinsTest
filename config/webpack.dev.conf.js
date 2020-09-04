const merge = require('webpack-merge')
const common = require('./webpack.base.conf.js')

module.exports = merge(common,{
  mode:'development',
  devtool:'inline-source-map',
  devServer:{
    port:8000,
    contentBase:'./dist'
  }
})