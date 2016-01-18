/* global require, __dirname */
module.exports = function() {
	'use strict';

	var path = require( 'path' ),
		project = {};

	project.paths = {
		config:       'config/',
		assets:       'assets/',
		dist:         'dist/',
		docs:         'docs/',
		languages:    'languages/',
		tmp:          'tmp/',
		authorAssets: 'assets/theme/',
		bower:        'assets/bower/',
		composer:     'assets/composer/',
		grunt:        'config/grunt/',
		tasks:        'tasks/'
	};

	project.paths.global = {
		config: path.join( __dirname, 'config/' ),
		grunt:  path.join( __dirname, 'config/grunt/' ),
		tasks:  path.join( __dirname, 'tasks/' )
	};

	project.taskMap = {
		addtextdomain: 'grunt-wp-i18n',
		readpkg:       'sitecare-theme-config',
		makepot:       'grunt-wp-i18n'
	};

	project.files = {
		js:     project.paths.assets       + '{,*/}js/*.js',
		scss:   project.paths.authorAssets + 'scss/**/*.scss',
		config: project.paths.config       + '**/*.js',
		changelog: 'CHANGELOG.md'
	};

	project.files.php = [
		'*.php',
		'**/*.php',
		'!.git/**',
		'!.sass-cache/**',
		'!assets/**',
		'!css/**',
		'!dist/**',
		'!fonts/**',
		'!images/**',
		'!js/**',
		'!languages/**',
		'!logs/**',
		'!bower_components/**',
		'!node_modules/**',
		'!tmp/**'
	];

	return project;
};
