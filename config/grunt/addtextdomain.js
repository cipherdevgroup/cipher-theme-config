// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
	options: {
		textdomain: '<%= pkg.textdomain %>',
		updateDomains: [ 'all' ]
	},
	php: {
		files: {
			src: [
				'<%= files.php %>'
			]
		}
	}
};
