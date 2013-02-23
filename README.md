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

####logJunit
Type: `String` Default: `false`

Log test execution in JUnit XML format to file. This option can also be set by running the task with `--log-junit`.

####logTap
Type: `String` Default: `false`

Log test execution in TAP format to file. This option can also be set by running the task with `--log-tap`.

####logJson
Type: `String` Default: `false`

Log test execution in JSON format. This option can also be set by running the task with `--log-json`.

####coverageClover
Type: `String` Default: `false`

Generate code coverage report in Clover XML format. This option can also be set by running the task with `--coverage-clover`.

####coverageHtml
Type: `String` Default: `false`

Generate code coverage report in HTML format. This option can also be set by running the task with `--coverage-html`.

####coveragePhp
Type: `String` Default: `false`

Serialize PHP_CodeCoverage object to file. This option can also be set by running the task with `--coverage-php`.

####coverage (or coverageText)
Type: `Boolean` Default: `false`

Generate code coverage report in text format. Default to writing to the standard output. This option can also be set by running the task with `--coverage`.

####testdoxHtml
Type: `String` Default: `false`

Write agile documentation in HTML format to file. This option can also be set by running the task with `--testdox-html`.

####testdoxText
Type: `String` Default: `false`

Write agile documentation in Text format to file. This option can also be set by running the task with `--testdox-text`.

####filter
Type: `String` Default: `false`

Filter which tests to run. This option can also be set by running the task with `--filter`.

####group
Type: `String` Default: `false`

Only runs tests from the specified group(s). This option can also be set by running the task with `--group`.

####excludeGroup
Type: `String` Default: `false`

Exclude tests from the specified group(s). This option can also be set by running the task with `--exclude-group`.

####listGroups
Type: `Boolean` Default: `false`

List available test groups. This option can also be set by running the task with `--list-groups`.

####loader
Type: `String` Default: `false`

TestSuiteLoader implementation to use. This option can also be set by running the task with `--loader`.

####printer
Type: `String` Default: `false`

TestSuiteListener implementation to use. This option can also be set by running the task with `--printer`.

####repeat
Type: `String` Default: `false`

Runs the test(s) repeatedly. This option can also be set by running the task with `--repeat`.

####tap
Type: `Boolean` Default: `false`

Report test execution progress in TAP format. This option can also be set by running the task with `--tap`.

####testdox
Type: `Boolean` Default: `false`

Report test execution progress in TestDox format. This option can also be set by running the task with `--testdox`.

####colors
Type: `Boolean` Default: `false`

Use colors in output. This option can also be set by running the task with `--colors`.

####stderr
Type: `Boolean` Default: `false`

Write to STDERR instead of STDOUT. This option can also be set by running the task with `--stderr`.

####stopOnError
Type: `Boolean` Default: `false`

Stop execution upon first error. This option can also be set by running the task with `--stop-on-error`.

####stopOnFailure
Type: `Boolean` Default: `false`

Stop execution upon first error or failure. This option can also be set by running the task with `--stop-on-failure`.

####stopOnSkipped
Type: `Boolean` Default: `false`

Stop execution upon first skipped test. This option can also be set by running the task with `--stop-on-skipped`.

####stopOnIncomplete
Type: `Boolean` Default: `false`

Stop execution upon first incomplete test. This option can also be set by running the task with `--stop-on-incomplete`.

####strict
Type: `Boolean` Default: `false`

Run tests in strict mode. This option can also be set by running the task with `--strict`.

####verbose
Type: `Boolean` Default: `false`

Output more verbose information. This option can also be set by running the task with `--verbose`.

####debug
Type: `Boolean` Default: `false`

Display debbuging information during test execution. This option can also be set by running the task with `--debug`.

####processIsolation
Type: `Boolean` Default: `false`

Run each test in a separate PHP process. This option can also be set by running the task with `--processIsolation`.

####noGlobalsBackup
Type: `Boolean` Default: `false`

Do not backup and restore $GLOBALS for each test. This option can also be set by running the task with `--no-globals-backup`.

####staticBackup
Type: `Boolean` Default: `false`

Backup and restore static attributes for each test. This option can also be set by running the task with `--static-backup`.

####bootstrap
Type: `String` Default: `false`

A "bootstrap" PHP file that is run before the tests. This option can also be set by running the task with `--bootstrap`.

####configuration
Type: `String` Default: `false`

Read configuration from XML file. This option can also be set by running the task with `--configuration`.

####noConfiguration
Type: `Boolean` Default: `false`

Ignore default configuration file (phpunit.xml). This option can also be set by running the task with `--no-configuration`.

####includePath
Type: `String` Default: `false`

Prepend PHP's include_path with given path(s). This option can also be set by running the task with `--include-path`.

####d
Type: `String` Default: `false`

Sets a php.ini value. This option can also be set by running the task with `-d`.


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