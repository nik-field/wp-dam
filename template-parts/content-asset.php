<?php
	/**
	 * Template part for displaying posts
	 *
	 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
	 *
	 * @package DAM_-_Digital_Asset_Manager
	 *
	 * TODO: Implement frontend tagging function [https://wordpress.stackexchange.com/questions/167197/how-to-add-tags-to-post-from-frontend]
	 */

?>
<?php

?>
<!-- CONTENT-ASSET -->

<article asset-id="<?php the_ID(); ?>" id="asset-<?php the_ID(); ?>" <?php post_class( 'mdc-card large-asset' ); ?>>
    <div class="large-asset-card large-asset-basic-with-header">

        <div class="large-asset-card__content">
        <div class="large-asset-card__primary">
			<?php
				the_title( '<h2 class="large-asset-card__title mdc-typography mdc-typography--headline4 open-dialog">', '</h2>' );
			?>
            <div class="entry-meta large-asset-card__subtitle mdc-typography mdc-typography--subtitle2">
				<?php
					wp_dam_added_on();
				?>
            </div>
        </div>

			<?php if ( get_asset_format() == 'format_image' || get_asset_format() == 'format_document' ) : ?>
                <div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media open-dialog" style="background-image: url(<?php echo wp_dam_asset_thumbnail(); ?>);"></div>
			<?php else : ?>
                <div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media large-asset-card__media--no-img open-dialog"><i class="material-icons large-asset-card__media--icon""><?php echo wp_dam_asset_thumbnail(); ?></i></div>
			<?php endif; ?>
            <div class="large-asset-card__secondary mdc-typography mdc-typography--body2">
                <div class="large-asset-card__file-info">
                    <h2>File Info</h2>
                    <div class="large-asset-card-file-info__details">
						<?php get_asset_file_info(); ?>
                    </div>
                </div>
                <div class="large-asset-card__actions mdc-card__actions">
                    <div class="mdc-card__action-icons large-asset-card__action-bar">
                        <div class="large-asset-card__actions-link">
                            <div class="large-asset-card__link-copy">
	                            <?php $fileLink = get_asset_url(); ?>
	                            <i asset-id="<?php the_ID(); ?>" class="access-trigger large-asset-card__link-copy-button mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded copy" data-clipboard-text="<?php echo $fileLink; ?>">link</i><input data-clipboard-text="<?php echo $fileLink; ?>" asset-id="<?php the_ID(); ?>" class="access-trigger copy" type="text" value="<?php echo $fileLink; ?>" readonly></input>
                            </div>
                            <div asset-id="<?php the_ID(); ?>" class="access-trigger large-asset-card__link-download mdc-button mdc-ripple"><a href="<?php echo $fileLink; ?>" download><span class="mdc-button__ripple"></span> Download</a></div>

                        </div>
                        <button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="More options" data-mdc-ripple-is-unbounded="false">more_vert</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</article>
<!-- CONTENT-ASSET END -->
