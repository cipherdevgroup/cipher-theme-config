// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	style: {
		src: 'style.css',
		dest: 'style.min.css'
	},
	vendor: {
		expand: true,
		cwd: '<%= paths.css %>',
		src: [
			'*.css',
			'!*.min.css'
		],
		dest: '<%= paths.css %>',
		ext: '.min.css',
		extDot: 'last'
	}
};
