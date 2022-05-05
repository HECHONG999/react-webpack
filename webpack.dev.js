const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const devConfig = {
    devtool: "source-map",
    devServer: {
        open: false,
        port: 8080,
        proxy: {

        },
        stats: "minimal"
    }
}

module.exports = merge(baseConfig, devConfig);