// https://github.com/kswedberg/grunt-version
module.exports = {
	options: {
		pkg: {
			version: '<%= package.version %>'
		}
	},
	project: {
		src: [
			'package.json',
			'bower.json'
		]
	},
	functions: {
		options: {
			prefix: 'THEME_VERSION\'\,\\s+\''
		},
		src: [
			'functions.php'
		]
	},
	style: {
		options: {
			prefix: '\\s+\\*\\s+Version:\\s+'
		},
		src: [
			'<%= paths.cssSrc %>style.scss'
		]
	}
};
