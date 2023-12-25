const htmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin') 

module.exports = {
    mode : "development",
    devServer : {
        port : 3002
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

    plugins : [
      new htmlWebPackPlugin({
        template : './public/index.html'
      }),

      new ModuleFederationPlugin({
        name : 'footer',
        filename : 'remoteEntry.js',
        exposes : {
            './FooterIndex' : './src/index.js'
        }
    })
    ]
}