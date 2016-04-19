module.exports = function() {
	'use strict';
	var tasks = {
		'build': [
			'readpkg',
			'clean',
			'shell:bower',
			'build:dependencies:php',
			'build:fonts',
			'build:images',
			'build:css',
			'build:js',
			'clean:bowercomponents',
			'build:i18n'
		],
		'build:dist': [
			'readpkg',
			'clean',
			'shell:bower',
			'build:dependencies:php',
			'build:fonts',
			'build:images',
			'build:css:dist',
			'build:js:dist',
			'clean:bowercomponents',
			'build:i18n'
		],
		'build:dependencies': [
			'build:dependencies:css',
			'build:dependencies:fonts',
			'build:dependencies:js',
			'build:dependencies:php'
		],
		'build:dependencies:fonts': [
			'clean:fonts',
			'shell:bower',
			'copy:bowerfonts'
		],
		'build:dependencies:css': [
			'clean:css',
			'shell:bower',
			'copy:bowercss'
		],
		'build:dependencies:js': [
			'clean:js',
			'shell:bower',
			'copy:bowerjs'
		],
		'build:dependencies:php': [
			'clean:php',
			'shell:composer',
			'newer:copy:php'
		],
		'build:fonts': [
			'build:dependencies:fonts',
			'newer:copy:fonts'
		],
		'build:css': [
			'build:dependencies:css',
			'newer:sass',
			'newer:postcss',
			'newer:rtlcss',
			'newer:cssmin',
			'newer:copy:css'
		],
		'build:css:dist': [
			'build:dependencies:css',
			'newer:sass',
			'newer:postcss',
			'newer:rtlcss',
			'newer:wpcss',
			'newer:copy:css'
		],
		'build:images': [
			'newer:imagemin:images',
			'newer:copy:images'
		],
		'build:js': [
			'build:dependencies:js',
			'newer:concat:js',
			'newer:uglify'
		],
		'build:js:dist': [
			'build:dependencies:js',
			'newer:concat:js'
		],
		'build:i18n': [
			'clean:languages',
			'addtextdomain',
			'makepot',
			'newer:copy:languages'
		],
		'default': [
			'watch'
		],
		'newtheme': [
			'replace:packagename',
			'build'
		],
		'package': [
			'build',
			'compress'
		],
		'package:dist': [
			'build:dist',
			'compress:dist'
		],
		'package:dev': [
			'build',
			'compress:dev'
		],
		'release:major': [
			'version::major',
			'package'
		],
		'release:minor': [
			'version::minor',
			'package'
		],
		'release:patch': [
			'version::patch',
			'package'
		]
	};

	return tasks;
};
