const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        /* The ProvidePlugin makes a package available as a variable in every module compiled through webpack */
        new webpack.ProvidePlugin({ _: 'lodash' })
    ]
}