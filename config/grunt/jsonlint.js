// https://github.com/brandonramirez/grunt-jsonlint
module.exports = {
	all: {
		src: [
			'<%= paths.authorAssets %>.jshintrc',
			'<%= paths.config %>.jshintrc',
			'<%= paths.authorAssets %>.jscsrc',
			'<%= paths.config %>.jscsrc',
			'bower.json',
			'composer.json',
			'package.json'
		]
	}
};
