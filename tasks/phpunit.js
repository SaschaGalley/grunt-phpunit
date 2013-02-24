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
  var phpunit = require('./lib/phpunit').init(grunt);

  grunt.registerMultiTask( 'phpunit', 'Run phpunit', function() {
    phpunit.setup(this);
    phpunit.run();
  });
  
};