<?php

	/*
	TODO: Display 'Post Format' dependent metaboxes [https://code.tutsplus.com/tutorials/how-to-display-metaboxes-according-to-the-current-post-format--wp-27970]
	*/

	class AddAsset_Meta_Box {
		private $screens = array(
			'Asset',
		);
		private $fields = array(
			array(
				'id'    => 'file',
				'label' => 'File',
				'type'  => 'media',
			),
			array(
				'id'    => 'link',
				'label' => 'Link',
				'type'  => 'url',
			),
			array(
				'id'      => 'creator',
				'label'   => 'Creator',
				'type'    => 'text',
				'options' => array(
					'Mat Williams',
					'Mat Dunlap',
					'Nik Field'
				),
			),
		);

		/**
		 * Class construct method. Adds actions to their respective WordPress hooks.
		 */
		public function __construct() {
			add_action( 'add_meta_boxes', array( $this, 'add_meta_boxes' ) );
			add_action( 'admin_footer', array( $this, 'admin_footer' ) );
			add_action( 'save_post', array( $this, 'save_post' ) );
		}

		/**
		 * Hooks into WordPress' add_meta_boxes function.
		 * Goes through screens (post types) and adds the meta box.
		 */
		public function add_meta_boxes() {
			foreach ( $this->screens as $screen ) {
				add_meta_box(
					'add-asset',
					__( 'Add Asset', 'add-asset-metabox' ),
					array( $this, 'add_meta_box_callback' ),
					$screen,
					'normal',
					'low'
				);
			}
		}

		/**
		 * Generates the HTML for the meta box
		 *
		 * @param object $post WordPress post object
		 */
		public function add_meta_box_callback( $post ) {
			wp_nonce_field( 'add_asset_data', 'add_asset_nonce' );
			$this->generate_fields( $post );
		}

		/**
		 * Hooks into WordPress' admin_footer function.
		 * Adds scripts for media uploader.
		 */
		public function admin_footer() {
			?>
            <script>
                // https://codestag.com/how-to-use-wordpress-3-5-media-uploader-in-theme-options/
                jQuery(document).ready(function ($) {
                    if (typeof wp.media !== 'undefined') {
                        var _custom_media = true,
                            _orig_send_attachment = wp.media.editor.send.attachment;
                        $('.add-asset-metabox-media').click(function (e) {
                            var send_attachment_bkp = wp.media.editor.send.attachment;
                            var button = $(this);
                            var id = button.attr('id').replace('_button', '');
                            _custom_media = true;
                            wp.media.editor.send.attachment = function (props, attachment) {
                                if (_custom_media) {
                                    $("#" + id).val(attachment.url);
                                } else {
                                    return _orig_send_attachment.apply(this, [props, attachment]);
                                }
                                ;
                            }
                            wp.media.editor.open(button);
                            return false;
                        });
                        $('.add_media').on('click', function () {
                            _custom_media = false;
                        });
                    }
                });
            </script><?php
		}

		/**
		 * Generates the field's HTML for the meta box.
		 */
		public function generate_fields( $post ) {
			$output = '';
			foreach ( $this->fields as $field ) {
				$label    = '<label for="' . $field['id'] . '">' . $field['label'] . '</label>';
				$db_value = get_post_meta( $post->ID, 'add_asset_' . $field['id'], true );
				switch ( $field['type'] ) {
					case 'media':
						$input = sprintf(
							'<input class="regular-text" id="%s" name="%s" type="text" value="%s"> <input class="button add-asset-metabox-media" id="%s_button" name="%s_button" type="button" value="Upload" />',
							$field['id'],
							$field['id'],
							$db_value,
							$field['id'],
							$field['id']
						);
						break;
					case 'select':
						$input = sprintf(
							'<select id="%s" name="%s"><option disabled selected value="">Select</option>',
							$field['id'],
							$field['id']
						);
						foreach ( $field['options'] as $key => $value ) {
							$field_value = ! is_numeric( $key ) ? $key : $value;
							$input       .= sprintf(
								'<option %s value="%s">%s</option>',
								$db_value === $field_value ? 'selected' : '',
								$field_value,
								$value
							);
						}
						$input .= '</select>';
						break;
					default:
						$input = sprintf(
							'<input %s id="%s" name="%s" type="%s" value="%s">',
							$field['type'] !== 'color' ? 'class="regular-text"' : '',
							$field['id'],
							$field['id'],
							$field['type'],
							$db_value
						);
				}
				$output .= $this->row_format( $label, $input );
			}
			echo '<table class="form-table"><tbody>' . $output . '</tbody></table>';
		}

		/**
		 * Generates the HTML for table rows.
		 */
		public function row_format( $label, $input ) {
			return sprintf(
				'<tr><th scope="row">%s</th><td>%s</td></tr>',
				$label,
				$input
			);
		}

		/**
		 * Hooks into WordPress' save_post function
		 */
		public function save_post( $post_id ) {
			if ( ! isset( $_POST['add_asset_nonce'] ) ) {
				return $post_id;
			}

			$nonce = $_POST['add_asset_nonce'];
			if ( ! wp_verify_nonce( $nonce, 'add_asset_data' ) ) {
				return $post_id;
			}

			if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
				return $post_id;
			}

			foreach ( $this->fields as $field ) {
				if ( isset( $_POST[ $field['id'] ] ) ) {
					switch ( $field['type'] ) {
						case 'email':
							$_POST[ $field['id'] ] = sanitize_email( $_POST[ $field['id'] ] );
							break;
						case 'text':
							$_POST[ $field['id'] ] = sanitize_text_field( $_POST[ $field['id'] ] );
							break;
					}
					update_post_meta( $post_id, 'add_asset_' . $field['id'], $_POST[ $field['id'] ] );
				} else if ( $field['type'] === 'checkbox' ) {
					update_post_meta( $post_id, 'add_asset_' . $field['id'], '0' );
				}
			}
		}
	}

	new AddAsset_Meta_Box;


	function add_asset_format_box() {
		remove_meta_box( 'tagsdiv-format', 'asset', 'side' );
		add_meta_box( 'asset_format_box_ID', __( 'Format' ), 'print_asset_format_box', 'asset', 'normal', 'high' );
	}

	function add_asset_format_toggle() {

		if ( ! is_admin() ) {
			return;
		}

		add_action( 'admin_menu', 'add_asset_format_box' );
		add_action( 'save_post', 'save_format_data' );
	}

	add_asset_format_toggle();

	// This function gets called in edit-form-advanced.php
	function print_asset_format_box( $post ) {

		echo '<input type="hidden" name="taxonomy_format_nonce" id="taxonomy_format_nonce" value="' .
		     wp_create_nonce( 'taxonomy_format' ) . '" />';


		// Get all theme taxonomy terms
		$formats = get_terms( 'format', 'hide_empty=0' );

		?>
        <form id='asset_format'>
            <!-- Display formats as options -->
			<?php
				$labels = wp_get_object_terms( $post->ID, 'format' );
				wp_nonce_field( 'taxonomy_format', 'taxonomy_format_nonce' );

				foreach ( $formats as $format ) {
					if ( ! is_wp_error( $labels ) && ! empty( $labels ) && ! strcmp( $format->slug, $labels[0]->slug ) ) {
						echo "<input type='radio' name='format' class='format-option' value='" . $format->slug . "' checked>" . $format->name . "</input>\n";
					} else {
						echo "<input type='radio' name='format' class='format-option' value='" . $format->slug . "'>" . $format->name . "</input>\n";
					}
				}
			?>
        </form>
		<?php
	}

	function save_format_data( $post_id ) {
// verify this came from our screen and with proper authorization.

		if ( isset( $_POST['taxonomy_format_nonce'] ) && ! wp_verify_nonce( $_POST['taxonomy_format_nonce'], 'taxonomy_format' ) ) {
			return $post_id;
		}

		// verify if this is an auto save routine. If it is our form has not been submitted, so we dont want to do anything
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return $post_id;
		}


		// Check permissions
		if ( 'page' == $_GET['post_type'] ) {
			if ( ! current_user_can( 'edit_page', $post_id ) ) {
				return $post_id;
			}
		} else {
			if ( ! current_user_can( 'edit_post', $post_id ) ) {
				return $post_id;
			}
		}

		// OK, we're authenticated: we need to find and save the data
		$post = get_post( $post_id );
		if ( ( $post->post_type == 'asset' ) ) {
			// OR $post->post_type != 'revision'
			$format = $_POST['format'];
			wp_set_object_terms( $post_id, $format, 'format' );
		}

		return $format;

	}

	function remove_default_tax_metabox() {
		remove_meta_box( 'artist_projectdiv', 'asset', 'side' );
	}


	add_action( 'add_meta_boxes', 'add_asset_image_metabox' );

	function add_asset_image_metabox() {
		remove_meta_box( 'postimagediv', 'asset', 'side' );
	    add_meta_box( 'assetimagediv', 'Add Image', 'post_thumbnail_meta_box', 'asset', 'normal', 'default' );
	}

