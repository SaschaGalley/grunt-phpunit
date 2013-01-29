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
####path
Type: `String`

The executable binary.

###Options
####bin
Type: `String`  Default: `'phpunit'`

####bootstrap
Type: `String` Default: `false`

A "bootstrap" PHP file that is run before the tests.

####colors
Type: `Boolean` Default: `false`

Use colors in output.

###Usage Example

```js
phpunit: {
	classes: {
		path: 'tests/php/'
	},
	options: {
		'bin': 'vendor/bin/phpunit',
		bootstrap: 'phpunit.php',
		colors: true
	}
}
```