<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DAM_-_Digital_Asset_Manager
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class('mdc-theme--background mdc-typography'); ?>>
    <div id="page" class="site">
        <div class="page-container">
            <header id="masthead" class="site-header mdc-top-app-bar--prominent mdc-elevation--z4 mdc-layout-grid">
                <div class="mdc-top-app-bar__row mdc-layout-grid__inner">
                    <div style="position: absolute;right: 0;" class="login-link mdc-layout-grid__cell--span-12"><a href="<?php echo wp_login_url(get_home_url()); ?>"><span>Login</span></a></div>
                    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-middle">
                        <section class="site-branding mdc-top-app-bar__section mdc-layout-grid__inner">
                            <span class="site-title mdc-typography--headline3 mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><a href="<?php echo get_home_url(); ?>">
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
                                        <rect class="a" height="11" width="11" transform="translate(22) rotate(90)" />
                                        <rect class="a" height="11" width="11" transform="translate(33 11) rotate(90)" />
                                        <rect class="a" height="11" width="11" transform="translate(22 22) rotate(90)" />
                                        <rect class="a" height="11" width="11" transform="translate(11 11) rotate(90)" />
                                        <rect class="b" height="11" width="11" />
                                        <rect class="b" height="11" width="11" transform="translate(22)" />
                                        <rect class="b" height="11" width="11" transform="translate(22 22)" />
                                        <rect class="b" height="11" width="11" transform="translate(0 22)" />
                                    </svg>
                                    <?php bloginfo('name'); ?></a>
                            </span>
                            <?php
                            $wp_dam_description = get_bloginfo('description', 'display');
                            if ($wp_dam_description || is_customize_preview()) :
                            ?>
                                <span class="site-description mdc-layout-grid__cell mdc-layout-grid__cell--span-12"><?php echo $wp_dam_description; /* WPCS: xss ok. */ ?></span>
                            <?php endif; ?>
                        </section><!-- .site-branding -->
                    </div>


                    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                        <div class="mdc-layout-grid__inner">
                            <section class="dam-search-bar mdc-layout-grid__cell mdc-layout-grid__cell--span-12">

                                <!-- regular textfield <div class="dam-search-input mdc-text-field mdc-text-field--with-leading-icon">
								<i class="material-icons mdc-text-field__icon">search</i>
								<input class="mdc-text-field__input" id="text-field-hero-input">
								<div class="mdc-line-ripple"></div>
								<label for="text-field-hero-input" class="mdc-floating-label">Search for an asset</label>
							</div> -->
                                <div id="asset-search" class="dam-search-input mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon mdc-text-field--with-trailing-icon">
                                    <i class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">search</i>
                                    <i class="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">
                                        <div class="loading-spinner">
                                            <div class="search-spinner">
                                                <!-- Each div contains a spoke of the spinner -->
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </i>
                                    <form id="assetSearch" name="searchBox">
                                        <input class="mdc-text-field__input" id="text-field-hero-input">
                                        <input type="submit" hidden />
                                    </form>
                                    <div class="mdc-notched-outline">
                                        <div class="mdc-notched-outline__leading"></div>
                                        <div class="mdc-notched-outline__notch">
                                            <label for="text-field-hero-input" class="mdc-floating-label search-floating-label">Search for an asset</label>
                                        </div>
                                        <div class="mdc-notched-outline__trailing"></div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>

                    <!--<div>
		<nav id="site-navigation" class="main-navigation">
			<button class="menu-toggle foo-button mdc-button mdc-button--raised" aria-controls="primary-menu" aria-expanded="false"><div class="mdc-button__ripple"></div><div class="mdc-button__label"><?php esc_html_e('Primary Menu', 'wp-dam'); ?></div></button>
			<?php
            wp_nav_menu(array(
                'theme_location' => 'menu-1',
                'menu_id'        => 'primary-menu',
            ));
            ?>
		</nav> 
		</div>#site-navigation -->
                </div>
            </header><!-- #masthead -->

            <div id="content" class="site-content">