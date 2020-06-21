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
                    <form id="frontend_add_asset_form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" autocomplete="off">


                        <div class="add-asset-title-input mdc-text-field mdc-text-field--re mdc-text-field--fullwidth mdc-ripple">
                            <input name="asset_title" class="mdc-text-field__input" id="text-field-hero-input" required>
                            <div class="mdc-line-ripple title-line-ripple"></div>
                            <label for="text-field-hero-input" class="mdc-floating-label title-floating-label">Add Title</label>
                        </div>

                        <div class="add-asset__format mdc-form-field">
                            <?php
                            $formats = get_terms('format', 'hide_empty=0');
                            //							wp_nonce_field( 'taxonomy_format', 'taxonomy_format_nonce' );

                            foreach ($formats as $format) {
                            ?>

                                <div class="mdc-radio">
                                    <input required aria-required="true" class="mdc-radio__native-control dam-add-asset__format-input" type="radio" id="<?php echo $format->slug; ?>" name="format" value="<?php echo $format->slug; ?>">
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
                        <div class="add-asset__main">
                            <div style="display:none" class="add-asset__preview"><img class="add-asset__preview-image" src=""></div>
                            <input id="upload_file" name="upload_file">
                            <button id="upload_button" type="button" class="mdc-button mdc-button--raised button-primary"><span class="mdc-button__label">Add File</span></button>

                        </div>
                        <div id="add-asset__sidebar">
                            <!-- NEW ARTIST TEXT FIELD -->
                            <div id="add-asset__new-artist--container" style="display:none;">
                                <label class="mdc-text-field mdc-text-field--filled mdc-text-field--full-width add-asset__new-artist--field">
                                    <span class="mdc-text-field__ripple"></span>
                                    <input name="new-artist-name" type="text" class="mdc-text-field__input add-asset__new-artist--input" aria-controls="cancel-new-artist" aria-describedby="cancel-new-artist" aria-labelledby="add-new-artist--label">
                                    <span class="mdc-floating-label" id="add-new-artist--label">New Artist</span>
                                    <span class="mdc-line-ripple"></span>
                                </label>
                                <a class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent add-asset__cancel-artist--helper-text" id="cancel-new-artist" aria-hidden="true">Cancel New Artist</a>
                            </div>
                            <!-- ARTIST SELECT -->
                            <div class="mdc-select mdc-select--outlined mdc-select--required add-asset__category--artist">
                                <div class="mdc-select__anchor">
                                    <i class="mdc-select__dropdown-icon"></i>
                                    <div type="text" id="add-asset_category--artist-selected" readonly class="mdc-select__selected-text" aria-controls="add-new-artist" aria-describedby="add-new-artist"></div>
                                    <input style="display:none" aria-required="true" id="add-asset__category--artist-input" name="artist_id" required>
                                    <span class="mdc-notched-outline">
                                        <span class="mdc-notched-outline__leading"></span>
                                        <span class="mdc-notched-outline__notch">
                                            <label id="outlined-select-label" class="mdc-floating-label">Select Artist</label>
                                        </span>
                                        <span class="mdc-notched-outline__trailing"></span>
                                    </span>
                                </div>
                                <a id="add-new-artist" class="mdc-select-helper-text mdc-select-helper-text--persistent add-asset__new-artist--helper-text">Add New Artist</a>


                                <div class="mdc-select__menu add-asset__category--artist-select mdc-menu mdc-menu-surface">
                                    <ul class="mdc-list">
                                        <li class="mdc-list-item mdc-list-item--selected mdc-list-item--disabled" aria-selected="true" role="option" data-value="" style="display: none;"></li>
                                        <?php
                                        $artists_terms = get_artist_terms();
                                        foreach ($artists_terms as $artist_term) {
                                            $artist_name = $artist_term->name;
                                            $artist_page = get_term_link($artist_term);
                                        ?>
                                            <li class="mdc-list-item" data-value="<?php echo $artist_term->term_id; ?>">
                                                <span class="mdc-list-item__text">
                                                    <?php echo $artist_term->name; ?>
                                                </span>
                                            </li>
                                        <?php
                                            //End foreach
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                            <!-- NEW PROJECT TEXT FIELD -->
                            <div id="add-asset__new-project--container" style="display:none;">
                                <label class="mdc-text-field mdc-text-field--filled mdc-text-field--full-width add-asset__new-project--field">
                                    <span class="mdc-text-field__ripple"></span>
                                    <input name="new-project-name" type="text" class="mdc-text-field__input add-asset__new-project--input" aria-controls="cancel-new-project" aria-describedby="cancel-new-project" aria-labelledby="add-new-project--label">
                                    <span class="mdc-floating-label" id="add-new-project--label">New Project</span>
                                    <span class="mdc-line-ripple"></span>
                                </label>

                                <!-- NEW PROJECT YEAR -->
                                <div class="mdc-select add-asset__new-project--year">
                                    <div class="mdc-select__anchor demo-width-class">
                                        <span class="mdc-select__ripple"></span>
                                        <div type="text" class="mdc-select__selected-text"></div>
                                        <i class="mdc-select__dropdown-icon"></i>
                                        <span class="mdc-line-ripple"></span>
                                    </div>

                                    <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class ">
                                        <ul class="mdc-list">
                                            <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
                                            <li class="mdc-list-item" data-value="grains">
                                                <span class="mdc-list-item__text">
                                                    Bread, Cereal, Rice, and Pasta
                                                </span>
                                            </li>
                                            <li class="mdc-list-item" data-value="vegetables">
                                                <span class="mdc-list-item__text">
                                                    Vegetables
                                                </span>
                                            </li>
                                            <li class="mdc-list-item" data-value="fruit">
                                                <span class="mdc-list-item__text">
                                                    Fruit
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- NEW PROJECT TYPE -->
                                <div class="mdc-select add-asset__new-project--type">
                                    <div class="mdc-select__anchor demo-width-class">
                                        <span class="mdc-select__ripple"></span>
                                        <div type="text" class="mdc-select__selected-text"></div>
                                        <i class="mdc-select__dropdown-icon"></i>
                                        <span class="mdc-line-ripple"></span>
                                    </div>

                                    <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class ">
                                        <ul class="mdc-list">
                                            <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
                                            <li class="mdc-list-item" data-value="grains">
                                                <span class="mdc-list-item__text">
                                                    Bread, Cereal, Rice, and Pasta
                                                </span>
                                            </li>
                                            <li class="mdc-list-item" data-value="vegetables">
                                                <span class="mdc-list-item__text">
                                                    Vegetables
                                                </span>
                                            </li>
                                            <li class="mdc-list-item" data-value="fruit">
                                                <span class="mdc-list-item__text">
                                                    Fruit
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent add-asset__cancel-project--helper-text" id="cancel-new-project" aria-hidden="true">Cancel New Project</a>
                            </div>

                            <!-- PROJECT SELECT -->
                            <div class="mdc-select mdc-select--outlined mdc-select--disabled add-asset__category--project">
                                <div class="mdc-select__anchor" ariaaria-labelledby="outlined-select-label">
                                    <i class="mdc-select__dropdown-icon"></i>
                                    <div id="add-asset_category--project-selected" aria-disabled="true" class="mdc-select__selected-text" aria-controls="add-new-project" aria-describedby="add-new-project"></div>
                                    <input id="cat_project_id" type="hidden" name="project_id" value="">
                                    <span class="mdc-notched-outline">
                                        <span class="mdc-notched-outline__leading"></span>
                                        <span class="mdc-notched-outline__notch">
                                            <label id="outlined-select-label" class="mdc-floating-label">Select Project</label>
                                        </span>
                                        <span class="mdc-notched-outline__trailing"></span>
                                    </span>
                                </div>
                                <a id="add-new-project" class="mdc-select-helper-text mdc-select-helper-text--persistent add-asset__new-project--helper-text">Add New Project</a>

                                <div class="mdc-select__menu add-asset__category--project-select mdc-menu mdc-menu-surface">
                                    <ul id="project_select_list" class="mdc-list">
                                        <li class="mdc-list-item mdc-list-item--selected " aria-selected="true" role="option" data-value="" style="display: none;"></li>
                                        <?php
                                        $projects = get_projects();
                                        foreach ($projects as $project) {
                                            $project_name = $project->name;

                                        ?>
                                            <li class="mdc-list-item" parent="<?php echo $project->parent ?>" data-value="<?php echo $project->slug; ?>">
                                                <span class="mdc-list-item__text">
                                                    <?php echo $project->name; ?>
                                                </span>
                                            </li>
                                        <?php
                                            //End foreach
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <input type="hidden" name="action" value="frontend_add_asset">
                    </form>
                </div>
            </section>
            <footer class="mdc-dialog__actions">
                <button id="add-asset_reset-form" type="reset" form="frontend_add_asset_form" class="mdc-button mdc-dialog__button mdc-ripple" data-mdc-dialog-action="reset"><span class="mdc-button__ripple"></span>Cancel</button>
                <button id="add-asset__save-button" type="submit" form="frontend_add_asset_form" class="mdc-button mdc-dialog__button mdc-dialog__button--default mdc-ripple" data-mdc-dialog-action="save" disabled><span class="mdc-button__ripple"></span>SAVE</button>
            </footer>
        </div>
    </div>
</div>
<!-- <script type="text/javascript">
    addLoadEvent = function(func) {
        if (typeof jQuery != "undefined") jQuery(document).ready(func);
        else if (typeof wpOnload != 'function') {
            wpOnload = func;
        } else {
            var oldonload = wpOnload;
            wpOnload = function() {
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
</script> -->