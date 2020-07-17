<?php

/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DAM_-_Digital_Asset_Manager
 */


?>

<aside id="secondary" class="filters-area mdc-layout-grid__cell mdc-layout-grid__cell--span-3">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
	<div class="filters-header mdc-typography--headline5">Filters</div>
	<?php
	$user = wp_get_current_user();
	?>
	<div class="filters-sub-header mdc-typography--headline6"><a href="<?php echo get_home_url(); ?>">Artists</a></div>
	<div class="mdc-menu artists-menu">

		<ul class="mdc-list" role="menu">

			<?php
				$user_can_access                           = get_the_author_meta( 'allow_access_to', $user->ID );
				( $user_can_access == 0 ) ? $artists_terms = get_artist_terms() : $artists_terms[0] = get_artist( $user_can_access );


			foreach ( $artists_terms as $artist_term ) {
				$artist_name = $artist_term->name;
				$artist_slug = $artist_term->slug;
				$artist_page = get_term_link( $artist_term );
				?>
			<li
				<?php
				if ( filter_page_check( $artist_page ) ) {
					echo 'id="current-page"';  }
				?>
				class="filter-list-item mdc-list-item mdc-list-item--artist" role="menuitem">
				<?php
				if ( ! filter_page_check( $artist_page ) ) {
					echo '<a class="menu-link" href="' . $artist_page . '">';
				}
				?>
				<div class="artist-menu-item"><span class="artist-menu-item--label"><?php echo $artist_name; ?></span></div>
				<?php
				if ( filter_page_check( $artist_page ) ) :
					?>
				<a class="menu-link-icon" href="<?php echo home_url(); ?>"><i class="filter-menu-icon material-icons">close</i><?php endif; ?></a>
				<?php
						$projects = get_projects( $artist_slug );
				if ( ! empty( $projects ) ) {
					if ( ! filter_page_check( $artist_page ) ) :
						?>
				<span class="artist-menu--dropdown menu-dropdown-toggle"><i class="material-icons">arrow_drop_down</i></span>
				<?php endif; ?>
				<div style="display:none" class="projects-sub-menu">
					<ul class="mdc-list">
						<?php
						foreach ( $projects as $project ) {
							$project_name = $project->name;
							$project_page = home_url() . '/assets/' . get_artist_slug( $project->parent ) . '/?project=' . $project->slug;
							?>
						<li
							<?php
							if ( ! empty( $_GET['project'] ) && $_GET['project'] === $project->slug ) {
								echo 'id="current-page"';
							}
							?>
							class="filter-list-item mdc-ripple mdc-list-item" role="menuitem">
							<?php
							if ( empty( $_GET['project'] ) || $_GET['project'] !== $project->slug ) {
								echo '<a class="menu-link" href="' . $project_page . '">';
							}
							?>
							<div class="artist-menu-item"><?php echo $project_name; ?></div>
							<?php
							if ( ! empty( $_GET['project'] ) && $_GET['project'] === $project->slug ) :
								?>
							<a class="menu-link-icon" href="<?php echo strtok( $_SERVER['REQUEST_URI'], '?' ); ?>"><i class="filter-menu-icon material-icons">close</i><?php endif; ?></a>
						</li>
						<?php

						}
						?>
					</ul>
				</div>
			</li>
			<?php
				}
			}
			?>
		</ul>
		<?php
		$disabled = true;
		if ( ! $disabled ) {
			?>
		<div class="mdc-menu projects-menu">
			<div class="filters-sub-header mdc-typography--headline6">Projects</div>
			<?php
			$current_page = get_queried_object();

			if ( isset( $current_page->taxonomy ) && $current_page->taxonomy === 'artist_project' ) {
				$artist = $current_page->slug;
			}
			$project_terms = get_projects( isset( $artist ) ? $artist : null );
			if ( ! empty( $project_terms ) ) {
				?>
			<ul class="mdc-list" role="menu">
				<?php



				foreach ( $project_terms as $project_term ) {
					$project_name = $project_term->name;
					$project_page = home_url() . '/assets/' . get_artist_slug( $project_term->parent ) . '/?project=' . $project_term->slug;
					?>
				<li
					<?php
					if ( ! empty( $_GET['project'] ) && $_GET['project'] === $project_term->slug ) {
							echo 'id="current-page"';
					}
					?>
					class="filter-list-item mdc-list-item" role="menuitem">
					<?php
					if ( empty( $_GET['project'] ) || $_GET['project'] !== $project_term->slug ) {
						echo '<a class="menu-link" href="' . $project_page . '">';
					}
					?>
					<?php echo $project_name; ?>
					<?php
					if ( ! empty( $_GET['project'] ) && $_GET['project'] === $project_term->slug ) :
						?>
					<a class="menu-link-icon" href="<?php echo strtok( $_SERVER['REQUEST_URI'], '?' ); ?>"><i class="filter-menu-icon material-icons">close</i><?php endif; ?></a>
				</li>
				<?php
				};
				?>
				</li>
			</ul>

			<?php
			} else {
				?>
			<p>There aren't any assets or the assets have not been assigned to a project.</p>
			<?php
			}
			?>
		</div>
		<?php } ?>
</aside><!-- #secondary -->