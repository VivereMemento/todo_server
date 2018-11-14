const HtmlWebpackPlugin = require('html-webpack-plugin');
const arr = (path) => [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: path.source + '/pages/index/index.pug'
    })
];
module.exports = arr;