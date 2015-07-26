// https://github.com/1000ch/grunt-image
module.exports = {
	images: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>images/',
				src: ['*.*'],
				dest: '<%= paths.tmp %>images/'
			}
		]
	},
	icons: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>icons/',
				src: ['**/*.*'],
				dest: '<%= paths.tmp %>icons/'
			},
			{
				expand: true,
				cwd: '<%= paths.bower %>icons/',
				src: ['**/*.svg'],
				dest: '<%= paths.tmp %>icons/'
			}
		]
	}
};
