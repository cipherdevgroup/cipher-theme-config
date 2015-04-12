// https://github.com/jscs-dev/grunt-jscs
module.exports = {
	assets: {
		options: {
			config: '<%= paths.authorAssets %>.jscsrc'
		},
		files: {
			src: [
				'<%= paths.authorAssets %>js/{,*/}*.js'
			]
		}
	},
	grunt: {
		options: {
			config: '<%= paths.config %>.jscsrc'
		},
		files: {
			src: [
				'<%= files.config %>'
			]
		}
	}
};
