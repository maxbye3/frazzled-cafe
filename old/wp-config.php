<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'frazzled_wp' );

/** MySQL database username */
define( 'DB_USER', 'frazzled_wpu' );

/** MySQL database password */
define( 'DB_PASSWORD', ';NYuce1@,fJ&32' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'GzBSLHWoBfwz6ACmNkG3cOJCB3WSqKP66wko95vrLviQt317kzNqBMTY7T6WRk7K');
define('SECURE_AUTH_KEY',  '7Yrt8AEdMcm8Tv434bfRfdEGemVMSK5Khn9LW8rTMjeN8AiLU5wnrpisAewTURhF');
define('LOGGED_IN_KEY',    'qmCC6yywVfxaViy8FvIEJvwS7fWPUQZQvZQHP3gCkvNaKLXDjtdh9FOCJWZxSNRu');
define('NONCE_KEY',        'yrqwBeYARPqz33wjypyaIcgvdsdiB8wlwg15eMkzKfeRbfqAMwbWD7dOx7FXWKN7');
define('AUTH_SALT',        '3mZF1CjQ75LMyMo9MV8qDiLEsBwVcnVsDXd6M7OdRlPsgnB52yMYUYuQJkwZdevE');
define('SECURE_AUTH_SALT', 'CbPi7BvElJnuWlx8y86ChCFW4JvDuBJzpnWfSgqxLqd7bhUzPOcmMUCgGP8TO577');
define('LOGGED_IN_SALT',   'UzFglCJI9nsSKcP5a5rtqAPRqKNm5EXkFJgZPj0LlBZ9uvVIpx5YreNWcw237qS3');
define('NONCE_SALT',       'WmwidaYLaQqcLSpR13pM6Hw88oHPq04YfHQyon1igC4hg728wIQDAkqfNrG0Qajw');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed externally by Installatron.
 * If you remove this define() to re-enable WordPress's automatic background updating
 * then it's advised to disable auto-updating in Installatron.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);
define('DISABLE_WP_CRON', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
