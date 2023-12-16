const path = require('path');
const Dotenv = require('dotenv-webpack');
const crypto = require('crypto-browserify');
const stream = require("stream-browserify");
const buffer = require("buffer/").Buffer;
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
        fallback: {
            path: require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "crypto-browserify": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            buffer: require.resolve('buffer/')
        },
    },
    plugins: [
        new NodePolyfillPlugin(),

    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
    },

};