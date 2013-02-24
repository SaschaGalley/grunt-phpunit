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
var exec = require('child_process').exec;

exports.init = function(grunt) {

  /**
   * Runs phpunit command with options
   *
   * @param String command
   * @param Function callback
   */
  exports.run = function(command, callback) {

    exec(command, function(err, stdout, stderr) {

      if (stdout) {
        grunt.log.write(stdout);
      }

      if (err) {
        grunt.fatal(err);
      }
      callback();
    });
  };

  return exports;
};