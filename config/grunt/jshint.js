// https://github.com/gruntjs/grunt-contrib-jshint
module.exports = {
	assets: {
		options: {
			jshintrc: '<%= paths.authorAssets %>.jshintrc'
		},
		src: [
			'<%= paths.authorAssets %>js/{,*/}*.js'
		]
	},
	grunt: {
		options: {
			jshintrc: '<%= paths.config %>.jshintrc'
		},
		src: [
			'<%= files.config %>'
		]
	}
};
