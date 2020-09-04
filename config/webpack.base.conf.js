const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry:'./src/index.js',
    module:{
        rules:[
            {
                test:/.(scss|css)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "corejs": 3
                                }
                            ]
                        ]
                    },
                },
                exclude: /node_modules/,
                include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test:/\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                loader:[
                    {
                      loader: 'file-loader',
                      options: {
                        esModule:false
                      }
                    }
                ],
                exclude: /node_modules/,
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html'
        }),
        new BundleAnalyzerPlugin()

    ],
    resolve:{
        extensions: ['.js', '.vue', '.json','.less','.css'],
        alias: {
            '@': resolve('src'),
          }
    }
}