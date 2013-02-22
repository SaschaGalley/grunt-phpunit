# grunt-phpunit

> Grunt plugin for running phpunit.

##Getting Started
1. Install this grunt plugin with the following command:

	```shell
	npm install grunt-phpunit --save-dev
	```


2. [Install phpunit](https://github.com/sebastianbergmann/phpunit/#installation) (preferably with [composer](https://github.com/composer/composer))
3. Add this to your project's `Gruntfile.js` gruntfile:

	```js
	grunt.loadNpmTasks('grunt-phpunit');
	```


##PHPUnit task
_Run this task with the `grunt phpunit` command._

_This task is a [multi task][] so any targets, files and options should be specified according to the [multi task][] documentation._

[multi task]: https://github.com/gruntjs/grunt/wiki/Configuring-tasks

_This plugin is developed for Grunt `0.4.0` and is not tested for backward compatibility with Grunt `0.3.x`._

###Target Properties
####dir
Type: `String`

The directory where phpunit should be run, i.e. where the test classes and the bootstrap are located in.

###Options
####bin
Type: `String`  Default: `'phpunit'`

The executable binary.

####bootstrap
Type: `String` Default: `false`

A "bootstrap" PHP file that is run before the tests.

####colors
Type: `Boolean` Default: `false`

Use colors in output. This option can also be set by running the task with `--colors`.

####coverage
Type: `Boolean` Default: `false`

Generate code coverage report in text format. This option can also be set by running the task with `--coverage`.

####debug
Type: `Boolean` Default: `false`

Display debbuging information during test execution. This option can also be set by running the task with `--debug`.

####verbose
Type: `Boolean` Default: `false`

Output more verbose information. This option can also be set by running the task with `--verbose`.

###Usage Example

```js
phpunit: {
	classes: {
		dir: 'tests/php/'
	},
	options: {
		bin: 'vendor/bin/phpunit',
		bootstrap: 'tests/php/phpunit.php',
		colors: true
	}
}
```