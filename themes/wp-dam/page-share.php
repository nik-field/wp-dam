<div id="dam-no-search">
<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DAM_-_Digital_Asset_Manager
 */

get_header(); ?>

<div id="primary" class="content-area mdc-layout-grid">
	<div class="content-area-container mdc-layout-grid__inner">
		<main id="main" class="site-main mdc-layout-grid__cell mdc-layout-grid__cell--span-9 ">
		<?php

if (!empty($_GET['id'])) {
	$query_var = explode(' ', $_GET['id']);
	$shared_assets_args = array(
		"post_type" => 'asset',
		"post__in"  => $query_var,
	);
	$shared_assets = new WP_Query($shared_assets_args);
	if ($shared_assets->have_posts()) { 
		while ($shared_assets->have_posts()) {
			$shared_assets->the_post();
			get_template_part('template-parts/content', 'asset-share');
		}
	}
}

?>

		</main><!-- #main -->
	</div>
</div><!-- #primary -->

<script id="definitions" type="text/javascript">
	var $artist = "";
</script>
</div>
<?php get_footer();