
const htmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'development',
    devServer : {
        port : 3001
    },

    plugins: [
        new htmlWebPackPlugin({
            template : './public/index.html'
        })
    ]
}