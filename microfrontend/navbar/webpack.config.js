
const htmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin') 

module.exports = {
    mode : 'development',
    devServer : {
        port : 3001
    },

    module: {
        rules: [
            // ... other rules
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    plugins: [
        new htmlWebPackPlugin({
            template : './public/index.html'
        }),

        new ModuleFederationPlugin({
            name : 'navbar',
            filename : 'remoteEntry.js',
            exposes : {
                './NavbarIndex' : './src/index.js'
            }
        })
    ]
}