// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	options: {
		livereload: true
	},
	js: {
		files: [
			'<%= files.js %>'
		],
		tasks: [
			'build:js'
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
	php: {
		files: [
			'<%= files.php %>'
		],
		tasks: []
	},
	scss: {
		files: [
			'<%= files.scss %>'
		],
		tasks: [
			'sass:theme',
			'postcss',
			'wpcss:css',
			'rtlcss',
			'cssmin:style',
			'replace:style',
			'copy:css'
		]
	}
};
