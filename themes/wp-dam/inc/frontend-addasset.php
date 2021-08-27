<form id="frontend_add_asset_form" onsubmit="(e)=>e.preventDefault();alert('This is just a demo');return false" autocomplete="off">

    <div class="add-asset-title-input mdc-text-field mdc-text-field--fullwidth mdc-ripple">
        <input pattern=".*\S+.*" name="asset_title" class="mdc-text-field__input" id="text-field-hero-input" required>
        <div class="mdc-line-ripple title-line-ripple"></div>
        <label for="text-field-hero-input" class="mdc-floating-label title-floating-label">Add
            Title</label>
    </div>

    <div class="add-asset__format mdc-form-field">
        <?php
							$formats = get_terms( 'format', 'hide_empty=0' );


		foreach ( $formats as $format ) {
			$slug = $format->slug;
			$name = $format->name;
			?>
        <div class="add-asset__radio">
            <div class="mdc-radio">
                <input required aria-required="true" class="mdc-radio__native-control dam-add-asset__format-input" type="radio" id="<?php echo esc_html( $slug ); ?>" name="format" value="<?php echo esc_html( $slug ); ?>">
                <div class="mdc-radio__background">
                    <div class="mdc-radio__outer-circle"></div>
                    <div class="mdc-radio__inner-circle"></div>
                </div>
                <div class="mdc-radio__ripple"></div>
            </div>
            <label for="<?php echo esc_html( $slug ); ?>">
                <?php echo esc_html( $name ); ?>
            </label>
        </div>

        <?php
		}
		?>

    </div>
    <div class="add-asset__main">
        <div class="add-asset__file--container">
            <div style="display:none" class="add-asset__preview">
                <div class="add-asset__preview--thumb">
                    <button id="edit_button" type="button" class="mdc-fab">
                        <div class="mdc-fab__ripple"></div>
                        <span class="mdc-fab__icon material-icons">edit</span>
                    </button>
                    <span class="preview-file-name"></span>
                </div>
            </div>
            <input id="upload_url" name="upload_url" required>
            <input id="upload_file_id" name="upload_file_id" required>

            <button id="upload_button" type="button" class="mdc-button mdc-button--raised" disabled><span class="mdc-button__label">Add File</span>
            </button>
            <span id="upload_button_helper-text">Please select a type first (ex. Image, Audio, Video, etc.)</span>

        </div>
        <div style="display:none" class="add-asset__file--meta">
            <div style="display:none" class="add-asset-link-input mdc-text-field mdc-ripple">
                <input name="asset_link" class="mdc-text-field__input" id="text-field-hero-input" type="url" name="url" id="url" placeholder="https://example.com" required>
                <div class="mdc-line-ripple link-line-ripple"></div>
                <label for="text-field-hero-input" class="mdc-floating-label link-floating-label">Link</label>
            </div>
            <div style="display:none" class="add-asset-creator-input mdc-text-field mdc-ripple">
                <input name="asset_creator" class="mdc-text-field__input" id="text-field-hero-input" pattern=".*\S+.*">
                <div class="mdc-line-ripple creator-line-ripple"></div>
                <label for="text-field-hero-input" class="mdc-floating-label creator-floating-label">Creator</label>
            </div>
        </div>


    </div>
    <div id="add-asset__sidebar">
        <!-- NEW ARTIST TEXT FIELD -->
        <div id="add-asset__new-artist--container" style="display:none;">
            <label class="mdc-text-field mdc-text-field--filled mdc-text-field--full-width add-asset__new-artist--field">
                <span class="mdc-text-field__ripple"></span>
                <input pattern=".*\S+.*" name="new-artist-name" type="text" class="mdc-text-field__input add-asset__new-artist--input" aria-controls="cancel-new-artist" aria-describedby="cancel-new-artist" aria-labelledby="add-new-artist--label">
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
                        <label id="outlined-select-label" class="mdc-floating-label">Select
                            Artist</label>
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
            </div>
            <a id="add-new-artist" class="mdc-select-helper-text mdc-select-helper-text--persistent add-asset__new-artist--helper-text">Add
                New Artist</a>


            <div class="mdc-select__menu add-asset__category--artist-select mdc-menu mdc-menu-surface">
                <ul class="mdc-list">
                    <li class="mdc-list-item mdc-list-item--selected mdc-list-item--disabled"
                        aria-selected="true" role="option" data-value="" style="display: none;">
                    </li>
                    <?php
															$artists_terms = get_artist_terms();
					foreach ( $artists_terms as $artist_term ) {
						$artist_name = $artist_term->name;
						$artist_page = get_term_link( $artist_term );
						?>
                    <li class="mdc-list-item" data-value="<?php echo $artist_term->term_id; ?>">
                        <span class="mdc-list-item__text">
                            <?php echo $artist_term->name; ?>
                        </span>
                    </li>
                    <?php
						// End foreach
					}
					?>
                </ul>
            </div>
        </div>
        <!-- NEW PROJECT TEXT FIELD -->
        <div id="add-asset__new-project--container" style="display:none;">
            <label class="mdc-text-field mdc-text-field--filled mdc-text-field--full-width add-asset__new-project--field">
                <span class="mdc-line-ripple"></span>
                <span class="mdc-text-field__ripple"></span>
                <input pattern=".*\S+.*" name="new-project-name" type="text" class="mdc-text-field__input add-asset__new-project--input" aria-controls="cancel-new-project" aria-describedby="cancel-new-project" aria-labelledby="add-new-project--label">
                <span class="mdc-floating-label" id="add-new-project--label">New Project</span>
                <span class="mdc-line-ripple"></span>

            </label>

            <!-- NEW PROJECT YEAR -->
            <div class="mdc-select add-asset__new-project--year">
                <div class="mdc-select__anchor" aria-labelledby="new-project-year-label">
                    <span class="mdc-select__ripple"></span>
                    <i class="mdc-select__dropdown-icon"></i>
                    <div id="add-asset_category--new-project--year" class="mdc-select__selected-text"></div>
                    <input style="display:none" id="new-project-year" name="new-project-year" value="<?php echo gmdate( 'Y' ); ?>">
                    <div id="new-project-year-label" class="mdc-floating-label">Select Year</div>
                    <span class="mdc-line-ripple"></span>

                </div>

                <div class="mdc-select__menu mdc-menu mdc-menu-surface">
                    <ul class="mdc-list">
                        <?php
																$years = range( gmdate( 'Y', strtotime( '+2 years', strtotime( gmdate( 'Y' ) ) ) ), 2000 );
						foreach ( $years as $year ) {
							if ( intval( gmdate( 'Y' ) ) === ( $year ) ) {
								?>
                        <li class="mdc-list-item mdc-list-item--selected " aria-selected="true"
                            data-value="<?php echo $year; ?>">
                            <span class="mdc-list-item__text">
                                <?php echo $year; ?>
                            </span>
                        </li>
                        <?php } else { ?>
                        <li class="mdc-list-item" data-value="<?php echo $year; ?>">
                            <span class="mdc-list-item__text">
                                <?php echo $year; ?>
                            </span>
                        </li>
                        <?php
						}
						}
						?>
                    </ul>
                </div>
            </div>
            <!-- NEW PROJECT TYPE -->
            <div class="mdc-select add-asset__new-project--type">
                <div class="mdc-select__anchor" aria-labelledby="new-project-type-label">
                    <span class="mdc-select__ripple"></span>
                    <i class="mdc-select__dropdown-icon"></i>
                    <div id="add-asset_category--new-project--type" class="mdc-select__selected-text"></div>
                    <input style="display:none" id="new-project-type" name="new-project-type">
                    <div id="new-project-type-label" class="mdc-floating-label">Select Type</div>
                    <span class="mdc-line-ripple"></span>
                </div>

                <div class="mdc-select__menu mdc-menu mdc-menu-surface">
                    <ul class="mdc-list">
                        <li class="mdc-list-item mdc-list-item--selected " aria-selected="true"
                            role="option" data-value="" style="display: none;"></li>
                        <li class="mdc-list-item" data-value="album">
                            <span class="mdc-list-item__text">
                                Album
                            </span>
                        </li>
                        <li class="mdc-list-item" data-value="single">
                            <span class="mdc-list-item__text">
                                Single
                            </span>
                        </li>
                        <li class="mdc-list-item" data-value="tour">
                            <span class="mdc-list-item__text">
                                Tour
                            </span>
                        </li>
                        <li class="mdc-list-item" data-value="event">
                            <span class="mdc-list-item__text">
                                Event
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <a class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent add-asset__cancel-project--helper-text" id="cancel-new-project" aria-hidden="true">Cancel New Project</a>
        </div>

        <!-- PROJECT SELECT -->
        <div class="mdc-select mdc-select--outlined add-asset__category--project">
            <div class="mdc-select__anchor" aria-labelledby="select-project">
                <i class="mdc-select__dropdown-icon"></i>
                <div id="add-asset_category--project-selected" class="mdc-select__selected-text" aria-controls="add-new-project" aria-describedby="add-new-project"></div>
                <input id="cat_project_id" type="hidden" name="project_id" value="">
                <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__notch">
                        <label id="select-project" class="mdc-floating-label">Select Project</label>
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
            </div>
            <a id="add-new-project" class="mdc-select-helper-text mdc-select-helper-text--persistent add-asset__new-project--helper-text">Add
                New Project</a>

            <div class="mdc-select__menu add-asset__category--project-select mdc-menu mdc-menu-surface">
                <ul id="project_select_list" class="mdc-list">
                    <li class="mdc-list-item mdc-list-item--selected " aria-selected="true"
                        role="option" data-value="" style="display: none;"></li>
                    <?php
															$projects = get_projects();
					foreach ( $projects as $project ) {
						$project_name = $project->name;

						?>
                    <li class="mdc-list-item" parent="<?php echo $project->parent; ?>"
                        data-value="<?php echo $project->term_id; ?>">
                        <span class="mdc-list-item__text">
                            <?php echo $project->name; ?>
                        </span>
                    </li>
                    <?php
						// End foreach
					}
					?>
                </ul>
            </div>
        </div>
    </div>
    <?php wp_nonce_field( 'frontend_add_asset', 'frontend_add_asset_nonce' ); ?>
    <input type="hidden" name="action" value="frontend_add_asset">
</form>


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