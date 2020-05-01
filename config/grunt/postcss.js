// https://github.com/nDmitry/grunt-postcss
var autoprefixer = require( 'autoprefixer' ),
	pxtorem      = require( 'postcss-pxtorem' );

module.exports = {
	options: {
		map: true,
		processors: [
			pxtorem( {
				rootValue: 10,
				propWhiteList: [
					'font',
					'font-size',
					'line-height',
					'letter-spacing',
					'margin',
					'margin-left',
					'margin-right',
					'margin-top',
					'margin-bottom',
					'padding',
					'padding-left',
					'padding-right',
					'padding-top',
					'padding-bottom'
				],
				selectorBlackList: [
					'html'
				],
				minPixelValue: 2
			} ),
			autoprefixer()
		]
	},
	style: {
		src: 'style.css',
		dest: 'style.css'
	},
	editorStyle: {
		src: '<%= paths.css %>editor-style.css',
		dest: '<%= paths.css %>editor-style.css'
	}
};
