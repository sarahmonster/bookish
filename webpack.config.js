const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	resolve: {
    	extensions: [ '.ts', '.js', '*' ],
    	modules: [ path.resolve(__dirname, "src"), "node_modules"]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-2', 'react', 'minify'],
				},
			},
			{
				test: /\.scss$/,
				exclude: /(node_modules|bower_components)/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {sourceMap: true},
						}, {
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: () => ([
									require('autoprefixer')({
										browsers: ['last 2 versions', 'ie > 8'],
									}),
								]),
							},
						}, {
							loader: 'sass-loader',
							options: {sourceMap: true},
						}],
				}),
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
		new BrowserSyncPlugin({
	      proxy: "https://triggersandsparks.test",
		  server: false,
		  host: null,
		  notify: true,
		  injectChanges: true,
		  xip: false,
		  open: true,
		  startPath: false,
	})
	],
};
