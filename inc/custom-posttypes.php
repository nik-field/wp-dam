<?php

// // Register Artist Post Type
// function artist_post_type() {

// 	$labels = array(
// 		'name'                  => _x( 'Artists', 'Post Type General Name', 'text_domain' ),
// 		'singular_name'         => _x( 'Artist', 'Post Type Singular Name', 'text_domain' ),
// 		'menu_name'             => __( 'Artists', 'text_domain' ),
// 		'name_admin_bar'        => __( 'Artists', 'text_domain' ),
// 		'archives'              => __( 'Artist Archives', 'text_domain' ),
// 		'attributes'            => __( 'Artist Attributes', 'text_domain' ),
// 		'parent_item_colon'     => __( 'Parent Artist:', 'text_domain' ),
// 		'all_items'             => __( 'All Artists', 'text_domain' ),
// 		'add_new_item'          => __( 'Add New Artist', 'text_domain' ),
// 		'add_new'               => __( 'Add New', 'text_domain' ),
// 		'new_item'              => __( 'New Artist', 'text_domain' ),
// 		'edit_item'             => __( 'Edit Artist', 'text_domain' ),
// 		'update_item'           => __( 'Update Artist', 'text_domain' ),
// 		'view_item'             => __( 'View Artist', 'text_domain' ),
// 		'view_items'            => __( 'View Artists', 'text_domain' ),
// 		'search_items'          => __( 'Search Artists', 'text_domain' ),
// 		'not_found'             => __( 'Artist Not Found', 'text_domain' ),
// 		'not_found_in_trash'    => __( 'Artist not found in Trash', 'text_domain' ),
// 		'featured_image'        => __( 'Artist Featured Image', 'text_domain' ),
// 		'set_featured_image'    => __( 'Set Artist\'s featured image', 'text_domain' ),
// 		'remove_featured_image' => __( 'Remove Artist\'s featured image', 'text_domain' ),
// 		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
// 		'insert_into_item'      => __( 'Add to Artist', 'text_domain' ),
// 		'uploaded_to_this_item' => __( 'Uploaded to this artist', 'text_domain' ),
// 		'items_list'            => __( 'Artist list', 'text_domain' ),
// 		'items_list_navigation' => __( 'Artist list navigation', 'text_domain' ),
// 		'filter_items_list'     => __( 'Filter artist list', 'text_domain' ),
// 	);
// 	$args = array(
// 		'label'                 => __( 'Artist', 'text_domain' ),
// 		'description'           => __( 'Artists can have projects and assets.', 'text_domain' ),
// 		'labels'                => $labels,
// 		'supports'              => array( 'title', 'thumbnail', 'comments' ),
// 		'hierarchical'          => true,
// 		'public'                => true,
// 		'show_ui'               => true,
// 		'show_in_menu'          => true,
// 		'menu_position'         => 5,
// 		'menu_icon'             => 'dashicons-buddicons-buddypress-logo',
// 		'show_in_admin_bar'     => true,
// 		'show_in_nav_menus'     => true,
// 		'can_export'            => true,
// 		'has_archive'           => true,
// 		'exclude_from_search'   => false,
// 		'publicly_queryable'    => true,
// 		'query_var'             => 'artist',
// 		'capability_type'       => 'page',
// 		'show_in_rest'          => true,
// 	);
// 	register_post_type( 'artist', $args );

// }
// add_action( 'init', 'artist_post_type', 0 );

// // Register Project Post Type
// function project_post_type() {

// 	$labels = array(
// 		'name'                  => _x( 'Projects', 'Post Type General Name', 'text_domain' ),
// 		'singular_name'         => _x( 'Project', 'Post Type Singular Name', 'text_domain' ),
// 		'menu_name'             => __( 'Projects', 'text_domain' ),
// 		'name_admin_bar'        => __( 'Projects', 'text_domain' ),
// 		'archives'              => __( 'Project Archives', 'text_domain' ),
// 		'attributes'            => __( 'Project Attributes', 'text_domain' ),
// 		'parent_item_colon'     => __( 'Parent Project:', 'text_domain' ),
// 		'all_items'             => __( 'All Projects', 'text_domain' ),
// 		'add_new_item'          => __( 'Add New Project', 'text_domain' ),
// 		'add_new'               => __( 'Add New', 'text_domain' ),
// 		'new_item'              => __( 'New Project', 'text_domain' ),
// 		'edit_item'             => __( 'Edit Project', 'text_domain' ),
// 		'update_item'           => __( 'Update Project', 'text_domain' ),
// 		'view_item'             => __( 'View Project', 'text_domain' ),
// 		'view_items'            => __( 'View Projects', 'text_domain' ),
// 		'search_items'          => __( 'Search Projects', 'text_domain' ),
// 		'not_found'             => __( 'Project Not Found', 'text_domain' ),
// 		'not_found_in_trash'    => __( 'Project not found in Trash', 'text_domain' ),
// 		'featured_image'        => __( 'Project Featured Image', 'text_domain' ),
// 		'set_featured_image'    => __( 'Set Project\'s featured image', 'text_domain' ),
// 		'remove_featured_image' => __( 'Remove Project\'s featured image', 'text_domain' ),
// 		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
// 		'insert_into_item'      => __( 'Add to Project', 'text_domain' ),
// 		'uploaded_to_this_item' => __( 'Uploaded to this project', 'text_domain' ),
// 		'items_list'            => __( 'Project list', 'text_domain' ),
// 		'items_list_navigation' => __( 'Project list navigation', 'text_domain' ),
// 		'filter_items_list'     => __( 'Filter project list', 'text_domain' ),
// 	);
// 	$args = array(
// 		'label'                 => __( 'Project', 'text_domain' ),
// 		'description'           => __( 'Projects are assigned to artists and contain assets.', 'text_domain' ),
// 		'labels'                => $labels,
// 		'supports'              => array( 'title', 'thumbnail', 'comments' ),
// 		'hierarchical'          => true,
// 		'public'                => true,
// 		'show_ui'               => true,
// 		'show_in_menu'          => true,
// 		'menu_position'         => 5,
// 		'menu_icon'             => 'dashicons-archive',
// 		'show_in_admin_bar'     => true,
// 		'show_in_nav_menus'     => true,
// 		'can_export'            => true,
// 		'has_archive'           => true,
// 		'exclude_from_search'   => false,
// 		'publicly_queryable'    => true,
// 		'query_var'             => 'project',
// 		'capability_type'       => 'page',
// 		'show_in_rest'          => true,
// 	);
// 	register_post_type( 'project', $args );

// }
// add_action( 'init', 'project_post_type', 0 );

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
		'taxonomies'            => array( 'artist_project', 'post_tag' ),
		'hierarchical'          => false,
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
?>