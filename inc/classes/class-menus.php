<?php
/**
 * Register Menus
 *
 * @package Aquila
 */

namespace AQUILA_THEME\Inc;

use AQUILA_THEME\Inc\Traits\Singleton;

class Menus {
	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks(): void {
		// actions and filters
		add_action('init', [ $this, 'register_menus']);

	}

	public function register_menus(): void {
		register_nav_menus([
			'aquila-header-menu' => esc_html( 'Header Menu' ),
			'aquila-footer-menu' => esc_html( 'Footer Menu' )
		]);
	}

	public function get_menu_id($location): int|string {
		// Get all the locations.
		$locations = get_nav_menu_locations();

		// Get object id by location.
		$menu_id = $locations[$location];


		return !empty($menu_id) ? $menu_id : '';
	}
	public function get_child_menu_items($menu_array, $parent_id): array {
		$child_menus = [];

		if ( ! empty( $menu_array ) && is_array( $menu_array ) ) {

			foreach ( $menu_array as $menu ) {
				if ( intval( $menu->menu_item_parent ) === $parent_id ) {
					$child_menus[] = $menu;
				}
			}
		}

		return $child_menus;
	}
}