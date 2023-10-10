<?php


function get_the_post_custom_thumbnail($post_id, $size= 'featured-thumbnail', $additional_attributes =[]): string {
    $custom_thumbnail = '';

    if (null === $post_id){
        $post_id = get_the_ID();
    }

    if (has_post_thumbnail($post_id)){
        $default_attributes = [
                'loading' => 'lazy'
        ];

        $attributes = array_merge($additional_attributes, $default_attributes);

        $custom_thumbnail = wp_get_attachment_image(
            get_post_thumbnail_id($post_id),
            $size,
            false,
            $additional_attributes
        );
    }
    return $custom_thumbnail;
}


function the_post_custom_thumbnail($post_id, $size= 'featured-thumbnail', $additional_attributes =[]): void {
    echo get_the_post_thumbnail($post_id, $size, $additional_attributes);
}

function aquila_posted_on(): void {

	$year                        = get_the_date( 'Y' );
	$month                       = get_the_date( 'n' );
	$day                         = get_the_date( 'j' );
	$post_date_archive_permalink = get_day_link( $year, $month, $day );

	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

	// Post is modified ( when post published time is not equal to post modified time )
	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( DATE_W3C ) ),
		esc_attr( get_the_date() ),
		esc_attr( get_the_modified_date( DATE_W3C ) ),
		esc_attr( get_the_modified_date() )
	);

	$posted_on = sprintf(
		esc_html_x( 'Posted on %s', 'post date', 'aquila' ),
		'<a href="' . esc_url( $post_date_archive_permalink ) . '" rel="bookmark">' . $time_string . '</a>'
	);

	echo '<span class="posted-on text-secondary">' . $posted_on . '</span>';
}
function aquila_posted_by(): void {
	$byline = sprintf(
		esc_html_x('by %s', 'post author', 'aquila'),
		'<span class="author vcard"><a href="' . esc_url(get_author_posts_url( get_the_author_meta('ID'))) .'">' . esc_html( get_the_author()). '</a></span>'
	);

	echo '<span class="byline text-secondary">'. $byline . '</span>';
}

function aquila_the_excerpt($trim_character_count = 0){

	$post_ID = get_the_ID();
	if (empty($post_ID)){
		return null;
	}
	if ( has_excerpt() || 0 === $trim_character_count){
		print_r('excerpt null');
		the_excerpt();
		return;
	}

	$excerpt = wp_strip_all_tags(get_the_excerpt());
	$excerpt = substr($excerpt, 0, $trim_character_count);
	//$excerpt = substr($excerpt, 0, strpos($excerpt, ' '));

	echo $excerpt . '[...]';
}
function aquila_excerpt_more($more = ''){
	if (! is_single()){
		$more = sprintf('<br/><button class="mt-4 btn btn-info"><a class="aquila-read-more text-white" href="%1$s">%2$s</a></button>',
			get_permalink(get_the_ID()),
			__('Read more', 'aquila')
		);
	}

	return $more;
}
function aquila_pagination(): void {

	$args = [
		'before_page_number' => '<span class="btn border border-secondary mr-2 mb-2">',
		'after_page_number' => '</span>',
	];
	$allowed_tags = [
		'span' => [
			'class' =>[

			]
		],
		'a' =>[
			'class' =>[],
			'href' =>[],
		]
	];
	printf('<nav class="aquila-pagination clearfix">%s</nav>', wp_kses( paginate_links( $args), $allowed_tags));
}

function aquila_has_gravatar( $user_email ): bool|int {

	$gravatar_url = get_avatar_url( $user_email );

	if ( aquila_is_uploaded_via_wp_admin( $gravatar_url ) ) {
		return true;
	}

	$gravatar_url = sprintf( '%s&d=404', $gravatar_url );

	// Make a request to $gravatar_url and get the header
	$headers = @get_headers( $gravatar_url );

	// If request status is 200, which means user has uploaded the avatar on gravatar site
	return preg_match( "|200|", $headers[0] );
}
function aquila_is_uploaded_via_wp_admin( $gravatar_url ): bool {

	$parsed_url = wp_parse_url( $gravatar_url );

	$query_args = ! empty( $parsed_url['query'] ) ? $parsed_url['query'] : '';

	// If query args is empty means, user has uploaded gravatar.
	return empty( $query_args );

}
function aquila_the_post_pagination( $current_page_no, $posts_per_page, $article_query, $first_page_url, $last_page_url, bool $is_query_param_structure = true ): void {
	$prev_posts = ( $current_page_no - 1 ) * $posts_per_page;
	$from       = 1 + $prev_posts;
	$to         = count( $article_query->posts ) + $prev_posts;
	$of         = $article_query->found_posts;
	$total_pages = $article_query->max_num_pages;

	$base = ! empty( $is_query_param_structure ) ? add_query_arg( 'page', '%#%' ) :  get_pagenum_link( 1 ) . '%_%';
	$format = ! empty( $is_query_param_structure ) ? '?page=%#%' : 'page/%#%';

	?>
	<div class="mt-0 md:mt-10 mb-10 lg:my-5 flex items-center justify-end posts-navigation">
		<?php
		if ( 1 < $total_pages && !empty( $first_page_url ) ) {
			printf(
				'<span class="mr-2">Showing %1$s - %2$s Of %3$s</span>',
				$from,
				$to,
				$of
			);
		}


		// First Page
		if ( 1 !== $current_page_no && ! empty( $first_page_url ) ) {
			printf( '<a class="first-pagination-link btn border border-secondary mr-2" href="%1$s" title="first-pagination-link">%2$s</a>', esc_url( $first_page_url ), __( 'First', 'aquila' ) );
		}

		echo paginate_links( [
			'base'      => $base,
			'format'    => $format,
			'current'   => $current_page_no,
			'total'     => $total_pages,
			'prev_text' => __( 'Prev', 'aquila' ),
			'next_text' => __( 'Next', 'aquila' ),
		] );

		// Last Page
		if ( $current_page_no < $total_pages && !empty( $last_page_url ) ) {

			printf( '<a class="last-pagination-link btn border border-secondary ml-2" href="%1$s" title="last-pagination-link">%2$s</a>', esc_url( $last_page_url ), __( 'Last', 'aquila' ) );
		}

		?>
	</div>
	<?php
}