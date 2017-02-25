const path = require('path');
const webpack = require('webpack');

// Paths
const srcPath  = path.join(__dirname,'../..', 'app');
const distPath = path.join(__dirname,'../..', 'dist');
const nodeModules = "node_modules";
const excludeNodeModules = /node_modules/;

// ENV
const appEnv = process.env.NODE_ENV || 'production';

// Babel config
const babelConfig = require('../babel/babel.prod');

// Plugins
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	context: srcPath,
	devtool: "source-map",
	entry: {
		app: './index.js'
	},
	output: {
		path: distPath,
		publicPath: '',
		filename: '[name].[chunkhash:8].js',
	},
	resolve: {
		modules: [
			srcPath,
			nodeModules
		]
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: srcPath,
				loader: 'babel-loader',
				query: babelConfig,
				exclude: excludeNodeModules
			},
			{
				test: /\.s?[ac]ss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: false,
								importLoaders: 2
							}
						},
						{
							loader: 'postcss-loader'
						},
						{
							loader: 'sass-loader',
							options: {
								outputStyle: 'compressed',
								includePath: encodeURIComponent(srcPath),
							}
						}
					]
				})
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
				include: [ srcPath, nodeModules ],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 5120,
							name: 'static/media/img/[name].[hash:5].[ext]'
						}
					}
				],
			}
		]
	},
	plugins: [
		new DashboardPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new HtmlWebpackPlugin({
			inject: 'body',
			template: 'index.html'
		}),
		new ExtractTextPlugin({
			filename: 'styles.[hash:5].css',
			allChunks: true,
			disable: false
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				screw_ie8: true,
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true,
			},
			mangle: {
				screw_ie8: true
			},
			output: {
				comments: false,
				screw_ie8: true
			}
		})
	]
}

module.exports = config;