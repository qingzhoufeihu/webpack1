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
        rules: [{
                test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader' //loader的名称（必须）
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + "/index.temp.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}