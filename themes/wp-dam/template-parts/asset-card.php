<article id="asset-{{ id }}" asset-id="{{id}}" class="mdc-card large-asset" <?php if ( is_user_logged_in() ) :
	?>data-asset-json="{{json_data}}" <?php endif; ?>>

	<div class="large-asset-card large-asset-basic-with-header">
		<div class="large-asset-card__content">
			<div class="large-asset-card__primary">
				{{if is_link }}<a href="{{permalink}}">{{/if}}
					<h2 class="large-asset-card__title mdc-typography mdc-typography--headline4 {{if is_not_link}}open-dialog{{/if}}">{{ title }}</h2>{{if is_link }}
				</a>{{/if}}
				<?php if ( is_user_logged_in() ) { ?>
				<div class="mdc-form-field">
					<div class="mdc-touch-target-wrapper">
						<div class="mdc-checkbox mdc-checkbox--touch group-asset__checkbox">
							<input form="group-asset-form" value="{{id}}" type="checkbox" class="mdc-checkbox__native-control group-asset__checkbox-input" id="checkbox-{{id}}" />
							<div class="mdc-checkbox__background">
								<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
									<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
								</svg>
								<div class="mdc-checkbox__mixedmark"></div>
							</div>
							<div class="mdc-checkbox__ripple"></div>
						</div>
					</div>
				</div>
				<?php } ?>
			</div>
			{{ if is_not_link}}
			<div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media open-dialog" style="{{if thumbnail}}background-image: url('{{thumbnail}}');{{/if}}"><i class="material-icons large-asset-card__media--icon {{if thumbnail}}light-media-icon{{/if}}">{{icon}}</i></div>
			{{ /if }}
			{{if is_link}}
			<a href="{{permalink}}" style="display:grid">
				<div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media"><i class="material-icons large-asset-card__media--icon">{{icon}}</i></div>
			</a>
			{{/if}}

			<div class="large-asset-card__secondary mdc-typography mdc-typography--body2">
				<div class="large-asset-card__file-info">
					<h2>File Info</h2>
					<div class="large-asset-card-file-info__details">
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">Artist:</span>
							<span class="asset-file-info--typography"> {{ artist }} </span>
						</i>
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">Project:</span>
							<span class="asset-file-info--typography">{{ project }}
							</span>
						</i>
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">Creator:</span>
							<span class="asset-file-info--typography">
								{{creator}}
							</span>
						</i>
						{{if is_not_link}}
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">File Type:</span>
							<span class="asset-file-info--typography">
								{{filetype}}
							</span>
						</i>
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">File Size:</span>
							<span class="asset-file-info--typography">
								{{filesize}}
							</span>
						</i>
						{{/if}}
						{{if is_image}} {{if dimensions}}
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">Dimensions:</span>
							<span class="asset-file-info--typography">
								{{dimensions}}
							</span>
						</i>{{/if}}{{/if}}
						{{if is_video}}
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">Dimensions:</span>
							<span class="asset-file-info--typography">
								{{dimensions}}
							</span>
						</i>{{/if}}
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">Tags:</span>
							<span class="asset-file-info--typography">
								{{tags}}
							</span>
						</i>
						{{if duration}}
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">Duration:</span>
							<span class="asset-file-info--typography">
								{{duration}}
							</span>
						</i>
						{{/if}}
						<i class="asset-file-info__item"><span class="asset-file-info__item--label">Added:</span>
							<span class="asset-file-info--typography">
								{{displaydate}}
							</span>
						</i>
					</div>
				</div>
				<div class="large-asset-card__actions mdc-card__actions">
					<div class="mdc-card__action-icons large-asset-card__action-bar">
						<div class="large-asset-card__actions-link">
							<div class="large-asset-card__link-copy">
								<i asset-id="{{ id }}" class="access-trigger large-asset-card__link-copy-button mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded copy" data-clipboard-text="{{title}}: <?php echo get_site_url() . '/download/'; ?>{{id}}">link</i><input data-clipboard-text="<?php echo get_site_url() . '/download/'; ?>{{id}}" asset-id="{{ id }}" class="access-trigger copy" type="text" value="<?php echo get_site_url() . '/download/'; ?>{{id}}"
									   readonly></input>
							</div>
							<div asset-id="{{ id }}" class="access-trigger large-asset-card__link-download mdc-button mdc-ripple"><a href="<?php echo get_site_url() . '/download/'; ?>{{id}}"><span class="mdc-button__ripple"></span>{{if is_not_link}}Download{{/if}} {{if is_link}}Go to link{{/if}}</a></div>

						</div>


						<div class="card-menu-container">

							<div class="mdc-menu-surface--anchor">
								<button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded mdc-menu-toggle" title="More options" data-mdc-ripple-is-unbounded="false">more_vert</button>
								<div class="mdc-menu mdc-menu-surface mdc-card-menu mdc-card-menu-surface" data-toggle="collapse" tabindex="-1" style="transform-origin: center bottom 0px; left: 0px; bottom: 0px; max-height: 900.8px;">
									<ul class="mdc-list" role="menu" aria-hidden="true">
										{{if is_image }}
										<a href="{{display_size}}" class="mdc-list-item mdc-ripple" role="menuitem" tabindex="-1">Get web resolution</a>
										<li class="mdc-list-divider" role="separator"></li>
										{{/if}}
										<a href="mailto:?subject={{title}}&body={{permalink}}" class="mdc-list-item mdc-ripple" role="menuitem" tabindex="-1">Send in email</a>
										<?php if ( is_user_logged_in() && current_user_can( 'edit_posts' ) ) : ?>
										<a class="dam-edit-asset__button mdc-list-item mdc-ripple" role="menuitem" tabindex="-1">Edit Details</a>
										<?php endif; ?>
									</ul>
								</div>
							</div>
						</div>


					</div>
				</div>
			</div>
		</div>
	</div>

</article>