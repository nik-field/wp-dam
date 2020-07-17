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

function wp_dam_login_logo() {  ?>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karla:400,400i,700|Varela+Round&display=swap"
	  type="text/css" media="all">
<style type="text/css">
body {
	background: #48bf91 !important;
	font-family: Karla, sans-serif !important;
	font-weight: 400;
	-moz-osx-font-smoothing: grayscale;
}

p a {
	color: #f3f7f5 !important;
}

.login form {
	border: unset !important;
	box-shadow: unset !important;
	background: #48bf91 !important;
	margin-top: 0 !important;
}

label {
	color: #fff;
	font-size: 16px !important;
	font-family: Karla, sans-serif !important;
}

#user_login,
#user_pass {
	min-height: 48px;
	padding: 0.1875rem 1rem !important;
	min-height: 56px;
	background-color: #73cdab !important;
	border: none !important;
	border-radius: 3px 3px 0 0 !important;
	color: #fff;
	font-size: 16px;
	font-family: Karla, sans-serif !important;
	transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

#user_login:focus,
#user_pass:focus {
	box-shadow: 0 0 0 2px #f3f7f5 !important;
	border-radius: 3px 3px 0 0 !important;

}

#wp-submit {
	font-family: Karla, sans-serif !important;
	font-weight: 400 !important;
	text-transform: uppercase;
	background-color: #247ba0 !important;
	letter-spacing: 1.25px;
	border-width: 0;
	box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);

}

#wp-submit:hover {
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
}

#wp-submit:active {
	box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12) !important;
}

.login form input[type="checkbox"] {
	background: transparent !important;
	border: 1px solid #f3f7f5 !important;
	box-shadow: none !important;
	border-radius: 2px !important;
}

.login form input[type="checkbox"]:checked {
	background: #247ba0 !important;
	border: 1px solid #247ba0 !important;
	color: #f3f7f5 !important;
}

.login form input[type="checkbox"]:checked:before {
	content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIxOHB4IiBoZWlnaHQ9IjE4cHgiPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNOSAxNi4xN0w0LjgzIDEybC0xLjQyIDEuNDFMOSAxOSAyMSA3bC0xLjQxLTEuNDF6Ii8+PC9zdmc+");
}

.forgetmenot label {
	font-size: 14px !important;
}

#login h1 a,
.login h1 a {
	background-image: url("<?php echo get_template_directory_uri() . '/dist/assets/dam_full_logo.svg'; ?>");
	height: 80px;
	width: unset;
	background-size: unset;
	background-repeat: no-repeat;
	padding-bottom: 10px;
}
</style>
<?php
}
add_action( 'login_enqueue_scripts', 'wp_dam_login_logo' );

function damQuery( $property ) {
	if ( $property == 'assets' ) {
		$args        = array(
			'post_type'      => 'asset',
			'posts_per_page' => -1,
		);
		$assetsQuery = new WP_Query( $args );

		return $assetsQuery;
	}
}

function get_artist_terms() {
	$get_artists_args = array(
		'taxonomy'   => 'artist_project',
		'hide_empty' => 0,
		'meta_query' => array(
			array(
				'key'     => 'is_artist_or_project_select_type',
				'value'   => 'is_artist_or_project_artist',
				'compare' => 'LIKE',
			),
		),
	);
	return get_terms( $get_artists_args );
}

function get_artist_slug( $artist_id ) {
	return get_term( $artist_id, 'artist_project' )->slug;
}
function get_artist( $artist ) {
	if ( is_numeric( $artist ) ) {
		return get_term( $artist, 'artist_project' );
	} elseif ( is_string( $artist ) ) {
		$artist_args = array(
			'taxonomy' => 'artist_project',
			'slug'     => $artist,
		);
		return get_terms( $artist_args );
	}
	return;
}
function get_project_slug( $project_id ) {
	return get_term( $project_id, 'artist_project' )->slug;
}

