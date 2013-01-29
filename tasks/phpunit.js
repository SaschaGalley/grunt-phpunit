/*
 * grunt-phpunit
 * 0.1.0 - 2013-01-22
 *
 * (c) Sascha Galley
 * http://xash.at
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
	'use strict';

	var _ = grunt.util._;
	
	var path = require('path');
	
	grunt.registerMultiTask( 'phpunit', 'Run phpunit', function() {
		
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			// default options
			bin: 'phpunit',
			bootstrap: false,
			stdout: true,
			stderr: true,
			failOnError: true
		});
		
		var exec = require('child_process').exec;
		var done = this.async();
		
		var dataOut = options.stdout;
		var dataErr = options.stderr;

		var dir = path.normalize(this.data.path);
		
		grunt.log.writeln('Starting phpunit in ' + dir.cyan);
		
		var cmd = options.bin;
		
		// set colored output
		if ( options.color === true )
			cmd += ' --colors';
		
		// phpunit bootstrap
		if ( options.bootstrap )
			cmd += ' --bootstrap '+dir+options.bootstrap;
		
		// add directory
		cmd += ' '+dir;
		
		grunt.verbose.writeln('Cmd: '+cmd);
		
		exec( cmd, function( err, stdout, stderr ) {
			
			if ( stdout ) {
				if ( _.isFunction( dataOut ) ) {
					dataOut( stdout );
				} else if ( dataOut === true ) {
					grunt.log.write( stdout );
				}
			}

			if ( err ) {
				if ( _.isFunction( dataErr ) ) {
					dataErr( stderr );
				} else if ( options.failOnError === true ) {
					grunt.fatal( err );
				} else if ( dataErr === true ) {
					grunt.log.error( err );
				}
			}

			done();
		});
	});
};