//	add_action( 'admin_menu', 'remove_default_tax_metabox' );
//	add_action( 'add_meta_boxes', 'add_asset_categories_meta_box' );
	function add_asset_categories_meta_box() {
		add_meta_box(
			'artist_project_meta_box',
			'Artist/Project',
			'post_asset_categories_meta_box',
			'asset',
			'normal',
			'high'
		);
	}

	function post_asset_categories_meta_box( $post, $box ) {
		$defaults = array( 'taxonomy' => 'artist_project' );
		if ( ! isset( $box['args'] ) || ! is_array( $box['args'] ) ) {
			$args = array();
		} else {
			$args = $box['args'];
		}
		$parsed_args = wp_parse_args( $args, $defaults );
		$tax_name    = esc_attr( $parsed_args['taxonomy'] );
		$taxonomy    = get_taxonomy( $parsed_args['taxonomy'] );
		?>
    <div id="taxonomy-<?php echo $tax_name; ?>" class="categorydiv">
        <ul id="<?php echo $tax_name; ?>-tabs" class="category-tabs">
            <li class="tabs"><a href="#<?php echo $tax_name; ?>-all"><?php echo $taxonomy->labels->all_items; ?></a></li>
            <li class="hide-if-no-js"><a href="#<?php echo $tax_name; ?>-pop"><?php echo esc_html( $taxonomy->labels->most_used ); ?></a></li>
        </ul>

        <div id="<?php echo $tax_name; ?>-pop" class="tabs-panel" style="display: none;">
            <ul id="<?php echo $tax_name; ?>checklist-pop" class="categorychecklist form-no-clear">
				<?php $popular_ids = wp_popular_terms_checklist( $tax_name ); ?>
            </ul>
        </div>

        <div id="<?php echo $tax_name; ?>-all" class="tabs-panel">
			<?php
				$name = ( 'category' === $tax_name ) ? 'post_category' : 'tax_input[' . $tax_name . ']';
				// Allows for an empty term set to be sent. 0 is an invalid term ID and will be ignored by empty() checks.
				echo "<input type='hidden' name='{$name}[]' value='0' />";
			?>
            <ul id="<?php echo $tax_name; ?>checklist" data-wp-lists="list:<?php echo $tax_name; ?>" class="categorychecklist form-no-clear">
				<?php
					wp_terms_checklist(
						$post->ID,
						array(
							'taxonomy'      => $tax_name,
							'popular_cats'  => $popular_ids,
							'checked_ontop' => false,
						)
					);
				?>
            </ul>
        </div>
		<?php if ( current_user_can( $taxonomy->cap->edit_terms ) ) : ?>
            <div id="<?php echo $tax_name; ?>-adder" class="wp-hidden-children">
                <a id="<?php echo $tax_name; ?>-add-toggle" href="#<?php echo $tax_name; ?>-add" class="hide-if-no-js taxonomy-add-new">
					<?php
						/* translators: %s: Add New taxonomy label. */
						printf( __( '+ %s' ), $taxonomy->labels->add_new_item );
					?>
                </a>
                <p id="<?php echo $tax_name; ?>-add" class="category-add wp-hidden-child">

                    <!--                    ADD TAXONOMY META FORM FIELDS-->

                    <div class="form-field term-is_artist_or_project_select_type-wrap">
                        <label for="is_artist_or_project_select_type">Artist or Project</label>
                <p class="description">Are you adding an Artist or a Project?</p>
                <label>
                    <input type="radio" name="is_artist_or_project_select_type" value="is_artist_or_project_artist">
                    Artist
                </label>
                <label>
                    <input type="radio" name="is_artist_or_project_select_type" value="is_artist_or_project_project">
                    Project
                </label>
            </div><br>

            <!--            END – ADD TAXONOMY META FORM FIELDS-->

            <label class="screen-reader-text" for="new<?php echo $tax_name; ?>"><?php echo $taxonomy->labels->add_new_item; ?></label>
            <input type="text" name="new<?php echo $tax_name; ?>" id="new<?php echo $tax_name; ?>" class="form-required form-input-tip" value="<?php echo esc_attr( $taxonomy->labels->new_item_name ); ?>" aria-required="true"/>
            <label class="screen-reader-text" for="new<?php echo $tax_name; ?>_parent">
				<?php echo $taxonomy->labels->parent_item_colon; ?>
            </label>
			<?php
			$parent_dropdown_args = array(
				'taxonomy'         => $tax_name,
				'hide_empty'       => 0,
				'name'             => 'new' . $tax_name . '_parent',
				'orderby'          => 'name',
				'hierarchical'     => 1,
				'show_option_none' => '&mdash; ' . $taxonomy->labels->parent_item . ' &mdash;',
			);

			/**
			 * Filters the arguments for the taxonomy parent dropdown on the Post Edit page.
			 *
			 * @param array $parent_dropdown_args {
			 *     Optional. Array of arguments to generate parent dropdown.
			 *
			 * @type string $taxonomy Name of the taxonomy to retrieve.
			 * @type bool $hide_if_empty True to skip generating markup if no
			 *                                      categories are found. Default 0.
			 * @type string $name Value for the 'name' attribute
			 *                                      of the select element.
			 *                                      Default "new{$tax_name}_parent".
			 * @type string $orderby Which column to use for ordering
			 *                                      terms. Default 'name'.
			 * @type bool|int $hierarchical Whether to traverse the taxonomy
			 *                                      hierarchy. Default 1.
			 * @type string $show_option_none Text to display for the "none" option.
			 *                                      Default "&mdash; {$parent} &mdash;",
			 *                                      where `$parent` is 'parent_item'
			 *                                      taxonomy label.
			 * }
			 * @since 4.4.0
			 *
			 */
			$parent_dropdown_args = apply_filters( 'post_edit_category_parent_dropdown_args', $parent_dropdown_args );

			wp_dropdown_categories( $parent_dropdown_args );
			?>
            <input type="button" id="<?php echo $tax_name; ?>-add-submit" data-wp-lists="add:<?php echo $tax_name; ?>checklist:<?php echo $tax_name; ?>-add" class="button category-add-submit" value="<?php echo esc_attr( $taxonomy->labels->add_new_item ); ?>"/>
			<?php wp_nonce_field( 'add-' . $tax_name, '_ajax_nonce-add-' . $tax_name, false ); ?>
            <span id="<?php echo $tax_name; ?>-ajax-response"></span>
            </p>
            </div>
		<?php endif; ?>
        </div>
		<?php
	}