<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'alpha_db' );

/** Database username */
define( 'DB_USER', 'alpha_user' );

/** Database password */
define( 'DB_PASSWORD', 'Gx72#kLp!zQ9WfRu@3' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'h0>fDmUa^?BaaB#MyEUXo.puyF9F&l!&z(S~2pw$2&{a3E=0kb@_50XC0ZM 3x@V' );
define( 'SECURE_AUTH_KEY',   'npO oD4j#>tvba#YlBC`CXh)Dc*N9wvI*e7;U^[U%0@V77-h?Xi-WokCh $kjBp]' );
define( 'LOGGED_IN_KEY',     'Fb*m1V>>p[Bbiv>[4yQ^eOIDh-kX1J=X$S8tm)BCVTr]89y2M6M~iMtT+}<9r=`2' );
define( 'NONCE_KEY',         '+c`p`(|o8dN]r`IF(ceO:t@# NIC=_3W._`;mg*g-6>C:&n4W=@:?+?YeN%B/I`S' );
define( 'AUTH_SALT',         'O;0Xx8+i~LrRI#/a WRy~!bm ),}Od9M#EOhRpTzR<h8*.hI|=fw]hJL[fz`ad,^' );
define( 'SECURE_AUTH_SALT',  'lxd)py=8@]QIhb}zYmM(]PlOZiW!1caRgdx4[yFSv]>sKm^IwEnrN{N14ywZy6i ' );
define( 'LOGGED_IN_SALT',    '|]W*@d=!x`oqR4oACsazw7TiqzfiEQth&OS?>yL6U]!G92P-99mNd=}>Vki!jGV~' );
define( 'NONCE_SALT',        'fvjU(A+`Eg)BJ~O.rD S64YHCAmM0P|5KpfT$:@wjS`P|(JSV*tEvA.0JLG6-H2c' );
define( 'WP_CACHE_KEY_SALT', 'p5}ei|h*(oSQN0at`<`xg&?=,T2VP*Z#Gmc5Oc^ozD4%Jm%)ET7WFYBo(5O9ZnaK' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
