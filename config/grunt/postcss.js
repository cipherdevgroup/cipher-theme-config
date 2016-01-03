// https://github.com/nDmitry/grunt-postcss
var autoprefixer = require( 'autoprefixer' ),
	pxtorem      = require( 'postcss-pxtorem' );

module.exports = {
	options: {
		map: true,
		processors: [
			pxtorem(),
			autoprefixer({
				browsers: [
					'Android >= 2.1',
					'Chrome >= 21',
					'Explorer >= 8',
					'Firefox >= 17',
					'Opera >= 12.1',
					'Safari >= 6.0'
				]
			})
		]
	},
	theme: {
		src: '<%= paths.tmp %>style.css',
		dest: '<%= paths.tmp %>style.css'
	}
};
