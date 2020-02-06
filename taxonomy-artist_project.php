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
				?>

				<div class="mdc-typography--headline3 mdc-theme--primary"><?php print $artist->name; ?></div>
				<?php if ( is_user_logged_in() ) : ?>
                <div id="recently-used">
                    <span class="recent-label">Recently Used: </span>
					<?php
						$user_id           = get_current_user_id();
						$recent_assets     = get_user_meta( $user_id, 'recent_assets' )[0];
						$args              = array( 'post_type' => 'asset', 'post__in' => $recent_assets, 'orderby' => 'post__in', 'posts_per_page' => 3 );
						$args['tax_query'][] = array(
							array(
								'taxonomy' => 'artist_project',
								'field'    => 'slug',
								'terms'    => $artist->slug
							)
						);
						$recentAssetsQuery = new WP_Query( $args );


						if ( $recentAssetsQuery->have_posts() ) :
							while ( $recentAssetsQuery->have_posts() ) : $recentAssetsQuery->the_post();
								get_template_part( 'template-parts/content', 'asset' );
							endwhile;
						else:
							echo 'Sorry, no recent posts';
						endif;
						wp_reset_postdata();

					?>
                </div>
                <?php endif; ?>
				<div id="search-results"></div>
				<div id="initial-results">
<!--				--><?php
//
//					$artistArgs = array(
//						'post_type' => 'asset',
//						'tax_query' => array(
//							array(
//								'taxonomy' => 'artist_project',
//								'field' => 'slug',
//								'terms' => $artist->slug,
//							)
//						)
//					);
//					$artistQuery = new WP_Query( $artistArgs );
//					if ( $artistQuery->have_posts() ) :
//
//						if ( is_home() && ! is_front_page() ) :
//
//							?>
<!--							<header>-->
<!--								<h1 class="page-title screen-reader-text">--><?php //single_post_title(); ?><!--</h1>-->
<!--							</header>-->
<!--						--><?php
//						endif;
//
//						/* Start the Loop */
//						while ( $artistQuery->have_posts() ) : $artistQuery->the_post();
//
//
//							/*
//							 * Include the Post-Type-specific template for the content.
//							 * If you want to override this in a child theme, then include a file
//							 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
//							 */
//							get_template_part( 'template-parts/content', 'asset' );
//
//						endwhile;
//
//						$artistQuery->the_posts_navigation();
//
//					else :
//						echo "Can't find any assets for " . $artist->name;
//
//					endif;
//					wp_reset_postdata();
//				?>
				</div>
			</main><!-- #main -->
		</div>
	</div><!-- #primary -->
<?php $artist = get_queried_object(); ?>
	<script id="definitions" type="text/javascript">var $artist = "<?php echo $artist->slug; ?>";</script>
<?php
	get_footer();
