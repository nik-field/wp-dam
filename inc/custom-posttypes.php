<?php


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