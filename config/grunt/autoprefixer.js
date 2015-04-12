// https://github.com/nDmitry/grunt-autoprefixer
module.exports = {
	options: {
		browsers: [
			'Android >= 2.1',
			'Chrome >= 21',
			'Explorer >= 8',
			'Firefox >= 17',
			'Opera >= 12.1',
			'Safari >= 6.0'
		],
		map: false,
		diff: '<%= paths.logs %>autoprefixer.diff'
	},
	theme: {
		src: '<%= paths.tmp %>style.css',
		dest: '<%= paths.tmp %>style.css'
	}
};
