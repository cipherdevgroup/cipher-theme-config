// https://github.com/sindresorhus/grunt-sass
module.exports = {
	options: {
		includePaths: require( 'node-neat' ).includePaths,
		sourceMap: false,
		lineNumbers: false,
		outputStyle: 'expanded'
	},
	theme: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>scss/',
				src: 'style.scss',
				dest: '<%= paths.tmp %>',
				ext: '.css'
			}
		]
	},
	editorstyle: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>scss/',
				src: 'editor-style.scss',
				dest: '<%= paths.tmp %>',
				ext: '.css'
			}
		]
	}
};
