/*jshint node:true */

module.exports = function( grunt ) {
	'use strict';

	var config = require( './index' )();

	grunt.initConfig({
		jscs: {
			options: {
				config: config.paths.global.config + '/.jscsrc'
			},
			check: {
				files: {
					src: [
						'Gruntfile.js',
						'index.js',
						'config/**/*.js'
					]
				}
			}
		},
		jshint: {
			options: {
				jshintrc: config.paths.global.config + '/.jshintnoderc'
			},
			all: [
				'index.js',
				'config/**/*.js'
			]
		}

	});

	grunt.loadNpmTasks( 'grunt-jscs' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.registerTask( 'default', [ 'jscs', 'jshint' ] );
};
