// https://github.com/vigetlabs/grunt-complexity
module.exports = {
	options: {
		breakOnErrors: false
	},
	assets: {
		src: [
			'<%= paths.authorAssets %>js/{,*/}*.js'
		]
	},
	grunt: {
		src: [
			'<%= files.config %>'
		]
	}
};
