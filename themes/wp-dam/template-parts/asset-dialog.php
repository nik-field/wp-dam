<h2 class="mdc-dialog__title">
	{{title}}
</h2>
<div class="mdc-dialog__content">
	<div class="mdc-dialog__content--image">
		{{if is_image}}
		<img src="{{display_size}}">
		{{/if}}
		{{if is_doc}}
		<img src="{{thumbnail}}">
		{{/if}}
		{{if is_video}}
		<video controls="" src="{{permalink}}"></video>
		{{/if}}
		{{if is_not_image}}
		<i class="material-icons large-asset-card__media--icon">{{thumbnail}}</i>
		{{/if}}
		{{if is_audio}}
		<audio controls="" src="{{permalink}}"></audio>
		{{/if}}
	</div>
</div>
<footer class="mdc-dialog__actions">
	<div class="mdc-card__action-icons large-asset-card__action-bar">
		<div class="large-asset-card__actions-link">
			<div class="large-asset-card__link-copy">
				<i asset-id="{{ id }}" class="dialog-access-trigger large-asset-card__link-copy-button mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded copy" data-clipboard-text="<?php echo get_site_url() . '/download/'; ?>{{id}}">link</i><input data-clipboard-text="<?php echo get_site_url() . '/download/'; ?>{{id}}" asset-id="{{ id }}" class="dialog-access-trigger copy" type="text" value="<?php echo get_site_url() . '/download/'; ?>{{id}}" readonly></input>
			</div>
			<div asset-id="{{ id }}" class="dialog-access-trigger large-asset-card__link-download mdc-button mdc-ripple"><a href="<?php echo get_site_url() . '/download/'; ?>{{id}}"><span class="mdc-button__ripple"></span>Download</a></div>

		</div>
		<div class="dialog-menu-container">

			<div class="mdc-menu-surface--anchor">
				<button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded mdc-menu-toggle" title="More options" data-mdc-ripple-is-unbounded="false">more_vert</button>
				<div class="mdc-menu mdc-menu-surface mdc-dialog-menu mdc-dialog-menu-surface" data-toggle="collapse" tabindex="-1" style="transform-origin: center bottom 0px; left: 0px; bottom: 0px; max-height: 900.8px;">
					<ul class="mdc-list" role="menu" aria-hidden="true">
						{{if is_image }}
						<a href="{{display_size}}" class="mdc-list-item mdc-ripple mdc-card-menu-item" role="menuitem" tabindex="-1">Get web resolution</a>
						<li class="mdc-list-divider" role="separator"></li>
						{{/if}}
						<a href="mailto:?subject={{title}}&body={{permalink}}" class="mdc-list-item mdc-ripple mdc-card-menu-item" role="menuitem" tabindex="-1">Send in email</a>
						<?php if ( is_user_logged_in() && current_user_can( 'edit_posts' ) ) : ?>
						<a href="<?php echo get_site_url(); ?>/wp-admin/post.php?post={{id}}&action=edit" class="mdc-list-item mdc-ripple" role="menuitem" tabindex="-1">Edit Details</a>
						<?php endif; ?>
					</ul>
				</div>
			</div>
		</div>

	</div>
</footer>