function get_project( $project ) {
	if ( is_numeric( $project ) ) {
		return get_term( $project, 'artist_project' );
	} elseif ( is_string( $project ) ) {
		$project_args = array(
			'taxonomy' => 'artist_project',
			'slug'     => $project,
		);
		return get_terms( $project_args )[0];
	}
	return;
}

function filter_page_check( $menu_item_link ) {
	$current_page = get_term_link( get_queried_object() );
	if ( $current_page == $menu_item_link ) {
		return true;
	}
}

function get_artist_id( $artist_slug ) {
	$get_artists_args = array(
		'taxonomy'   => 'artist_project',
		'slug'       => $artist_slug,
		'hide_empty' => 0,
	);
	return get_terms( $get_artists_args )[0]->term_id;
}

function get_project_id( $project_slug ) {
	$get_project_args = array(
		'taxonomy'   => 'artist_project',
		'slug'       => $project_slug,
		'hide_empty' => 0,
	);
	return get_terms( $get_project_args )[0]->term_id;
}

function get_project_terms() {
	$get_projects_args = array(
		'taxonomy'   => 'artist_project',
		'hide_empty' => 0,
		'meta_query' => array(
			array(
				'key'     => 'is_artist_or_project_select_type',
				'value'   => 'is_artist_or_project_project',
				'compare' => 'LIKE',
			),
		),
	);
	return get_terms( $get_projects_args );
}

function get_projects( $artist_slug = null ) {
	if ( $artist_slug === null ) {
		return get_project_terms();
	} else {
		$artist_id   = get_artist_id( $artist_slug );
		$projectArgs = array(
			'taxonomy'   => 'artist_project',
			'parent'     => $artist_id,
			'hide_empty' => 0,
			'meta_query' => array(
				array(
					'key'     => 'is_artist_or_project_select_type',
					'value'   => 'is_artist_or_project_project',
					'compare' => 'LIKE',
				),
			),
		);
		return get_terms( $projectArgs );
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
		} elseif ( is_bool( $log ) ) {
			error_log( var_dump( $log ) );
		} else {
			error_log( $log );
		}
	}
}

function video_thumbnail_generator( $upload ) {

	if ( strpos( $upload['type'], 'video' ) !== false ) {
		$siteurl      = get_option( 'siteurl' );
		$siteurl_path = wp_parse_url( $siteurl, PHP_URL_PATH );
		$homeurl      = get_option( 'home' );
		$url          = $upload['url'];
		$file         = wp_parse_url( $url, PHP_URL_PATH );
		$file_topdir  = '/' . strtok( ltrim( $file, '/' ), '/' );
		$info         = pathinfo( $file );
		$file_name    = basename( $file, '.' . $info['extension'] );
		if ( $siteurl_path === $file_topdir ) {
			$path = ABSPATH . ltrim( $file, $siteurl_path . '/' );
		} else {
			$path = ABSPATH . ltrim( $file, '/' );
		}
		// where ffmpeg is located
		$ffmpeg  = '/usr/bin/ffmpeg';
		$ffprobe = '/usr/bin/ffprobe';
		// video dir
		$video = $path;
		// where to save the image
		$image = dirname( $path ) . '/' . $file_name . '_thumb.jpg';
		// time to take screenshot at
		$interval = 1;

		$generate = "ffmpeg -i $video -s 300x300 -ss $interval -vframes 1 $image";

		exec( $generate, $output );

		return $upload;
	} else {
		return $upload;
	}
}



add_action( 'delete_attachment', 'delete_video_thumb' );
add_filter( 'wp_handle_upload', 'video_thumbnail_generator' );

function get_video_thumb_url( $url ) {
	$path      = wp_parse_url( $url, PHP_URL_PATH );
	$info      = pathinfo( $path );
	$baseurl   = wp_parse_url( get_site_url() );
	$thumb_url = $baseurl['scheme'] . '://' . $baseurl['host'] . $info['dirname'] . '/' . $info['filename'] . '_thumb.jpg';

	return $thumb_url;
}


