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

			function filter_page_check($menu_item_link)
			{
				$current_page = get_term_link(get_queried_object());
				if ($current_page == $menu_item_link) {
					return true;
				}
			}

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

		<div class="mdc-menu projects-menu">
			<div class="filters-sub-header mdc-typography--headline6">Projects</div>
			<ul class="mdc-list" role="menu">
				<?php

				$get_projects_args = array(
					'hide_empty' => 0,
					'meta_query' => [
						[
							'key'     => 'is_artist_or_project_select_type',
							'value'   => 'is_artist_or_project_project',
							'compare' => 'LIKE'
						]
					],
				);
				$project_terms     = get_terms($get_projects_args);

				foreach ($project_terms as $project_term) {
					$project_name = $project_term->name;
				?>
					<li class="mdc-list-item" role="menuitem">
						<a class="menu-link"><?php echo $project_name; ?></a>
					</li>
				<?php
				};
				?>
				</li>
			</ul>
			<!-- <div class="filters-sub-header mdc-typography--headline6">DEBUG</div>
			<?php
			// var_dump(get_artist_id('mo-kenney'));
			?> -->

</aside><!-- #secondary -->