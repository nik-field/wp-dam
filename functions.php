<?php
	/**
	 * DAM - Digital Asset Manager functions and definitions
	 *
	 * @link https://developer.wordpress.org/themes/basics/theme-functions/
	 *
	 * @package DAM_-_Digital_Asset_Manager
	 */

	if ( ! function_exists( 'wp_dam_setup' ) ) :
		/**
		 * Sets up theme defaults and registers support for various WordPress features.
		 *
		 * Note that this function is hooked into the after_setup_theme hook, which
		 * runs before the init hook. The init hook is too late for some features, such
		 * as indicating support for post thumbnails.
		 */
		function wp_dam_setup() {
			/*
			 * Make theme available for translation.
			 * Translations can be filed in the /languages/ directory.
			 * If you're building a theme based on DAM - Digital Asset Manager, use a find and replace
			 * to change 'wp-dam' to the name of your theme in all the template files.
			 */
			load_theme_textdomain( 'wp-dam', get_template_directory() . '/languages' );

			// Add default posts and comments RSS feed links to head.
			add_theme_support( 'automatic-feed-links' );

			/*
			 * Let WordPress manage the document title.
			 * By adding theme support, we declare that this theme does not use a
			 * hard-coded <title> tag in the document head, and expect WordPress to
			 * provide it for us.
			 */
			add_theme_support( 'title-tag' );

			/*
			 * Enable support for Post Thumbnails on posts and pages.
			 *
			 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
			 */
			add_theme_support( 'post-thumbnails' );

			//add_theme_support( 'post-formats', array('link', 'image', 'quote', 'video', 'audio'));

			// This theme uses wp_nav_menu() in one location.
			register_nav_menus( array(
				'menu-1' => esc_html__( 'Primary', 'wp-dam' ),
			) );

			/*
			 * Switch default core markup for search form, comment form, and comments
			 * to output valid HTML5.
			 */
			add_theme_support( 'html5', array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			) );

			// Set up the WordPress core custom background feature.
			add_theme_support( 'custom-background', apply_filters( 'wp_dam_custom_background_args', array(
				'default-color' => 'ffffff',
				'default-image' => '',
			) ) );

			// Add theme support for selective refresh for widgets.
			add_theme_support( 'customize-selective-refresh-widgets' );

			/**
			 * Add support for core custom logo.
			 *
			 * @link https://codex.wordpress.org/Theme_Logo
			 */
			add_theme_support( 'custom-logo', array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			) );
		}
	endif;
	add_action( 'after_setup_theme', 'wp_dam_setup' );

	if ( ! is_super_admin() ) {
		add_action( 'admin_menu', 'notadmin_remove_menus', 999 );
	}
	function notadmin_remove_menus() {
		remove_menu_page( 'edit.php' );
		remove_menu_page( 'edit.php?post_type=page' );
		remove_menu_page( 'edit-comments.php' );
		remove_menu_page( 'themes.php' );
		remove_menu_page( 'plugins.php' );
		remove_menu_page( 'tools.php' );
		remove_menu_page( 'options-general.php' );
	}

	/**
	 * Set the content width in pixels, based on the theme's design and stylesheet.
	 *
	 * Priority 0 to make it available to lower priority callbacks.
	 *
	 * @global int $content_width
	 */
	function wp_dam_content_width() {
		// This variable is intended to be overruled from themes.
		// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
		$GLOBALS['content_width'] = apply_filters( 'wp_dam_content_width', 640 );
	}

	add_action( 'after_setup_theme', 'wp_dam_content_width', 0 );

	/**
	 * Register widget area.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
	 */
	function wp_dam_widgets_init() {
		register_sidebar( array(
			'name'          => esc_html__( 'Sidebar', 'wp-dam' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'wp-dam' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		) );
	}

	add_action( 'widgets_init', 'wp_dam_widgets_init' );

	/**
	 * Enqueue scripts and styles.
	 */
	function wp_dam_scripts() {
		wp_enqueue_style( 'wp-dam-style-info', get_stylesheet_uri() );
		wp_enqueue_style( 'wp-dam-style', get_template_directory_uri() . '/dist/css/style.css', array(), date( "H:i:s" ) );
		wp_enqueue_style( 'wp-dam-fonts', get_template_directory_uri() . '/dist/css/fonts/GothamRounded-Medium.css', array(), date( "H:i:s" ) );
		wp_enqueue_script( 'wp-dam-js', get_template_directory_uri() . '/dist/scripts/script.js', array( 'jquery' ), date( "H:i:s" ), true );

		wp_enqueue_script( 'template-web', get_template_directory_uri() . '/dist/scripts/template-web-min.js', array( 'jquery' ), date( "H:i:s" ), true );
		//wp_enqueue_script( 'asset-search', get_template_directory_uri() . '/dist/scripts/asset-search-min.js', array('jquery', 'wp-dam-js'), date("H:i:s"), true );
		wp_localize_script( 'wp-dam-js', 'ajax_url', admin_url( 'admin-ajax.php' ) );
		wp_localize_script( 'asset-access', 'ajax_url', admin_url( 'admin-ajax.php' ) );
		// CDN // wp_enqueue_script( 'elasticlunr', 'http://elasticlunr.com/elasticlunr.min.js', array(), date( "H:i:s" ), true );
		wp_enqueue_script( 'elasticlunr', get_template_directory_uri() . '/dist/scripts/elasticlunr.min.js', array(), date( "H:i:s" ), true );


		wp_deregister_script( 'jquery' );
		wp_enqueue_script( 'jquery', get_template_directory_uri() . '/dist/scripts/jquery-3.4.1.min.js', array(), date( "H:i:s" ), true );


		wp_enqueue_style( 'material-icons', get_template_directory_uri() . "/dist/assets/fonts/material/material-icons.css", array(), date( "H:i:s" ) );

		wp_enqueue_script( 'wp-dam-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

		wp_enqueue_script( 'wp-dam-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}

	add_action( 'wp_enqueue_scripts', 'wp_dam_scripts' );

	/**
	 * Enqueue scripts in the WordPress admin.
	 *
	 * @param int $hook Hook suffix for the current admin page.
	 */
	function wp_dam_admin_scripts( $hook ) {
		if ( 'edit-tags.php' == $hook && get_current_screen()->taxonomy == 'artist_project' ) {
			wp_enqueue_script( 'admin_customizer_script', get_template_directory_uri() . '/dist/scripts/admin-customizer-min.js', array( 'jquery' ), date( "H:i:s" ), true );
			wp_enqueue_style( 'admin_style', get_template_directory_uri() . '/dist/css/admin.css', array(), date( "H:i:s" ) );
		}
		if ( get_current_screen()->post_type == 'asset' && get_current_screen()->base == 'post' ) {
			wp_enqueue_script( 'admin_post_customizer_script', get_template_directory_uri() . '/dist/scripts/admin-customizer-min.js', array( 'jquery' ), date( "H:i:s" ), true );
			wp_enqueue_style( 'admin_post_style', get_template_directory_uri() . '/dist/css/admin.css', array(), date( "H:i:s" ) );
		}

		return;
	}

	add_action( 'admin_enqueue_scripts', 'wp_dam_admin_scripts' );

	/**
	 * Implement the Custom Header feature.
	 */
	require get_template_directory() . '/inc/custom-header.php';

	/**
	 * Custom template tags for this theme.
	 */
	require get_template_directory() . '/inc/template-tags.php';

	/**
	 * Functions which enhance the theme by hooking into WordPress.
	 */
	require get_template_directory() . '/inc/template-functions.php';

	/**
	 * Customizer additions.
	 */
	require get_template_directory() . '/inc/customizer.php';

	/**
	 * Load Jetpack compatibility file.
	 */
	if ( defined( 'JETPACK__VERSION' ) ) {
		require get_template_directory() . '/inc/jetpack.php';
	}

	add_filter( 'big_image_size_threshold', '__return_false' );

	/**
	 * Set the URL to redirect to on login.
	 *
	 * @return string URL to redirect to on login. Must be absolute.
	 */
	function my_forcelogin_redirect() {
		return home_url( '/' );
	}

	add_filter( 'v_forcelogin_redirect', 'my_forcelogin_redirect' );





