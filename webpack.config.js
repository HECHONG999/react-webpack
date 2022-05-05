const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


const config = {
    entry: "./src/index.js",
    output: {
        filename: "js/[name].[chunkhash:5].js",
        publicPath:"/",
        path: path.resolve(__dirname, "dist"),  // 输出目录为
    },
    module:{
        rules:[
            {
                test: /\.(png)|(gif)|(jpg)|(svg)|(bmp)|(eot)|(woff)|(ttf)$/i,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'static/[name].[hash:5].[ext]',
                            esModule: false
                        }
                    }
                ]
            },
            {
                test:/\.(js)|(jsx)$/,
                exclude:/node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              },
        ]
    },
    plugins:[
        new CopyWebpackPlugin({
            patterns: [
                {
                  from: path.resolve(__dirname, "public"), // 将public目录中的所有文件
                  to: "./", // 复制到 输出目录 的根目录
                },
              ],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename:"css/common.[hash:5].css"
        })
    ]
}
module.exports = config;