function delete_video_thumb( $post_id ) {
	$path = get_attached_file( $post_id );
	$meta = wp_get_attachment_metadata( $post_id );
	$type = isset( $meta['mime_type'] ) ? $meta['mime_type'] : null;
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
			$project_id   = $term_object->term_id;
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

function dam_add_upload_mimes( $existing_mimes ) {
	// Add webm to the list of mime types.
	$existing_mimes['svg'] = 'image/svg+xml';

	// Return the array back to the function with our added mime type.
	return $existing_mimes;
}
add_filter( 'mime_types', 'dam_add_upload_mimes' );


/**
 * Uses cURL rather than file_get_contents to make a request to the specified URL.
 *
 * @param string $url The URL to which we're making the request.
 *
 * @return   string    $output    The result of the request.
 */
function url_get_contents( $url ) {

	if ( ! function_exists( 'curl_init' ) ) {
		die( 'The cURL library is not installed.' );
	}

	$ch = curl_init();

	curl_setopt( $ch, CURLOPT_URL, $url );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );

	$output = curl_exec( $ch );

	curl_close( $ch );

	return $output;
}

add_action( 'wp_ajax_asset_download', 'asset_download_callback' );
add_action( 'wp_ajax_nopriv_asset_download', 'asset_download_callback' );

function asset_download_callback() {
	$download_args = array();
	if ( isset( $_GET['id'] ) ) {
		$download_id = sanitize_text_field( ( $_GET['id'] ) );
		if ( $download_args !== 0 ) {
			$download_args = array(
				'p'              => $download_id,
				'post_type'      => 'asset',
				'posts_per_page' => 1,
			);
		}
	}

	$assetsQuery = new WP_Query( $download_args );

	if ( $assetsQuery->have_posts() ) {
		$assetsQuery->the_post();
		$download_link     = get_asset_url();
		$attached_media    = get_attached_media( '' );
		$attachment        = reset( $attached_media );
		$download_path     = get_attached_file( $attachment->ID ) ? get_attached_file( $attachment->ID ) : false;
		$download_filename = get_asset_url( true );
		$download_format   = get_asset_format();
		$download_mime     = get_asset_file_type( 'mime' );
	}
	if ( $download_format === 'format_link' ) {
		header( 'Location: ' . $download_link );
		header( 'Content-Type: ' . $download_mime );
		header( 'Connection: close' );
		return;
	}
	if ( $download_format === 'format_image' ) {
		$download_path = wp_get_original_image_path( get_post_thumbnail_id() );
	}

	if ( $download_path ) {
		header( 'X-Sendfile: ' . $download_path );
	} else {
		header( 'X-Sendfile: ' . $download_link );
	}
	header( 'Content-Description: Downloading Asset...' );
	header( 'Content-Disposition: attachment; filename="' . $download_filename . '"' );
	header( 'Content-Type: ' . $download_mime );
	header( 'Connection: close' );

	wp_die();
}

add_action( 'wp-loaded', 'download_url_handler' );
function download_url_handler() {
	add_rewrite_rule( 'download/([^/]*)$', 'wp-content/themes/wp-dam/download.php?id=$1', 'top' );
}

function dam_set_permalinks() {
	global $wp_rewrite;
	$wp_rewrite->set_permalink_structure( '/%postname%/' );
}
add_action( 'init', 'dam_set_permalinks' );
// add_action('wp-loaded', 'artist_project_handler');
// function artist_project_handler() {
// add_rewrite_rule('/([^/]*)$', 'artist_project/$1', 'top');
// }

function add_share_page() {
	 $check_page_exist = get_page_by_title( 'share', 'OBJECT', 'page' );
	if ( empty( $check_page_exist ) ) {
		$share_page_args = array(
			'comment_status' => 'close',
			'ping_status'    => 'close',
			'post_author'    => 1,
			'post_title'     => 'Share',
			'post_name'      => 'share',
			'post_status'    => 'publish',
			'post_type'      => 'page',
			'page_template'  => 'page-share.php',
		);
		wp_insert_post( $share_page_args );
	}
}



