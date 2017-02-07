// https://github.com/cedaro/grunt-wp-i18n
module.exports = {
	theme: {
		options: {
			domainPath: '<%= paths.languages %>',
			exclude: [
				'<%= paths.composer %>.*'
			],
			potHeaders: {
				'language': 'en',
				'plural-forms': 'nplurals=2; plural=(n != 1);',
				'poedit': true,
				'report-msgid-bugs-to': 'https://www.wpsitecare.com/contact/',
				'language-team': 'WP Site Care <hello@wpsitecare.com>',
				'last-translator': 'WP Site Care <hello@wpsitecare.com>'
			},
			processPot: function( pot ) {
				var translation,
					excludedMeta = [
						'Theme Name of the plugin/theme',
						'Theme URI of the plugin/theme',
						'Author of the plugin/theme',
						'Author URI of the plugin/theme'
					];

				for ( translation in pot.translations[''] ) {
					if ( 'undefined' !== typeof pot.translations[''][ translation ].comments.extracted ) {
						if ( 0 <= excludedMeta.indexOf( pot.translations[''][ translation ].comments.extracted ) ) {
							console.log( 'Excluded meta: ' + pot.translations[''][ translation ].comments.extracted );
							delete pot.translations[''][ translation ];
						}
					}
				}

				return pot;
			},
			type: 'wp-theme'
		}
	}
};
