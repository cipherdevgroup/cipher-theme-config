// https://github.com/gruntjs/grunt-contrib-imagemin
module.exports = {
	images: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>images/',
				src: [ '**/*.{png,jpg,jpeg,gif,svg}' ],
				dest: '<%= paths.tmp %>images/'
			}
		]
	}
};
