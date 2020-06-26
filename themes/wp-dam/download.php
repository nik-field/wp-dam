<?php

	define( 'DOING_AJAX', true );
	require_once( '../../../wp-load.php' );
	header( 'Content-Type: text/html; charset=' . get_option( 'blog_charset' ) );
	header( 'X-Robots-Tag: noindex' );
	send_nosniff_header();
	header( 'Cache-Control: no-cache' );
	header( 'Pragma: no-cache' );

	$action = ( isset( $_POST['action'] ) ) ? $_POST['action'] : 'asset_download';

	do_action( 'wp_ajax_' . $action );

?>