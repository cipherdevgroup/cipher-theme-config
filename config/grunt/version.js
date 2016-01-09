// https://github.com/kswedberg/grunt-version
module.exports = {
	options: {
		package: {
			version: '<%= package.version %>'
		}
	},
	project: {
		src: [
			'package.json',
			'bower.json'
		]
	},
	style: {
		options: {
			prefix: '\\s+\\*\\s+Version:\\s+'
		},
		src: [
			'<%= paths.authorAssets %>scss/style.scss'
		]
	}
};
