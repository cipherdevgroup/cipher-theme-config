// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	options: {
		report: 'gzip',
		sourceMap: false
	},
	style: {
		expand: true,
		cwd: '<%= paths.tmp %>',
		src: [
			'*.css',
			'!*.min.css'
		],
		dest: '<%= paths.tmp %>',
		ext: '.min.css',
		extDot: 'last'
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
