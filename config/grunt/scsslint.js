// https://github.com/ahmednuaman/grunt-scss-lint
module.exports = {
	options: {
		config: '<%= paths.authorAssets %>.scss-lint.yml',
		reporterOutput: null
	},
	assets: [
		'<%= paths.authorAssets %>scss/**/*.scss',
		'!<%= paths.authorAssets %>scss/generated/**'
	]
};
