// https://github.com/kswedberg/grunt-version
module.exports = {
	packageJSON: {
		options: {
			files: [
				'package.json'
			]
		}
	},
	style: {
		options: {
			prefix: '\\s+\\*\\s+Version:\\s+',
			files: [
				'<%= paths.authorAssets %>scss/style.scss'
			]
		}
	}
};
