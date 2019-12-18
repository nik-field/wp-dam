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

// Register Artist Taxonomy
function register_artist_taxonomy() {

	$labels = array(
		'name'                       => _x( 'Artists', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Artist', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Add/View Artists', 'text_domain' ),
		'all_items'                  => __( 'All Artists', 'text_domain' ),
		'parent_item'                => __( 'Parent Artist', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Artist:', 'text_domain' ),
		'new_item_name'              => __( 'New Artist', 'text_domain' ),
		'add_new_item'               => __( 'Add New Artist', 'text_domain' ),
		'edit_item'                  => __( 'Edit Artist', 'text_domain' ),
		'update_item'                => __( 'Update Artist', 'text_domain' ),
		'view_item'                  => __( 'View Artist', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate artists with commas', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove artists', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
		'popular_items'              => __( 'Popular Artists', 'text_domain' ),
		'search_items'               => __( 'Search Artists', 'text_domain' ),
		'not_found'                  => __( 'Artist Not Found', 'text_domain' ),
		'no_terms'                   => __( 'No artists', 'text_domain' ),
		'items_list'                 => __( 'Artists list', 'text_domain' ),
		'items_list_navigation'      => __( 'Artists list navigation', 'text_domain' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'show_in_rest'               => true,
	);
	register_taxonomy( 'artist', array( 'asset' ), $args );

}
add_action( 'init', 'register_artist_taxonomy', 0 );


// Register Project Taxonomy
function artist_project_taxonomy() {

	$labels = array(
		'name'                       => _x( 'Projects', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Project', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Add/View Projects', 'text_domain' ),
		'all_items'                  => __( 'All Projects', 'text_domain' ),
		'parent_item'                => __( 'Parent Project', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Project:', 'text_domain' ),
		'new_item_name'              => __( 'New Project', 'text_domain' ),
		'add_new_item'               => __( 'Add New Project', 'text_domain' ),
		'edit_item'                  => __( 'Edit Project', 'text_domain' ),
		'update_item'                => __( 'Update Project', 'text_domain' ),
		'view_item'                  => __( 'View Project', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate projects with commas', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove project', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used projects', 'text_domain' ),
		'popular_items'              => __( 'Popular Projects', 'text_domain' ),
		'search_items'               => __( 'Search projects', 'text_domain' ),
		'not_found'                  => __( 'Project Not Found', 'text_domain' ),
		'no_terms'                   => __( 'No projects', 'text_domain' ),
		'items_list'                 => __( 'Projects list', 'text_domain' ),
		'items_list_navigation'      => __( 'Projects list navigation', 'text_domain' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'show_in_rest'               => true,
	);
	register_taxonomy( 'project', array( 'asset' ), $args );

}
add_action( 'init', 'artist_project_taxonomy', 0 );


// Register Asset Post Type
function asset_post_type() {

	$labels = array(
		'name'                  => 'Assets',
		'singular_name'         => 'Asset',
		'menu_name'             => 'Assets',
		'name_admin_bar'        => 'Asset',
		'archives'              => 'Asset Archives',
		'attributes'            => 'Asset Attributes',
		'parent_item_colon'     => 'Parent Asset:',
		'all_items'             => 'All Assets',
		'add_new_item'          => 'Add New Asset',
		'add_new'               => 'Add New Asset',
		'new_item'              => 'New Asset',
		'edit_item'             => 'Edit Asset',
		'update_item'           => 'Update Asset',
		'view_item'             => 'View Asset',
		'view_items'            => 'View Assets',
		'search_items'          => 'Search Asset',
		'not_found'             => 'Asset Not found',
		'not_found_in_trash'    => 'Asset not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Add File',
		'uploaded_to_this_item' => 'Uploaded to this asset',
		'items_list'            => 'Assets list',
		'items_list_navigation' => 'Assets list navigation',
		'filter_items_list'     => 'Filter assets list',
	);
	$rewrite = array(
		'slug'                  => 'asset',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => 'Asset',
		'description'           => 'Artist and project assets',
		'labels'                => $labels,
		'supports'              => array( 'title', 'thumbnail', 'revisions', 'post-formats' ),
		'taxonomies'            => array( 'artist', 'project', 'post_tag' ),
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-portfolio',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'rewrite'               => $rewrite,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'asset', $args );

}
add_action( 'init', 'asset_post_type', 0 );

require get_template_directory() . '/inc/custom-metaboxes.php';