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
      if (grunt.file.exists(dir + config.bootstrap)) {
        cmd += ' --bootstrap ' + dir + config.bootstrap;
      } else {
        cmd += ' --bootstrap ' + config.bootstrap;
      }
    }
    
    if (grunt.option('coverage') || config.coverage === true || config.coverageText === true) {
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
    
    if (config.configuration) {
      // A "bootstrap" PHP file that is run before the tests.
      if (grunt.file.exists(dir + config.configuration)) {
        cmd += ' --configuration ' + dir + config.configuration;
      } else {
        cmd += ' --configuration ' + config.configuration;
      }
    }
    
    if (config.logJunit) {
      cmd += ' --log-junit ' + config.logJunit;
    }
    
    if (config.logTap) {
      cmd += ' --log-tap ' + config.logTap;
    }
    
    if (config.logJson) {
      cmd += ' --log-json ' + config.logJson;
    }
    
    if (config.coverageHtml) {
      cmd += ' --coverage-html ' + config.coverageHtml;
    }
    
    if (config.coverageClover) {
      cmd += ' --coverage-clover ' + config.coverageClover;
    }
    
    if (config.coveragePhp) {
      cmd += ' --coverage-php ' + config.coveragePhp;
    }
    
    if (config.testdoxHtml) {
      cmd += ' --testdox-html ' + config.testdoxHtml;
    }
    
    if (config.testdoxText) {
      cmd += ' --testdox-text ' + config.testdoxText;
    }
    
    if (config.filter) {
      cmd += ' --filter ' + config.filter;
    }
    
    if (config.group) {
      cmd += ' --group ' + config.group;
    }
    
    if (config.excludeGroup) {
      cmd += ' --exclude-group ' + config.excludeGroup;
    }
    
    if (grunt.option('listGroups') || config.listGroups === true) {
      cmd += ' --list-groups';
    }
    
    if (config.loader) {
      cmd += ' --loader ' + config.loader;
    }
    
    if (config.printer) {
      cmd += ' --printer ' + config.printer;
    }
    
    if (config.repeat) {
      cmd += ' --repeat ' + config.repeat;
    }
    
    if (grunt.option('tap') || config.tap === true) {
      cmd += ' --tap';
    }
    
    if (grunt.option('testdox') || config.testdox === true) {
      cmd += ' --testdox';
    }
    
    if (grunt.option('stderr') || config.stderr === true) {
      cmd += ' --stderr';
    }
    
    if (grunt.option('stop-on-error') || config.stopOnError === true) {
      cmd += ' --stop-on-error';
    }
    
    if (grunt.option('stop-on-failure') || config.stopOnFailure === true) {
      cmd += ' --stop-on-failure';
    }
    
    if (grunt.option('stop-on-skipped') || config.stopOnSkipped === true) {
      cmd += ' --stop-on-skipped';
    }
    
    if (grunt.option('stop-on-incomplete') || config.stopOnIncomplete === true) {
      cmd += ' --stop-on-incomplete';
    }
    
    if (grunt.option('strict') || config.strict === true) {
      cmd += ' --strict';
    }
    
    if (grunt.option('process-isolation') || config.processIsolation === true) {
      cmd += ' --process-isolation';
    }
    
    if (grunt.option('no-globals-backup') || config.noGlobalsBackup === true) {
      cmd += ' --no-globals-backup';
    }
    
    if (grunt.option('static-backup') || config.staticBackup === true) {
      cmd += ' --static-backup';
    }
    
    if (grunt.option('no-configuration') || config.noConfiguration === true) {
      cmd += ' --no-configuration';
    }
    
    if (config.includePath) {
      cmd += ' --include-path ' + config.includePath;
    }
    
    if (config.d) {
      cmd += ' -d ' + config.d;
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