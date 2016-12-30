// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	css: {
		src: [
			'<%= paths.css %>'
		]
	},
	dist: {
		src: [
			'<%= paths.dist %>'
		]
	},
	fonts: {
		src: [
			'<%= paths.fonts %>'
		]
	},
	php: {
		src: [
			'includes/vendor/'
		]
	},
	js: {
		src: [
			'<%= paths.js %>'
		]
	},
	images: {
		src: [
			'<%= paths.images %>'
		]
	},
	languages: {
		src: [
			'<%= paths.languages %>'
		]
	},
	style: {
		src: [
			'style*.*'
		]
	},
	screenshot: {
		src: [
			'screenshot.png'
		]
	}
};
