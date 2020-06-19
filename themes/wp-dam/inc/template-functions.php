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
function wp_dam_body_classes($classes)
{
	// Adds a class of hfeed to non-singular pages.
	if (!is_singular()) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if (!is_active_sidebar('sidebar-1')) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}

add_filter('body_class', 'wp_dam_body_classes');

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function wp_dam_pingback_header()
{
	if (is_singular() && pings_open()) {
		printf('<link rel="pingback" href="%s">', esc_url(get_bloginfo('pingback_url')));
	}
}

add_action('wp_head', 'wp_dam_pingback_header');

function damQuery($property)
{
	if ($property == 'assets') {
		$args        = array('post_type' => 'asset', 'posts_per_page' => -1);
		$assetsQuery = new WP_Query($args);

		return $assetsQuery;
	}
}

function get_artist_terms()
{
	$get_artists_args = array(
		'taxonomy'   => 'artist_project',
		'hide_empty' => 0,
		'meta_query' => [
			[
				'key'     => 'is_artist_or_project_select_type',
				'value'   => 'is_artist_or_project_artist',
				'compare' => 'LIKE'
			]
		],
	);
	return get_terms($get_artists_args);
}

function get_artist_id($artist_slug)
{
	$get_artists_args = array(
		'taxonomy'   => 'artist_project',
		'slug' => $artist_slug,
		'hide_empty' => 0,
	);
	return get_terms($get_artists_args)[0]->term_id;
}

function get_project_terms()
{
	$get_projects_args = array(
		'taxonomy'   => 'artist_project',
		'hide_empty' => 0,
		'meta_query' => [
			[
				'key'     => 'is_artist_or_project_select_type',
				'value'   => 'is_artist_or_project_project',
				'compare' => 'LIKE'
			]
		],
	);
	return get_terms($get_projects_args);
}

function get_projects($artist_slug = null)
{
	if ($artist_slug === null) {
		return get_project_terms();
	} else {
		$artist_id = get_artist_id($artist_slug);
		$projectArgs = array(
			'taxonomy'   => 'artist_project',
			'parent' => $artist_id,
			'hide_empty' => 0,
			'meta_query' => [
				[
					'key'     => 'is_artist_or_project_select_type',
					'value'   => 'is_artist_or_project_project',
					'compare' => 'LIKE'
				]
			],
		);
		return get_terms($projectArgs);
	}
}


function get_asset_format($post = null)
{
	$post = get_post($post);

	if (!$post) {
		return false;
	}

	$_asset_format = get_the_terms($post->ID, 'format');

	if (empty($_asset_format)) {
		return false;
	}

	$asset_format = reset($_asset_format);

	return str_replace('asset-format-', '', $asset_format->slug);
}

if (!function_exists('write_log')) {
	function write_log($log)
	{
		if (is_array($log) || is_object($log)) {
			error_log(print_r($log, true));
		} else if (is_bool($log)) {
			error_log(var_dump($log));
		} else {
			error_log($log);
		}
	}
}

function video_thumbnail_generator($upload)
{

	if (strpos($upload['type'], 'video') !== false) {
		$siteurl      = get_option('siteurl');
		$siteurl_path = wp_parse_url($siteurl, PHP_URL_PATH);
		$homeurl      = get_option('home');
		$url          = $upload['url'];
		$file         = wp_parse_url($url, PHP_URL_PATH);
		$file_topdir  = '/' . strtok(ltrim($file, '/'), '/');
		$info         = pathinfo($file);
		$file_name    = basename($file, '.' . $info['extension']);
		if ($siteurl_path === $file_topdir) {
			$path = ABSPATH . ltrim($file, $siteurl_path . '/');
		} else {
			$path = ABSPATH . ltrim($file, '/');
		}
		// where ffmpeg is located
		$ffmpeg  = '/usr/bin/ffmpeg';
		$ffprobe = '/usr/bin/ffprobe';
		//video dir
		$video = $path;
		//where to save the image
		$image = dirname($path) . '/' . $file_name . '_thumb.jpg';
		//time to take screenshot at
		$interval = 1;
		//screenshot size
		//$find_size = "$ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of default=nw=1 $video";
		//exec( $find_size, $size );
		//$size_formatted = $size->width . 'x' . $size->height;
		//		$size = '640x480';
		//ffmpeg command
		$generate = "ffmpeg -i $video -ss $interval -vframes 1 $image";

		exec($generate, $output);

		//$debug = "siteurl=$siteurl \n siteurl_path=$siteurl_path \n checked_against=$file_topdir \n homeurl=$homeurl \n url=$url \n file=$file \n info=$info \n file_name=$file_name \n path=$path \n image=$image \n generate=$generate \n output=" . var_dump( $output ) . "\n";

		write_log($output);


		return $upload;
	} else {
		return $upload;
	}
}


