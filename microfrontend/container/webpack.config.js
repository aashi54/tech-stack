const htmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin') 

module.exports = {
    mode : "development",
    devServer : {
        port : 3000
    },

    plugins : [
        new htmlWebPackPlugin({
            template : './public/index.html'
        }),

        new ModuleFederationPlugin({
            name : 'container',
            remotes : {
                navbar : 'navbar@http://localhost:3001/remoteEntry.js',
               footer : 'footer@http://localhost:3002/remoteEntry.js',
            }
        })
    ]
}