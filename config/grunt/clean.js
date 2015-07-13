// https://github.com/gruntjs/grunt-contrib-clean
module.exports = {
	bower: {
		src: [
			'<%= paths.bower %>'
		]
	},
	bowercomponents: {
		src: [
			'bower_components/'
		]
	},
	composer: {
		src: [
			'<%= paths.composer %>'
		]
	},
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
			'fonts/',
			'<%= paths.tmp %>icons'
		]
	},
	php: {
		src: [
			'<%= paths.hybridCore %>',
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
