'use strict'

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
	return {
		entry: path.resolve(__dirname, './src/index.js'),
		resolve: {
			extensions: ['.js', '.vue']
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'app.js'
		},
		devServer: {
			contentBase: './dist',
			hot: true
		},
		module: {
			rules: [
				{
					test: /\.(png|jpe?g|gif)$/i,
					loader: 'file-loader',
					options: {
							esModule: false
					}
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					loader: 'file-loader',
					options: {
							esModule: false
					}
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test:/\.(s*)css$/,
					use: [
						argv.mode !== 'production'
							? 'vue-style-loader'
							: MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				},
				{
					test: /\.(js|vue)$/,
					use: 'eslint-loader',
					enforce: 'pre'
				},
				{
					test: /\.js$/,
					use: 'babel-loader'
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new VueLoaderPlugin(),
			new HtmlWebpackPlugin({
				favicon: 'src/favicon.ico',
				filename: 'index.html',
				template: 'index.html',
				inject: true
			}),
			new MiniCssExtractPlugin({
				filename: 'style.css'
			})
		]
	}
}