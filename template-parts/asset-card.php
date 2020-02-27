<article id="asset-{{ id }}" asset-id="{{id}}" class="mdc-card large-asset">

    <div class="large-asset-card large-asset-basic-with-header">
        <div class="large-asset-card__content">
            <div class="large-asset-card__primary">
                {{if is_link }}<a href="{{permalink}}">{{/if}}<h2 class="large-asset-card__title mdc-typography mdc-typography--headline4 {{if is_not_link}}open-dialog{{/if}}">{{ title }}</h2>{{if is_link }}</a>{{/if}}
                <div class="entry-meta large-asset-card__subtitle mdc-typography mdc-typography--subtitle2">
                    added on {{ displaydate }}
                </div>
            </div>
            {{ if is_not_link}}
            {{ if is_image }}
            <div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media open-dialog" style="background-image: url('{{thumbnail}}');"></div>
            {{/if}}
            {{ if is_doc}}
            <div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media open-dialog" style="background-image: url('{{thumbnail}}');"></div>
            {{/if}}
            {{ if is_video}}
            <div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media large-asset-card__media--video open-dialog" style="background-image: url({{thumbnail}});"><i class="material-icons large-asset-card__media--icon">videocam</i></div>
            {{/if}}
            {{ if is_not_image }}
            <div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media large-asset-card__media--no-img open-dialog"><i class="material-icons large-asset-card__media--icon">{{thumbnail}}</i></div>
            {{/if}}
            {{/if}}
            {{if is_link}}
            <a href="{{permalink}}">
                <div class="mdc-card__media mdc-card__media--4-3 large-asset-card__media large-asset-card__media--no-img"><i class="material-icons large-asset-card__media--icon">{{thumbnail}}</i></div>
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
                    </div>
                </div>
                <div class="large-asset-card__actions mdc-card__actions">
                    <div class="mdc-card__action-icons large-asset-card__action-bar">
                        <div class="large-asset-card__actions-link">
                            <div class="large-asset-card__link-copy">
                                <i asset-id="{{ id }}" class="access-trigger large-asset-card__link-copy-button mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded copy" data-clipboard-text="{{title}}: <?php echo get_site_url() . '/download/'; ?>{{id}}">link</i><input data-clipboard-text="<?php echo get_site_url() . '/download/'; ?>{{id}}" asset-id="{{ id }}" class="access-trigger copy" type="text" value="<?php echo get_site_url() . '/download/'; ?>{{id}}" readonly></input>
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
                                        <?php if (is_user_logged_in() && current_user_can('edit_posts')) : ?>
                                        <a href="<?php echo get_site_url(); ?>/wp-admin/post.php?post={{id}}&action=edit" class="mdc-list-item mdc-ripple" role="menuitem" tabindex="-1">Edit Details</a>
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