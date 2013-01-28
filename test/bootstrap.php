<?php defined('SYSPATH') or die('No direct script access.');

/* -----------------------------------------------------------------------------
 *  Load kohana core
 * -----------------------------------------------------------------------------
 */
	// Load the core Kohana class
	require SYSPATH.'classes/kohana/core'.EXT;
	
	if (is_file(APPPATH.'classes/kohana'.EXT))
	{
		// Application extends the core
		require APPPATH.'classes/kohana'.EXT;
	}
	else
	{
		// Load empty core extension
		require SYSPATH.'classes/kohana'.EXT;
	}

/* -----------------------------------------------------------------------------
 *  Environment setup
 * -----------------------------------------------------------------------------
 */
	// Set the default time zone.
	date_default_timezone_set('Europe/Vienna');
	
	// Set the default locale.
	setlocale(LC_ALL, 'en_US.utf-8');

	// Enable the Kohana auto-loader.
	spl_autoload_register(array('Kohana', 'auto_load'));

	// Enable the Kohana auto-loader for unserialization.
	ini_set('unserialize_callback_func', 'spl_autoload_call');
	
	// Set Kohana::$environment if a 'KOHANA_ENV' environment variable has been supplied.
	if (isset($_SERVER['KOHANA_ENV']))
	{
		Kohana::$environment = constant('Kohana::'.strtoupper($_SERVER['KOHANA_ENV']));
	}
	
/* -----------------------------------------------------------------------------
 *  Url detection
 * -----------------------------------------------------------------------------
 */
	// Base url of application
	define('BASE_URL', "http://test.local");

/* -----------------------------------------------------------------------------
 *  Initialize system
 * -----------------------------------------------------------------------------
 */
	// Instantiate config
	$config = new Kohana_Config;
	
	// Attach config file
	$config->attach(new Config_File);

	// Initialize Kohana
	Kohana::init($config->load('application')->core);
	
	//Kohana::$config->attach(new Config_File);

	// Set Kohana config
	Kohana::$config = $config;
	
	// Unset previously loaded config var
	unset($config);

	// Attach the file write to logging. Multiple writers are supported.
	//Kohana::$log->attach(new Log_File(APPPATH.'logs'));

	// Enable modules. Modules are referenced by a relative or absolute path.
	Kohana::modules(Kohana::$config->load('application')->modules);
	
	// Initialize cookies with config
	array_walk(Kohana::$config->load('application')->cookies, function($val, $key){Cookie::$$key = $val;});
	
	// Load the file cache driver using default setting
	Cache::instance();

/* -----------------------------------------------------------------------------
 *  Routing and Request
 * -----------------------------------------------------------------------------
 */
	// Set the routes via config file
	Route::init(Kohana::$config->load('routes'));
	
	// Analyze the main request
	Request::factory();

/* -----------------------------------------------------------------------------
 *  Internationalization
 * -----------------------------------------------------------------------------
 */
	//$_SERVER['REMOTE_ADDR'] = '109.239.60.76';
	
	// Detect language
	I18n::$lang = 'en';//;Detect::language();
	
	// Define language as constant
	define('LANG', I18n::$lang);
	
// End of bootstrap