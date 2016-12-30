// https://github.com/gruntjs/grunt-contrib-imagemin
module.exports = {
	images: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.imagesSrc %>',
				src: [ '**/*.{png,jpg,jpeg,gif,svg}' ],
				dest: '<%= paths.images %>'
			}
		]
	}
};
