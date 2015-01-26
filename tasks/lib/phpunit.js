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
   * @param Object config
   */
  exports.run = function(command, callback, config) {

    var cmdCommands = {
      cwd : "",
      env : {},
      encoding : 'utf8',
      timeout : 0,
      maxBuffer: 200*1024,
      killSignal : "SIGTERM"
    };

    Object.keys(cmdCommands).forEach(function(key) {
      var configKey = "exec" + key.charAt(0).toUpperCase() + key.slice(1);
      if (config[configKey]) {
        cmdCommands[key] = config[configKey];
      } else {
        delete cmdCommands[key];
      }
    });

    var term = exec(command, cmdCommands, function(err, stdout, stderr) {

      if (stdout && !config.followOutput) {
        grunt.log.write(stdout);
      }


      if (err) {
        if(err.code === 1 || err.code === 2) {
          if(config.failOnFailures) {
            callback(false);
          } else {
            grunt.fatal(err);
          }
        } else {
          grunt.fatal(err);
        }
      } else {
        callback();
      }
    });

    if (config.followOutput) {
      term.stdout.on('data', function(data) {
        grunt.log.write(data);
      });

      term.stderr.on('data', function(data) {
        grunt.log.error(data);
      });
    }
  };

  return exports;
};
