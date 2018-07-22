// https://github.com/sindresorhus/grunt-sass
const sass = require( 'node-sass' );

module.exports = {
	options: {
		implementation: sass,
		sourceMap: true,
		outputStyle: 'expanded',
		indentType: 'tab',
		indentWidth: 1
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
