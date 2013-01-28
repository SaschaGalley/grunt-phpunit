/*
 * grunt-contrib-phpunit
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		
		phpunit: {
			classes: {
				path: './test/'
			},
			options: {
				bin: 'vendor/bin/phphunit'
			}
		}
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'phpunit']);

};
