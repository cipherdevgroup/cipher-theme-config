// https://github.com/gruntjs/grunt-contrib-compress
module.exports = {
	dist: {
		options: {
			archive: '<%= paths.dist %><%= pkg.name %>-<%= pkg.version %>.zip'
		},
		files: [
			{
				expand: true,
				src: [
					'**',
					'.*',
					'!.git/**',
					'!.sass-cache/**',
					'!assets/**',
					'!config/**',
					'!dist/**',
					'!logs/**',
					'!node_modules/**',
					'!tmp/**',
					'!*.sublime*',
					'!.DS_Store',
					'!.gitattributes',
					'!.gitignore',
					'!bower.json',
					'!composer.json',
					'!composer.lock',
					'!gruntfile.js',
					'!package.json'
				], // Take this...
				dest: '<%= pkg.name %>' // ...put it into this, then zip that up as ^^^
			}
		]
	},
	dev: {
		options: {
			archive: '<%= paths.dist %><%= pkg.name %>-developer-<%= pkg.version %>.zip'
		},
		files: [
			{
				expand: true,
				src: [
					'**',
					'.*',
					'!node_modules/**',
					'!.sass-cache/**',
					'!dist/**',
					'!logs/**',
					'!tmp/**',
					'!*.sublime*',
					'!.DS_Store'
				], // Take this...
				dest: '<%= pkg.name %>' // ...put it into this, then zip that up as ^^^
			}
		]
	}
};
