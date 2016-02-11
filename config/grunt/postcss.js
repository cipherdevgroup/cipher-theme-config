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
			autoprefixer( {
				browsers: [
					'Android >= 2.1',
					'Chrome >= 21',
					'Explorer >= 8',
					'Firefox >= 17',
					'Opera >= 12.1',
					'Safari >= 6.0'
				]
			} )
		]
	},
	style: {
		src: '<%= paths.tmp %>style.css',
		dest: '<%= paths.tmp %>style.css'
	},
	editorStyle: {
		src: '<%= paths.tmp %>editor-style.css',
		dest: '<%= paths.tmp %>editor-style.css'
	}
};
