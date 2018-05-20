/* jshint esversion: 6 */
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production', // "production" | "development" | "none"
    entry: path.resolve(__dirname, 'src/js/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0'],
                        plugins: ['transform-es2015-modules-commonjs']
                    }
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    target: 'node',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
            global: {}, // bizarre lodash(?) webpack workaround
            'global.GENTLY': false // superagent client fix
        }),
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            uglifyOptions: {
                ecma: 5,
                ie8: true,
                safari10: true
            }
        })
    ]
};
