var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080/',
            __dirname + '/app/main.ts'
        ]
    },
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
    },

    devtool: 'eval-source-map',

    devServer: {
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + "/index.temp.html"
        }),
    ],
}