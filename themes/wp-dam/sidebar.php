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
	<?php dynamic_sidebar('sidebar-1'); ?>
	<div class="filters-header mdc-typography--headline5">Filters</div>
	<?php
	$user = wp_get_current_user();
	$user_can_access = get_the_author_meta('allow_access_to', $user->ID) > 0 ? false : true;
	if ($user_can_access) { ?>
		<div class="filters-sub-header mdc-typography--headline6"><a href="<?php echo get_home_url(); ?>">Artists</a></div>
		<div class="mdc-menu artists-menu">

			<ul class="mdc-list" role="menu">
				<!-- TODO: Convert getting artist/project terms into function
			-->

				<?php
				// $get_artists_args = array(
				// 	'taxonomy'   => 'artist_project',
				// 	'hide_empty' => 0,
				// 	'meta_query' => [
				// 		[
				// 			'key'     => 'is_artist_or_project_select_type',
				// 			'value'   => 'is_artist_or_project_artist',
				// 			'compare' => 'LIKE'
				// 		]
				// 	],
				// );
				$artists_terms    = get_artist_terms();



				foreach ($artists_terms as $artist_term) {
					$artist_name = $artist_term->name;
					$artist_page = get_term_link($artist_term);
				?>
					<li <?php if (filter_page_check($artist_page)) {
							echo 'id="current-page"';
						} ?> class="filter-list-item mdc-ripple mdc-list-item" role="menuitem">
						<?php if (!filter_page_check($artist_page)) {
							echo '<a class="menu-link" href="' . $artist_page . '">';
						} ?><?php echo $artist_name; ?>
						<?php if (filter_page_check($artist_page)) : ?><a class="menu-link-icon" href="<?php echo home_url(); ?>"><i class="filter-menu-icon material-icons">close</i><?php endif; ?></a>
					</li>
				<?php
				};
				?>
			</ul>
		<?php } ?>
		<div class="mdc-menu projects-menu">
			<div class="filters-sub-header mdc-typography--headline6">Projects</div>
			<?php
			$current_page = get_queried_object();

			if (isset($current_page->taxonomy) && $current_page->taxonomy === 'artist_project') {
				$artist = $current_page->slug;
			}
			$project_terms     = get_projects(isset($artist) ? $artist : null);
			if (!empty($project_terms)) {
			?>
				<ul class="mdc-list" role="menu">
					<?php



					foreach ($project_terms as $project_term) {
						$project_name = $project_term->name;
						$project_page = home_url() . '/' . get_artist_slug($project_term->parent) . '/?project=' . $project_term->slug;
					?>
						<li <?php if (!empty($_GET['project']) && $_GET['project'] === $project_term->slug) {
								echo 'id="current-page"';
							} ?> class="filter-list-item mdc-ripple mdc-list-item" role="menuitem">
							<?php if (empty($_GET['project']) || $_GET['project'] !== $project_term->slug) {
								echo '<a class="menu-link" href="' . $project_page . '">';
							} ?><?php echo $project_name; ?>
							<?php if (!empty($_GET['project']) && $_GET['project'] === $project_term->slug) : ?><a class="menu-link-icon" href="<?php echo strtok($_SERVER["REQUEST_URI"], '?'); ?>"><i class="filter-menu-icon material-icons">close</i><?php endif; ?></a>
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

</aside><!-- #secondary -->