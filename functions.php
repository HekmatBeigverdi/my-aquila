<?php
/**
 *  Theme Functions.
 *  @package Aquila
 */




if ( ! defined( 'AQUILA_DIR_PATH' ) ) {
	define( 'AQUILA_DIR_PATH', untrailingslashit( get_template_directory() ) );
}
//echo '<pre>';
//print_r(AQUILA_DIR_PATH);
//wp_die();

require_once AQUILA_DIR_PATH . '/inc/helpers/autoloader.php';
require_once AQUILA_DIR_PATH . '/inc/helpers/template-tags.php';


function  aquila_get_theme_instance(): void {
	\AQUILA_THEME\Inc\AQUILA_THEME::get_instance();
}

aquila_get_theme_instance();
