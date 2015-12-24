// https://github.com/nDmitry/grunt-postcss
var autoprefixer = require( 'autoprefixer' ),
	cssnano      = require( 'cssnano' ),
	pixrem       = require( 'pixrem' );

module.exports = {
	options: {
		map: true,
		processors: [
			pixrem,
			autoprefixer({
				browsers: [
					'Android >= 2.1',
					'Chrome >= 21',
					'Explorer >= 8',
					'Firefox >= 17',
					'Opera >= 12.1',
					'Safari >= 6.0'
				]
			}),
			cssnano
		]
	},
	theme: {
		src: '<%= paths.tmp %>style.css',
		dest: '<%= paths.tmp %>style.css'
	},
	vendor: {
		expand: true,
		cwd: 'css/',
		src: [
			'*.css',
			'!*.min.css'
		],
		dest: 'css/',
		ext: '.min.css',
		extDot: 'last'
	}
};
