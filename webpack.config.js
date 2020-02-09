'use strict'

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

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
					test: /\.css$/,
					use: [
						argv.mode !== 'production'
							? 'vue-style-loader'
							: MiniCssExtractPlugin.loader,
						'css-loader'
					]
				},
				{
					test: /\.scss$/,
					use: [
						argv.mode !== 'production'
							? 'vue-style-loader'
							: MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								implementation: require('sass'),
								sassOptions: {
									fiber: require('fibers')
								}
							}
						}
					]
				},
				{
					test: /\.sass$/,
					use: [
						argv.mode !== 'production'
							? 'vue-style-loader'
							: MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								implementation: require('sass'),
								sassOptions: {
									fiber: require('fibers')
								},
								prependData: "@import './src/styles/variables.sass'",
							}
						}
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
			}),
			new VuetifyLoaderPlugin()
		]
	}
}