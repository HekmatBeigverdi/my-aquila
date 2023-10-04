<?php
	/**
	 * Custom search form.
	 *
	 * @package aquila
	 */
?>
<form role="search" method="get" class="d-flex" action="<?php echo esc_url(home_url('/'))?>">
	<span class="screen reader text"><?php echo _x( '', 'label', 'aquila')?></span>
    <input class="form-control me-2" type="search" placeholder="<?php echo esc_attr_x('Search', 'placeholder', 'aquila')?>" value="<?php the_search_query();?>" aria-label="Search" name="s">
    <button class="btn btn-outline-success" type="submit"><?php echo  esc_attr_x('Search', 'submit button', 'aquila')?></button>
</form>
