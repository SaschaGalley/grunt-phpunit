/*
 * grunt-phpunit
 * https://github.com/SaschaGalley/grunt-phpunit
 *
 * Copyright (c) 2013 Sascha Galley
 * http://xash.at
 * Licensed under the MIT license.
 */
 'use strict';

module.exports = function(grunt) {

  // Internal lib.
  var builder = require('./lib/builder').init(grunt);
  var phpunit = require('./lib/phpunit').init(grunt);

  grunt.registerMultiTask( 'phpunit', 'Run phpunit', function() {

    var command = builder.build(this.data.dir, this.options);
    var dir     = builder.directory();
    var config  = builder.config();

    grunt.log.writeln('Starting phpunit (target: ' + this.target.cyan + ') in ' + dir.cyan);
    grunt.verbose.writeln('Exec: ' + command);

    phpunit.run(command, this.async(), config);
  });

};