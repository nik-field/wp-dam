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
		{{if is_not_pdf}}
		<iframe src="https://view.officeapps.live.com/op/embed.aspx?src={{permalink}}" style="width:500px;min-height:400px;" frameborder="0"></iframe>
		{{/if}}
		{{/if}}
		{{if is_video}}
		<video poster="{{thumbnail}}" controls="" src="{{permalink}}"></video>
		{{/if}}
		{{if is_not_image}}
		<i class="material-icons large-asset-card__media--icon">{{icon}}</i>
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
					</ul>
				</div>
			</div>
		</div>

	</div>
</footer>