<?php
	/**
	 * The template for displaying the footer
	 *
	 * Contains the closing of the #content div and all content after.
	 *
	 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
	 *
	 * @package DAM_-_Digital_Asset_Manager
	 */

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
        <div class="site-footer-title mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-middle">
            <section class="site-branding mdc-layout-grid__inner">
					<span class="site-title mdc-typography--headline3 mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
					<svg height="33" viewBox="0 0 33 33" width="33" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <style>
                                .a {
                                    fill: rgba(255, 219, 88, .6)
                                }

                                .b {
                                    fill: #ffdb58
                                }
                            </style>
                        </defs>
                        <rect class="a" height="11" width="11" transform="translate(22) rotate(90)"/>
                        <rect class="a" height="11" width="11" transform="translate(33 11) rotate(90)"/>
                        <rect class="a" height="11" width="11" transform="translate(22 22) rotate(90)"/>
                        <rect class="a" height="11" width="11" transform="translate(11 11) rotate(90)"/>
                        <rect class="b" height="11" width="11"/>
                        <rect class="b" height="11" width="11" transform="translate(22)"/>
                        <rect class="b" height="11" width="11" transform="translate(22 22)"/>
                        <rect class="b" height="11" width="11" transform="translate(0 22)"/>
                    </svg>
						dam
					</span>
                <span class="site-description mdc-layout-grid__cell mdc-layout-grid__cell--span-12">DIGITAL ASSET MANAGER</span>
            </section><!-- .site-branding -->
        </div>
        <nav class="footer-nav mdc-menu mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <div class="footer-nav-links">
                <button class="footer-nav-link-item mdc-button mdc-button__ripple"><a class="mdc-typography--button" href="mailto:nik@ordinaryartistservices.com">Built by Ordinary Artist Services</a>
                </button>
            </div>
    </div>
    </nav>
    <!-- .site-info -->
    </div>
</footer><!-- #colophon --></div><!-- .page-container --></div><!-- #page -->
<div class="mdc-dialog">
    <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface asset-dialog-surface">
        </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
</div>
<?php wp_footer(); ?>
<script id="tpl-lg-card" type="text/html">
	<?php require get_template_directory() . '/template-parts/asset-card.php'; ?>
</script>

<script id="tpl-dialog" type="text/html">
	<?php require get_template_directory() . '/template-parts/asset-dialog.php'; ?>
</script>
</body></html>
