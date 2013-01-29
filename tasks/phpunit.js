/*
 * grunt-phpunit
 * https://github.com/SaschaGalley/grunt-phpunit
 *
 * Copyright (c) 2013 Sascha Galley
 * http://xash.at
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
	'use strict';

	var _ = grunt.util._;
	
	var path = require('path');
	var exec = require('child_process').exec;
	
	grunt.registerMultiTask( 'phpunit', 'Run phpunit', function() {
	
		var done = this.async();
		
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			// Default options
			bin: 'phpunit',
			bootstrap: false,
			colors: false,
			coverage: false,
			debug: false,
			verbose: false
		});
		
		// Normalize dir and cmd.
		var dir = path.normalize(this.data.dir);
		var cmd = path.normalize(options.bin);
		
		if (grunt.option('colors') || options.colors === true) {
			// Use colors in output.
			cmd += ' --colors';
		}
		
		if (options.bootstrap) {
			// A "bootstrap" PHP file that is run before the tests.
			cmd += ' --bootstrap '+dir+options.bootstrap;
		}
		
		if (grunt.option('coverage') || options.coverage === true) {
			// Generate code coverage report in text format.
			cmd += ' --coverage-text';
		}
		
		if (grunt.option('debug') || options.debug === true) {
			// Display debbuging information during test execution.
			cmd += ' --debug';
		}
		
		if (grunt.option('verbose') || options.verbose === true) {
			// Output more verbose information.
			cmd += ' --verbose';
		}
		
		// Set working directory.
		cmd += ' ' + dir;
		
		grunt.log.writeln('Starting phpunit (target: ' + this.target.cyan + ') in ' + dir.cyan);
		grunt.verbose.writeln('Exec: ' + cmd);
		
		// Execute phpunit command.
		exec(cmd, function( err, stdout, stderr) {
			
			if (stdout) {
				grunt.log.write(stdout);
			}

			if (err) {
				grunt.fatal(err);
			}

			done();
			
		});
	});
};