add_action( 'after_setup_theme', 'theme_setup' );
/**
 * When the theme is activated, all of the active widgets are deactivated.
 *
 * @since    1.0.0
 */
function theme_setup() {
	download_url_handler();
	add_share_page();
	require_once dirname( dirname( dirname( dirname( __DIR__ ) ) ) ) . '/wp-admin/includes/misc.php';
	if ( function_exists( 'save_mod_rewrite_rules' ) ) {
		save_mod_rewrite_rules();
	}
	// $update_required = ( $new_rules !== $existing_rules );

	if ( ! get_option( 'acme_cleared_widgets' ) ) {

		update_option( 'sidebars_widgets', array() );
		update_option( 'acme_cleared_widgets', true );
	}
}

add_action( 'show_user_profile', 'wp_dam_artist_user_extra_field' );
add_action( 'edit_user_profile', 'wp_dam_artist_user_extra_field' );
function wp_dam_artist_user_extra_field( $user ) {
	if ( current_user_can( 'create_users' ) ) {
		$artists = get_artist_terms();
		if ( null !== get_the_author_meta( 'allow_access_to', $user->ID ) ) {
			$selected = intval( get_the_author_meta( 'allow_access_to', $user->ID ) );
		}
		?>
<h3>Allow Access To Specific Artist</h3>
<table class="form-table">
	<tr>
		<th><label for="allow_access_to">Artist</label></th>
		<td>
			<select id="allow_access_to" name="allow_access_to">
				<option value="0">All</option>
				<?php
				foreach ( $artists as $artist ) {
					?>
				<option value="<?php echo $artist->term_id; ?>"
						<?php
						if ( $artist->term_id === $selected ) {
															echo 'selected';
						}
						?>>
					<?php echo $artist->name; ?>
				</option>
				<?php
				}
				?>
				<span class="description"><?php _e( 'Please choose Artist to allow access to.' ); ?></span>
		</td>
	</tr>
</table>
<?php
	}
}

add_action( 'personal_options_update', 'save_wp_dam_artist_user_extra_field' );
add_action( 'edit_user_profile_update', 'save_wp_dam_artist_user_extra_field' );

function wp_dam_artist_redirect() {
	 $user           = wp_get_current_user();
	$user_can_access = intval( get_the_author_meta( 'allow_access_to', $user->ID ) );
	if ( is_front_page() and $user_can_access > 0 ) {
		$artists = get_artist_terms();
		$artist  = array_filter(
			$artists,
			function ( $obj ) use ( $user_can_access ) {
				if ( $obj->term_id === $user_can_access ) {
					return true;
				}
			}
		);
		wp_redirect( home_url( '/assets/' . $artist[ key( $artist ) ]->slug ) );
		die;
	}
}
add_action( 'template_redirect', 'wp_dam_artist_redirect' );

function wp_dam_force_login() {
	 global $wp;
	if ( ! is_user_logged_in() && $wp->request != 'share' && $_SERVER['PHP_SELF'] !== '/wp-login.php' ) {
		wp_redirect( home_url( '/wp-login.php' ) );
		die;
	}
}
add_action( 'parse_request', 'wp_dam_force_login' );

function save_wp_dam_artist_user_extra_field( $user_id ) {
	if ( ! current_user_can( 'edit_user', $user_id ) ) {
		return false;
	} else {

		if ( isset( $_POST['allow_access_to'] ) && $_POST['allow_access_to'] != '' ) {
			update_usermeta( $user_id, 'allow_access_to', $_POST['allow_access_to'] );
		}
	}
}



