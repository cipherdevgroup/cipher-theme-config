// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	options: {
		livereload: true
	},
	grunt: {
		files: [
			'<%= files.config %>'
		],
		tasks: [
			'jshint:grunt',
			'jsvalidate:grunt',
			'jscs:grunt'
		]
	},
	js: {
		files: [
			'<%= files.js %>'
		],
		tasks: [
			'build:js',
			'jshint:assets',
			'jsvalidate:assets',
			'jscs:assets'
		]
	},
	icons: {
		files: [
			'<%= files.icons %>'
		],
		tasks: [
			'newer:imagemin:icons',
			'webfont'
		]
	},
	scss: {
		files: [
			'<%= files.scss %>'
		],
		tasks: [
			'sass:theme',
			'usebanner:theme',
			'autoprefixer',
			'wpcss:css',
			'cssjanus',
			'cssmin:style',
			'replace:style',
			'copy:css'
		]
	}
};
