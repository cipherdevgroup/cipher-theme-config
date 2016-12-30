// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	css: {
		src: [
			'css/'
		]
	},
	dist: {
		src: [
			'<%= paths.dist %>'
		]
	},
	docs: {
		src: [
			'<%= paths.docs %>'
		]
	},
	fonts: {
		src: [
			'fonts/'
		]
	},
	php: {
		src: [
			'includes/vendor/'
		]
	},
	logs: {
		src: [
			'logs/'
		]
	},
	tmp: {
		src: [
			'<%= paths.tmp %>'
		]
	},
	js: {
		src: [
			'js/'
		]
	},
	images: {
		src: [
			'images/'
		]
	},
	languages: {
		src: [
			'languages/'
		]
	},
	style: {
		src: [
			'style*.*',
			'<%= paths.tmp %>style*.*'
		]
	},
	screenshot: {
		src: [
			'screenshot.png'
		]
	}
};
