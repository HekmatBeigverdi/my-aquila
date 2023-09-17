<?php
/**
 * Register sidebars
 *
 * @package aquila
 */

namespace AQUILA_THEME\Inc;

use AQUILA_THEME\Inc\Traits\Singleton;

class Sidebars {
	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks(): void {
		// actions and filters
		add_action('widgets_init',[$this, 'register_sidebars']);
		add_action('widgets_init',[$this, 'register_clock_widget']);

	}
	public function register_sidebars(){
		register_sidebar( array(
			'name'          => __( 'Sidebar', 'aquila' ),
			'id'            => 'sidebar-1',
			'description'   => __('Main sidebar', 'aquila'),
			'before_widget' => '<aside id="%1$s" class="widget widget-sidebar %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );
		register_sidebar( array(
			'name'          => __( 'Footer', 'aquila' ),
			'id'            => 'sidebar-2',
			'description'   => __('Footer sidebar', 'aquila'),
			'before_widget' => '<aside id="%1$s" class="widget widget-footer cell column %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );
	}
	public function register_clock_widget(){
		register_widget('AQUILA_THEME\Inc\Clock_Widget');
	}
}