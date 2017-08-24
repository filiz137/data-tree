const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const clearF = require('clean-webpack-plugin');
const uglifyJS = require('uglifyjs-webpack-plugin');
const compression = require('compression-webpack-plugin');
const copy = require('copy-webpack-plugin');
const bundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var entryPath = './src';
var outputPath = path.resolve(__dirname, './build');
var staticFiles = '/assets/img';
var jsFilename = '[name].min.js';
var cssFilename = 'css/[name].min.css';

module.exports = {
    context: path.resolve(__dirname, entryPath),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, outputPath),
        filename: '[name].js',
        path: outputPath
    },
    devServer: {
        contentBase: path.resolve(__dirname, entryPath), // for webpack-dev-server index.html file
    },
    resolve: {
        alias: {
            'css': path.resolve(__dirname, entryPath + '/assets/css'),
            'scss': path.resolve(__dirname, entryPath + '/assets/scss'),
            'vue$': 'vue/dist/vue.esm.js',
            'vue-router$': 'vue-router/dist/vue-router.esm.js',
            'vue-resource$': 'vue-resource/dist/vue-resource.es2015.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: ExtractTextPlugin.extract(['css-loader?importLoaders=2&minimize=false&sourceMap=true!postcss-loader?sourceMap=true!sass-loader?sourceMap=true'])
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { 
                        presets: ['es2015'] 
                    },
                }],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '/img/[name].[hash].[ext]',
                },
            },
            {
                test: /\.(svg)$/,
                loader: 'file-loader',
                options: {
                    name: '/svg/[name].[hash].[ext]',
                },
            },
            {
                test: /\.(woff|woff2)$/,
                use: ['file-loader'],
            }
        ]
    },
    plugins: [
    // new bundleAnalyzer(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new ExtractTextPlugin({
        filename: cssFilename,
        allChunks: true,
    }),
    new HTMLWebpackPlugin({
        template: './index.html'
    }),
    new compression({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // name: 'commons',
      // filename: 'commons.js',
      // minChunks: 2,
      name: 'vendor',
    }),
    // new uglifyJS({
    //   compress: {
    //     warnings: false,
    //   },
    //   mangle: true,
    //   comments: false,
    //   sourceMap: true,
    // }),
    new clearF([outputPath]),
    // new copy([{
    //   from: path.resolve(__dirname, entryPath + staticFiles),
    //   to: 'img',
    //   ignore: ['.*']
    // }])
    ]
};


if (process.env.NODE_ENV != 'production') {
    module.exports.devtool = '#source-map';
}