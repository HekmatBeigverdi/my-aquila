<?php
/**
 * Block Patterns
 *
 * @package Aquila
 */

namespace AQUILA_THEME\Inc;

use AQUILA_THEME\Inc\Traits\Singleton;

class Block_Patterns {
	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks(): void {

		/**
		 * Actions.
		 */
		add_action( 'init', [ $this, 'register_block_patterns' ] );

	}

	public function register_block_patterns(): void {
		if ( function_exists('register_block_pattern')){
			register_block_pattern(
				'aquila/cover',
				[
					'title' => __('Aquila Cover', 'aquila'),
					'description' => __('Aquila Cover Block with image and text', 'aquila'),
					'content' =>'
					<!-- wp:cover {"url":"http://localhost/aquila/wp-content/uploads/2023/09/screenshot-1.png","id":1835,"dimRatio":50,"align":"full","layout":{"type":"constrained"}} -->
						<div class="wp-block-cover alignfull"><span aria-hidden="true" class="wp-block-cover__background has-background-dim"></span><img class="wp-block-cover__image-background wp-image-1835" alt="" src="http://localhost/aquila/wp-content/uploads/2023/09/screenshot-1.png" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide"} -->
						<h1 class="wp-block-heading alignwide has-text-align-center">Never let your memories greater than your dreams</h1>
						<!-- /wp:heading -->
						
						<!-- wp:heading {"textAlign":"center","level":5,"textColor":"cyan-bluish-gray"} -->
						<h5 class="wp-block-heading has-text-align-center has-cyan-bluish-gray-color has-text-color">A mind that is stretched by new experience can never go back to its old dimensions.</h5>
						<!-- /wp:heading -->
						
						<!-- wp:buttons {"layout":{"type":"flex","verticalAlignment":"top","justifyContent":"center"}} -->
						<div class="wp-block-buttons"><!-- wp:button {"textAlign":"center","backgroundColor":"cyan-bluish-gray","textColor":"white","style":{"border":{"radius":"25px"}},"className":"is-style-outline"} -->
						<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-white-color has-cyan-bluish-gray-background-color has-text-color has-background has-text-align-center wp-element-button" style="border-radius:25px">Blogs</a></div>
						<!-- /wp:button --></div>
						<!-- /wp:buttons --></div></div>
						<!-- /wp:cover -->
					'
				]
			);
		}
	}




}