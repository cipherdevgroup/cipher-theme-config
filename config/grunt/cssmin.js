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
		ext: '.min.css'
	},
	vendor: {
		expand: true,
		cwd: 'css/',
		src: [
			'*.css'
		],
		dest: 'css/',
		ext: '.min.css'
	}
};
