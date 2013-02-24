/*
 * grunt-phpunit
 * https://github.com/SaschaGalley/grunt-phpunit
 *
 * Copyright (c) 2013 Sascha Galley
 * http://xash.at
 * Licensed under the MIT license.
 */
'use strict';

// External libs.
var path = require('path');
var exec = require('child_process').exec;

exports.init = function(grunt) {

    var exports  = {},
        defaults = {
            // Default options
            bin: 'phpunit',
            bootstrap: false,
            colors: false,
            coverage: false,
            debug: false,
            verbose: false,
            configuration: false
        },
        cmd    = null,
        done   = null,
        config = {};



    /**
     * Builds phpunit command
     *
     * @return string
     */
    var buildCommand = function(dir) {

        var cmd = path.normalize(config.bin);

        if (grunt.option('colors') || config.colors === true) {
            // Use colors in output.
            cmd += ' --colors';
        }

        if (config.bootstrap) {
            // A "bootstrap" PHP file that is run before the tests.
            cmd += ' --bootstrap '+ dir + config.bootstrap;
        }

        if(config.configuration === false) {
            cmd += ' --no-configuration';
        }
        else {
            cmd += ' --configuration ' + dir + config.configuration;
        }

        if (grunt.option('coverage') || config.coverage === true) {
            // Generate code coverage report in text format.
            cmd += ' --coverage-text';
        }

        if (grunt.option('debug') || config.debug === true) {
            // Display debbuging information during test execution.
            cmd += ' --debug';
        }

        if (grunt.option('verbose') || config.verbose === true) {
            // Output more verbose information.
            cmd += ' --verbose';
        }
        return cmd;
    };

    /**
     * Setup task before running it
     *
     * @param Object runner
     */
    exports.setup = function(runner) {

        var dir = path.normalize(runner.data.dir);
        config  = runner.options(defaults);
        cmd     = buildCommand(dir) + ' ' + dir;

        grunt.log.writeln('Starting phpunit (target: ' + runner.target.cyan + ') in ' + dir.cyan);
        grunt.verbose.writeln('Exec: ' + cmd);

        done    = runner.async();
    };

    /**
     * Runs phpunit command with options
     *
     */
    exports.run = function() {

        exec(cmd, function(err, stdout, stderr) {

            if (stdout) {
                grunt.log.write(stdout);
            }

            if (err) {
                grunt.fatal(err);
            }
            done();
        });
    };

    return exports;
};