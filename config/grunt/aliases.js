module.exports = function() {
	'use strict';
	var tasks = {
		build: [
			'clean',
			'bower_install',
			'build:dependencies:php',
			'build:fonts',
			'build:css',
			'build:images',
			'build:js',
			'clean:bowercomponents',
			'build:i18n'
		],
		'build:dev': [
			'build:fonts',
			'build:css',
			'build:images',
			'build:js'
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
		check: [
			'scsslint',
			'jshint',
			'jsonlint',
			'jsvalidate',
			'jscs',
			'checktextdomain',
			'complexity'
		],
		commit: [
			'check'
		],
		'default': [
			'watch'
		],
		newtheme: [
			'replace:packagename',
			'readpkg',
			'build'
		],
		'package': [
			'build',
			'compress:dist'
		],
		'package:dev': [
			'build',
			'compress:dev'
		]
	};

	return tasks;
};