//	add_action( 'add_attachment', 'video_attachment_update_meta' );
add_action('delete_attachment', 'delete_video_thumb');
add_filter('wp_handle_upload', 'video_thumbnail_generator');

function get_video_thumb_url($url)
{
	$path      = wp_parse_url($url, PHP_URL_PATH);
	$info      = pathinfo($path);
	$baseurl   = wp_parse_url(get_site_url());
	$thumb_url = $baseurl['scheme'] . '://' . $baseurl['host'] . $info['dirname'] . '/' . $info['filename'] . '_thumb.jpg';

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

function delete_video_thumb($post_id)
{
	$path = get_attached_file($post_id);
	$type = wp_get_attachment_metadata($post_id)['mime_type'];
	if (strpos($type, 'video') !== false) {
		$info       = pathinfo($path);
		$thumb_path = $info['dirname'] . '/' . $info['filename'] . '_thumb.jpg';

		wp_delete_file($thumb_path);
	} else {
		return;
	}
}

function get_artist_project($post_id)
{
	$term_objects   = wp_get_post_terms($post_id, 'artist_project');
	$artist_project = array();
	foreach ($term_objects as $term_object) {
		$term_meta = get_term_meta($term_object->term_taxonomy_id);
		if ($term_meta['is_artist_or_project_select_type'][0] === 'is_artist_or_project_artist') {
			$artist_name = $term_object->name;
			$artist_id   = $term_object->term_id;
			$artist_slug = $term_object->slug;
		}
		if ($term_meta['is_artist_or_project_select_type'][0] === 'is_artist_or_project_project') {
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

/**
 * Uses cURL rather than file_get_contents to make a request to the specified URL.
 *
 * @param string $url The URL to which we're making the request.
 *
 * @return   string    $output    The result of the request.
 */
function url_get_contents($url)
{

	if (!function_exists('curl_init')) {
		die('The cURL library is not installed.');
	}

	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$output = curl_exec($ch);

	curl_close($ch);

	return $output;
}

add_action('wp_ajax_asset_download', 'asset_download_callback');
add_action('wp_ajax_nopriv_asset_download', 'asset_download_callback');

function asset_download_callback()
{

	$download_args = array();
	if (isset($_GET['id'])) {
		$download_id = sanitize_text_field(($_GET['id']));
		if ($download_args !== 0) {
			$download_args = array(
				"p"              => $download_id,
				"post_type"      => 'asset',
				"posts_per_page" => 1,
			);
		}
	}

	$assetsQuery = new WP_Query($download_args);

	if ($assetsQuery->have_posts()) {
		$assetsQuery->the_post();
		$download_link     = get_asset_url();
		$attachment        = reset(get_attached_media(''));
		$download_path     = get_attached_file($attachment->ID);
		$download_filename = get_asset_url(true);
		$download_format   = get_asset_format();
		$download_mime     = get_asset_file_type('mime');
	}
	if ($download_format === 'format_link') {
		header('Location: ' . $download_link);
		header("Content-Type: " . $download_mime);
		header("Connection: close");
		return;
	}
	if ($download_format === 'format_image') {
		$download_path = wp_get_original_image_path(get_post_thumbnail_id());
	}
	write_log($download_path);
	if ($download_path) {
		header('X-Sendfile: ' . $download_path);
	} else {
		header('X-Sendfile: ' . $download_link);
	}
	header('Content-Description: Downloading Asset...');
	header('Content-Disposition: attachment; filename="' . $download_filename . '"');
	header("Content-Type: " . $download_mime);
	header("Connection: close");

	//		$context = stream_context_create( array( 'http' => array( 'header' => 'Connection: close\r\n' ) ) );
	//		echo url_get_contents( $download_link );
	wp_die();
}

add_action('wp-loaded', 'download_url_handler');
function download_url_handler()
{
	add_rewrite_rule('download/([^/]*)$', 'wp-content/themes/wp-dam/download.php?id=$1', 'top');
}


add_action('after_setup_theme', 'theme_setup');
/**
 * When the theme is activated, all of the active widgets are deactivated.
 *
 * @since    1.0.0
 */
function theme_setup()
{
	download_url_handler();
	require_once(dirname(dirname(dirname(dirname(__DIR__)))) . "/wp-admin/includes/misc.php");
	if (function_exists('save_mod_rewrite_rules')) {
		save_mod_rewrite_rules();
	}
	// $update_required = ( $new_rules !== $existing_rules );
	if (!get_option('acme_cleared_widgets')) {

		update_option('sidebars_widgets', array());
		update_option('acme_cleared_widgets', true);
	}
}

function damAddNewAsset()
{
	if (!empty($_POST)) {
		$asset_title = $_POST["asset_title"];
		$format = $_POST["format"];
		$asset = array(
			'post_title' => $asset_title,
			'tax_input' => array(
				'format' => $format,
			),
		);
		print_r($asset);
	}
}
function damAddNewAsset_nopriv()
{
	wp_die();
}
add_action('admin_post_frontend_add_asset', 'damAddNewAsset');
add_action('admin_post_nopriv_frontend_add_asset', 'damAddNewAsset_nopriv');

//	function change_permalinks() {
//		global $wp_rewrite;
//		$wp_rewrite->set_permalink_structure( '/%postname%/' );
//		$wp_rewrite->flush_rules();
//	}
//
//	add_action( 'init', 'change_permalinks' );

function my_upload_new_media_html()
{

	require_once(dirname(dirname(dirname(dirname(__DIR__)))) . '/wp-admin/includes/template.php');
	/* everything is copied from media-new.php */
	/* translated, and old browser option is there as well */

	$title = __('Upload New Media');

	$post_id = 0;
	if (isset($_REQUEST['post_id'])) {
		$post_id = absint($_REQUEST['post_id']);
		if (!get_post($post_id) || !current_user_can('edit_post', $post_id)) $post_id = 0;
	}

	if ($_POST) {
		if (isset($_POST['html-upload']) && !empty($_FILES)) {
			check_admin_referer('media-form');
			// Upload File button was clicked
			$upload_id = media_handle_upload('async-upload', $post_id);
			if (is_wp_error($upload_id)) {
				wp_die($upload_id);
			}
		}
		wp_redirect(admin_url('upload.php'));
		exit;
	}

	$form_class = 'media-upload-form type-form validate';
	if (get_user_setting('uploader') || isset($_GET['browser-uploader']))
		$form_class .= ' html-uploader';

?>

	<div class="wrap">
		<h1><?php echo esc_html($title); ?></h1>

		<form enctype="multipart/form-data" method="post" action="<?php echo admin_url('media-new.php'); ?>" class="<?php echo esc_attr($form_class); ?>" id="file-form">

			<?php media_upload_form(); ?>

			<script type="text/javascript">
				var post_id = <?php echo $post_id; ?>,
					shortform = 3;
			</script>
			<input type="hidden" name="post_id" id="post_id" value="<?php echo $post_id; ?>" />
			<?php wp_nonce_field('media-form'); ?>
			<div id="media-items" class="hide-if-no-js"></div>
		</form>
	</div>

<?php
}
add_action('wp_dam_frontend_addasset_uploader', 'my_upload_new_media_html');


require get_template_directory() . '/inc/ajax-search.php';
require get_template_directory() . '/inc/custom-taxonomies.php';
require get_template_directory() . '/inc/custom-posttypes.php';
require get_template_directory() . '/inc/custom-metaboxes.php';
require get_template_directory() . '/inc/custom-widgets.php';
