module.exports = function() {
	'use strict';
	var tasks = {
		'build': [
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
