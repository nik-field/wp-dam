<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package DAM_-_Digital_Asset_Manager
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function wp_dam_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'wp_dam_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function wp_dam_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'wp_dam_pingback_header' );

function damQuery($property) {
	if ( $property == 'assets' ) {
		$args        = array( 'post_type' => 'asset', 'posts_per_page' => -1 );
		$assetsQuery = new WP_Query( $args );
		return $assetsQuery;
	}
}

	function get_asset_format( $post = null ) {
		$post = get_post( $post );

		if ( ! $post ) {
			return false;
		}

		$_asset_format = get_the_terms( $post->ID, 'format' );

		if ( empty( $_asset_format ) ) {
			return false;
		}

		$asset_format = reset( $_asset_format );

		return str_replace( 'asset-format-', '', $asset_format->slug );
	}

require get_template_directory() . '/inc/ajax-search.php';
require get_template_directory() . '/inc/custom-taxonomies.php';
require get_template_directory() . '/inc/custom-posttypes.php';
require get_template_directory() . '/inc/custom-metaboxes.php';
require get_template_directory() . '/inc/custom-widgets.php';