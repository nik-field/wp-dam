<?php

add_action( 'wp_ajax_asset_search', 'asset_search_callback' );
add_action( 'wp_ajax_nopriv_asset_search', 'asset_search_callback' );

function asset_search_callback() {
	header( 'Content-Type: application/json' );

	$args = array(
		'post_type'      => 'asset',
		'posts_per_page' => -1,
	);

	$artist = 0;
	if ( isset( $_GET['artist'] ) ) {
		$artist = sanitize_text_field( ( $_GET['artist'] ) );
		if ( $artist ) {
			$args['tax_query'][] = array(
				array(
					'taxonomy' => 'artist_project',
					'field'    => 'slug',
					'terms'    => $artist,
				),
			);
		}
	}
	$project = 0;
	if ( isset( $_GET['project'] ) ) {
		$project = sanitize_text_field( ( $_GET['project'] ) );
		if ( $project ) {
			$args['tax_query'][] = array(
				array(
					'taxonomy' => 'artist_project',
					'field'    => 'slug',
					'terms'    => $project,
				),
			);
		}
	}

	$assetsQuery = new WP_Query( $args );

	$result = null;

	while ( $assetsQuery->have_posts() ) {
		$assetsQuery->the_post();

		$tags_r = get_asset_tags_list();
		if ( get_asset_tags_list() == 'None specified' ) {
			$tags_r = false;
		}
		$assetObject = array(
			'id'          => get_the_ID(),
			'permalink'   => get_asset_url(),
			'title'       => html_entity_decode( get_the_title() ),
			'artist'      => isset( get_asset_artist()->name ) ? get_asset_artist()->name : 'No Artist Assigned',
			'artist_id'   => isset( get_asset_artist()->term_id ) ? get_asset_artist()->term_id : '',
			'project'     => isset( get_asset_project()->name ) ? get_asset_project()->name : 'No Project Assigned',
			'project_id'  => isset( get_asset_project()->term_id ) ? get_asset_project()->term_id : '',
			'addedon'     => get_the_date( 'U' ),
			'displaydate' => wp_dam_added_on( false ),
			'format'      => get_asset_format(),
			'filesize'    => get_asset_file_size(),
			'duration'    => ( get_asset_file_meta( 'length_formatted' ) !== 'No file attached' ? get_asset_file_meta( 'length_formatted' ) : null ),
			'filetype'    => get_asset_file_type(),
			'mime'        => get_asset_file_type( 'mime' ),
			'creator'     => get_asset_creator(),
			'filename'    => get_asset_url( 'true' ),
			'tags'        => $tags_r,

		);
		if ( wp_dam_asset_thumbnail() ) {
			$assetObject['thumbnail'] = wp_dam_asset_thumbnail();
		}
		if ( wp_dam_asset_thumbnail( 'icon' ) ) {
			$assetObject['icon'] = wp_dam_asset_thumbnail( 'icon' );
		}

		switch ( get_asset_format() ) {
			case 'format_image':
				$assetObject += array(
					'is_image'     => 'is_image',
					'maxres'       => get_asset_image_res(),
					'display_size' => get_the_post_thumbnail_url( get_the_ID(), 'full' ),
					'is_not_link'  => 'is_not_link',
				);
				break;
			case 'format_document':
				$assetObject += array(
					'is_doc'      => 'is_doc',
					'is_not_link' => 'is_not_link',
				);
				break;
			case 'format_video':
				$assetObject += array(
					'is_video'    => 'is_video',
					'maxres'      => get_asset_file_meta( 'width' ) . 'x' . get_asset_file_meta( 'height' ),
					'is_not_link' => 'is_not_link',
				);
				break;
			case 'format_audio':
				$assetObject += array(
					'is_not_image' => 'is_not_image',
					'is_audio'     => 'is_audio',
					'is_not_link'  => 'is_not_link',
				);
				break;
			case 'format_link':
				$assetObject += array( 'is_link' => 'is_link' );
				break;
			case 'format_audio-zip':
				$assetObject += array(
					'is_not_image' => 'is_not_image',
					'is_not_link'  => 'is_not_link',
				);
				break;
			case 'format_zip':
				$assetObject += array(
					'is_not_image' => 'is_not_image',
					'is_not_link'  => 'is_not_link',
				);
				break;
			default:
				$assetObject += array(
					'is_not_image' => 'is_not_image',
					'is_not_link'  => 'is_not_link',
				);
		}

		$result[] = $assetObject;
	}

	echo json_encode( $result );

	wp_die();
}

add_action( 'wp_ajax_asset_access', 'asset_access_callback' );
add_action( 'wp_ajax_nopriv_asset_access', 'asset_access_callback' );

function asset_access_callback() {
	if ( ! isset( $_POST ) || empty( $_POST ) || ! is_user_logged_in() ) {

		header( 'HTTP/1.1 400 Empty POST Values' );
		echo 'Could Not Verify POST Values.';
		wp_die();
	}

	$user_id            = get_current_user_id();
	$asset_triggered    = intval( sanitize_text_field( $_POST['asset_triggered'] ) );
	$user_recent_assets = get_user_meta( $user_id, 'recent_assets' );
	$id_exists          = array_search( $asset_triggered, $user_recent_assets[0] );

	if ( ! $user_recent_assets ) {
		update_user_meta( $user_id, 'recent_assets', array( $asset_triggered ) );
	} elseif ( $id_exists === 0 ) {
		wp_die();
	} elseif ( $id_exists ) {
		array_splice( $user_recent_assets[0], $id_exists, 1 );
		array_unshift( $user_recent_assets[0], $asset_triggered );
		update_user_meta( $user_id, 'recent_assets', $user_recent_assets[0] );
	} else {
		array_unshift( $user_recent_assets[0], $asset_triggered );
		update_user_meta( $user_id, 'recent_assets', $user_recent_assets[0] );
	}
	if ( count( $user_recent_assets[0] ) > 10 ) {
		update_user_meta( $user_id, 'recent_assets', array_slice( $user_recent_assets[0], 0, 10 ) );
	}
	$updated_list = get_user_meta( $user_id, 'recent_assets' );
	print_r( $updated_list );

	// update_user_meta( $user_id, 'first_name', $um_val );                // Update our user meta
	// wp_update_user( array(
	// 'ID'         => $user_id,
	// 'user_email' => $um_user_email,
	// ) );

	wp_die();
}

add_action( 'wp_ajax_frontend_add_asset_get_projects', 'frontend_add_asset_get_projects_callback' );
add_action( 'wp_ajax_nopriv_frontend_add_asset_get_projects', 'frontend_add_asset_get_projects_callback' );

function frontend_add_asset_get_projects_callback() {
	if ( ! isset( $_POST ) || empty( $_POST ) || ! is_user_logged_in() ) {

		header( 'HTTP/1.1 400 Empty POST Values' );
		echo 'Could Not Verify POST Values.';
		wp_die();
	}

	$artist_slug = sanitize_text_field( $_POST['selected_artist'] );

	$projects_terms = get_projects( $artist_slug );
	$projects       = array();
	foreach ( $projects_terms as $project_term ) {

		$projects += array( $project_term->slug => $project_term->name );
	}
	echo json_encode( $projects );

	wp_die();
}