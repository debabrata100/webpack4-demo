const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "src")],
                use: 'imports-loader?this=>window'
            }
        ]
    },
    plugins: [
        /* We can also use the ProvidePlugin to expose a single export of a module by configuring it with
         an "array path" (e.g. [module, child, ...children?]) */
        new webpack.ProvidePlugin({ 
            join: ['lodash', 'join']
         })
    ]
}