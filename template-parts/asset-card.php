<article id="asset-{{ id }}" asset-id="{{id}}" class="mdc-card large-asset">
	<div class="mdc-card large-asset-card large-asset-basic-with-header">
		<div class="large-asset-card__primary">
			<h2 class="large-asset-card__title mdc-typography mdc-typography--headline4 open-dialog">{{ title }}</h2>
			<div class="entry-meta large-asset-card__subtitle mdc-typography mdc-typography--subtitle2">
				added on {{ displaydate }}
			</div>
		</div>
		<div class="large-asset-card__content">
			{{ if is_image }}
			<div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media open-dialog" style="background-image: url('{{thumbnail}}');"></div>
			{{/if}}
			{{ if is_doc}}
			<div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media open-dialog" style="background-image: url('{{thumbnail}}');"></div>
			{{/if}}
			{{ if is_not_image }}
			<div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media large-asset-card__media--no-img open-dialog"><i class="material-icons large-asset-card__media--icon">{{thumbnail}}</i></div>
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
						{{if is_image}}
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
					</div>
				</div>
				<div class="large-asset-card__actions mdc-card__actions">
					<div class="mdc-card__action-icons large-asset-card__action-bar">
						<div class="large-asset-card__actions-link">
							<div class="large-asset-card__link-copy">
								<i asset-id="{{ id }}" class="access-trigger large-asset-card__link-copy-button mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded copy" data-clipboard-text="{{permalink}}">link</i><input data-clipboard-text="{{permalink}}" asset-id="{{ id }}" class="access-trigger copy" type="text" value="{{permalink}}" readonly></input>
							</div>
							<div asset-id="{{ id }}" class="access-trigger large-asset-card__link-download mdc-button mdc-ripple"><a href="{{permalink}}" download="{{filename}}"><span class="mdc-button__ripple"></span>Download</a></div>

						</div>
						<button class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="More options" data-mdc-ripple-is-unbounded="false">more_vert</button>

					</div>
				</div>
			</div>
		</div>
	</div>

</article>