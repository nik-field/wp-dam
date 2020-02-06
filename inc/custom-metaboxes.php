<?php

	/*
	TODO: Display 'Post Format' dependent metaboxes [https://code.tutsplus.com/tutorials/how-to-display-metaboxes-according-to-the-current-post-format--wp-27970]
	*/

	class AddImage_Meta_Box {
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
					'add-image',
					__( 'Add Image', 'add-image-metabox' ),
					array( $this, 'add_meta_box_callback' ),
					$screen,
					'normal',
					'default'
				);
			}
		}

		/**
		 * Generates the HTML for the meta box
		 *
		 * @param object $post WordPress post object
		 */
		public function add_meta_box_callback( $post ) {
			wp_nonce_field( 'add_image_data', 'add_image_nonce' );
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
                        $('.add-image-metabox-media').click(function (e) {
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
				$db_value = get_post_meta( $post->ID, 'add_image_' . $field['id'], true );
				switch ( $field['type'] ) {
					case 'media':
						$input = sprintf(
							'<input class="regular-text" id="%s" name="%s" type="text" value="%s"> <input class="button add-image-metabox-media" id="%s_button" name="%s_button" type="button" value="Upload" />',
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
			if ( ! isset( $_POST['add_image_nonce'] ) ) {
				return $post_id;
			}

			$nonce = $_POST['add_image_nonce'];
			if ( ! wp_verify_nonce( $nonce, 'add_image_data' ) ) {
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
					update_post_meta( $post_id, 'add_image_' . $field['id'], $_POST[ $field['id'] ] );
				} else if ( $field['type'] === 'checkbox' ) {
					update_post_meta( $post_id, 'add_image_' . $field['id'], '0' );
				}
			}
		}
	}

	new AddImage_Meta_Box;


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

		echo '<input type="hidden" name="taxonomy_noncename" id="taxonomy_noncename" value="' .
		     wp_create_nonce( 'taxonomy_format' ) . '" />';


		// Get all theme taxonomy terms
		$formats = get_terms( 'format', 'hide_empty=0' );

		?>
        <form id='asset_format'>
            <!-- Display formats as options -->
			<?php
				$labels = wp_get_object_terms( $post->ID, 'format' );

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

		if ( ! wp_verify_nonce( $_POST['taxonomy_noncename'], 'taxonomy_format' ) ) {
			return $post_id;
		}

		// verify if this is an auto save routine. If it is our form has not been submitted, so we dont want to do anything
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return $post_id;
		}


		// Check permissions
		if ( 'page' == $_POST['post_type'] ) {
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