function damAddNewAsset() {
	if ( ! empty( $_POST ) ) {
		if ( ! isset( $_POST['frontend_add_asset_nonce'] )
		|| ! wp_verify_nonce( $_POST['frontend_add_asset_nonce'], 'frontend_add_asset' )
		) {
			print 'Sorry, your nonce did not verify.';
			exit;
		} else {
			require_once ABSPATH . 'wp-admin/includes/image.php';
			// process form data

			$edit_post_id = ! empty( $_POST['edit_post_id'] ) ? intval( $_POST['edit_post_id'] ) : 0;

			$asset_title       = sanitize_text_field( wp_unslash( $_POST['asset_title'] ) );
			$format            = sanitize_text_field( wp_unslash( $_POST['format'] ) );
			$upload_url        = esc_url_raw( $_POST['upload_url'] );
			$upload_filename   = basename( $upload_url );
			$upload_dir        = wp_parse_url( $upload_url )['path'];
			$upload_id         = intval( $_POST['upload_file_id'] );
			$upload_path       = get_attached_file( $upload_id );
			$asset_link        = esc_url_raw( $_POST['asset_link'] );
			$asset_creator     = sanitize_text_field( $_POST['asset_creator'] );
			$new_artist_name   = sanitize_text_field( $_POST['new-artist-name'] );
			$new_artist_check  = empty( $new_artist_name );
			$new_project_name  = sanitize_text_field( $_POST['new-project-name'] );
			$new_project_check = empty( $new_project_name );
			$new_project_year  = sanitize_meta( 'project_yearyear_select', $_POST['new-project-year'], 'term' );
			$new_project_type  = sanitize_meta( 'project_type', $_POST['new-project-type'], 'term' );

			// Create new artist
			if ( $new_artist_check === false ) {
				$artist_term = wp_insert_term( $new_artist_name, 'artist_project' );
				if ( isset( $artist_term->error_data['term_exists'] ) ) {
					$artist_id = $artist_term->error_data['term_exists'];
				} else {
					$artist_id = $artist_term['term_id'];
				}
				if ( isset( $artist_id ) ) {
					$artist_slug = get_artist_slug( $artist_id );
					update_term_meta( $artist_id, 'is_artist_or_project_select_type', 'is_artist_or_project_artist' );
				}
			} elseif ( ! empty( $_POST['artist_id'] ) ) {
				$artist_id   = intval( $_POST['artist_id'] );
				$artist_slug = get_artist_slug( $artist_id );
			}
			// Create new project
			if ( $new_project_check === false ) {
				$project_term = wp_insert_term( $new_project_name, 'artist_project', array( 'parent' => $artist_id ) );
				if ( isset( $project_term->error_data['term_exists'] ) ) {
					$project_id = $project_term->error_data['term_exists'];
				} else {
					$project_id = $project_term['term_id'];
				}
				if ( isset( $project_id ) ) {
					$project_slug = get_project_slug( $project_id );
					update_term_meta( $project_id, 'is_artist_or_project_select_type', 'is_artist_or_project_project' );
					update_term_meta( $project_id, 'project_type', $new_project_type );
					update_term_meta( $project_id, 'project_yearyear_select', $new_project_year );
				}
			} elseif ( ! empty( $_POST['project_id'] ) ) {
				$project_id   = intval( $_POST['project_id'] );
				$project_slug = get_project_slug( $project_id );
			}
			$asset_args = array(
				'ID'             => $edit_post_id,
				'post_type'      => 'asset',
				'post_status'    => 'publish',
				'post_content'   => $asset_title,
				'comment_status' => 'closed',
				'post_title'     => $asset_title,
				'tax_input'      => array(
					'format'         => $format,
					'artist_project' => $artist_id,
				),
			);
			isset( $project_id ) ? $asset_args['tax_input']['artist_project'] .= ', ' . $project_id : null;
			$post_id = wp_insert_post( $asset_args, true );
			switch ( $format ) {
				case 'format_link':
					update_post_meta( $post_id, 'add_asset_link', $asset_link );
					break;
				case 'format_image':
					$filetype = wp_check_filetype( basename( $upload_path ), null );

					$attachment    = array(
						'ID'             => $upload_id,
						'post_mime_type' => $filetype['type'],
					);
					$attachment_id = wp_insert_attachment( $attachment, $upload_path, $post_id );

					// Generate the metadata for the attachment, and update the database record.
					$is_error = set_post_thumbnail( $post_id, $upload_id );
					update_post_meta( $post_id, 'add_asset_file', $upload_url );
					break;
				default:
					$filetype = wp_check_filetype( basename( $upload_path ), null );

					$attachment    = array(
						'ID'             => $upload_id,
						'post_mime_type' => $filetype['type'],
					);
					$attachment_id = wp_insert_attachment( $attachment, $upload_path, $post_id );
					update_post_meta( $post_id, 'add_asset_file', $upload_url );
			}
			if ( ! empty( $_POST['asset_creator'] ) ) {
				update_post_meta( $post_id, 'add_asset_creator', $asset_creator );
			}
			// print( '<pre>' . print_r( $_POST, true ) . '</pre>' );
			// print( '<pre>' . print_r( $asset_args, true ) . '</pre>' );
			wp_safe_redirect( home_url() );
		}
	}
}
function damAddNewAsset_nopriv() {
	wp_die();
}
add_action( 'admin_post_frontend_add_asset', 'damAddNewAsset' );
add_action( 'admin_post_nopriv_frontend_add_asset', 'damAddNewAsset_nopriv' );


