var webpack = require('webpack');
var path = require('path');
var libraryName = 'halo';
var outputFile = libraryName + '.js';
var config = require('./config.json');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
module.exports = {
    entry: './halo.lib.js',
    output: {
        path: __dirname,//打包文件存放的绝对路径
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        root: [path.resolve(process.cwd(), 'public')],
        alias: config.alias,
        extensions: ['', '.js', '.css', '.scss', '.tpl', '.png', '.jpg']
    },
    plugins: [new webpack.ProvidePlugin({
                $: "jquery",//适配各种写法
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })],
    module: {
        loaders: [
            {test: /\.(tmpl|html)$/, loader: 'html-loader' },
            {test: /\.json$/, loader: 'json-loader' },
            {test: /\.jade$/, loader: 'jade-loader' }
            //{ test: /\.html$/, loader: 'html-loader' } //html-loader图片会被打包处理，注释掉的话需要将图片文件手动放入assets目录下
        ]
    }
};
