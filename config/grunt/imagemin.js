// https://github.com/gruntjs/grunt-contrib-imagemin
module.exports = {
	images: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.imagesSrc %>',
				src: [
					'**/*.{png,jpg,jpeg,gif,svg}',
					'!screenshot.png'
				],
				dest: '<%= paths.images %>'
			},
			{
				expand: true,
				cwd: '<%= paths.imagesSrc %>',
				src: [
					'screenshot.png'
				],
				dest: ''
			}
		]
	}
};
