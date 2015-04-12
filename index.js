/* global require, __dirname */
module.exports = function() {
	'use strict';

	var path = require( 'path' ),
		project = null;

	project = {
		paths: {
			config:       'config/',
			assets:       'assets/',
			dist:         'dist/',
			docs:         'docs/',
			languages:    'languages/',
			logs:         'logs/',
			tmp:          'tmp/',
			authorAssets: 'assets/theme/',
			bower:        'assets/bower/',
			composer:     'assets/composer/',
			grunt:        'config/grunt/',
			hybridCore:   'hybrid-core/',
			tasks:        'config/grunt/tasks/',
			global: {
				config: path.join( __dirname, 'config/' ),
				grunt:  path.join( __dirname, 'config/grunt/' ),
				tasks:  path.join( __dirname, 'config/grunt/tasks/' )
			}
		},
		taskMap: {
			addtextdomain: 'grunt-wp-i18n',
			bower_install: 'grunt-bower-install-task',
			makepot:       'grunt-wp-i18n',
			scsslint:      'grunt-scss-lint',
			usebanner:     'grunt-banner',
			wpcss:         'grunt-wp-css'
		}
	};

	project.files = {
		js:     project.paths.assets       + '{,*/}js/*.js',
		scss:   project.paths.authorAssets + 'scss/**/*.scss',
		icons:  project.paths.authorAssets + 'icons/**/*.svg',
		config: project.paths.config       + '**/*.js',
		php: [
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
		],
		changelog: 'CHANGELOG.md'
	};

	return project;
};
