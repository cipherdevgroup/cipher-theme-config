// https://github.com/cedaro/grunt-wp-i18n
module.exports = {
	options: {
		textdomain: '<%= package.textdomain %>'
	},
	php: {
		options: {
			updateDomains: [ 'all' ]
		},
		expand: true,
		src: [
			'<%= files.php %>'
		]
	}
};
