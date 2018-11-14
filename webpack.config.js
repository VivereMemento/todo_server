const path = require('path'); // для разной среды разработки linux/windows
const webpack = require('webpack');
const HtmlWebpackPlugin = require('./webpack/HtmlWebpackPlugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const babel = require('./webpack/babel');
const extarctCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/uglify');
const images = require('./webpack/images');
const devserver = require('./webpack/devserver');
const entryPoints = require('./webpack/entry-points');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: entryPoints(PATHS),
		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},
		plugins: [
			...HtmlWebpackPlugin(PATHS),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			})
		]
	},
	pug(),
	babel(),
	images()
]);

module.exports = function(env) {
	if (env === 'production'){
		return merge([
			common,
			extarctCSS(),
			uglifyJS()
		])
	}
	if (env === 'development'){
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};