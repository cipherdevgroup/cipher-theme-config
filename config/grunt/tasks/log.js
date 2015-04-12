// Prompt for the changelog.
// Credit to The Theme Foundry's Make theme.
// (Adapted and currently broken a little in logic).
module.exports = function( grunt ) {
	'use strict';

	grunt.registerTask( 'log', function( releaseType ) {
		var changelog,
			semver     = require( 'semver' ),
			newVersion = semver.valid( grunt.config( 'pkg.version' ) ),
			// newVersion = semver.inc( grunt.config.get( 'pkg' ).version, releaseType ),
			regex      = new RegExp( '^## ' + newVersion, 'gm' ); // Match the version number (e.g., "## 1.2.3")

		if ( 'major' !== releaseType && 'minor' !== releaseType && 'patch' !== releaseType ) {
			grunt.fail.fatal( 'Please specify the log type (major, minor, or patch), e.g., "grunt log:patch"' );
		} else {
			// Get the new version
			changelog = grunt.file.read( grunt.config( 'files.changelog' ) );

			if ( changelog.match( regex ) ) {
				grunt.log.ok( 'v' + newVersion + ' changlelog entry found' );
			} else {
				grunt.fail.fatal( 'Please enter a changelog entry for v' + newVersion );
			}
		}
	});
};
