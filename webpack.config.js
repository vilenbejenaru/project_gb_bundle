let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let{ CleanWebpackPlugin } = require('clean-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { resolve } = require('path');

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'main.[contenthash].js',
    },
    module: {
        rules: [
            // {
            //     test:/\.js$/,
            //     loader: 'babel-loader',
            //     exclude: '/node-modules/'
            // },      
            {
                test: /\.css$/,
                use: [
                    'MiniCssExtractPlugin.loader',
                    'css-loader'
				]
              },     
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'MiniCssExtractPlugin.loader',
                    'css-loader',
                    'sass-loader'
				]
              },
              {
                test: /\\.(png|jpe?g|gif|mp3)$/i, 
                loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    }
                }
        ] 
    },
    plugins: [
        new CleanWebpackPlugin(), 
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
            minify: false
        }), 
        new MiniCssExtractPlugin({ // 2
            filename: '[name].[contenthash].css' // 3
        }),
        new BundleAnalyzerPlugin(),
    ],

    devServer: {
        overlay: true, // показывает ошибки / опечатки и тд
        writeToDisk: true,
    }
};

module.exports = conf;
  