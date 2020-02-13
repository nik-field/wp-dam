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
	 *
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

	function damQuery( $property ) {
		if ( $property == 'assets' ) {
			$args        = array( 'post_type' => 'asset', 'posts_per_page' => - 1 );
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

	if ( ! function_exists( 'write_log' ) ) {
		function write_log( $log ) {
			if ( is_array( $log ) || is_object( $log ) ) {
				error_log( print_r( $log, true ) );
			} else {
				error_log( $log );
			}
		}
	}

	function video_thumbnail_generator( $upload ) {

		if ( strpos( $upload['type'], 'video' ) !== false ) {
			$url       = $upload['url'];
			$file      = wp_parse_url( $url, PHP_URL_PATH );
			$info      = pathinfo( $file );
			$file_name = basename( $file, '.' . $info['extension'] );
			$path      = ABSPATH . ltrim( $file, '/' );
			// where ffmpeg is located
			$ffmpeg  = '/usr/local/bin/ffmpeg';
			$ffprobe = '/usr/local/bin/ffprobe';
//video dir
			$video = $path;
//where to save the image
			$image = dirname( $path ) . '/' . $file_name . '_thumb.jpg';
//time to take screenshot at
			$interval = 1;
//screenshot size
			$find_size = "$ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 $video";
			exec( $find_size, $size );
//		$size = '640x480';
//ffmpeg command
			$generate = "$ffmpeg -i $video -deinterlace -an -ss $interval -f mjpeg -t 1 -r 1 -y -s $size[0] $image 2>&1";

			exec( $generate, $output );

//			error_log(print_r($output));


			return $upload;
		} else {
			return $upload;
		}
	}


//	add_action( 'add_attachment', 'video_attachment_update_meta' );
	add_action( 'delete_attachment', 'delete_video_thumb' );
	add_filter( 'wp_handle_upload', 'video_thumbnail_generator' );

	function get_video_thumb_url( $url ) {
		$path      = wp_parse_url( $url, PHP_URL_PATH );
		$info      = pathinfo( $path );
		$thumb_url = get_home_url() . $info['dirname'] . '/' . $info['filename'] . '_thumb.jpg';

		return $thumb_url;
	}

//	function video_attachment_update_meta( $post_id ) {
//		$meta = wp_get_attachment_metadata( $post_id );
//		if ( strpos( $meta['mime_type'], 'video' ) !== false ) {
//			$attachment     = get_attached_media( '' );
//			$attachment_url = $attachment[ $post_id ]->guid;
//			$thumb_url      = get_video_thumb_url( $attachment_url );
//			update_post_meta( $post_id, 'thumb_url', $thumb_url );
//		}
//		return;
//	}

	function delete_video_thumb( $post_id ) {
		$path = get_attached_file( $post_id );
		$type = wp_get_attachment_metadata( $post_id )['mime_type'];
		if ( strpos( $type, 'video' ) !== false ) {
			$info       = pathinfo( $path );
			$thumb_path = $info['dirname'] . '/' . $info['filename'] . '_thumb.jpg';

			wp_delete_file( $thumb_path );
		} else {
			return;
		}
	}

	function get_artist_project( $post_id ) {
		$term_objects   = wp_get_post_terms( $post_id, 'artist_project' );
		$artist_project = array();
		foreach ( $term_objects as $term_object ) {
			$term_meta = get_term_meta( $term_object->term_taxonomy_id );
			if ( $term_meta['is_artist_or_project_select_type'][0] === 'is_artist_or_project_artist' ) {
				$artist_name = $term_object->name;
				$artist_id   = $term_object->term_id;
				$artist_slug = $term_object->slug;
			}
			if ( $term_meta['is_artist_or_project_select_type'][0] === 'is_artist_or_project_project' ) {
				$project_name = $term_object->name;
				$project_id = $term_object->term_id;
				$project_slug = $term_object->slug;
				$project_type = $term_meta['project_type'][0];
				$project_year = $term_meta['project_yearyear_select'][0];
			}
			$artist_project = array(
				'artist_id'    => $artist_id,
				'artist_name'  => $artist_name,
				'artist_slug'  => $artist_slug,
				'project_id'   => $project_id,
				'project_name' => $project_name,
				'project_slug' => $project_slug,
				'project_type' => $project_type,
				'project_year' => $project_year,
			);
		}

		return $artist_project;
	}

	require get_template_directory() . '/inc/ajax-search.php';
	require get_template_directory() . '/inc/custom-taxonomies.php';
	require get_template_directory() . '/inc/custom-posttypes.php';
	require get_template_directory() . '/inc/custom-metaboxes.php';
	require get_template_directory() . '/inc/custom-widgets.php';