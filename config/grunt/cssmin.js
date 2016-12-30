// https://github.com/gruntjs/grunt-contrib-cssmin
module.exports = {
	style: {
		files: [
			{
				src: 'style.css',
				dest: 'style.min.css'
			},
			{
				src: 'style-rtl.css',
				dest: 'style-rtl.min.css'
			}
		]
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
