// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
	theme: {
		options: {
			domainPath: '<%= paths.languages %>',
			updateTimestamp: false,
			exclude: [
				'<%= paths.composer %>.*'
			],
			potHeaders: {
				poedit: true,
				'report-msgid-bugs-to': '<%= package.pot.reportmsgidbugsto %>',
				'last-translator': '<%= package.pot.lasttranslator %>',
				'language-team': '<%= package.pot.languageteam %>'
			},
			type: 'wp-theme'
		}
	}
};
