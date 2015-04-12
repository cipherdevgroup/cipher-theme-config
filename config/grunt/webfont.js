// https://github.com/sapegin/grunt-webfont
module.exports = {
	options: {
		stylesheet: 'scss',
		relativeFontPath: 'fonts/',
		hashes: false,
		htmlDemo: false, // Enable for testing.
		htmlDemoTemplate: '<%= paths.authorAssets %>templates/demo.html',
		ligatures: false,
		normalize: true,
		embed: true,
		font: 'siteicons',
		types: 'eot,woff,ttf,svg',
		engine: 'node',
		template: '<%= paths.authorAssets %>templates/webfont.css',
		templateOptions: {
			baseClass: 'sic',
			classPrefix: 'sic-',
			mixinPrefix: 'sic-'
		}
	},
	icons: {
		src: [
			'<%= paths.tmp %>icons/**/*.svg'
		],
		dest: 'fonts/',
		destCss: '<%= paths.authorAssets %>scss/generated'
	}
};
