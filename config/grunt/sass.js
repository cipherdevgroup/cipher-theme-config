// https://github.com/sindresorhus/grunt-sass
module.exports = {
	options: {
		sourceMap: true,
		outputStyle: 'expanded'
	},
	style: {
		src: '<%= paths.cssSrc %>style.scss',
		dest: 'style.css'
	},
	editorStyle: {
		src: '<%= paths.cssSrc %>editor-style.scss',
		dest: '<%= paths.css %>editor-style.css'
	}
};
