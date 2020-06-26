<div class="mdc-menu mdc-menu-surface group-asset__menu">
  <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
    <li class="mdc-list-item" role="menuitem">
      <span class="mdc-list-item__text">A Menu Item</span>
    </li>
  </ul>
</div>

<div class="mdc-snackbar">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label">
      No assets selected! Use the checkboxes on asset cards to select them.
    </div>
    <div class="mdc-snackbar__actions">
    <button type="button" class="mdc-button mdc-snackbar__action">
        <span class="mdc-button__label">Show Me</span>
        <div class="mdc-button__ripple"></div>
      </button>
      <button type="button" class="mdc-icon-button mdc-snackbar__dismiss material-icons" aria-label="Dismiss" title="Dismiss">
      <div class="mdc-button__ripple"></div>
        close
      </button>
    </div>
  </div>
</div>
<script>
    var $homeUrl = "<?php echo home_url(); ?>";
</script>