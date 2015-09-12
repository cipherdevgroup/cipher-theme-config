// Re-read the package.json file to make sure all data is current.
module.exports = function( grunt ) {
	'use strict';

	grunt.registerTask( 'readpkg', function() {
		grunt.config.set( 'pkg', grunt.file.readJSON( './package.json' ) );
	});
};
