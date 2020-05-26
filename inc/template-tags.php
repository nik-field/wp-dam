<?php
	/**
	 * Custom template tags for this theme
	 *
	 * Eventually, some of the functionality here could be replaced by core features.
	 *
	 * @package DAM_-_Digital_Asset_Manager
	 */

	require_once( ABSPATH . 'wp-admin/includes/media.php' );

	if ( ! function_exists( 'wp_dam_posted_on' ) ) :
		/**
		 * Prints HTML with meta information for the current post-date/time.
		 */
		function wp_dam_posted_on() {
			$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
			if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
				$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
			}

			$time_string = sprintf( $time_string,
				esc_attr( get_the_date( DATE_W3C ) ),
				esc_html( get_the_date() ),
				esc_attr( get_the_modified_date( DATE_W3C ) ),
				esc_html( get_the_modified_date() )
			);

			$posted_on = sprintf(
			/* translators: %s: post date. */
				esc_html_x( 'Posted on %s', 'post date', 'wp-dam' ),
				'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
			);

			echo '<span class="posted-on">' . $posted_on . '</span>'; // WPCS: XSS OK.

		}
	endif;

	if ( ! function_exists( 'wp_dam_posted_by' ) ) :
		/**
		 * Prints HTML with meta information for the current author.
		 */
		function wp_dam_posted_by() {
			$byline = sprintf(
			/* translators: %s: post author. */
				esc_html_x( 'by %s', 'post author', 'wp-dam' ),
				'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
			);

			echo '<span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.

		}
	endif;

	if ( ! function_exists( 'wp_dam_entry_footer' ) ) :
		/**
		 * Prints HTML with meta information for the categories, tags and comments.
		 */
		function wp_dam_entry_footer() {
			// Hide category and tag text for pages.
			if ( 'post' === get_post_type() ) {
				/* translators: used between list items, there is a space after the comma */
				$categories_list = get_the_category_list( esc_html__( ', ', 'wp-dam' ) );
				if ( $categories_list ) {
					/* translators: 1: list of categories. */
					printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'wp-dam' ) . '</span>', $categories_list ); // WPCS: XSS OK.
				}

				/* translators: used between list items, there is a space after the comma */
				$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'list item separator', 'wp-dam' ) );
				if ( $tags_list ) {
					/* translators: 1: list of tags. */
					printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'wp-dam' ) . '</span>', $tags_list ); // WPCS: XSS OK.
				}
			}

			if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
				echo '<span class="comments-link">';
				comments_popup_link(
					sprintf(
						wp_kses(
						/* translators: %s: post title */
							__( 'Leave a Comment<span class="screen-reader-text"> on %s</span>', 'wp-dam' ),
							array(
								'span' => array(
									'class' => array(),
								),
							)
						),
						get_the_title()
					)
				);
				echo '</span>';
			}

			edit_post_link(
				sprintf(
					wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
						__( 'Edit <span class="screen-reader-text">%s</span>', 'wp-dam' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					get_the_title()
				),
				'<span class="edit-link">',
				'</span>'
			);
		}
	endif;

	if ( ! function_exists( 'wp_dam_post_thumbnail' ) ) :
		/**
		 * Displays an optional post thumbnail.
		 *
		 * Wraps the post thumbnail in an anchor element on index views, or a div
		 * element when on single views.
		 */
		function wp_dam_post_thumbnail() {
			if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
				return;
			}

			if ( is_singular() ) :
				?>

                <div class="post-thumbnail">
					<?php the_post_thumbnail(); ?>
                </div><!-- .post-thumbnail -->

			<?php else : ?>

                <a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
					<?php
						the_post_thumbnail( 'post-thumbnail', array(
							'alt' => the_title_attribute( array(
								'echo' => false,
							) ),
						) );
					?>
                </a>

			<?php
			endif; // End is_singular().
		}
	endif;

	if ( ! function_exists( 'wp_dam_added_on' ) ) :
		/**
		 * Prints HTML with meta information for the current post-date/time.
		 */
		function wp_dam_added_on( $with_dom = true ) {
			$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
			// if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			// 	$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
			// }

			$time_string = sprintf( $time_string,
				esc_attr( get_the_date( 'M j, Y' ) ),
				esc_html( get_the_date( 'M j, Y' ) ),
				esc_attr( get_the_modified_date( 'M j, Y' ) ),
				esc_html( get_the_modified_date( 'M j, Y' ) )
			);

			$added_on = sprintf(
			/* translators: %s: post date. */
				esc_html_x( 'added on %s', 'post date', 'wp-dam' ),
				$time_string
			);
			if ( $with_dom ) {
				echo '<span class="added-on">' . $added_on . '</span>'; // WPCS: XSS OK.
			}

			return get_the_date( 'M j, Y' );
		}
	endif;

	function asset_has_file( $post = null ) {
		$asset_id = get_the_id();
		$has_file = (bool) get_post_meta( $asset_id, 'add_asset_file' );

		/**
		 * Filters whether a post has a post thumbnail.
		 *
		 * @param bool $has_file true if the asset has a file, otherwise false.
		 * @param int|WP_Post|null $post Post ID or WP_Post object. Default is global `$post`.
		 * @param int|string $thumbnail_id Post thumbnail ID or empty string.
		 *
		 * @since 5.1.0
		 *
		 */
		return (bool) apply_filters( 'asset_has_file', $has_file, $post, $asset_id );
	}

	/** TODO: add all filters for asset format */
	function asset_is_audio( $post = null ) {
		$asset_id = get_the_id();
		$is_audio = false;
		if ( get_asset_format() == 'format_audio' ) {
			$is_audio = true;
		}

		/**
		 * Filters whether a post has a post thumbnail.
		 *
		 * @param bool $has_file true if the asset has a file, otherwise false.
		 * @param int|WP_Post|null $post Post ID or WP_Post object. Default is global `$post`.
		 * @param int|string $thumbnail_id Post thumbnail ID or empty string.
		 *
		 * @since 5.1.0
		 *
		 */
		return (bool) apply_filters( 'asset_is_audio', $is_audio, $post, $asset_id );
	}

	function asset_is_image( $post = null ) {
		$asset_id = get_the_id();
		$is_image = false;

		if ( get_asset_format() == 'format_image' ) {
			$is_image = true;
		}

		/**
		 * Filters whether a post has a post thumbnail.
		 *
		 * @param bool $has_file true if the asset has a file, otherwise false.
		 * @param int|WP_Post|null $post Post ID or WP_Post object. Default is global `$post`.
		 * @param int|string $thumbnail_id Post thumbnail ID or empty string.
		 *
		 * @since 5.1.0
		 *
		 */
		return (bool) apply_filters( 'asset_is_image', $is_image, $post, $asset_id );
	}

	if ( ! function_exists( 'wp_dam_asset_thumbnail' ) ) :
		/**
		 * Displays an optional post thumbnail.
		 *
		 * Wraps the post thumbnail in an anchor element on index views, or a div
		 * element when on single views.
		 */

		function wp_dam_asset_thumbnail() {
			if ( post_password_required() || is_attachment() || ! asset_has_file() ) {
				return;
			}

			switch ( get_asset_format() ) {
				case 'format_image':
					return get_the_post_thumbnail_url( get_the_ID(), 'medium' );
					break;

				case 'format_audio':
					return 'library_music';
					break;

				case 'format_audio-zip':
					return 'queue_music';
					break;

				case 'format_document':
					return wp_get_attachment_image_src( get_asset_attachment_id(), 'full' )[0];
					break;

				case 'format_link':
					return 'link';
					break;

				case 'format_video':
					$url       = get_asset_url();
					$thumb_url = get_video_thumb_url( $url );

					return $thumb_url;
					break;

			}

		}
	endif;

	function comma_tags( $tags, $show_links = true ) {
		if ( $tags ) {
			$t = array();
			foreach ( $tags as $tag ) {
				$t[] = ( ! $show_links ) ? $tag->name : '<a href="' . get_tag_link( $tag->term_id ) . '">' . $tag->name . '</a>';
			}

			return implode( ", ", $t );
		} else {
			$false = "None specified";

			return $false;
		}
	}

	function get_asset_file_type( $style = 'ext' ) {
		if ( get_asset_format() == 'format_image' ) {
			$file[0] = get_the_post_thumbnail_url();
		} else {
			$file = get_post_meta( get_the_id(), 'add_asset_file' );
		}
		$file_type_check = wp_check_filetype( $file[0] );
		$mime            = $file_type_check['type'];
		$ext             = pathinfo( $file[0], PATHINFO_EXTENSION );

		if ( ! $ext && ! $mime ) {
			return 'No file attached';
		}

		if ( $style === 'mime' ) {
			return $mime;
		} elseif ( $style != 'ext' ) {
			return "wrong param: either 'mime' or blank";
		}

		return $ext;
	}

	function get_asset_artist() {
		$args   = array(
			'taxonomy'   => 'artist_project',
			'object_ids' => get_the_id(),
			'hide_empty' => false,
			'parent'     => 0,

		);
		$artist = get_terms( $args );
		if ( ! $artist ) {
			return 'None specified';
		}


		return $artist[0]->name;
	}

	function get_asset_project() {
		$args    = array(
			'taxonomy'   => 'artist_project',
			'object_ids' => get_the_id(),
			'hide_empty' => false,
			'childless'  => true,

		);
		$project = get_terms( $args );
		if ( ! $project || $project[0]->name === get_asset_artist() ) {
			return 'None specified';
		}

		return $project[0]->name;
	}

	function get_asset_creator() {
		$creator = get_post_meta( get_the_id(), 'add_asset_creator' );;
		if ( ! $creator[0] ) {
			return "None specified";
		}

		return $creator[0];
	}

	function get_asset_url( $slug_only = false ) {
		if ( get_asset_format() == 'format_image' ) {
			$url = wp_get_original_image_url( get_post_thumbnail_id() );
			if ( ! $url ) {
				return 'No image added';
			}
			$filename = basename( $url );
			if ( ! $slug_only ) {
				return $url;
			}

			return $filename;
		} elseif ( get_asset_format() === 'format_link' ) {
			$url = get_post_meta( get_the_id(), 'add_asset_link' )[0];
		} else {
			$url = get_post_meta( get_the_id(), 'add_asset_file' )[0];
		}

		if ( ! $url ) {
			return 'No file added';
		}
		$filename = basename( $url );
		if ( ! $slug_only ) {
			return $url;
		}

		return $filename;
	}

	function get_asset_tags_list() {
		$tagsList = comma_tags( get_the_tags(), false );
		if ( ! $tagsList ) {
			return 'None specified';
		}

		return $tagsList;
	}

	function get_asset_file_meta( string $key ) {
		$attachments = get_attached_media( '' );

		$attachment = reset( $attachments );
		if ( isset( $attachment->ID ) ) {
			$metadata = wp_get_attachment_metadata( $attachment->ID );
		}
		if ( ! $attachments || ! isset( $metadata[ $key ] ) ) {
			return 'No file attached';
		}

		return $metadata[ $key ];
	}

	function get_asset_attachment_id() {
//	    if (get_asset_format() == 'format_video') {
//	    	$asset_id = get_the_id();
//		    $attachment = get_post_meta( $asset_id, 'add_asset_file' );
//		    print_r(get_post());
//		    return $attachment->ID;
//        }
		$attachments = get_attached_media( '' );
		$attachment  = reset( $attachments );

		return $attachment->ID;
	}

