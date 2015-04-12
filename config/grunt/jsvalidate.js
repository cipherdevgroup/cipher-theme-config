// https://github.com/ariya/grunt-jsvalidate
module.exports = {
	options: {
		verbose: true
	},
	assets: {
		files: {
			src: [
				'<%= paths.authorAssets %>js/{,*/}*.js'
			]
		}
	},
	theme: {
		files: {
			src: [
				'<%= paths.theme %>js/{,*/}*.js'
			]
		}
	},
	grunt: {
		files: {
			src: [
				'<%= files.config %>'
			]
		}
	}
};
