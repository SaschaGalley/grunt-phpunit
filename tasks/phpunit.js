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
			verbose: false,
			configuration: false,
			logJunit: false,
			logTap: false,
			logJson: false,
			coverageHtml: false,
			coverageClover: false,
			coveragePhp: false,
			coverageText: false,
			testdoxHtml: false,
			testdoxText: false,
			filter: false,
			group: false,
			excludeGroup: false,
			listGroups: false,
			loader: false,
			printer: false,
			repeat: false,
			tap: false,
			testdox: false,
			stderr: false,
			stopOnError: false,
			stopOnFailure: false,
			stopOnSkipped: false,
			stopOnIncomplete: false,
			strict: false,
			processIsolation: false,
			noGlobalsBackup: false,
			staticBackup: false,
			noConfiguration: false,
			includePath: false,
			d: false
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
			if (grunt.file.exists(dir + options.bootstrap)) {
				cmd += ' --bootstrap ' + dir + options.bootstrap;
			} else {
				cmd += ' --bootstrap ' + options.bootstrap;
			}
		}
		
		if (grunt.option('coverage') || options.coverage === true || options.coverageText === true) {
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
		
		if (options.configuration) {
			cmd += ' --configuration ' + options.configuration;
		}
		
		if (options.logJunit) {
			cmd += ' --log-junit ' + options.logJunit;
		}
		
		if (options.logTap) {
			cmd += ' --log-tap ' + options.logTap;
		}
		
		if (options.logJson) {
			cmd += ' --log-json ' + options.logJson;
		}
		
		if (options.coverageHtml) {
			cmd += ' --coverage-html ' + options.coverageHtml;
		}
		
		if (options.coverageClover) {
			cmd += ' --coverage-clover ' + options.coverageClover;
		}
		
		if (options.coveragePhp) {
			cmd += ' --coverage-php ' + options.coveragePhp;
		}
		
		if (options.testdoxHtml) {
			cmd += ' --testdox-html ' + options.testdoxHtml;
		}
		
		if (options.testdoxText) {
			cmd += ' --testdox-text ' + options.testdoxText;
		}
		
		if (options.filter) {
			cmd += ' --filter ' + options.filter;
		}
		
		if (options.group) {
			cmd += ' --group ' + options.group;
		}
		
		if (options.excludeGroup) {
			cmd += ' --exclude-group ' + options.excludeGroup;
		}
		
		if (options.listGroups === true) {
			cmd += ' --list-groups';
		}
		
		if (options.loader) {
			cmd += ' --loader ' + options.loader;
		}
		
		if (options.printer) {
			cmd += ' --printer ' + options.printer;
		}
		
		if (options.repeat) {
			cmd += ' --repeat ' + options.repeat;
		}
		
		if (options.tap === true) {
			cmd += ' --tap';
		}
		
		if (options.testdox === true) {
			cmd += ' --testdox';
		}
		
		if (options.stderr === true) {
			cmd += ' --stderr';
		}
		
		if (options.stopOnError === true) {
			cmd += ' --stop-on-error';
		}
		
		if (options.stopOnFailure === true) {
			cmd += ' --stop-on-failure';
		}
		
		if (options.stopOnSkipped === true) {
			cmd += ' --stop-on-skipped';
		}
		
		if (options.stopOnIncomplete === true) {
			cmd += ' --stop-on-incomplete';
		}
		
		if (options.strict === true) {
			cmd += ' --strict';
		}
		
		if (options.processIsolation === true) {
			cmd += ' --process-isolation';
		}
		
		if (options.noGlobalsBackup === true) {
			cmd += ' --no-globals-backup';
		}
		
		if (options.staticBackup === true) {
			cmd += ' --static-backup';
		}
		
		if (options.noConfiguration === true) {
			cmd += ' --no-configuration';
		}
		
		if (options.includePath) {
			cmd += ' --include-path ' + options.includePath;
		}
		
		if (options.d) {
			cmd += ' -d ' + options.d;
		}
		
		// Set working directory.
		cmd += ' ' + dir;
		
		grunt.log.writeln('Starting phpunit (target: ' + this.target.cyan + ') in ' + dir.cyan);
		grunt.log.writeln('Exec: "' + cmd + '"');
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