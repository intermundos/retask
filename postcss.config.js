const csscombConfig = require('./configuration/postcss/csscomb.config.prod.js');

module.exports = {

	plugins: [
		(process.env.NODE_ENV === 'production' && require('postcss-csscomb')(csscombConfig)),
		require('rucksack-css')(),
		(process.env.NODE_ENV === 'production' && require('css-mqpacker')()),
		require('autoprefixer')({browsers: ['last 2 versions', '> 5%']}),
		(process.env.NODE_ENV === 'production' && require('cssnano')),

	]
};


//TODO find how to make custom path for this config ???