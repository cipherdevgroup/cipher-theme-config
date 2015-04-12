// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
	theme: {
		options: {
			sourceMap: true,
			sourceMapName: 'js/theme.js.map',
			sourceMapIncludeSources: true,
			mangle: true,
			compress: true,
			report: 'gzip'
		},
		files: [
			{
				expand: true,
				cwd: 'js/',
				src: '*.js',
				dest: 'js/',
				ext: '.min.js',
				extDot: 'last'
			}
		]
	}
};