function my_upload_new_media_html() {
	require_once dirname( dirname( dirname( dirname( __DIR__ ) ) ) ) . '/wp-admin/includes/template.php';
	/*
	 everything is copied from media-new.php */
	/* translated, and old browser option is there as well */

	$title = __( 'Upload New Media' );

	$post_id = 0;
	if ( isset( $_REQUEST['post_id'] ) ) {
		$post_id = absint( $_REQUEST['post_id'] );
		if ( ! get_post( $post_id ) || ! current_user_can( 'edit_post', $post_id ) ) {
			$post_id = 0;
		}
	}

	if ( $_POST ) {
		if ( isset( $_POST['html-upload'] ) && ! empty( $_FILES ) ) {
			check_admin_referer( 'media-form' );
			// Upload File button was clicked
			$upload_id = media_handle_upload( 'async-upload', $post_id );
			if ( is_wp_error( $upload_id ) ) {
				wp_die( $upload_id );
			}
		}
		wp_redirect( admin_url( 'upload.php' ) );
		exit;
	}

	$form_class = 'media-upload-form type-form validate';
	if ( get_user_setting( 'uploader' ) || isset( $_GET['browser-uploader'] ) ) {
		$form_class .= ' html-uploader';
	}

	?>

<div class="wrap">
	<h1><?php echo esc_html( $title ); ?></h1>

	<form enctype="multipart/form-data" method="post" action="<?php echo admin_url( 'media-new.php' ); ?>"
		  class="<?php echo esc_attr( $form_class ); ?>" id="file-form">

		<?php media_upload_form(); ?>

		<script type="text/javascript">
		var post_id = < ? php echo $post_id; ? > ,
		shortform = 3;
		</script>
		<input type="hidden" name="post_id" id="post_id" value="<?php echo $post_id; ?>" />
		<?php wp_nonce_field( 'media-form' ); ?>
		<div id="media-items" class="hide-if-no-js"></div>
	</form>
</div>

<?php
}
add_action( 'wp_dam_frontend_addasset_uploader', 'my_upload_new_media_html' );

/* ------------------ ALLOW UNFILTERED UPLOADS FOR EDITORS ------------------ */

function wp_dam_editor_role_caps() {
	$role = get_role( 'editor' );

	// Add a new capability.
	$role->add_cap( 'unfiltered_upload', true );
}
add_action( 'init', 'wp_dam_editor_role_caps', 11 );


require get_template_directory() . '/inc/ajax-search.php';
require get_template_directory() . '/inc/custom-taxonomies.php';
require get_template_directory() . '/inc/custom-posttypes.php';
require get_template_directory() . '/inc/custom-metaboxes.php';
require get_template_directory() . '/inc/custom-widgets.php';