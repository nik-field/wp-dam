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

	get_header();
?>

    <div id="primary" class="content-area mdc-layout-grid">
        <div class="content-area-container mdc-layout-grid__inner">

			<?php get_sidebar(); ?>
            <main id="main" class="site-main mdc-layout-grid__cell mdc-layout-grid__cell--span-9">
				<?php if ( is_user_logged_in() ) : ?>
                    <div id="recently-used">
                        <span class="recent-label" onclick="$('.recently-used-container').slideToggle()">Recently Used <i class="material-icons">arrow_drop_down</i></span>
                        <div class="recently-used-container">
							<?php
								$user_id       = get_current_user_id();
								$recent_assets = @get_user_meta( $user_id, 'recent_assets' )[0];
								$args              = array( 'post_type' => 'asset', 'post__in' => $recent_assets, 'orderby' => 'post__in', 'posts_per_page' => 3 );
								$recentAssetsQuery = new WP_Query( $args );
								if ( $recentAssetsQuery->have_posts() && isset( $recent_assets ) ) :
									while ( $recentAssetsQuery->have_posts() ) : $recentAssetsQuery->the_post();
										get_template_part( 'template-parts/content', 'asset' );
									endwhile;
								else:
									echo 'No recent activity';
								endif;
								wp_reset_postdata();

							?>
                        </div>
                    </div>
				<?php endif; ?>
                <div class="loading-bars">
                    <div class="dam-spinner">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div>

                <div id="search-results"></div>

                <div id="initial-results"></div>

            </main><!-- #main -->
        </div>
    </div><!-- #primary -->
<?php
	if ( is_user_logged_in() && current_user_can( 'edit_posts' ) ) {

		require get_template_directory() . '/inc/frontend-addasset.php';
	}
?>

    <script id="definitions" type="text/javascript">var $artist = "";</script>

<?php
	get_footer();
