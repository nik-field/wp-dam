<div id="dam-floating-actions">
    <button class="mdc-fab mdc-ripple dam-add-asset__button" aria-label="Add New Asset">
        <div class="mdc-fab__ripple"></div>
        <span class="mdc-fab__icon material-icons">add</span>
    </button>
</div>

<div class="dam-add-asset-dialog mdc-dialog">
    <div class="mdc-dialog__scrim"></div>
    <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface add-asset-dialog-surface">
            <h2 class="mdc-dialog__title">
                Add New Asset
            </h2>
            <section class="dam-add-asset-dialog_form">
                <div class="mdc-dialog__content">
                    <form id="frontend_add_asset_form" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">

                        <div class="add-asset-title-input mdc-text-field mdc-text-field--fullwidth mdc-ripple">
                            <input name="asset_title" class="mdc-text-field__input" id="text-field-hero-input">
                            <div class="mdc-line-ripple title-line-ripple"></div>
                            <label for="text-field-hero-input" class="mdc-floating-label title-floating-label">Add Title</label>
                        </div>

                        <div class="add-asset__format mdc-form-field">
							<?php
								$formats = get_terms( 'format', 'hide_empty=0' );
								//							wp_nonce_field( 'taxonomy_format', 'taxonomy_format_nonce' );

								foreach ( $formats as $format ) {
									?>

                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control dam-add-asset__format-input" type="radio" id="<?php echo $format->slug; ?>" name="format" value="<?php echo $format->slug; ?>">
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                        <div class="mdc-radio__ripple"></div>
                                    </div>
                                    <label for="<?php echo $format->slug; ?>"><?php echo $format->name; ?></label>

									<?php
								}
							?>

                        </div>
                        <div class="add-asset__artist-project mdc-text-field mdc-text-field--outlined mdc-text-field--no-label">
                            <div class="add-asset__artist-project--container mdc-text-field__input"></div>
                            <div class="mdc-notched-outline mdc-notched-outline--no-label">
                                <div class="mdc-notched-outline__leading"></div>
                                <div class="mdc-notched-outline__trailing"></div>
                            </div>
                        </div>

                        <input type="hidden" name="action" value="frontend_add_asset">
                    </form>
                </div>
            </section>
            <footer class="mdc-dialog__actions">
                <button type="reset" form="frontend_add_asset_form" class="mdc-button mdc-dialog__button mdc-ripple" data-mdc-dialog-action="close"><span class="mdc-button__ripple"></span>Cancel</button>
                <button type="submit" form="frontend_add_asset_form" class="mdc-button mdc-dialog__button mdc-dialog__button--default mdc-ripple" data-mdc-dialog-action="accept"><span class="mdc-button__ripple"></span>SAVE</button>
            </footer>
        </div>
    </div>
</div>
<script type="text/javascript">
    addLoadEvent = function (func) {
        if (typeof jQuery != "undefined") jQuery(document).ready(func); else if (typeof wpOnload != 'function') {
            wpOnload = func;
        } else {
            var oldonload = wpOnload;
            wpOnload = function () {
                oldonload();
                func();
            }
        }
    };
    var ajaxurl = '/wp-admin/admin-ajax.php',
        pagenow = 'asset',
        typenow = 'asset',
        adminpage = 'post-new-php',
        thousandsSeparator = ',',
        decimalPoint = '.',
        isRtl = 0;
</script>