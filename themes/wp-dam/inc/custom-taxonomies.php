<?php
// Register Artist/Project Taxonomy
	function register_artist_project_taxonomy() {

		$labels = array(
			'name'                       => _x( 'Artist/Projects', 'Taxonomy General Name', 'text_domain' ),
			'singular_name'              => _x( 'Artist/Project', 'Taxonomy Singular Name', 'text_domain' ),
			'menu_name'                  => __( 'Manage Artist/Projects', 'text_domain' ),
			'all_items'                  => __( 'All Artist/Projects', 'text_domain' ),
			'parent_item'                => __( 'Parent Artist/Project', 'text_domain' ),
			'parent_item_colon'          => __( 'Parent Artist/Project:', 'text_domain' ),
			'new_item_name'              => __( 'New Artist/Project', 'text_domain' ),
			'add_new_item'               => __( 'Add New Artist/Project', 'text_domain' ),
			'edit_item'                  => __( 'Edit Artist/Project', 'text_domain' ),
			'update_item'                => __( 'Update Artist/Project', 'text_domain' ),
			'view_item'                  => __( 'View Artist/Project', 'text_domain' ),
			'separate_items_with_commas' => __( 'Separate artists with commas', 'text_domain' ),
			'add_or_remove_items'        => __( 'Add or remove artists', 'text_domain' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
			'popular_items'              => __( 'Popular Artist/Projects', 'text_domain' ),
			'search_items'               => __( 'Search Artist/Projects', 'text_domain' ),
			'not_found'                  => __( 'Artist/Project Not Found', 'text_domain' ),
			'no_terms'                   => __( 'No artists or projects', 'text_domain' ),
			'items_list'                 => __( 'Artist/Projects list', 'text_domain' ),
			'items_list_navigation'      => __( 'Artist/Projects list navigation', 'text_domain' ),
		);
		$args   = array(
			'labels'            => $labels,
			'hierarchical'      => true,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_tagcloud'     => true,
			'show_in_rest'      => true,
			'rewrite'           => array(
				'slug'       => '/assets',
				'with_front' => false,
			),
		);
		register_taxonomy( 'artist_project', array( 'asset' ), $args );

	}

	add_action( 'init', 'register_artist_project_taxonomy', 0 );

// Register Custom Taxonomy
	function asset_format() {

		$labels = array(
			'name'                       => _x( 'Asset Formats', 'Taxonomy General Name', 'text_domain' ),
			'singular_name'              => _x( 'Asset Format', 'Taxonomy Singular Name', 'text_domain' ),
			'menu_name'                  => __( 'Asset Format', 'text_domain' ),
			'all_items'                  => __( 'All Formats', 'text_domain' ),
			'parent_item'                => __( 'Parent Format', 'text_domain' ),
			'parent_item_colon'          => __( 'Parent Format:', 'text_domain' ),
			'new_item_name'              => __( 'New Format Name', 'text_domain' ),
			'add_new_item'               => __( 'Add New Format', 'text_domain' ),
			'edit_item'                  => __( 'Edit Format', 'text_domain' ),
			'update_item'                => __( 'Update Format', 'text_domain' ),
			'view_item'                  => __( 'View Format', 'text_domain' ),
			'separate_items_with_commas' => __( 'Separate formats with commas', 'text_domain' ),
			'add_or_remove_items'        => __( 'Add or remove formats', 'text_domain' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
			'popular_items'              => __( 'Popular Formats', 'text_domain' ),
			'search_items'               => __( 'Search Formats', 'text_domain' ),
			'not_found'                  => __( 'Format Not Found', 'text_domain' ),
			'no_terms'                   => __( 'No Formats', 'text_domain' ),
			'items_list'                 => __( 'Formats list', 'text_domain' ),
			'items_list_navigation'      => __( 'Formats list navigation', 'text_domain' ),
		);
		$args   = array(
			'labels'            => $labels,
			'hierarchical'      => false,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => false,
			'show_tagcloud'     => false,
		);
		register_taxonomy( 'format', array( 'asset' ), $args );

	}

	add_action( 'init', 'asset_format', 0 );

	function initialize_formats() {
		$initial_formats = array(
			'format_image'     => 'Image',
			'format_video'     => 'Video',
			'format_link'      => 'Link',
			'format_audio'     => 'Audio',
			'format_audio-zip' => 'Audio Zip',
			'format_document'  => 'Document'
		);
		foreach ( $initial_formats as $slug => $name ) {
			if ( ! term_exists( $name, 'format' ) ) {
				wp_insert_term(
					$name,
					'format',
					array(
						'description' => '',
						'slug'        => $slug
					)
				);
			}
		}
	}

// Hook into the 'init' action
	add_action( 'init', 'initialize_formats', 0 );

	$project_types = array(
		'album'  => 'Album',
		'single' => 'Single',
		'tour'   => 'Tour',
		'event'  => 'Event'
	);

	class Is_Artist_Or_Project {

		public function __construct() {

			if ( is_admin() ) {

				add_action( 'artist_project_add_form_fields', array( $this, 'create_screen_fields' ), 1, 1 );
				add_action( 'artist_project_edit_form_fields', array( $this, 'edit_screen_fields' ), 1, 2 );

				add_action( 'created_artist_project', array( $this, 'save_data' ), 10, 1 );
				add_action( 'edited_artist_project', array( $this, 'save_data' ), 10, 1 );

			}

		}

		public function create_screen_fields( $taxonomy ) {

			// Set default values.
			$is_artist_or_project_select_type = '';

			// Form fields.
			echo '<div class="form-field term-is_artist_or_project_select_type-wrap">';
			echo '	<label for="is_artist_or_project_select_type">' . __( 'Artist or Project', 'text_domain' ) . '</label>';
			echo '	<p class="description">' . __( 'Are you adding an Artist or a Project?', 'text_domain' ) . '</p>';
			echo '	<label>';
			echo '		<input type="radio" name="is_artist_or_project_select_type" value="is_artist_or_project_artist" ' . checked( $is_artist_or_project_select_type, 'is_artist_or_project_artist', false ) . '> ' . __( 'Artist', 'text_domain' );
			echo '	</label>';
			echo '	<label>';
			echo '		<input type="radio" name="is_artist_or_project_select_type" value="is_artist_or_project_project" ' . checked( $is_artist_or_project_select_type, 'is_artist_or_project_project', false ) . '> ' . __( 'Project', 'text_domain' );
			echo '	</label>';
			echo '</div><br>';

		}

		public function edit_screen_fields( $term, $taxonomy ) {

			// Retrieve an existing value from the database.
			$is_artist_or_project_select_type = get_term_meta( $term->term_id, 'is_artist_or_project_select_type', true );

			// Set default values.
			if ( empty( $is_artist_or_project_select_type ) ) {
				$is_artist_or_project_select_type = '';
			}

			// Form fields.
			echo '<tr class="form-field term-is_artist_or_project_select_type-wrap">';
			echo '<th scope="row">';
			echo '	<label for="is_artist_or_project_select_type">' . __( 'Add Artist or Project', 'text_domain' ) . '</label><br>';
			echo '</th>';
			echo '<td>';
			echo '	<label>';
			echo '		<input type="radio" name="is_artist_or_project_select_type" value="is_artist_or_project_artist" ' . checked( $is_artist_or_project_select_type, 'is_artist_or_project_artist', false ) . '> ' . __( 'Artist', 'text_domain' );
			echo '	</label><br>';
			echo '	<label>';
			echo '		<input type="radio" name="is_artist_or_project_select_type" value="is_artist_or_project_project" ' . checked( $is_artist_or_project_select_type, 'is_artist_or_project_project', false ) . '> ' . __( 'Project', 'text_domain' );
			echo '	</label>';
			echo '</td>';
			echo '</tr>';


		}

		public function save_data( $term_id ) {

			// Sanitize user input.
			$is_artist_or_project_new_select_type = isset( $_POST['is_artist_or_project_select_type'] ) ? $_POST['is_artist_or_project_select_type'] : '';

			// Update the meta field in the database.
			update_term_meta( $term_id, 'is_artist_or_project_select_type', $is_artist_or_project_new_select_type );

		}

	}

	new Is_Artist_Or_Project;

	class project_type_meta {

		public function __construct() {

			if ( is_admin() ) {

				add_action( 'artist_project_term_new_form_tag', array( $this, 'create_screen_field_at_top' ), 10, 1 );
				add_action( 'artist_project_add_form_fields', array( $this, 'create_screen_fields' ), 10, 1 );
				add_action( 'artist_project_edit_form_fields', array( $this, 'edit_screen_fields' ), 10, 2 );

				add_action( 'created_artist_project', array( $this, 'save_data' ), 10, 1 );
				add_action( 'edited_artist_project', array( $this, 'save_data' ), 10, 1 );

			}

		}

		public function create_screen_field_at_top( $taxonomy ) {
			echo 'testing at top';
		}

		public function create_screen_fields( $taxonomy ) {

			// Set default values.
			$project_type = '';

			// Form fields.
			echo '<div class="form-field term-project_type-wrap">';
			echo '	<label for="project_type">' . __( 'Project Type', 'text_domain' ) . '</label>';
			echo '	<select id="project_type" name="project_type">';
			echo '		<option value="" disabled selected hidden> ' . __( 'Select a type', 'text_domain' ) . '</option>';
			echo '		<option value="album" ' . selected( $project_type, 'album', false ) . '> ' . __( 'Album', 'text_domain' ) . '</option>';
			echo '		<option value="single" ' . selected( $project_type, 'single', false ) . '> ' . __( 'Single', 'text_domain' ) . '</option>';
			echo '		<option value="tour" ' . selected( $project_type, 'tour', false ) . '> ' . __( 'Tour', 'text_domain' ) . '</option>';
			echo '		<option value="event" ' . selected( $project_type, 'event', false ) . '> ' . __( 'Event', 'text_domain' ) . '</option>';
			echo '	</select>';
			echo '</div>';

		}

		public function edit_screen_fields( $term, $taxonomy ) {

			// Retrieve an existing value from the database.
			$project_type = get_term_meta( $term->term_id, 'project_type', true );

			// Set default values.
			if ( empty( $project_type ) ) {
				$project_type = '';
			}

			// Form fields.
			echo '<tr class="form-field term-project_type-wrap">';
			echo '<th scope="row">';
			echo '	<label for="project_type">' . __( 'Project Type', 'text_domain' ) . '</label>';
			echo '</th>';
			echo '<td>';
			echo '	<select id="project_type" name="project_type">';
			echo '		<option value="" disabled selected hidden> ' . __( 'Select a type', 'text_domain' ) . '</option>';
			echo '		<option value="album" ' . selected( $project_type, 'album', false ) . '> ' . __( 'Album', 'text_domain' ) . '</option>';
			echo '		<option value="single" ' . selected( $project_type, 'single', false ) . '> ' . __( 'Single', 'text_domain' ) . '</option>';
			echo '		<option value="tour" ' . selected( $project_type, 'tour', false ) . '> ' . __( 'Tour', 'text_domain' ) . '</option>';
			echo '		<option value="event" ' . selected( $project_type, 'event', false ) . '> ' . __( 'Event', 'text_domain' ) . '</option>';
			echo '	</select>';
			echo '</td>';
			echo '</tr>';

		}

		public function save_data( $term_id ) {

			// Sanitize user input.
			$new_project_type = isset( $_POST['project_type'] ) ? $_POST['project_type'] : '';

			// Update the meta field in the database.
			update_term_meta( $term_id, 'project_type', $new_project_type );

		}

	}

	new project_type_meta;

	add_filter( 'manage_edit-artist_project_columns', 'add_project_type_column' );
	function add_project_type_column( $columns ) {
		$columns['project-type'] = 'Project Type';

		return $columns;
	}

	add_action( 'manage_artist_project_custom_column', 'add_project_type_column_content', 10, 3 );
	function add_project_type_column_content( $content, $column_name, $term_id ) {
		global $project_types;
		if ( $column_name !== 'project-type' ) {
			return $content;
		}

		$term_id      = absint( $term_id );
		$project_type = get_term_meta( $term_id, 'project_type', true );

		if ( ! empty( $project_type ) ) {
			$content .= esc_attr( $project_types[ $project_type ] );
		}

		return $content;
	}

	class Project_Year {

		public function __construct() {

			if ( is_admin() ) {

				add_action( 'artist_project_add_form_fields', array( $this, 'create_screen_fields' ), 10, 1 );
				add_action( 'artist_project_edit_form_fields', array( $this, 'edit_screen_fields' ), 10, 2 );

				add_action( 'created_artist_project', array( $this, 'save_data' ), 10, 1 );
				add_action( 'edited_artist_project', array( $this, 'save_data' ), 10, 1 );

			}

		}

		public function create_screen_fields( $taxonomy ) {

			// Set default values.
			$project_yearyear_select = '';

			// Form fields.
			echo '<div class="form-field term-project_yearyear_select-wrap">';
			echo '	<label for="project_yearyear_select">' . __( 'Select ', 'text_domain' ) . '</label>';
			echo '	<select id="project_yearyear_select" name="project_yearyear_select">';
			echo '		<option value="" disabled selected hidden> ' . __( 'Select year', 'text_domain' ) . '</option>';
			echo '		<option value="2022" ' . selected( $project_yearyear_select, '2022', false ) . '> ' . __( '2022', 'text_domain' ) . '</option>';
			echo '		<option value="2021" ' . selected( $project_yearyear_select, '2021', false ) . '> ' . __( '2021', 'text_domain' ) . '</option>';
			echo '		<option value="2020" ' . selected( $project_yearyear_select, '2020', false ) . '> ' . __( '2020', 'text_domain' ) . '</option>';
			echo '		<option value="2019" ' . selected( $project_yearyear_select, '2019', false ) . '> ' . __( '2019', 'text_domain' ) . '</option>';
			echo '		<option value="2018" ' . selected( $project_yearyear_select, '2018', false ) . '> ' . __( '2018', 'text_domain' ) . '</option>';
			echo '		<option value="2017" ' . selected( $project_yearyear_select, '2017', false ) . '> ' . __( '2017', 'text_domain' ) . '</option>';
			echo '	</select>';
			echo '	<p class="description">' . __( 'Choose the year the project began', 'text_domain' ) . '</p>';
			echo '</div>';

		}

		public function edit_screen_fields( $term, $taxonomy ) {

			// Retrieve an existing value from the database.
			$project_yearyear_select = get_term_meta( $term->term_id, 'project_yearyear_select', true );

			// Set default values.
			if ( empty( $project_yearyear_select ) ) {
				$project_yearyear_select = '';
			}

			// Form fields.
			echo '<tr class="form-field term-project_yearyear_select-wrap">';
			echo '<th scope="row">';
			echo '	<label for="project_yearyear_select">' . __( 'Select Project Year', 'text_domain' ) . '</label>';
			echo '</th>';
			echo '<td>';
			echo '	<select id="project_yearyear_select" name="project_yearyear_select">';
			echo '		<option value="" disabled selected hidden> ' . __( 'Select year', 'text_domain' ) . '</option>';
			echo '		<option value="2022" ' . selected( $project_yearyear_select, '2022', false ) . '> ' . __( '2022', 'text_domain' ) . '</option>';
			echo '		<option value="2021" ' . selected( $project_yearyear_select, '2021', false ) . '> ' . __( '2021', 'text_domain' ) . '</option>';
			echo '		<option value="2020" ' . selected( $project_yearyear_select, '2020', false ) . '> ' . __( '2020', 'text_domain' ) . '</option>';
			echo '		<option value="2019" ' . selected( $project_yearyear_select, '2019', false ) . '> ' . __( '2019', 'text_domain' ) . '</option>';
			echo '		<option value="2018" ' . selected( $project_yearyear_select, '2018', false ) . '> ' . __( '2018', 'text_domain' ) . '</option>';
			echo '		<option value="2017" ' . selected( $project_yearyear_select, '2017', false ) . '> ' . __( '2017', 'text_domain' ) . '</option>';
			echo '	</select>';
			echo '	<p class="description">' . __( 'Choose the year the project began', 'text_domain' ) . '</p>';
			echo '</td>';
			echo '</tr>';

		}

		public function save_data( $term_id ) {

			// Sanitize user input.
			$project_yearnew_year_select = isset( $_POST['project_yearyear_select'] ) ? $_POST['project_yearyear_select'] : '';

			// Update the meta field in the database.
			update_term_meta( $term_id, 'project_yearyear_select', $project_yearnew_year_select );

		}

	}

	new Project_Year;

?>