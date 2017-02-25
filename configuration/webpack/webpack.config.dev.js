const {resolve} = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

// Ports and ENV
const PORT = process.env.PORT || 8888;
const appEnv = process.env.NODE_ENV || 'development'; //TODO check about app ENV and passing them thru CLI


// Paths
const srcPath = resolve('app');
const distPath = resolve('dist');
const nodeModules = resolve('node_modules');
const excludeNodeModules = /node_modules/;
const cssLibs = resolve('app/static/styles/libs');
const cssUtils = resolve('app/static/styles/utils');

// Babel config
const babelConfig = require('../babel/babel.dev');

// Plugins
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
	context: srcPath,
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8888',
		'webpack/hot/only-dev-server',
		'./index.js'
	],
	output: {
		path: distPath,
		publicPath: '/',
		filename: '[name].js',
	},
	resolve: {
		modules: [
			srcPath,
			nodeModules
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: srcPath,
				loader: 'babel-loader',
				query: babelConfig,
				exclude: excludeNodeModules
			},
			{
				// Vendor and lib css
				test: /\.s?[ac]ss$/,
				include: [
					nodeModules,
					cssLibs,
					cssUtils
				],
				// exclude: [
				// 	srcPath
				// ],
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			},
			{
				test: /\.s?[ac]ss$/,
				include: [
					srcPath,
				],
				exclude: [
					excludeNodeModules,
					cssLibs,
					cssUtils
				],
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							sourceMap: true,
							// modules: true,
							// localIdentName: '[name]__[local]--[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							includePath: encodeURIComponent(srcPath),
							outputStyle: 'expanded'
						}
					}
				]
			},
			{
				test: /\.(mp4|webm)(\?.*)?$/,
				include: [srcPath, nodeModules],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'static/media/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(eot|woff2?|ttf|otf)(\?.*)?$/i,
				include: [srcPath, nodeModules],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5120,
							name: 'static/media/fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)(\?.*)?$/i,
				include: [srcPath, nodeModules],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5120,
							name: 'static/media/img/[name].[hash:8].[ext]'
						}
					}
				]
			}
		]
	},

	devServer: {
		hot: true,
		contentBase: srcPath,
		publicPath: '/',
		port: 8888,
		inline: true,
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		stats: {
			assets: true,
			children: false,
			chunks: false,
			hash: false,
			modules: false,
			publicPath: false,
			timings: true,
			version: false,
			warnings: true,
			colors: {
				green: '\u001b[32m',
			}
		}
	},
	plugins: [
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
			inject: 'body',
			template: 'index.html'
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(appEnv)
		}),
		new ExtractTextPlugin({
			filename: 'styles.[hash:5].css',
			allChunks: true,
			disable: false
		}),
	]
};

module.exports = config;