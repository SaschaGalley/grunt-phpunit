<?php

/* -----------------------------------------------------------------------------
 *  Path setup
 * -----------------------------------------------------------------------------
 */
	// Default extension of resource files
	define('EXT', '.php');
	
	// Website document root
	define('DOCROOT', realpath(dirname(__FILE__).'/../source/').DIRECTORY_SEPARATOR);
	
	// Path to the application directory.
	define('APPPATH', realpath(__DIR__.'/../source/').DIRECTORY_SEPARATOR);
	
	// Path to the modules directory.
	define('MODPATH', realpath(__DIR__.'/../source/modules').DIRECTORY_SEPARATOR);
	
	// Path to the system directory.
	//define('SYSPATH', realpath(__DIR__.'/../../libraries/kohana/system').DIRECTORY_SEPARATOR);
	define('SYSPATH', '/home/go001ez5/www/lib/kohana/system'.DIRECTORY_SEPARATOR);

/**
 * Set the PHP error reporting level. If you set this in php.ini, you remove this.
 * @see  http://php.net/error_reporting
 *
 * When developing your application, it is highly recommended to enable notices
 * and strict warnings. Enable them by using: E_ALL | E_STRICT
 *
 * In a production environment, it is safe to ignore notices and strict warnings.
 * Disable them by using: E_ALL ^ E_NOTICE
 *
 * When using a legacy application with PHP >= 5.3, it is recommended to disable
 * deprecated notices. Disable with: E_ALL & ~E_DEPRECATED
 */
error_reporting(E_ALL | E_STRICT);

/**
 * Define the start time of the application, used for profiling.
 */
if ( ! defined('KOHANA_START_TIME'))
{
	define('KOHANA_START_TIME', microtime(TRUE));
}

/**
 * Define the memory usage at the start of the application, used for profiling.
 */
if ( ! defined('KOHANA_START_MEMORY'))
{
	define('KOHANA_START_MEMORY', memory_get_usage());
}

// Bootstrap the application
require 'bootstrap'.EXT;

// Disable output buffering
ob_end_flush();

// Enable the unittest module
Kohana::modules(Kohana::modules() + array('seso' => MODPATH.'seso'));