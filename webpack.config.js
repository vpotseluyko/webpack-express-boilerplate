/**
 * Created by vpotseluyko on 6/15/17.
 */
/**
 * Created by vpotseluyko on 6/15/17.
 */

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pugWebpackPlugin = require("html-webpack-pug-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, './public'),
    entry: [
        './app.js',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client'

    ],
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                include: [
                    path.resolve(__dirname, './client/javascripts')
                ],
                loader: "babel-loader?presets[]=es2015"
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            use: [require("nib")()]
                        }
                    }
                ]

            }
        ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js"]
    },
    plugins: [
        /*
         new HtmlWebpackPlugin({
         template: './views/layout.pug',
         filetype: 'pug',
         filename: './../views/layout.pug',
         chunks: ['app']
         }),
         new pugWebpackPlugin(),*/
        new webpack.HotModuleReplacementPlugin()
        //new ExtractTextPlugin('[name].css')
        /*
         new webpack.ProvidePlugin({
         bilderrahmen: 'bilderrahmen'
         }),
         new webpack.ProvidePlugin({
         LazyLoad: 'vanilla-lazyload'
         })
         */
    ]
};