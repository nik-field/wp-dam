<div id="recently-used">
	<span class="recent-label menu-dropdown-toggle dropdown-menu-open">Recently Used <i class="material-icons">arrow_drop_down</i></span>
	<div class="recently-used-container">
		<?php
						$user_id             = get_current_user_id();
						$recent_assets       = get_user_meta( $user_id, 'recent_assets' )[0] ? get_user_meta( $user_id, 'recent_assets' )[0] : null;
						$args                = array(
							'post_type'      => 'asset',
							'post__in'       => $recent_assets,
							'orderby'        => 'post__in',
							'posts_per_page' => 3,
						);
						$recent_assets_query = new WP_Query( $args );

						if ( $recent_assets_query->have_posts() && isset( $recent_assets ) ) :
							while ( $recent_assets_query->have_posts() ) :
								$recent_assets_query->the_post();
								get_template_part( 'template-parts/content', 'asset' );
							endwhile;
						else :
							echo 'No recent activity';
						endif;
						wp_reset_postdata();
						?>
	</div>
</div>