const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer:{
        port: 5000,
        contentBase: __dirname + '/dist',
        inline: true
    }
}