function get_asset_file_size() {
		if ( get_attached_media( '' ) && ! get_the_post_thumbnail_url() ) {
			if ( get_asset_format() !== 'format_audio' && get_asset_format() !== 'format_image' && get_asset_format() !== 'format_document' ) {
				$attachments = get_attached_media( '' );
				$attachment  = reset( $attachments );
				$filesize = wp_get_attachment_metadata( $attachment->ID )['filesize'];

				$readout  = size_format( $filesize );
			}
			if ( get_asset_format() == 'format_audio' ) {
				$attachments = get_attached_media( '' );
				$attachment  = reset( $attachments );
				$metadata    = wp_get_attachment_metadata( $attachment->ID );

				$readout     = size_format( $metadata['filesize'] );
			}
			if (get_asset_format() == 'format_document') {
				$attachments = get_attached_media( '' );
				$attachment  = reset( $attachments );
			    $attached_file = get_attached_file($attachment->ID);
				$bytes = filesize( $attached_file );

				$readout = size_format( $bytes );
            }
		} else if ( get_the_post_thumbnail() ) {
			$imgID         = get_post_thumbnail_id();
			$attached_file = get_attached_file( $imgID );
			$bytes         = filesize( $attached_file );

			$readout       = size_format( $bytes );
		} else {
			$readout = 'No file attached';
		}

		return $readout;
	}

	function get_asset_image_res( $style = 'dimensions' ) {
		if ( get_asset_format() !== 'format_image' || get_asset_file_type() === 'svg' ) {
			return null;
		}
		//$image_data = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );
		//$dimensions = array( 'width' => $image_data[1], 'height' => $image_data[2] );
		$image_data = getimagesize( wp_get_original_image_path( get_post_thumbnail_id() ) );
		$dimensions = array( 'width' => $image_data[0], 'height' => $image_data[1] );
		$res        = 0;
		if ( $style === 'res' ) {
			return $res;
		} elseif ( $style != 'dimensions' ) {
			return "wrong param: either 'dimensions' or 'res'";
		}

		return join( "x", $dimensions );
	}

	if ( ! function_exists( 'get_asset_file_info' ) ) :
		/**
		 * Displays an optional post thumbnail.
		 *
		 * Wraps the post thumbnail in an anchor element on index views, or a div
		 * element when on single views.
		 */
		function get_asset_file_info() {
			if ( post_password_required() || is_attachment() || ! asset_has_file() ) {
				return;
			}

			?>
            <i class="asset-file-info__item"><span class="asset-file-info__item--label">Artist:</span>
                <span class="asset-file-info--typography">
				<?php
					print get_asset_artist();
				?>
				</span>
            </i>
            <i class="asset-file-info__item"><span class="asset-file-info__item--label">Project:</span>
                <span class="asset-file-info--typography">
				<?php
					print get_asset_project();
				?>
				</span>
            </i>
            <i class="asset-file-info__item"><span class="asset-file-info__item--label">Creator:</span>
                <span class="asset-file-info--typography">
				<?php
					print get_asset_creator();
				?>
				</span>
            </i>
            <i class="asset-file-info__item"><span class="asset-file-info__item--label">File Type:</span>
                <span class="asset-file-info--typography">
				<?php
					print get_asset_file_type();
				?>
				</span>
            </i>
            <i class="asset-file-info__item"><span class="asset-file-info__item--label">File Size:</span>
                <span class="asset-file-info--typography">
				<?php
					print get_asset_file_size();
				?>
				</span>
            </i>
			<?php if ( get_asset_format() == 'format_image' && get_asset_file_type() !== 'svg' ) : ?>
                <i class="asset-file-info__item"><span class="asset-file-info__item--label">Dimensions:</span>
                    <span class="asset-file-info--typography">
				<?php
					print get_asset_image_res();
				?>
				</span>
                </i>
			<?php endif; ?>
            <i class="asset-file-info__item"><span class="asset-file-info__item--label">Tags:</span>
                <span class="asset-file-info--typography">
				<?php
					print get_asset_tags_list();
				?>
				</span>
            </i>
			<?php
			if ( get_asset_format() == 'format_audio' || get_asset_format() == 'format_video' && get_asset_file_type() !== 'format_zip' ) : ?>
                <i class="asset-file-info__item"><span class="asset-file-info__item--label">Duration:</span>
                    <span class="asset-file-info--typography">
				<?php
					print get_asset_file_meta( 'length_formatted' );
				?>
				</span>
                </i>
			<?php endif; ?>


			<?php

		}
	endif;


