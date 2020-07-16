<?php

/**
 *  Artist_Project Taxonomy Template Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package DAM_-_Digital_Asset_Manager
 */

get_header();



?>

<div id="primary" class="content-area mdc-layout-grid">
	<div class="content-area-container mdc-layout-grid__inner">

		<?php get_sidebar(); ?>
		<main id="main" class="site-main mdc-layout-grid__cell mdc-layout-grid__cell--span-9">
			<?php
			$artist = get_queried_object();
			if ( ! empty( $_GET['project'] ) ) {
				$project_slug = $_GET['project'];
				$project_name = get_project( $project_slug )->name;
			}
			?>

			<div class="mdc-typography--headline3 mdc-theme--primary">
				<?php
				print $artist->name;
																		isset( $project_name ) ? print ' - ' . $project_name : null;
				?>
			</div>
			<?php if ( is_user_logged_in() ) : ?>
			<div id="recently-used">
				<span class="recent-label menu-dropdown-toggle dropdown-menu-open">Recently Used <i class="material-icons">arrow_drop_down</i></span>
				<div class="recently-used-container">
					<?php
						$user_id             = get_current_user_id();
						$recent_assets       = get_user_meta( $user_id, 'recent_assets' )[0];
						$args                = array(
							'post_type'      => 'asset',
							'post__in'       => $recent_assets,
							'orderby'        => 'post__in',
							'posts_per_page' => 3,
						);
						$args['tax_query'][] = array(
							array(
								'taxonomy' => 'artist_project',
								'field'    => 'slug',
								'terms'    => $artist->slug,
							),
						);
						$recentAssetsQuery   = new WP_Query( $args );


						if ( $recentAssetsQuery->have_posts() ) :
							while ( $recentAssetsQuery->have_posts() ) :
								$recentAssetsQuery->the_post();
								get_template_part( 'template-parts/content', 'asset' );
							endwhile;
						else :
							echo 'Sorry, no recent posts';
						endif;
						wp_reset_postdata();

						?>
				</div>
			</div>
			<?php endif; ?>
			<div id="search-results"></div>
			<div id="initial-results">
				<!--				-->
				<?php
										//
										// $artistArgs = array(
										// 'post_type' => 'asset',
										// 'tax_query' => array(
										// array(
										// 'taxonomy' => 'artist_project',
										// 'field' => 'slug',
										// 'terms' => $artist->slug,
										// )
										// )
										// );
										// $artistQuery = new WP_Query( $artistArgs );
										// if ( $artistQuery->have_posts() ) :
										//
										// if ( is_home() && ! is_front_page() ) :
										//
										//
				?>
				<!--							<header>-->
				<!--								<h1 class="page-title screen-reader-text">-->
				<?php
				// single_post_title();
				?>
				<!--</h1>-->
				<!--							</header>-->
				<!--						-->
				<?php
												// endif;
												//
												// * Start the Loop */
												// while ( $artistQuery->have_posts() ) : $artistQuery->the_post();
												//
												//
												// *
												// * Include the Post-Type-specific template for the content.
												// * If you want to override this in a child theme, then include a file
												// * called content-___.php (where ___ is the Post Type name) and that will be used instead.
												// */
												// get_template_part( 'template-parts/content', 'asset' );
												//
												// endwhile;
												//
												// $artistQuery->the_posts_navigation();
												//
												// else :
												// echo "Can't find any assets for " . $artist->name;
												//
												// endif;
												// wp_reset_postdata();
												//
				?>
			</div>
		</main><!-- #main -->
	</div>
</div><!-- #primary -->
<?php
if ( is_user_logged_in() && current_user_can( 'edit_posts' ) && $artist->count > 0 ) {
	?>
<div id="dam-floating-actions">
	<button class="mdc-fab mdc-ripple dam-group-asset__button" aria-label="Group Assets For Sharing">
		<div class="mdc-fab__ripple"></div>
		<span class="mdc-fab__icon material-icons">dynamic_feed</span>
	</button>
	<button class="mdc-fab mdc-ripple dam-add-asset__button" aria-label="Add New Asset">
		<div class="mdc-fab__ripple"></div>
		<span class="mdc-fab__icon material-icons">add</span>
	</button>
</div>
<div class="dam-add-asset-dialog mdc-dialog">
	<div class="mdc-dialog__scrim"></div>
	<div class="mdc-dialog__container">
		<div class="mdc-dialog__surface add-asset-dialog-surface">
			<h2 class="mdc-dialog__title">
				Add New Asset
			</h2>
			<section class="dam-add-asset-dialog_form">
				<div class="mdc-dialog__content">
				</div>
			</section>
			<footer class="mdc-dialog__actions">
				<button id="add-asset_reset-form" type="reset" form="frontend_add_asset_form"
						class="mdc-button mdc-dialog__button mdc-ripple" data-mdc-dialog-action="reset"><span class="mdc-button__ripple"></span>Cancel</button>
				<button id="add-asset__save-button" type="submit" form="frontend_add_asset_form"
						class="mdc-button mdc-dialog__button mdc-dialog__button--default mdc-ripple"
						data-mdc-dialog-action="save" disabled><span class="mdc-button__ripple"></span>SAVE</button>
			</footer>
		</div>
	</div>
</div>
<?php
	require get_template_directory() . '/inc/group-assets.php';
}


$artist = get_queried_object();
if ( ! empty( $_GET['project'] ) ) {
	$project_slug = $_GET['project'];
}
?>
<script id="definitions" type="text/javascript">
var $artist = "<?php echo $artist->slug; ?>";
var $project = "<?php echo isset( $project_slug ) ? $project_slug : null; ?>";
</script>
<?php
get_footer();