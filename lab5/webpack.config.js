// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const fs = require('fs')
const PATHS = {
    src: path.join(__dirname),
    dist: path.join(__dirname, '../dist'),
    assets: 'image/'
}

const PAGES_DIR = `${PATHS.src}/src/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 9000,
        compress: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/index.pug`,
            filename: './index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/news.pug`,
            filename: './news.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/photo.pug`,
            filename: './photo.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/rozklad.pug`,
            filename: './rozklad.html',
            inject: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/pages/imeges',
                    to: 'imeges',
                },
            ],
        }),
            ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                },
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};