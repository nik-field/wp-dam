-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 29, 2020 at 02:30 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `wp_damwp`
--

-- --------------------------------------------------------

--
-- Table structure for table `wp_commentmeta`
--

CREATE TABLE `wp_commentmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `comment_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_520_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wp_comments`
--

CREATE TABLE `wp_comments` (
  `comment_ID` bigint(20) UNSIGNED NOT NULL,
  `comment_post_ID` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `comment_author` tinytext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `comment_author_email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_author_url` varchar(200) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_author_IP` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_content` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `comment_karma` int(11) NOT NULL DEFAULT '0',
  `comment_approved` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '1',
  `comment_agent` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_type` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wp_links`
--

CREATE TABLE `wp_links` (
  `link_id` bigint(20) UNSIGNED NOT NULL,
  `link_url` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `link_name` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `link_image` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `link_target` varchar(25) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `link_description` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `link_visible` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'Y',
  `link_owner` bigint(20) UNSIGNED NOT NULL DEFAULT '1',
  `link_rating` int(11) NOT NULL DEFAULT '0',
  `link_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `link_rel` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `link_notes` mediumtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `link_rss` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wp_options`
--

CREATE TABLE `wp_options` (
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `option_name` varchar(191) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `option_value` longtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `autoload` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wp_options`
--

INSERT INTO `wp_options` (`option_id`, `option_name`, `option_value`, `autoload`) VALUES
(1, 'siteurl', 'http://dam.local', 'yes'),
(2, 'home', 'http://dam.local', 'yes'),
(3, 'blogname', 'dam', 'yes'),
(4, 'blogdescription', 'DIGITAL ASSET MANAGER', 'yes'),
(5, 'users_can_register', '0', 'yes'),
(6, 'admin_email', 'nik@ordinaryartistservices.com', 'yes'),
(7, 'start_of_week', '1', 'yes'),
(8, 'use_balanceTags', '0', 'yes'),
(9, 'use_smilies', '1', 'yes'),
(10, 'require_name_email', '1', 'yes'),
(11, 'comments_notify', '1', 'yes'),
(12, 'posts_per_rss', '10', 'yes'),
(13, 'rss_use_excerpt', '0', 'yes'),
(14, 'mailserver_url', 'mail.example.com', 'yes'),
(15, 'mailserver_login', 'login@example.com', 'yes'),
(16, 'mailserver_pass', 'password', 'yes'),
(17, 'mailserver_port', '110', 'yes'),
(18, 'default_category', '1', 'yes'),
(19, 'default_comment_status', 'open', 'yes'),
(20, 'default_ping_status', 'open', 'yes'),
(21, 'default_pingback_flag', '0', 'yes'),
(22, 'posts_per_page', '10', 'yes'),
(23, 'date_format', 'F j, Y', 'yes'),
(24, 'time_format', 'g:i a', 'yes'),
(25, 'links_updated_date_format', 'F j, Y g:i a', 'yes'),
(26, 'comment_moderation', '0', 'yes'),
(27, 'moderation_notify', '1', 'yes'),
(28, 'permalink_structure', '/%year%/%monthnum%/%day%/%postname%/', 'yes'),
(29, 'rewrite_rules', 'a:124:{s:8:\"asset/?$\";s:25:\"index.php?post_type=asset\";s:38:\"asset/feed/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?post_type=asset&feed=$matches[1]\";s:33:\"asset/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?post_type=asset&feed=$matches[1]\";s:25:\"asset/page/([0-9]{1,})/?$\";s:43:\"index.php?post_type=asset&paged=$matches[1]\";s:11:\"^wp-json/?$\";s:22:\"index.php?rest_route=/\";s:14:\"^wp-json/(.*)?\";s:33:\"index.php?rest_route=/$matches[1]\";s:21:\"^index.php/wp-json/?$\";s:22:\"index.php?rest_route=/\";s:24:\"^index.php/wp-json/(.*)?\";s:33:\"index.php?rest_route=/$matches[1]\";s:47:\"category/(.+?)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:52:\"index.php?category_name=$matches[1]&feed=$matches[2]\";s:42:\"category/(.+?)/(feed|rdf|rss|rss2|atom)/?$\";s:52:\"index.php?category_name=$matches[1]&feed=$matches[2]\";s:23:\"category/(.+?)/embed/?$\";s:46:\"index.php?category_name=$matches[1]&embed=true\";s:35:\"category/(.+?)/page/?([0-9]{1,})/?$\";s:53:\"index.php?category_name=$matches[1]&paged=$matches[2]\";s:17:\"category/(.+?)/?$\";s:35:\"index.php?category_name=$matches[1]\";s:44:\"tag/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?tag=$matches[1]&feed=$matches[2]\";s:39:\"tag/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?tag=$matches[1]&feed=$matches[2]\";s:20:\"tag/([^/]+)/embed/?$\";s:36:\"index.php?tag=$matches[1]&embed=true\";s:32:\"tag/([^/]+)/page/?([0-9]{1,})/?$\";s:43:\"index.php?tag=$matches[1]&paged=$matches[2]\";s:14:\"tag/([^/]+)/?$\";s:25:\"index.php?tag=$matches[1]\";s:45:\"type/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?post_format=$matches[1]&feed=$matches[2]\";s:40:\"type/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?post_format=$matches[1]&feed=$matches[2]\";s:21:\"type/([^/]+)/embed/?$\";s:44:\"index.php?post_format=$matches[1]&embed=true\";s:33:\"type/([^/]+)/page/?([0-9]{1,})/?$\";s:51:\"index.php?post_format=$matches[1]&paged=$matches[2]\";s:15:\"type/([^/]+)/?$\";s:33:\"index.php?post_format=$matches[1]\";s:40:\"([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:53:\"index.php?artist_project=$matches[1]&feed=$matches[2]\";s:35:\"([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:53:\"index.php?artist_project=$matches[1]&feed=$matches[2]\";s:16:\"([^/]+)/embed/?$\";s:47:\"index.php?artist_project=$matches[1]&embed=true\";s:28:\"([^/]+)/page/?([0-9]{1,})/?$\";s:54:\"index.php?artist_project=$matches[1]&paged=$matches[2]\";s:10:\"([^/]+)/?$\";s:36:\"index.php?artist_project=$matches[1]\";s:47:\"format/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:45:\"index.php?format=$matches[1]&feed=$matches[2]\";s:42:\"format/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:45:\"index.php?format=$matches[1]&feed=$matches[2]\";s:23:\"format/([^/]+)/embed/?$\";s:39:\"index.php?format=$matches[1]&embed=true\";s:35:\"format/([^/]+)/page/?([0-9]{1,})/?$\";s:46:\"index.php?format=$matches[1]&paged=$matches[2]\";s:17:\"format/([^/]+)/?$\";s:28:\"index.php?format=$matches[1]\";s:33:\"asset/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:43:\"asset/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:63:\"asset/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:58:\"asset/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:58:\"asset/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:39:\"asset/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:22:\"asset/([^/]+)/embed/?$\";s:38:\"index.php?asset=$matches[1]&embed=true\";s:26:\"asset/([^/]+)/trackback/?$\";s:32:\"index.php?asset=$matches[1]&tb=1\";s:46:\"asset/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:44:\"index.php?asset=$matches[1]&feed=$matches[2]\";s:41:\"asset/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:44:\"index.php?asset=$matches[1]&feed=$matches[2]\";s:34:\"asset/([^/]+)/page/?([0-9]{1,})/?$\";s:45:\"index.php?asset=$matches[1]&paged=$matches[2]\";s:41:\"asset/([^/]+)/comment-page-([0-9]{1,})/?$\";s:45:\"index.php?asset=$matches[1]&cpage=$matches[2]\";s:30:\"asset/([^/]+)(?:/([0-9]+))?/?$\";s:44:\"index.php?asset=$matches[1]&page=$matches[2]\";s:22:\"asset/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:32:\"asset/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:52:\"asset/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:47:\"asset/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:47:\"asset/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:28:\"asset/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:12:\"robots\\.txt$\";s:18:\"index.php?robots=1\";s:13:\"favicon\\.ico$\";s:19:\"index.php?favicon=1\";s:48:\".*wp-(atom|rdf|rss|rss2|feed|commentsrss2)\\.php$\";s:18:\"index.php?feed=old\";s:20:\".*wp-app\\.php(/.*)?$\";s:19:\"index.php?error=403\";s:18:\".*wp-register.php$\";s:23:\"index.php?register=true\";s:32:\"feed/(feed|rdf|rss|rss2|atom)/?$\";s:27:\"index.php?&feed=$matches[1]\";s:27:\"(feed|rdf|rss|rss2|atom)/?$\";s:27:\"index.php?&feed=$matches[1]\";s:8:\"embed/?$\";s:21:\"index.php?&embed=true\";s:20:\"page/?([0-9]{1,})/?$\";s:28:\"index.php?&paged=$matches[1]\";s:41:\"comments/feed/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?&feed=$matches[1]&withcomments=1\";s:36:\"comments/(feed|rdf|rss|rss2|atom)/?$\";s:42:\"index.php?&feed=$matches[1]&withcomments=1\";s:17:\"comments/embed/?$\";s:21:\"index.php?&embed=true\";s:44:\"search/(.+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:40:\"index.php?s=$matches[1]&feed=$matches[2]\";s:39:\"search/(.+)/(feed|rdf|rss|rss2|atom)/?$\";s:40:\"index.php?s=$matches[1]&feed=$matches[2]\";s:20:\"search/(.+)/embed/?$\";s:34:\"index.php?s=$matches[1]&embed=true\";s:32:\"search/(.+)/page/?([0-9]{1,})/?$\";s:41:\"index.php?s=$matches[1]&paged=$matches[2]\";s:14:\"search/(.+)/?$\";s:23:\"index.php?s=$matches[1]\";s:47:\"author/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?author_name=$matches[1]&feed=$matches[2]\";s:42:\"author/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:50:\"index.php?author_name=$matches[1]&feed=$matches[2]\";s:23:\"author/([^/]+)/embed/?$\";s:44:\"index.php?author_name=$matches[1]&embed=true\";s:35:\"author/([^/]+)/page/?([0-9]{1,})/?$\";s:51:\"index.php?author_name=$matches[1]&paged=$matches[2]\";s:17:\"author/([^/]+)/?$\";s:33:\"index.php?author_name=$matches[1]\";s:69:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:80:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&feed=$matches[4]\";s:64:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/(feed|rdf|rss|rss2|atom)/?$\";s:80:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&feed=$matches[4]\";s:45:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/embed/?$\";s:74:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&embed=true\";s:57:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/page/?([0-9]{1,})/?$\";s:81:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&paged=$matches[4]\";s:39:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/?$\";s:63:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]\";s:56:\"([0-9]{4})/([0-9]{1,2})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:64:\"index.php?year=$matches[1]&monthnum=$matches[2]&feed=$matches[3]\";s:51:\"([0-9]{4})/([0-9]{1,2})/(feed|rdf|rss|rss2|atom)/?$\";s:64:\"index.php?year=$matches[1]&monthnum=$matches[2]&feed=$matches[3]\";s:32:\"([0-9]{4})/([0-9]{1,2})/embed/?$\";s:58:\"index.php?year=$matches[1]&monthnum=$matches[2]&embed=true\";s:44:\"([0-9]{4})/([0-9]{1,2})/page/?([0-9]{1,})/?$\";s:65:\"index.php?year=$matches[1]&monthnum=$matches[2]&paged=$matches[3]\";s:26:\"([0-9]{4})/([0-9]{1,2})/?$\";s:47:\"index.php?year=$matches[1]&monthnum=$matches[2]\";s:43:\"([0-9]{4})/feed/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?year=$matches[1]&feed=$matches[2]\";s:38:\"([0-9]{4})/(feed|rdf|rss|rss2|atom)/?$\";s:43:\"index.php?year=$matches[1]&feed=$matches[2]\";s:19:\"([0-9]{4})/embed/?$\";s:37:\"index.php?year=$matches[1]&embed=true\";s:31:\"([0-9]{4})/page/?([0-9]{1,})/?$\";s:44:\"index.php?year=$matches[1]&paged=$matches[2]\";s:13:\"([0-9]{4})/?$\";s:26:\"index.php?year=$matches[1]\";s:58:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:68:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:88:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:83:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:83:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:64:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:53:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([^/]+)/embed/?$\";s:91:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&name=$matches[4]&embed=true\";s:57:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([^/]+)/trackback/?$\";s:85:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&name=$matches[4]&tb=1\";s:77:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:97:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&name=$matches[4]&feed=$matches[5]\";s:72:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:97:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&name=$matches[4]&feed=$matches[5]\";s:65:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([^/]+)/page/?([0-9]{1,})/?$\";s:98:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&name=$matches[4]&paged=$matches[5]\";s:72:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([^/]+)/comment-page-([0-9]{1,})/?$\";s:98:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&name=$matches[4]&cpage=$matches[5]\";s:61:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/([^/]+)(?:/([0-9]+))?/?$\";s:97:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&name=$matches[4]&page=$matches[5]\";s:47:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:57:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:77:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:72:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:72:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:53:\"[0-9]{4}/[0-9]{1,2}/[0-9]{1,2}/[^/]+/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:64:\"([0-9]{4})/([0-9]{1,2})/([0-9]{1,2})/comment-page-([0-9]{1,})/?$\";s:81:\"index.php?year=$matches[1]&monthnum=$matches[2]&day=$matches[3]&cpage=$matches[4]\";s:51:\"([0-9]{4})/([0-9]{1,2})/comment-page-([0-9]{1,})/?$\";s:65:\"index.php?year=$matches[1]&monthnum=$matches[2]&cpage=$matches[3]\";s:38:\"([0-9]{4})/comment-page-([0-9]{1,})/?$\";s:44:\"index.php?year=$matches[1]&cpage=$matches[2]\";s:27:\".?.+?/attachment/([^/]+)/?$\";s:32:\"index.php?attachment=$matches[1]\";s:37:\".?.+?/attachment/([^/]+)/trackback/?$\";s:37:\"index.php?attachment=$matches[1]&tb=1\";s:57:\".?.+?/attachment/([^/]+)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\".?.+?/attachment/([^/]+)/(feed|rdf|rss|rss2|atom)/?$\";s:49:\"index.php?attachment=$matches[1]&feed=$matches[2]\";s:52:\".?.+?/attachment/([^/]+)/comment-page-([0-9]{1,})/?$\";s:50:\"index.php?attachment=$matches[1]&cpage=$matches[2]\";s:33:\".?.+?/attachment/([^/]+)/embed/?$\";s:43:\"index.php?attachment=$matches[1]&embed=true\";s:16:\"(.?.+?)/embed/?$\";s:41:\"index.php?pagename=$matches[1]&embed=true\";s:20:\"(.?.+?)/trackback/?$\";s:35:\"index.php?pagename=$matches[1]&tb=1\";s:40:\"(.?.+?)/feed/(feed|rdf|rss|rss2|atom)/?$\";s:47:\"index.php?pagename=$matches[1]&feed=$matches[2]\";s:35:\"(.?.+?)/(feed|rdf|rss|rss2|atom)/?$\";s:47:\"index.php?pagename=$matches[1]&feed=$matches[2]\";s:28:\"(.?.+?)/page/?([0-9]{1,})/?$\";s:48:\"index.php?pagename=$matches[1]&paged=$matches[2]\";s:35:\"(.?.+?)/comment-page-([0-9]{1,})/?$\";s:48:\"index.php?pagename=$matches[1]&cpage=$matches[2]\";s:24:\"(.?.+?)(?:/([0-9]+))?/?$\";s:47:\"index.php?pagename=$matches[1]&page=$matches[2]\";}', 'yes'),
(30, 'hack_file', '0', 'yes'),
(31, 'blog_charset', 'UTF-8', 'yes'),
(32, 'moderation_keys', '', 'no'),
(33, 'active_plugins', 'a:2:{i:0;s:21:\"safe-svg/safe-svg.php\";i:1;s:33:\"wp-bulk-delete/wp-bulk-delete.php\";}', 'yes'),
(34, 'category_base', '', 'yes'),
(35, 'ping_sites', 'http://rpc.pingomatic.com/', 'yes'),
(36, 'comment_max_links', '2', 'yes'),
(37, 'gmt_offset', '0', 'yes'),
(38, 'default_email_category', '1', 'yes'),
(39, 'recently_edited', '', 'no'),
(40, 'template', 'wp-dam', 'yes'),
(41, 'stylesheet', 'wp-dam', 'yes'),
(42, 'comment_whitelist', '1', 'yes'),
(43, 'blacklist_keys', '', 'no'),
(44, 'comment_registration', '0', 'yes'),
(45, 'html_type', 'text/html', 'yes'),
(46, 'use_trackback', '0', 'yes'),
(47, 'default_role', 'subscriber', 'yes'),
(48, 'db_version', '47018', 'yes'),
(49, 'uploads_use_yearmonth_folders', '1', 'yes'),
(50, 'upload_path', '', 'yes'),
(51, 'blog_public', '0', 'yes'),
(52, 'default_link_category', '2', 'yes'),
(53, 'show_on_front', 'posts', 'yes'),
(54, 'tag_base', '', 'yes'),
(55, 'show_avatars', '1', 'yes'),
(56, 'avatar_rating', 'G', 'yes'),
(57, 'upload_url_path', '', 'yes'),
(58, 'thumbnail_size_w', '150', 'yes'),
(59, 'thumbnail_size_h', '150', 'yes'),
(60, 'thumbnail_crop', '1', 'yes'),
(61, 'medium_size_w', '300', 'yes'),
(62, 'medium_size_h', '300', 'yes'),
(63, 'avatar_default', 'mystery', 'yes'),
(64, 'large_size_w', '1024', 'yes'),
(65, 'large_size_h', '1024', 'yes'),
(66, 'image_default_link_type', 'none', 'yes'),
(67, 'image_default_size', '', 'yes'),
(68, 'image_default_align', '', 'yes'),
(69, 'close_comments_for_old_posts', '0', 'yes'),
(70, 'close_comments_days_old', '14', 'yes'),
(71, 'thread_comments', '1', 'yes'),
(72, 'thread_comments_depth', '5', 'yes'),
(73, 'page_comments', '0', 'yes'),
(74, 'comments_per_page', '50', 'yes'),
(75, 'default_comments_page', 'newest', 'yes'),
(76, 'comment_order', 'asc', 'yes'),
(77, 'sticky_posts', 'a:0:{}', 'yes'),
(78, 'widget_categories', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(79, 'widget_text', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(80, 'widget_rss', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(81, 'uninstall_plugins', 'a:1:{s:25:\"loginpress/loginpress.php\";a:2:{i:0;s:10:\"LoginPress\";i:1;s:21:\"plugin_uninstallation\";}}', 'no'),
(82, 'timezone_string', '', 'yes'),
(83, 'page_for_posts', '0', 'yes'),
(84, 'page_on_front', '0', 'yes'),
(85, 'default_post_format', '0', 'yes'),
(86, 'link_manager_enabled', '0', 'yes'),
(87, 'finished_splitting_shared_terms', '1', 'yes'),
(88, 'site_icon', '0', 'yes'),
(89, 'medium_large_size_w', '768', 'yes'),
(90, 'medium_large_size_h', '0', 'yes'),
(91, 'wp_page_for_privacy_policy', '3', 'yes'),
(92, 'show_comments_cookies_opt_in', '1', 'yes'),
(93, 'admin_email_lifespan', '1591560854', 'yes'),
(94, 'initial_db_version', '45805', 'yes'),
(95, 'wp_user_roles', 'a:5:{s:13:\"administrator\";a:2:{s:4:\"name\";s:13:\"Administrator\";s:12:\"capabilities\";a:61:{s:13:\"switch_themes\";b:1;s:11:\"edit_themes\";b:1;s:16:\"activate_plugins\";b:1;s:12:\"edit_plugins\";b:1;s:10:\"edit_users\";b:1;s:10:\"edit_files\";b:1;s:14:\"manage_options\";b:1;s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:6:\"import\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:8:\"level_10\";b:1;s:7:\"level_9\";b:1;s:7:\"level_8\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;s:12:\"delete_users\";b:1;s:12:\"create_users\";b:1;s:17:\"unfiltered_upload\";b:1;s:14:\"edit_dashboard\";b:1;s:14:\"update_plugins\";b:1;s:14:\"delete_plugins\";b:1;s:15:\"install_plugins\";b:1;s:13:\"update_themes\";b:1;s:14:\"install_themes\";b:1;s:11:\"update_core\";b:1;s:10:\"list_users\";b:1;s:12:\"remove_users\";b:1;s:13:\"promote_users\";b:1;s:18:\"edit_theme_options\";b:1;s:13:\"delete_themes\";b:1;s:6:\"export\";b:1;}}s:6:\"editor\";a:2:{s:4:\"name\";s:6:\"Editor\";s:12:\"capabilities\";a:34:{s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;}}s:6:\"author\";a:2:{s:4:\"name\";s:6:\"Author\";s:12:\"capabilities\";a:10:{s:12:\"upload_files\";b:1;s:10:\"edit_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;s:22:\"delete_published_posts\";b:1;}}s:11:\"contributor\";a:2:{s:4:\"name\";s:11:\"Contributor\";s:12:\"capabilities\";a:5:{s:10:\"edit_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;}}s:10:\"subscriber\";a:2:{s:4:\"name\";s:10:\"Subscriber\";s:12:\"capabilities\";a:2:{s:4:\"read\";b:1;s:7:\"level_0\";b:1;}}}', 'yes'),
(96, 'fresh_site', '0', 'yes'),
(97, 'widget_search', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(98, 'widget_recent-posts', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(99, 'widget_recent-comments', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(100, 'widget_archives', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(101, 'widget_meta', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(102, 'sidebars_widgets', 'a:0:{}', 'yes'),
(103, 'cron', 'a:5:{i:1590779655;a:1:{s:34:\"wp_privacy_delete_old_export_files\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"hourly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:3600;}}}i:1590783255;a:4:{s:17:\"wp_update_plugins\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:16:\"wp_update_themes\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:16:\"wp_version_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:32:\"recovery_mode_clean_expired_keys\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1590783280;a:3:{s:19:\"wp_scheduled_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:25:\"delete_expired_transients\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:30:\"wp_scheduled_auto_draft_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1591010941;a:1:{s:30:\"wp_site_health_scheduled_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"weekly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:604800;}}}s:7:\"version\";i:2;}', 'yes'),
(104, 'widget_pages', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(105, 'widget_calendar', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(106, 'widget_media_audio', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(107, 'widget_media_image', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(108, 'widget_media_gallery', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(109, 'widget_media_video', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(110, 'widget_tag_cloud', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(111, 'widget_nav_menu', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(112, 'widget_custom_html', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(114, 'recovery_keys', 'a:0:{}', 'yes'),
(121, 'theme_mods_twentytwenty', 'a:2:{s:18:\"custom_css_post_id\";i:-1;s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1576087075;s:4:\"data\";a:3:{s:19:\"wp_inactive_widgets\";a:0:{}s:9:\"sidebar-1\";a:3:{i:0;s:8:\"search-2\";i:1;s:14:\"recent-posts-2\";i:2;s:17:\"recent-comments-2\";}s:9:\"sidebar-2\";a:3:{i:0;s:10:\"archives-2\";i:1;s:12:\"categories-2\";i:2;s:6:\"meta-2\";}}}}', 'yes'),
(142, 'recently_activated', 'a:0:{}', 'yes'),
(156, 'theme_mods_wp-dam', 'a:4:{s:18:\"custom_css_post_id\";i:-1;s:16:\"header_textcolor\";s:6:\"000000\";s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1582169369;s:4:\"data\";a:2:{s:19:\"wp_inactive_widgets\";a:0:{}s:9:\"sidebar-1\";a:0:{}}}s:18:\"nav_menu_locations\";a:0:{}}', 'yes'),
(157, 'current_theme', 'DAM - Digital Asset Manager', 'yes'),
(158, 'theme_switched', '', 'yes'),
(159, 'theme_switched_via_customizer', '', 'yes'),
(160, 'customize_stashed_theme_mods', 'a:0:{}', 'no'),
(169, 'auto_core_update_notified', 'a:4:{s:4:\"type\";s:7:\"success\";s:5:\"email\";s:30:\"nik@ordinaryartistservices.com\";s:7:\"version\";s:5:\"5.4.1\";s:9:\"timestamp\";i:1590682222;}', 'no'),
(213, 'category_children', 'a:1:{i:2;a:1:{i:0;i:5;}}', 'yes'),
(216, 'artist_children', 'a:0:{}', 'yes'),
(218, 'recovery_mode_email_last_sent', '1585691955', 'yes'),
(225, 'project_children', 'a:0:{}', 'yes'),
(271, 'artist-project_children', 'a:1:{i:15;a:1:{i:0;i:16;}}', 'yes'),
(317, 'widget_filters-widget', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(359, 'WPLANG', '', 'yes'),
(360, 'new_admin_email', 'nik@ordinaryartistservices.com', 'yes'),
(369, 'password_protected_version', '2.2.5', 'yes'),
(370, 'password_protected_status', '0', 'yes'),
(371, 'password_protected_feeds', '0', 'yes'),
(372, 'password_protected_rest', '0', 'yes'),
(373, 'password_protected_administrators', '1', 'yes'),
(374, 'password_protected_users', '1', 'yes'),
(375, 'password_protected_password', '515a7067292ea575336a9803ba8e0e4f', 'yes'),
(376, 'password_protected_allowed_ip_addresses', '', 'yes'),
(377, 'password_protected_remember_me', '1', 'yes'),
(378, 'password_protected_remember_me_lifetime', '14', 'yes'),
(381, 'loginpress_customization', 'a:26:{s:20:\"setting_logo_display\";b:0;s:12:\"setting_logo\";s:80:\"http://dam.ordinaryartistservices.com/wp-content/uploads/2019/12/dam-logo@3x.png\";s:20:\"customize_logo_width\";i:193;s:21:\"loginpress_display_bg\";b:0;s:24:\"setting_background_color\";s:7:\"#48bf91\";s:23:\"setting_form_display_bg\";b:1;s:21:\"form_background_color\";s:7:\"#48bf91\";s:20:\"customize_form_width\";i:404;s:21:\"customize_form_shadow\";i:1;s:21:\"textfield_label_color\";s:7:\"#fcfffe\";s:22:\"customize_form_opacity\";i:1;s:26:\"textfield_background_color\";s:0:\"\";s:19:\"custom_button_color\";s:7:\"#247ba0\";s:21:\"customize_form_height\";i:289;s:22:\"customize_form_padding\";s:3:\"0px\";s:22:\"remember_me_label_size\";s:7:\"#fcfffe\";s:21:\"loginpress_custom_css\";s:0:\"\";s:21:\"customize_form_radius\";i:3;s:24:\"login_copy_right_display\";b:0;s:20:\"loginpress_show_love\";b:0;s:19:\"footer_display_text\";b:1;s:17:\"back_display_text\";b:0;s:15:\"textfield_width\";i:100;s:16:\"textfield_margin\";s:18:\"2px 100px 18px 0px\";s:21:\"customize_form_border\";s:0:\"\";s:15:\"textfield_color\";s:0:\"\";}', 'yes'),
(382, 'loginpress_setting', 'a:0:{}', 'yes'),
(383, 'loginpress_active_time', '1576870619', 'no'),
(384, 'loginpress_login_redirects', '', 'yes'),
(385, 'loginpress_social_logins', '', 'yes'),
(386, 'loginpress_limit_login_attempts', '', 'yes'),
(387, 'loginpress_autologin', '', 'yes'),
(388, 'loginpress_hidelogin', '', 'yes'),
(389, 'loginpress_premium', '', 'yes'),
(391, '_loginpress_optin', 'no', 'yes'),
(403, 'login_designer_activation_date', '1576874032', 'no'),
(409, 'colorlib-login-customizer_version', '1.2.92', 'yes'),
(410, 'clc-options', 'a:34:{s:13:\"use-text-logo\";b:0;s:10:\"logo-title\";s:13:\"Account Login\";s:15:\"logo-text-color\";s:19:\"rgba(51, 51, 51, 1)\";s:14:\"logo-text-size\";s:2:\"20\";s:11:\"custom-logo\";s:80:\"http://dam.ordinaryartistservices.com/wp-content/uploads/2019/12/dam-logo@3x.png\";s:10:\"logo-width\";i:175;s:11:\"logo-height\";i:95;s:7:\"columns\";s:1:\"1\";s:13:\"columns-width\";a:2:{s:4:\"left\";i:6;s:5:\"right\";i:6;}s:17:\"form-column-align\";s:1:\"3\";s:19:\"form-vertical-align\";s:1:\"2\";s:23:\"custom-background-color\";s:21:\"rgba(72, 191, 145, 1)\";s:10:\"form-width\";i:360;s:11:\"form-height\";i:405;s:21:\"form-background-color\";s:21:\"rgba(72, 191, 145, 1)\";s:12:\"form-padding\";s:10:\"100px 30px\";s:18:\"form-border-radius\";s:1:\"0\";s:11:\"form-shadow\";s:4:\"none\";s:16:\"form-field-width\";s:0:\"\";s:17:\"form-field-margin\";s:1:\"0\";s:17:\"form-field-border\";s:14:\"1px solid #eee\";s:24:\"form-field-border-radius\";s:1:\"0\";s:21:\"form-field-background\";s:22:\"rgba(255, 255, 255, 1)\";s:14:\"username-label\";s:0:\"\";s:14:\"password-label\";s:0:\"\";s:17:\"button-background\";s:21:\"rgba(36, 123, 160, 1)\";s:23:\"button-background-hover\";s:7:\"#008ec2\";s:19:\"button-border-color\";s:7:\"#0073aa\";s:25:\"button-border-color-hover\";s:7:\"#006799\";s:18:\"button-text-shadow\";s:4:\"none\";s:15:\"hide-rememberme\";b:1;s:10:\"custom-css\";s:791:\".ml-form-container .submit input[type=\'submit\'] {width: 100%; box-sizing: border-box;display: inline-block;text-align: center;padding: 0 20px;height: 38px;line-height: 1;font-weight: bold;vertical-align: middle; margin-top: 15px;box-shadow:none;} .ml-form-container input[type=\'text\'], .ml-form-container input[type=\'password\'] { height: 50px; } .login .ml-form-container #backtoblog,.login .ml-form-container #nav{position:absolute;left:0;right:0;margin-right:auto!important;bottom:50px;max-width:100%;text-align:center}.login .ml-form-container #nav{bottom:40px}.ml-form-container #login>h1{position:absolute;top:40px;width:100%;}.login-action-register .ml-form-container #login>h1{top:65px;}.ml-form-container input[type=\'text\'],.ml-form-container input[type=\'password\']{box-shadow:none;}\";s:11:\"form-border\";s:6:\"0 none\";s:13:\"button-shadow\";s:4:\"none\";}', 'yes'),
(445, 'db_upgraded', '', 'yes'),
(519, 'can_compress_scripts', '1', 'no'),
(520, 'loginpress_review_dismiss', 'yes', 'no'),
(675, '_transient_health-check-site-status-result', '{\"good\":9,\"recommended\":7,\"critical\":1}', 'yes'),
(1197, 'kgvid_video_embed_options', 'a:109:{s:12:\"embed_method\";s:8:\"Video.js\";s:13:\"overlay_title\";s:2:\"on\";s:6:\"poster\";s:0:\"\";s:17:\"endofvideooverlay\";s:0:\"\";s:9:\"watermark\";s:0:\"\";s:17:\"watermark_link_to\";s:4:\"home\";s:13:\"watermark_url\";s:0:\"\";s:5:\"align\";s:4:\"left\";s:6:\"resize\";s:2:\"on\";s:8:\"auto_res\";s:9:\"automatic\";s:11:\"pixel_ratio\";s:2:\"on\";s:9:\"fullwidth\";s:2:\"on\";s:5:\"width\";s:3:\"640\";s:6:\"height\";s:3:\"360\";s:12:\"fixed_aspect\";s:8:\"vertical\";s:13:\"gallery_width\";s:3:\"960\";s:13:\"gallery_thumb\";s:3:\"250\";s:20:\"gallery_thumb_aspect\";s:2:\"on\";s:11:\"gallery_end\";s:0:\"\";s:16:\"gallery_per_page\";s:0:\"\";s:13:\"gallery_title\";s:2:\"on\";s:16:\"controlbar_style\";s:6:\"docked\";s:16:\"pauseothervideos\";s:2:\"on\";s:6:\"volume\";s:1:\"1\";s:7:\"preload\";s:8:\"metadata\";s:7:\"js_skin\";s:16:\"kg-video-js-skin\";s:17:\"custom_attributes\";s:0:\"\";s:7:\"bgcolor\";s:0:\"\";s:13:\"configuration\";s:0:\"\";s:4:\"skin\";s:96:\"http://ceol.local:5757/wp-content/plugins/video-embed-thumbnail-generator/flash/skin/kg_skin.xml\";s:11:\"stream_type\";s:14:\"liveOrRecorded\";s:10:\"scale_mode\";s:9:\"letterbox\";s:8:\"autohide\";s:2:\"on\";s:10:\"playbutton\";s:2:\"on\";s:10:\"embeddable\";s:2:\"on\";s:6:\"schema\";s:2:\"on\";s:16:\"twitter_username\";s:0:\"\";s:11:\"right_click\";s:2:\"on\";s:14:\"click_download\";s:2:\"on\";s:11:\"count_views\";s:14:\"start_complete\";s:15:\"generate_thumbs\";s:1:\"4\";s:8:\"featured\";s:2:\"on\";s:12:\"thumb_parent\";s:4:\"post\";s:12:\"capabilities\";a:3:{s:21:\"make_video_thumbnails\";a:3:{s:13:\"administrator\";s:2:\"on\";s:6:\"editor\";s:2:\"on\";s:6:\"author\";s:2:\"on\";}s:13:\"encode_videos\";a:3:{s:13:\"administrator\";s:2:\"on\";s:6:\"editor\";s:2:\"on\";s:6:\"author\";s:2:\"on\";}s:25:\"edit_others_video_encodes\";a:2:{s:13:\"administrator\";s:2:\"on\";s:6:\"editor\";s:2:\"on\";}}s:15:\"delete_children\";s:19:\"encoded videos only\";s:9:\"titlecode\";s:8:\"<strong>\";s:8:\"template\";s:6:\"gentle\";s:8:\"app_path\";s:14:\"/usr/local/bin\";s:9:\"video_app\";s:6:\"ffmpeg\";s:18:\"browser_thumbnails\";s:2:\"on\";s:14:\"replace_format\";s:7:\"fullres\";s:6:\"encode\";a:4:{i:1080;s:2:\"on\";i:720;s:2:\"on\";i:480;s:2:\"on\";s:6:\"mobile\";s:2:\"on\";}s:13:\"custom_format\";a:3:{s:6:\"format\";s:4:\"h264\";s:5:\"width\";s:0:\"\";s:6:\"height\";s:0:\"\";}s:18:\"hide_video_formats\";s:2:\"on\";s:17:\"auto_thumb_number\";s:1:\"1\";s:19:\"auto_thumb_position\";s:2:\"50\";s:11:\"error_email\";s:6:\"nobody\";s:14:\"htaccess_login\";s:0:\"\";s:17:\"htaccess_password\";s:0:\"\";s:22:\"ffmpeg_thumb_watermark\";a:6:{s:3:\"url\";s:0:\"\";s:5:\"scale\";s:2:\"50\";s:5:\"align\";s:6:\"center\";s:1:\"x\";s:1:\"0\";s:6:\"valign\";s:6:\"center\";s:1:\"y\";s:1:\"0\";}s:16:\"ffmpeg_watermark\";a:6:{s:3:\"url\";s:0:\"\";s:5:\"scale\";s:1:\"9\";s:5:\"align\";s:5:\"right\";s:1:\"x\";s:1:\"6\";s:6:\"valign\";s:6:\"bottom\";s:1:\"y\";s:1:\"5\";}s:4:\"moov\";s:4:\"none\";s:9:\"moov_path\";s:14:\"/usr/local/bin\";s:12:\"rate_control\";s:3:\"crf\";s:8:\"h264_CRF\";s:2:\"23\";s:8:\"webm_CRF\";s:2:\"10\";s:7:\"ogv_CRF\";s:1:\"6\";s:18:\"bitrate_multiplier\";s:3:\"0.1\";s:12:\"h264_profile\";s:8:\"baseline\";s:10:\"h264_level\";s:1:\"3\";s:13:\"audio_bitrate\";s:3:\"160\";s:18:\"ffmpeg_auto_rotate\";s:2:\"on\";s:20:\"simultaneous_encodes\";s:1:\"1\";s:7:\"threads\";s:1:\"1\";s:4:\"nice\";s:2:\"on\";s:13:\"sample_format\";s:6:\"mobile\";s:13:\"ffmpeg_exists\";s:2:\"on\";s:7:\"version\";s:6:\"4.6.25\";s:12:\"jw_player_id\";b:0;s:15:\"template_gentle\";b:0;s:18:\"video_bitrate_flag\";b:0;s:11:\"ffmpeg_vpre\";b:0;s:19:\"ffmpeg_old_rotation\";b:0;s:7:\"nostdin\";b:0;s:17:\"overlay_embedcode\";b:0;s:14:\"twitter_button\";b:0;s:15:\"facebook_button\";b:0;s:12:\"downloadlink\";b:0;s:10:\"view_count\";b:0;s:6:\"inline\";b:0;s:13:\"minimum_width\";b:0;s:18:\"gallery_pagination\";b:0;s:22:\"nativecontrolsfortouch\";b:0;s:8:\"autoplay\";b:0;s:4:\"loop\";b:0;s:4:\"mute\";b:0;s:13:\"playback_rate\";b:0;s:21:\"endofvideooverlaysame\";b:0;s:11:\"auto_encode\";b:0;s:15:\"auto_encode_gif\";b:0;s:10:\"auto_thumb\";b:0;s:10:\"open_graph\";b:0;s:12:\"twitter_card\";b:0;s:15:\"oembed_provider\";b:0;s:15:\"oembed_security\";b:0;s:13:\"sample_rotate\";b:0;s:17:\"alwaysloadscripts\";b:0;s:23:\"replace_video_shortcode\";b:0;s:13:\"encode_string\";a:3:{i:1;s:298:\"nice /usr/local/bin/ffmpeg -y -i \"/Users/nikfield/Dev/Sites/_DAM/_DEVSITE/damwp/wp-content/plugins/video-embed-thumbnail-generator/images/sample-video-h264.mp4\" -acodec aac -strict experimental -b:a 160k -s 640x360 -vcodec libx264 -profile:v baseline -pix_fmt yuv420p -level:v 30 -crf 23 -threads 1\";i:2;s:0:\"\";i:3;s:101:\" \"/Users/nikfield/Dev/Sites/_DAM/_DEVSITE/damwp/wp-content/uploads/2020/02/sample-video-h264-360.mp4\"\";}}', 'yes'),
(1288, 'artist_project_children', 'a:4:{i:17;a:3:{i:0;i:18;i:1;i:19;i:2;i:23;}i:34;a:1:{i:0;i:27;}i:21;a:1:{i:0;i:43;}i:22;a:1:{i:0;i:52;}}', 'yes'),
(1413, 'theme_mods_twentyeleven', 'a:4:{i:0;b:0;s:18:\"nav_menu_locations\";a:0:{}s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1582169377;s:4:\"data\";a:6:{s:19:\"wp_inactive_widgets\";a:0:{}s:9:\"sidebar-1\";a:0:{}s:9:\"sidebar-2\";a:0:{}s:9:\"sidebar-3\";a:0:{}s:9:\"sidebar-4\";a:0:{}s:9:\"sidebar-5\";a:0:{}}}s:18:\"custom_css_post_id\";i:-1;}', 'yes'),
(1500, 'acme_cleared_widgets', '1', 'yes'),
(1534, 'rdn_fetch_12516765', 'fetch', 'yes'),
(1736, '_site_transient_update_core', 'O:8:\"stdClass\":4:{s:7:\"updates\";a:1:{i:0;O:8:\"stdClass\":10:{s:8:\"response\";s:6:\"latest\";s:8:\"download\";s:59:\"https://downloads.wordpress.org/release/wordpress-5.4.1.zip\";s:6:\"locale\";s:5:\"en_US\";s:8:\"packages\";O:8:\"stdClass\":5:{s:4:\"full\";s:59:\"https://downloads.wordpress.org/release/wordpress-5.4.1.zip\";s:10:\"no_content\";s:70:\"https://downloads.wordpress.org/release/wordpress-5.4.1-no-content.zip\";s:11:\"new_bundled\";s:71:\"https://downloads.wordpress.org/release/wordpress-5.4.1-new-bundled.zip\";s:7:\"partial\";b:0;s:8:\"rollback\";b:0;}s:7:\"current\";s:5:\"5.4.1\";s:7:\"version\";s:5:\"5.4.1\";s:11:\"php_version\";s:6:\"5.6.20\";s:13:\"mysql_version\";s:3:\"5.0\";s:11:\"new_bundled\";s:3:\"5.3\";s:15:\"partial_version\";s:0:\"\";}}s:12:\"last_checked\";i:1590776830;s:15:\"version_checked\";s:5:\"5.4.1\";s:12:\"translations\";a:0:{}}', 'no'),
(1739, '_site_transient_timeout_php_check_09014c84783552a9b699e7274e96a72d', '1591287023', 'no'),
(1740, '_site_transient_php_check_09014c84783552a9b699e7274e96a72d', 'a:5:{s:19:\"recommended_version\";s:3:\"7.3\";s:15:\"minimum_version\";s:6:\"5.6.20\";s:12:\"is_supported\";b:1;s:9:\"is_secure\";b:1;s:13:\"is_acceptable\";b:1;}', 'no'),
(1742, '_site_transient_timeout_theme_roots', '1590778629', 'no'),
(1743, '_site_transient_theme_roots', 'a:11:{s:12:\"twentyeleven\";s:7:\"/themes\";s:13:\"twentyfifteen\";s:7:\"/themes\";s:14:\"twentyfourteen\";s:7:\"/themes\";s:14:\"twentynineteen\";s:7:\"/themes\";s:15:\"twentyseventeen\";s:7:\"/themes\";s:13:\"twentysixteen\";s:7:\"/themes\";s:9:\"twentyten\";s:7:\"/themes\";s:14:\"twentythirteen\";s:7:\"/themes\";s:12:\"twentytwelve\";s:7:\"/themes\";s:12:\"twentytwenty\";s:7:\"/themes\";s:6:\"wp-dam\";s:7:\"/themes\";}', 'no'),
(1745, '_site_transient_update_themes', 'O:8:\"stdClass\":4:{s:12:\"last_checked\";i:1590776831;s:7:\"checked\";a:11:{s:12:\"twentyeleven\";s:3:\"3.3\";s:13:\"twentyfifteen\";s:3:\"2.5\";s:14:\"twentyfourteen\";s:3:\"2.7\";s:14:\"twentynineteen\";s:3:\"1.4\";s:15:\"twentyseventeen\";s:3:\"2.2\";s:13:\"twentysixteen\";s:3:\"2.0\";s:9:\"twentyten\";s:3:\"2.9\";s:14:\"twentythirteen\";s:3:\"2.9\";s:12:\"twentytwelve\";s:3:\"3.0\";s:12:\"twentytwenty\";s:3:\"1.1\";s:6:\"wp-dam\";s:5:\"1.0.0\";}s:8:\"response\";a:10:{s:12:\"twentyeleven\";a:6:{s:5:\"theme\";s:12:\"twentyeleven\";s:11:\"new_version\";s:3:\"3.4\";s:3:\"url\";s:42:\"https://wordpress.org/themes/twentyeleven/\";s:7:\"package\";s:58:\"https://downloads.wordpress.org/theme/twentyeleven.3.4.zip\";s:8:\"requires\";b:0;s:12:\"requires_php\";s:5:\"5.2.4\";}s:13:\"twentyfifteen\";a:6:{s:5:\"theme\";s:13:\"twentyfifteen\";s:11:\"new_version\";s:3:\"2.6\";s:3:\"url\";s:43:\"https://wordpress.org/themes/twentyfifteen/\";s:7:\"package\";s:59:\"https://downloads.wordpress.org/theme/twentyfifteen.2.6.zip\";s:8:\"requires\";b:0;s:12:\"requires_php\";s:5:\"5.2.4\";}s:14:\"twentyfourteen\";a:6:{s:5:\"theme\";s:14:\"twentyfourteen\";s:11:\"new_version\";s:3:\"2.8\";s:3:\"url\";s:44:\"https://wordpress.org/themes/twentyfourteen/\";s:7:\"package\";s:60:\"https://downloads.wordpress.org/theme/twentyfourteen.2.8.zip\";s:8:\"requires\";b:0;s:12:\"requires_php\";s:5:\"5.2.4\";}s:14:\"twentynineteen\";a:6:{s:5:\"theme\";s:14:\"twentynineteen\";s:11:\"new_version\";s:3:\"1.5\";s:3:\"url\";s:44:\"https://wordpress.org/themes/twentynineteen/\";s:7:\"package\";s:60:\"https://downloads.wordpress.org/theme/twentynineteen.1.5.zip\";s:8:\"requires\";s:5:\"4.9.6\";s:12:\"requires_php\";s:5:\"5.2.4\";}s:15:\"twentyseventeen\";a:6:{s:5:\"theme\";s:15:\"twentyseventeen\";s:11:\"new_version\";s:3:\"2.3\";s:3:\"url\";s:45:\"https://wordpress.org/themes/twentyseventeen/\";s:7:\"package\";s:61:\"https://downloads.wordpress.org/theme/twentyseventeen.2.3.zip\";s:8:\"requires\";s:3:\"4.7\";s:12:\"requires_php\";s:5:\"5.2.4\";}s:13:\"twentysixteen\";a:6:{s:5:\"theme\";s:13:\"twentysixteen\";s:11:\"new_version\";s:3:\"2.1\";s:3:\"url\";s:43:\"https://wordpress.org/themes/twentysixteen/\";s:7:\"package\";s:59:\"https://downloads.wordpress.org/theme/twentysixteen.2.1.zip\";s:8:\"requires\";s:3:\"4.4\";s:12:\"requires_php\";s:5:\"5.2.4\";}s:9:\"twentyten\";a:6:{s:5:\"theme\";s:9:\"twentyten\";s:11:\"new_version\";s:3:\"3.0\";s:3:\"url\";s:39:\"https://wordpress.org/themes/twentyten/\";s:7:\"package\";s:55:\"https://downloads.wordpress.org/theme/twentyten.3.0.zip\";s:8:\"requires\";s:3:\"3.0\";s:12:\"requires_php\";s:5:\"5.2.4\";}s:14:\"twentythirteen\";a:6:{s:5:\"theme\";s:14:\"twentythirteen\";s:11:\"new_version\";s:3:\"3.0\";s:3:\"url\";s:44:\"https://wordpress.org/themes/twentythirteen/\";s:7:\"package\";s:60:\"https://downloads.wordpress.org/theme/twentythirteen.3.0.zip\";s:8:\"requires\";s:3:\"3.6\";s:12:\"requires_php\";s:5:\"5.2.4\";}s:12:\"twentytwelve\";a:6:{s:5:\"theme\";s:12:\"twentytwelve\";s:11:\"new_version\";s:3:\"3.1\";s:3:\"url\";s:42:\"https://wordpress.org/themes/twentytwelve/\";s:7:\"package\";s:58:\"https://downloads.wordpress.org/theme/twentytwelve.3.1.zip\";s:8:\"requires\";s:3:\"3.5\";s:12:\"requires_php\";s:5:\"5.2.4\";}s:12:\"twentytwenty\";a:6:{s:5:\"theme\";s:12:\"twentytwenty\";s:11:\"new_version\";s:3:\"1.3\";s:3:\"url\";s:42:\"https://wordpress.org/themes/twentytwenty/\";s:7:\"package\";s:58:\"https://downloads.wordpress.org/theme/twentytwenty.1.3.zip\";s:8:\"requires\";s:3:\"4.7\";s:12:\"requires_php\";s:5:\"5.2.4\";}}s:12:\"translations\";a:0:{}}', 'no'),
(1746, '_site_transient_update_plugins', 'O:8:\"stdClass\":4:{s:12:\"last_checked\";i:1590776831;s:8:\"response\";a:4:{s:19:\"akismet/akismet.php\";O:8:\"stdClass\":12:{s:2:\"id\";s:21:\"w.org/plugins/akismet\";s:4:\"slug\";s:7:\"akismet\";s:6:\"plugin\";s:19:\"akismet/akismet.php\";s:11:\"new_version\";s:5:\"4.1.5\";s:3:\"url\";s:38:\"https://wordpress.org/plugins/akismet/\";s:7:\"package\";s:56:\"https://downloads.wordpress.org/plugin/akismet.4.1.5.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:59:\"https://ps.w.org/akismet/assets/icon-256x256.png?rev=969272\";s:2:\"1x\";s:59:\"https://ps.w.org/akismet/assets/icon-128x128.png?rev=969272\";}s:7:\"banners\";a:1:{s:2:\"1x\";s:61:\"https://ps.w.org/akismet/assets/banner-772x250.jpg?rev=479904\";}s:11:\"banners_rtl\";a:0:{}s:6:\"tested\";s:5:\"5.4.1\";s:12:\"requires_php\";b:0;s:13:\"compatibility\";O:8:\"stdClass\":0:{}}s:25:\"loginpress/loginpress.php\";O:8:\"stdClass\":13:{s:2:\"id\";s:24:\"w.org/plugins/loginpress\";s:4:\"slug\";s:10:\"loginpress\";s:6:\"plugin\";s:25:\"loginpress/loginpress.php\";s:11:\"new_version\";s:5:\"1.4.4\";s:3:\"url\";s:41:\"https://wordpress.org/plugins/loginpress/\";s:7:\"package\";s:59:\"https://downloads.wordpress.org/plugin/loginpress.1.4.4.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:63:\"https://ps.w.org/loginpress/assets/icon-256x256.png?rev=1584045\";s:2:\"1x\";s:63:\"https://ps.w.org/loginpress/assets/icon-128x128.png?rev=1584045\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:66:\"https://ps.w.org/loginpress/assets/banner-1544x500.png?rev=2118104\";s:2:\"1x\";s:65:\"https://ps.w.org/loginpress/assets/banner-772x250.png?rev=2118104\";}s:11:\"banners_rtl\";a:0:{}s:14:\"upgrade_notice\";s:59:\"<ul>\n<li>Important Release, upgrade immediately.</li>\n</ul>\";s:6:\"tested\";s:5:\"5.4.1\";s:12:\"requires_php\";b:0;s:13:\"compatibility\";O:8:\"stdClass\":0:{}}s:41:\"password-protected/password-protected.php\";O:8:\"stdClass\":13:{s:2:\"id\";s:32:\"w.org/plugins/password-protected\";s:4:\"slug\";s:18:\"password-protected\";s:6:\"plugin\";s:41:\"password-protected/password-protected.php\";s:11:\"new_version\";s:3:\"2.3\";s:3:\"url\";s:49:\"https://wordpress.org/plugins/password-protected/\";s:7:\"package\";s:65:\"https://downloads.wordpress.org/plugin/password-protected.2.3.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:70:\"https://ps.w.org/password-protected/assets/icon-256x256.png?rev=993628\";s:2:\"1x\";s:70:\"https://ps.w.org/password-protected/assets/icon-128x128.png?rev=993628\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:73:\"https://ps.w.org/password-protected/assets/banner-1544x500.png?rev=993628\";s:2:\"1x\";s:72:\"https://ps.w.org/password-protected/assets/banner-772x250.png?rev=993628\";}s:11:\"banners_rtl\";a:0:{}s:14:\"upgrade_notice\";s:183:\"<p>Fixed an issue with &quot;testcookie&quot; on some hosts. Added <code>password_protected_cookie_name</code> and <code>password_protected_options_page_capability</code> filters.</p>\";s:6:\"tested\";s:5:\"5.4.1\";s:12:\"requires_php\";s:3:\"5.6\";s:13:\"compatibility\";O:8:\"stdClass\":0:{}}s:21:\"safe-svg/safe-svg.php\";O:8:\"stdClass\":12:{s:2:\"id\";s:22:\"w.org/plugins/safe-svg\";s:4:\"slug\";s:8:\"safe-svg\";s:6:\"plugin\";s:21:\"safe-svg/safe-svg.php\";s:11:\"new_version\";s:5:\"1.9.9\";s:3:\"url\";s:39:\"https://wordpress.org/plugins/safe-svg/\";s:7:\"package\";s:57:\"https://downloads.wordpress.org/plugin/safe-svg.1.9.9.zip\";s:5:\"icons\";a:3:{s:2:\"2x\";s:61:\"https://ps.w.org/safe-svg/assets/icon-256x256.png?rev=1706191\";s:2:\"1x\";s:53:\"https://ps.w.org/safe-svg/assets/icon.svg?rev=1706191\";s:3:\"svg\";s:53:\"https://ps.w.org/safe-svg/assets/icon.svg?rev=1706191\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:64:\"https://ps.w.org/safe-svg/assets/banner-1544x500.png?rev=1706191\";s:2:\"1x\";s:63:\"https://ps.w.org/safe-svg/assets/banner-772x250.png?rev=1706191\";}s:11:\"banners_rtl\";a:0:{}s:6:\"tested\";s:5:\"5.4.1\";s:12:\"requires_php\";s:3:\"5.6\";s:13:\"compatibility\";O:8:\"stdClass\":0:{}}}s:12:\"translations\";a:0:{}s:9:\"no_update\";a:4:{s:25:\"fakerpress/fakerpress.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:24:\"w.org/plugins/fakerpress\";s:4:\"slug\";s:10:\"fakerpress\";s:6:\"plugin\";s:25:\"fakerpress/fakerpress.php\";s:11:\"new_version\";s:5:\"0.5.0\";s:3:\"url\";s:41:\"https://wordpress.org/plugins/fakerpress/\";s:7:\"package\";s:53:\"https://downloads.wordpress.org/plugin/fakerpress.zip\";s:5:\"icons\";a:3:{s:2:\"2x\";s:63:\"https://ps.w.org/fakerpress/assets/icon-256x256.png?rev=1846090\";s:2:\"1x\";s:55:\"https://ps.w.org/fakerpress/assets/icon.svg?rev=1846090\";s:3:\"svg\";s:55:\"https://ps.w.org/fakerpress/assets/icon.svg?rev=1846090\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:66:\"https://ps.w.org/fakerpress/assets/banner-1544x500.png?rev=1152002\";s:2:\"1x\";s:65:\"https://ps.w.org/fakerpress/assets/banner-772x250.png?rev=1152002\";}s:11:\"banners_rtl\";a:0:{}}s:47:\"monkeyman-rewrite-analyzer/rewrite-analyzer.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:40:\"w.org/plugins/monkeyman-rewrite-analyzer\";s:4:\"slug\";s:26:\"monkeyman-rewrite-analyzer\";s:6:\"plugin\";s:47:\"monkeyman-rewrite-analyzer/rewrite-analyzer.php\";s:11:\"new_version\";s:3:\"1.0\";s:3:\"url\";s:57:\"https://wordpress.org/plugins/monkeyman-rewrite-analyzer/\";s:7:\"package\";s:73:\"https://downloads.wordpress.org/plugin/monkeyman-rewrite-analyzer.1.0.zip\";s:5:\"icons\";a:1:{s:7:\"default\";s:70:\"https://s.w.org/plugins/geopattern-icon/monkeyman-rewrite-analyzer.svg\";}s:7:\"banners\";a:0:{}s:11:\"banners_rtl\";a:0:{}}s:67:\"video-embed-thumbnail-generator/video-embed-thumbnail-generator.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:45:\"w.org/plugins/video-embed-thumbnail-generator\";s:4:\"slug\";s:31:\"video-embed-thumbnail-generator\";s:6:\"plugin\";s:67:\"video-embed-thumbnail-generator/video-embed-thumbnail-generator.php\";s:11:\"new_version\";s:6:\"4.6.25\";s:3:\"url\";s:62:\"https://wordpress.org/plugins/video-embed-thumbnail-generator/\";s:7:\"package\";s:81:\"https://downloads.wordpress.org/plugin/video-embed-thumbnail-generator.4.6.25.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:83:\"https://ps.w.org/video-embed-thumbnail-generator/assets/icon-256x256.jpg?rev=994329\";s:2:\"1x\";s:83:\"https://ps.w.org/video-embed-thumbnail-generator/assets/icon-128x128.jpg?rev=994329\";}s:7:\"banners\";a:1:{s:2:\"1x\";s:85:\"https://ps.w.org/video-embed-thumbnail-generator/assets/banner-772x250.jpg?rev=486715\";}s:11:\"banners_rtl\";a:0:{}}s:33:\"wp-bulk-delete/wp-bulk-delete.php\";O:8:\"stdClass\":9:{s:2:\"id\";s:28:\"w.org/plugins/wp-bulk-delete\";s:4:\"slug\";s:14:\"wp-bulk-delete\";s:6:\"plugin\";s:33:\"wp-bulk-delete/wp-bulk-delete.php\";s:11:\"new_version\";s:5:\"1.1.3\";s:3:\"url\";s:45:\"https://wordpress.org/plugins/wp-bulk-delete/\";s:7:\"package\";s:63:\"https://downloads.wordpress.org/plugin/wp-bulk-delete.1.1.3.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:67:\"https://ps.w.org/wp-bulk-delete/assets/icon-256x256.png?rev=1520946\";s:2:\"1x\";s:67:\"https://ps.w.org/wp-bulk-delete/assets/icon-128x128.png?rev=1520946\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:70:\"https://ps.w.org/wp-bulk-delete/assets/banner-1544x500.png?rev=1532903\";s:2:\"1x\";s:69:\"https://ps.w.org/wp-bulk-delete/assets/banner-772x250.png?rev=1532903\";}s:11:\"banners_rtl\";a:0:{}}}}', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `wp_postmeta`
--

CREATE TABLE `wp_postmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_520_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wp_postmeta`
--

INSERT INTO `wp_postmeta` (`meta_id`, `post_id`, `meta_key`, `meta_value`) VALUES
(1, 2, '_wp_page_template', 'default'),
(2, 3, '_wp_page_template', 'default'),
(16, 17, '_wp_attached_file', '2019/12/Website-Tour-Banner-AUS-TOUR-scaled.jpg'),
(17, 17, '_wp_attachment_metadata', 'a:6:{s:5:\"width\";i:2560;s:6:\"height\";i:853;s:4:\"file\";s:47:\"2019/12/Website-Tour-Banner-AUS-TOUR-scaled.jpg\";s:5:\"sizes\";a:6:{s:6:\"medium\";a:4:{s:4:\"file\";s:40:\"Website-Tour-Banner-AUS-TOUR-300x100.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:100;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:5:\"large\";a:4:{s:4:\"file\";s:41:\"Website-Tour-Banner-AUS-TOUR-1024x341.jpg\";s:5:\"width\";i:1024;s:6:\"height\";i:341;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:40:\"Website-Tour-Banner-AUS-TOUR-150x150.jpg\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:40:\"Website-Tour-Banner-AUS-TOUR-768x256.jpg\";s:5:\"width\";i:768;s:6:\"height\";i:256;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"1536x1536\";a:4:{s:4:\"file\";s:41:\"Website-Tour-Banner-AUS-TOUR-1536x512.jpg\";s:5:\"width\";i:1536;s:6:\"height\";i:512;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"2048x2048\";a:4:{s:4:\"file\";s:41:\"Website-Tour-Banner-AUS-TOUR-2048x682.jpg\";s:5:\"width\";i:2048;s:6:\"height\";i:682;s:9:\"mime-type\";s:10:\"image/jpeg\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"1\";s:8:\"keywords\";a:0:{}}s:14:\"original_image\";s:32:\"Website-Tour-Banner-AUS-TOUR.jpg\";}'),
(26, 24, '_wp_attached_file', '2019/12/Website-Tour-Banner-US-TOUR-scaled.jpg'),
(27, 24, '_wp_attachment_metadata', 'a:6:{s:5:\"width\";i:2560;s:6:\"height\";i:972;s:4:\"file\";s:46:\"2019/12/Website-Tour-Banner-US-TOUR-scaled.jpg\";s:5:\"sizes\";a:6:{s:6:\"medium\";a:4:{s:4:\"file\";s:39:\"Website-Tour-Banner-US-TOUR-300x114.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:114;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:5:\"large\";a:4:{s:4:\"file\";s:40:\"Website-Tour-Banner-US-TOUR-1024x389.jpg\";s:5:\"width\";i:1024;s:6:\"height\";i:389;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:39:\"Website-Tour-Banner-US-TOUR-150x150.jpg\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:39:\"Website-Tour-Banner-US-TOUR-768x291.jpg\";s:5:\"width\";i:768;s:6:\"height\";i:291;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"1536x1536\";a:4:{s:4:\"file\";s:40:\"Website-Tour-Banner-US-TOUR-1536x583.jpg\";s:5:\"width\";i:1536;s:6:\"height\";i:583;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"2048x2048\";a:4:{s:4:\"file\";s:40:\"Website-Tour-Banner-US-TOUR-2048x777.jpg\";s:5:\"width\";i:2048;s:6:\"height\";i:777;s:9:\"mime-type\";s:10:\"image/jpeg\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}s:14:\"original_image\";s:31:\"Website-Tour-Banner-US-TOUR.jpg\";}'),
(42, 30, '_edit_last', '1'),
(43, 30, '_edit_lock', '1580997746:1'),
(44, 30, 'add_image_file', ''),
(45, 30, 'add_image_link', ''),
(46, 30, 'add_image_creator', 'Mat Williams'),
(47, 50, '_edit_last', '1'),
(48, 50, '_edit_lock', '1580997706:1'),
(49, 50, 'add_image_file', ''),
(50, 50, 'add_image_link', ''),
(51, 50, 'add_image_creator', 'Mat Dunlap'),
(53, 54, '_edit_last', '1'),
(54, 54, '_edit_lock', '1580997622:1'),
(55, 55, '_wp_attached_file', '2019/12/6-Feet-Under.mp3'),
(56, 55, '_wp_attachment_metadata', 'a:19:{s:10:\"dataformat\";s:3:\"mp3\";s:8:\"channels\";i:2;s:11:\"sample_rate\";i:44100;s:7:\"bitrate\";i:256000;s:11:\"channelmode\";s:12:\"joint stereo\";s:12:\"bitrate_mode\";s:3:\"cbr\";s:8:\"lossless\";b:0;s:15:\"encoder_options\";s:6:\"CBR256\";s:17:\"compression_ratio\";d:0.18140589569160998;s:10:\"fileformat\";s:3:\"mp3\";s:8:\"filesize\";i:6534720;s:9:\"mime_type\";s:10:\"audio/mpeg\";s:6:\"length\";i:204;s:16:\"length_formatted\";s:4:\"3:24\";s:16:\"encoder_settings\";s:51:\"LAME 32bits version 3.98.2 (http://www.mp3dev.org/)\";s:5:\"title\";s:12:\"6 Feet Under\";s:6:\"artist\";s:14:\"Damhnait Doyle\";s:4:\"year\";s:4:\"2019\";s:5:\"album\";s:0:\"\";}'),
(57, 54, 'add_image_file', 'http://ceol.local:5757/wp-content/uploads/2019/12/6-Feet-Under.mp3'),
(58, 54, 'add_image_link', ''),
(59, 54, 'add_image_creator', 'Mat Williams'),
(65, 60, '_wp_attached_file', '2019/12/dam-logo@3x.png'),
(66, 60, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:606;s:6:\"height\";i:207;s:4:\"file\";s:23:\"2019/12/dam-logo@3x.png\";s:5:\"sizes\";a:2:{s:6:\"medium\";a:4:{s:4:\"file\";s:23:\"dam-logo@3x-300x102.png\";s:5:\"width\";i:300;s:6:\"height\";i:102;s:9:\"mime-type\";s:9:\"image/png\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:23:\"dam-logo@3x-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(67, 50, '_thumbnail_id', '24'),
(68, 30, '_thumbnail_id', '17'),
(69, 89, '_edit_last', '1'),
(70, 89, '_edit_lock', '1586452764:1'),
(71, 90, '_wp_attached_file', '2020/01/DSC_5804-scaled.jpg'),
(72, 90, '_wp_attachment_metadata', 'a:6:{s:5:\"width\";i:2560;s:6:\"height\";i:1707;s:4:\"file\";s:27:\"2020/01/DSC_5804-scaled.jpg\";s:5:\"sizes\";a:6:{s:6:\"medium\";a:4:{s:4:\"file\";s:20:\"DSC_5804-300x200.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:200;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:5:\"large\";a:4:{s:4:\"file\";s:21:\"DSC_5804-1024x683.jpg\";s:5:\"width\";i:1024;s:6:\"height\";i:683;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:20:\"DSC_5804-150x150.jpg\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:20:\"DSC_5804-768x512.jpg\";s:5:\"width\";i:768;s:6:\"height\";i:512;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"1536x1536\";a:4:{s:4:\"file\";s:22:\"DSC_5804-1536x1024.jpg\";s:5:\"width\";i:1536;s:6:\"height\";i:1024;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"2048x2048\";a:4:{s:4:\"file\";s:22:\"DSC_5804-2048x1365.jpg\";s:5:\"width\";i:2048;s:6:\"height\";i:1365;s:9:\"mime-type\";s:10:\"image/jpeg\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:3:\"3.8\";s:6:\"credit\";s:9:\"NIK FIELD\";s:6:\"camera\";s:10:\"NIKON D500\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:10:\"1574460060\";s:9:\"copyright\";s:27:\"NIK FIELD CREATIVE SERVICES\";s:12:\"focal_length\";s:2:\"56\";s:3:\"iso\";s:4:\"3600\";s:13:\"shutter_speed\";s:5:\"0.025\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"1\";s:8:\"keywords\";a:0:{}}s:14:\"original_image\";s:12:\"DSC_5804.jpg\";}'),
(73, 89, 'add_image_file', ''),
(74, 89, 'add_image_link', ''),
(75, 89, 'add_image_creator', ''),
(76, 89, '_thumbnail_id', '90'),
(77, 93, '_edit_last', '1'),
(78, 93, '_edit_lock', '1581011942:1'),
(79, 93, 'add_image_file', 'http://ceol.local:5757/wp-content/uploads/2020/01/jquery-ui-1.12.1.zip'),
(80, 93, 'add_image_link', ''),
(81, 93, 'add_image_creator', ''),
(82, 97, '_wp_attached_file', '2020/01/jquery-ui-1.12.1.zip'),
(83, 98, '_edit_last', '1'),
(84, 98, '_edit_lock', '1586455056:1'),
(85, 99, '_wp_attached_file', '2020/01/ZurielMelidon_21455804.pdf'),
(86, 99, '_wp_attachment_metadata', 'a:1:{s:5:\"sizes\";a:4:{s:4:\"full\";a:4:{s:4:\"file\";s:30:\"ZurielMelidon_21455804-pdf.jpg\";s:5:\"width\";i:1088;s:6:\"height\";i:1408;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:6:\"medium\";a:4:{s:4:\"file\";s:38:\"ZurielMelidon_21455804-pdf-232x300.jpg\";s:5:\"width\";i:232;s:6:\"height\";i:300;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:5:\"large\";a:4:{s:4:\"file\";s:39:\"ZurielMelidon_21455804-pdf-791x1024.jpg\";s:5:\"width\";i:791;s:6:\"height\";i:1024;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:38:\"ZurielMelidon_21455804-pdf-116x150.jpg\";s:5:\"width\";i:116;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}}}'),
(87, 98, 'add_image_file', 'http://ceol.local:5757/wp-content/uploads/2020/01/ZurielMelidon_21455804.pdf'),
(88, 98, 'add_image_link', ''),
(89, 98, 'add_image_creator', ''),
(90, 98, 'add_asset_file', 'http://dam.local/wp-content/uploads/2020/01/ZurielMelidon_21455804.pdf'),
(91, 98, 'add_asset_link', ''),
(92, 98, 'add_asset_creator', ''),
(93, 89, 'add_asset_file', ''),
(94, 89, 'add_asset_link', ''),
(95, 89, 'add_asset_creator', ''),
(96, 54, 'add_asset_file', 'http://dam.local/wp-content/uploads/2019/12/6-Feet-Under.mp3'),
(97, 54, 'add_asset_link', ''),
(98, 54, 'add_asset_creator', ''),
(99, 50, 'add_asset_file', ''),
(100, 50, 'add_asset_link', ''),
(101, 50, 'add_asset_creator', ''),
(102, 30, 'add_asset_file', ''),
(103, 30, 'add_asset_link', ''),
(104, 30, 'add_asset_creator', ''),
(105, 93, 'add_asset_file', 'http://dam.local/wp-content/uploads/2020/01/jquery-ui-1.12.1.zip'),
(106, 93, 'add_asset_link', ''),
(107, 93, 'add_asset_creator', ''),
(108, 192, '_edit_last', '1'),
(109, 192, '_edit_lock', '1584980079:1'),
(110, 193, '_wp_attached_file', '2020/02/David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled-1.jpg'),
(111, 193, '_wp_attachment_metadata', 'a:5:{s:5:\"width\";i:2560;s:6:\"height\";i:2560;s:4:\"file\";s:71:\"2020/02/David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled-1.jpg\";s:5:\"sizes\";a:6:{s:6:\"medium\";a:4:{s:4:\"file\";s:71:\"David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled-1-300x300.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:300;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:5:\"large\";a:4:{s:4:\"file\";s:73:\"David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled-1-1024x1024.jpg\";s:5:\"width\";i:1024;s:6:\"height\";i:1024;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"thumbnail\";a:4:{s:4:\"file\";s:71:\"David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled-1-150x150.jpg\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:12:\"medium_large\";a:4:{s:4:\"file\";s:71:\"David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled-1-768x768.jpg\";s:5:\"width\";i:768;s:6:\"height\";i:768;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"1536x1536\";a:4:{s:4:\"file\";s:73:\"David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled-1-1536x1536.jpg\";s:5:\"width\";i:1536;s:6:\"height\";i:1536;s:9:\"mime-type\";s:10:\"image/jpeg\";}s:9:\"2048x2048\";a:4:{s:4:\"file\";s:73:\"David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled-1-2048x2048.jpg\";s:5:\"width\";i:2048;s:6:\"height\";i:2048;s:9:\"mime-type\";s:10:\"image/jpeg\";}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(112, 192, '_thumbnail_id', '193'),
(113, 192, 'add_asset_file', ''),
(114, 192, 'add_asset_link', ''),
(115, 192, 'add_asset_creator', ''),
(116, 195, '_edit_last', '1'),
(117, 195, '_edit_lock', '1586452428:1'),
(118, 195, '_thumbnail_id', '193'),
(119, 195, 'add_asset_file', ''),
(120, 195, 'add_asset_link', ''),
(121, 195, 'add_asset_creator', ''),
(128, 198, '_edit_last', '1'),
(129, 198, '_edit_lock', '1582170061:1'),
(130, 198, 'add_asset_file', 'http://dam.local/wp-content/uploads/2020/02/StarsTL.mp4'),
(131, 198, 'add_asset_link', ''),
(132, 198, 'add_asset_creator', ''),
(156, 211, '_wp_attached_file', '2020/02/StarsTL.mp4'),
(157, 211, '_wp_attachment_metadata', 'a:10:{s:8:\"filesize\";i:6466927;s:9:\"mime_type\";s:9:\"video/mp4\";s:6:\"length\";i:7;s:16:\"length_formatted\";s:4:\"0:07\";s:5:\"width\";i:640;s:6:\"height\";i:360;s:10:\"fileformat\";s:3:\"mp4\";s:10:\"dataformat\";s:9:\"quicktime\";s:5:\"audio\";a:7:{s:10:\"dataformat\";s:3:\"mp4\";s:5:\"codec\";s:19:\"ISO/IEC 14496-3 AAC\";s:11:\"sample_rate\";d:48000;s:8:\"channels\";i:2;s:15:\"bits_per_sample\";i:16;s:8:\"lossless\";b:0;s:11:\"channelmode\";s:6:\"stereo\";}s:17:\"created_timestamp\";i:1471909555;}'),
(164, 216, '_wp_attached_file', '2020/02/Port-Cities_black-wordmark_vector.svg'),
(165, 216, '_wp_attachment_metadata', 'a:4:{s:5:\"width\";i:306;s:6:\"height\";i:185;s:4:\"file\";s:46:\"/2020/02/Port-Cities_black-wordmark_vector.svg\";s:5:\"sizes\";a:6:{s:9:\"thumbnail\";a:5:{s:5:\"width\";s:3:\"150\";s:6:\"height\";s:3:\"150\";s:4:\"crop\";s:1:\"1\";s:4:\"file\";s:37:\"Port-Cities_black-wordmark_vector.svg\";s:9:\"mime-type\";s:13:\"image/svg+xml\";}s:6:\"medium\";a:5:{s:5:\"width\";s:3:\"300\";s:6:\"height\";s:3:\"300\";s:4:\"crop\";b:0;s:4:\"file\";s:37:\"Port-Cities_black-wordmark_vector.svg\";s:9:\"mime-type\";s:13:\"image/svg+xml\";}s:12:\"medium_large\";a:5:{s:5:\"width\";s:3:\"768\";s:6:\"height\";s:1:\"0\";s:4:\"crop\";b:0;s:4:\"file\";s:37:\"Port-Cities_black-wordmark_vector.svg\";s:9:\"mime-type\";s:13:\"image/svg+xml\";}s:5:\"large\";a:5:{s:5:\"width\";s:4:\"1024\";s:6:\"height\";s:4:\"1024\";s:4:\"crop\";b:0;s:4:\"file\";s:37:\"Port-Cities_black-wordmark_vector.svg\";s:9:\"mime-type\";s:13:\"image/svg+xml\";}s:9:\"1536x1536\";a:5:{s:5:\"width\";i:1536;s:6:\"height\";i:1536;s:4:\"crop\";i:0;s:4:\"file\";s:37:\"Port-Cities_black-wordmark_vector.svg\";s:9:\"mime-type\";s:13:\"image/svg+xml\";}s:9:\"2048x2048\";a:5:{s:5:\"width\";i:2048;s:6:\"height\";i:2048;s:4:\"crop\";i:0;s:4:\"file\";s:37:\"Port-Cities_black-wordmark_vector.svg\";s:9:\"mime-type\";s:13:\"image/svg+xml\";}}}'),
(166, 215, '_edit_last', '1'),
(167, 215, '_thumbnail_id', '216'),
(168, 215, 'add_asset_file', ''),
(169, 215, 'add_asset_link', ''),
(170, 215, 'add_asset_creator', ''),
(171, 215, '_edit_lock', '1586453488:1'),
(172, 219, '_edit_last', '1'),
(173, 219, 'add_asset_file', ''),
(174, 219, 'add_asset_link', 'http://www.google.com'),
(175, 219, 'add_asset_creator', ''),
(176, 219, '_edit_lock', '1582173766:1'),
(208, 295, '_wp_attached_file', '2020/02/IMG_1625.mp4'),
(209, 295, '_wp_attachment_metadata', 'a:10:{s:8:\"filesize\";i:6010131;s:9:\"mime_type\";s:9:\"video/mp4\";s:6:\"length\";i:32;s:16:\"length_formatted\";s:4:\"0:32\";s:5:\"width\";i:720;s:6:\"height\";i:720;s:10:\"fileformat\";s:3:\"mp4\";s:10:\"dataformat\";s:9:\"quicktime\";s:5:\"audio\";a:7:{s:10:\"dataformat\";s:3:\"mp4\";s:5:\"codec\";s:19:\"ISO/IEC 14496-3 AAC\";s:11:\"sample_rate\";d:44100;s:8:\"channels\";i:2;s:15:\"bits_per_sample\";i:16;s:8:\"lossless\";b:0;s:11:\"channelmode\";s:6:\"stereo\";}s:17:\"created_timestamp\";i:1537051085;}'),
(211, 297, '_wp_attached_file', '2020/02/vid1.mp4'),
(212, 297, '_wp_attachment_metadata', 'a:10:{s:8:\"filesize\";i:6493379;s:9:\"mime_type\";s:9:\"video/mp4\";s:6:\"length\";i:32;s:16:\"length_formatted\";s:4:\"0:32\";s:5:\"width\";i:1280;s:6:\"height\";i:720;s:10:\"fileformat\";s:3:\"mp4\";s:10:\"dataformat\";s:9:\"quicktime\";s:5:\"audio\";a:7:{s:10:\"dataformat\";s:3:\"mp4\";s:5:\"codec\";s:19:\"ISO/IEC 14496-3 AAC\";s:11:\"sample_rate\";d:48000;s:8:\"channels\";i:2;s:15:\"bits_per_sample\";i:16;s:8:\"lossless\";b:0;s:11:\"channelmode\";s:6:\"stereo\";}s:17:\"created_timestamp\";i:1410642906;}'),
(230, 215, '_wp_old_slug', '215'),
(231, 305, '_wp_attached_file', '2020/02/So-Clean-Damhnait-Doyle-lyric-video.mp4'),
(232, 305, '_wp_attachment_metadata', 'a:10:{s:8:\"filesize\";i:326569403;s:9:\"mime_type\";s:9:\"video/mp4\";s:6:\"length\";i:255;s:16:\"length_formatted\";s:4:\"4:15\";s:5:\"width\";i:1920;s:6:\"height\";i:1080;s:10:\"fileformat\";s:3:\"mp4\";s:10:\"dataformat\";s:9:\"quicktime\";s:5:\"audio\";a:7:{s:10:\"dataformat\";s:3:\"mp4\";s:5:\"codec\";s:19:\"ISO/IEC 14496-3 AAC\";s:11:\"sample_rate\";d:48000;s:8:\"channels\";i:2;s:15:\"bits_per_sample\";i:16;s:8:\"lossless\";b:0;s:11:\"channelmode\";s:6:\"stereo\";}s:17:\"created_timestamp\";i:1559070891;}'),
(237, 308, '_wp_attached_file', '2020/03/So-Clean-Damhnait-Doyle-lyric-video.mp4'),
(238, 308, '_wp_attachment_metadata', 'a:10:{s:8:\"filesize\";i:326569403;s:9:\"mime_type\";s:9:\"video/mp4\";s:6:\"length\";i:255;s:16:\"length_formatted\";s:4:\"4:15\";s:5:\"width\";i:1920;s:6:\"height\";i:1080;s:10:\"fileformat\";s:3:\"mp4\";s:10:\"dataformat\";s:9:\"quicktime\";s:5:\"audio\";a:7:{s:10:\"dataformat\";s:3:\"mp4\";s:5:\"codec\";s:19:\"ISO/IEC 14496-3 AAC\";s:11:\"sample_rate\";d:48000;s:8:\"channels\";i:2;s:15:\"bits_per_sample\";i:16;s:8:\"lossless\";b:0;s:11:\"channelmode\";s:6:\"stereo\";}s:17:\"created_timestamp\";i:1559070891;}'),
(246, 312, '_wp_attached_file', '2020/03/I-STILL-SEE-U-AT-PARTIES.zip'),
(247, 313, '_wp_attached_file', '2020/03/DM__KIND_OF_LIKE_IT__FINAL.mp4'),
(248, 313, '_wp_attachment_metadata', 'a:10:{s:8:\"filesize\";i:875259499;s:9:\"mime_type\";s:9:\"video/mp4\";s:6:\"length\";i:175;s:16:\"length_formatted\";s:4:\"2:55\";s:5:\"width\";i:1920;s:6:\"height\";i:1080;s:10:\"fileformat\";s:3:\"mp4\";s:10:\"dataformat\";s:9:\"quicktime\";s:5:\"audio\";a:7:{s:10:\"dataformat\";s:3:\"mp4\";s:5:\"codec\";s:19:\"ISO/IEC 14496-3 AAC\";s:11:\"sample_rate\";d:48000;s:8:\"channels\";i:2;s:15:\"bits_per_sample\";i:16;s:8:\"lossless\";b:0;s:11:\"channelmode\";s:6:\"stereo\";}s:17:\"created_timestamp\";i:1583615760;}'),
(255, 317, '_edit_last', '1'),
(256, 317, 'add_asset_file', 'http://dam.local/wp-content/uploads/2020/03/DM__KIND_OF_LIKE_IT__FINAL.mp4'),
(257, 317, 'add_asset_link', ''),
(258, 317, 'add_asset_creator', ''),
(259, 317, '_edit_lock', '1584206492:1'),
(37858, 12853, '_edit_lock', '1584459497:1'),
(37859, 12853, '_edit_last', '1'),
(49936, 89, '_wp_old_slug', 'test-hi-res-iamge'),
(49937, 16955, '_edit_lock', '1586454337:1'),
(49938, 16955, '_edit_last', '1'),
(49939, 16956, '_wp_attached_file', '2020/04/LAM-Bio-2020-FINAL.docx'),
(49940, 16955, 'add_asset_file', 'https://dam.local/wp-content/uploads/2020/04/LAM-Bio-2020-FINAL.docx'),
(49941, 16955, 'add_asset_link', ''),
(49942, 16955, 'add_asset_creator', '');

-- --------------------------------------------------------

--
-- Table structure for table `wp_posts`
--

CREATE TABLE `wp_posts` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `post_author` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content` longtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `post_title` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `post_excerpt` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `post_status` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'open',
  `post_password` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `post_name` varchar(200) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `to_ping` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `pinged` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content_filtered` longtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `post_parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `guid` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT '0',
  `post_type` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wp_posts`
--

INSERT INTO `wp_posts` (`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES
(2, 1, '2019-12-10 20:14:15', '2019-12-10 20:14:15', '<!-- wp:paragraph -->\n<p>This is an example page. It\'s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>Hi there! I\'m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like pi&#241;a coladas. (And gettin\' caught in the rain.)</p></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:paragraph -->\n<p>...or something like this:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.</p></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:paragraph -->\n<p>As a new WordPress user, you should go to <a href=\"http://damwp.local:8888/wp-admin/\">your dashboard</a> to delete this page and create new pages for your content. Have fun!</p>\n<!-- /wp:paragraph -->', 'Sample Page', '', 'publish', 'closed', 'open', '', 'sample-page', '', '', '2019-12-10 20:14:15', '2019-12-10 20:14:15', '', 0, 'http://damwp.local:8888/?page_id=2', 0, 'page', '', 0),
(3, 1, '2019-12-10 20:14:15', '2019-12-10 20:14:15', '<!-- wp:heading --><h2>Who we are</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Our website address is: http://damwp.local:8888.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>What personal data we collect and why we collect it</h2><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>Comments</h3><!-- /wp:heading --><!-- wp:paragraph --><p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&#8217;s IP address and browser user agent string to help spam detection.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p><!-- /wp:paragraph --><!-- wp:heading {\"level\":3} --><h3>Media</h3><!-- /wp:heading --><!-- wp:paragraph --><p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p><!-- /wp:paragraph --><!-- wp:heading {\"level\":3} --><h3>Contact forms</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>Cookies</h3><!-- /wp:heading --><!-- wp:paragraph --><p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &quot;Remember Me&quot;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p><!-- /wp:paragraph --><!-- wp:heading {\"level\":3} --><h3>Embedded content from other websites</h3><!-- /wp:heading --><!-- wp:paragraph --><p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p><!-- /wp:paragraph --><!-- wp:heading {\"level\":3} --><h3>Analytics</h3><!-- /wp:heading --><!-- wp:heading --><h2>Who we share your data with</h2><!-- /wp:heading --><!-- wp:heading --><h2>How long we retain your data</h2><!-- /wp:heading --><!-- wp:paragraph --><p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>What rights you have over your data</h2><!-- /wp:heading --><!-- wp:paragraph --><p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Where we send your data</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Visitor comments may be checked through an automated spam detection service.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Your contact information</h2><!-- /wp:heading --><!-- wp:heading --><h2>Additional information</h2><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>How we protect your data</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>What data breach procedures we have in place</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>What third parties we receive data from</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>What automated decision making and/or profiling we do with user data</h3><!-- /wp:heading --><!-- wp:heading {\"level\":3} --><h3>Industry regulatory disclosure requirements</h3><!-- /wp:heading -->', 'Privacy Policy', '', 'draft', 'closed', 'open', '', 'privacy-policy', '', '', '2019-12-10 20:14:15', '2019-12-10 20:14:15', '', 0, 'http://damwp.local:8888/?page_id=3', 0, 'page', '', 0),
(17, 1, '2019-12-17 14:38:04', '2019-12-17 14:38:04', '', 'Website-Tour-Banner-AUS-TOUR', '', 'inherit', 'open', 'closed', '', 'website-tour-banner-aus-tour', '', '', '2019-12-17 14:38:04', '2019-12-17 14:38:04', '', 0, 'http://dam.local:8888/wp-content/uploads/2019/12/Website-Tour-Banner-AUS-TOUR.jpg', 0, 'attachment', 'image/jpeg', 0),
(24, 1, '2019-12-18 22:53:50', '2019-12-18 22:53:50', '', 'Website-Tour-Banner-US-TOUR', '', 'inherit', 'open', 'closed', '', 'website-tour-banner-us-tour', '', '', '2019-12-18 22:53:50', '2019-12-18 22:53:50', '', 0, 'http://dam.local:8888/wp-content/uploads/2019/12/Website-Tour-Banner-US-TOUR.jpg', 0, 'attachment', 'image/jpeg', 0),
(30, 1, '2019-12-19 16:58:58', '2019-12-19 16:58:58', '', 'Australian Tour 2019 Web Banner', '', 'publish', 'closed', 'closed', '', 'australian-tour-2019-web-banner', '', '', '2020-02-06 14:04:38', '2020-02-06 14:04:38', '', 0, 'http://dam.local:8888/?post_type=asset&#038;p=30', 0, 'asset', '', 0),
(48, 1, '2019-12-19 16:58:58', '2019-12-19 16:58:58', '', 'Australian Tour 2019 Web Banner', '', 'inherit', 'closed', 'closed', '', '30-revision-v1', '', '', '2019-12-19 16:58:58', '2019-12-19 16:58:58', '', 30, 'http://dam.local:8888/2019/12/19/30-revision-v1/', 0, 'revision', '', 0),
(50, 1, '2019-12-19 17:01:51', '2019-12-19 17:01:51', '', 'US Tour 2019 Supporting Crash Test Dummies Website Banner', '', 'publish', 'closed', 'closed', '', 'website-banner', '', '', '2020-02-06 14:03:51', '2020-02-06 14:03:51', '', 0, 'http://dam.local:8888/?post_type=asset&#038;p=50', 0, 'asset', '', 0),
(51, 1, '2019-12-19 17:01:51', '2019-12-19 17:01:51', '', 'Website Banner', '', 'inherit', 'closed', 'closed', '', '50-revision-v1', '', '', '2019-12-19 17:01:51', '2019-12-19 17:01:51', '', 50, 'http://dam.local:8888/2019/12/19/50-revision-v1/', 0, 'revision', '', 0),
(52, 1, '2019-12-19 17:04:01', '2019-12-19 17:04:01', '', 'US Tour 2019 SupportWebsite Banner', '', 'inherit', 'closed', 'closed', '', '50-autosave-v1', '', '', '2019-12-19 17:04:01', '2019-12-19 17:04:01', '', 50, 'http://dam.local:8888/2019/12/19/50-autosave-v1/', 0, 'revision', '', 0),
(53, 1, '2019-12-19 17:04:13', '2019-12-19 17:04:13', '', 'US Tour 2019 Supporting Crash Test Dummies Website Banner', '', 'inherit', 'closed', 'closed', '', '50-revision-v1', '', '', '2019-12-19 17:04:13', '2019-12-19 17:04:13', '', 50, 'http://dam.local:8888/2019/12/19/50-revision-v1/', 0, 'revision', '', 0),
(54, 1, '2019-12-19 17:12:12', '2019-12-19 17:12:12', '', '6 Feet Under Single', '', 'publish', 'closed', 'closed', '', '6-feet-under-single', '', '', '2020-02-06 14:02:28', '2020-02-06 14:02:28', '', 0, 'http://dam.local:8888/?post_type=asset&#038;p=54', 0, 'asset', '', 0),
(55, 1, '2019-12-19 17:07:08', '2019-12-19 17:07:08', '\"6 Feet Under\" by Damhnait Doyle. Released: 2019.', '6 Feet Under', '', 'inherit', 'open', 'closed', '', '6-feet-under', '', '', '2020-01-29 14:51:16', '2020-01-29 14:51:16', '', 54, 'http://dam.local:8888/wp-content/uploads/2019/12/6-Feet-Under.mp3', 0, 'attachment', 'audio/mpeg', 0),
(56, 1, '2019-12-19 17:12:12', '2019-12-19 17:12:12', '', '6 Feet Under Single', '', 'inherit', 'closed', 'closed', '', '54-revision-v1', '', '', '2019-12-19 17:12:12', '2019-12-19 17:12:12', '', 54, 'http://dam.local:8888/2019/12/19/54-revision-v1/', 0, 'revision', '', 0),
(60, 1, '2019-12-20 19:43:47', '2019-12-20 19:43:47', '', 'dam-logo@3x', '', 'inherit', 'open', 'closed', '', 'dam-logo3x', '', '', '2019-12-20 19:43:47', '2019-12-20 19:43:47', '', 0, 'http://dam.ordinaryartistservices.com/wp-content/uploads/2019/12/dam-logo@3x.png', 0, 'attachment', 'image/png', 0),
(89, 1, '2020-01-29 17:23:22', '2020-01-29 17:23:22', '', 'Test Hi-Res Image', '', 'publish', 'closed', 'closed', '', 'test-hi-res-image', '', '', '2020-04-09 17:20:27', '2020-04-09 17:20:27', '', 0, 'http://dam.local/?post_type=asset&#038;p=89', 0, 'asset', '', 0),
(90, 1, '2020-01-29 17:23:10', '2020-01-29 17:23:10', '', 'DSC_5804', '', 'inherit', 'open', 'closed', '', 'dsc_5804', '', '', '2020-01-29 17:23:10', '2020-01-29 17:23:10', '', 89, 'http://dam.local/wp-content/uploads/2020/01/DSC_5804.jpg', 0, 'attachment', 'image/jpeg', 0),
(91, 1, '2020-01-29 17:23:22', '2020-01-29 17:23:22', '', 'Test Hi-Res Iamge', '', 'inherit', 'closed', 'closed', '', '89-revision-v1', '', '', '2020-01-29 17:23:22', '2020-01-29 17:23:22', '', 89, 'http://dam.local/2020/01/29/89-revision-v1/', 0, 'revision', '', 0),
(92, 1, '2020-01-29 18:30:23', '2020-01-29 18:30:23', '', 'Test Hi-Res Image', '', 'inherit', 'closed', 'closed', '', '89-revision-v1', '', '', '2020-01-29 18:30:23', '2020-01-29 18:30:23', '', 89, 'http://dam.local/2020/01/29/89-revision-v1/', 0, 'revision', '', 0),
(93, 1, '2020-01-29 21:17:16', '2020-01-29 21:17:16', '', 'Test zip File', '', 'publish', 'closed', 'closed', '', 'test-zip-file', '', '', '2020-02-06 14:05:06', '2020-02-06 14:05:06', '', 0, 'http://dam.local/?post_type=asset&#038;p=93', 0, 'asset', '', 0),
(95, 1, '2020-01-29 21:17:16', '2020-01-29 21:17:16', '', 'Test zip File', '', 'inherit', 'closed', 'closed', '', '93-revision-v1', '', '', '2020-01-29 21:17:16', '2020-01-29 21:17:16', '', 93, 'http://dam.local/2020/01/29/93-revision-v1/', 0, 'revision', '', 0),
(97, 1, '2020-01-30 07:02:20', '2020-01-30 07:02:20', '', 'jquery-ui-1.12.1', '', 'inherit', 'open', 'closed', '', 'jquery-ui-1-12-1', '', '', '2020-01-30 07:02:20', '2020-01-30 07:02:20', '', 93, 'http://dam.local/wp-content/uploads/2020/01/jquery-ui-1.12.1.zip', 0, 'attachment', 'application/zip', 0),
(98, 1, '2020-01-30 07:04:14', '2020-01-30 07:04:14', '', 'Test Document file', '', 'publish', 'closed', 'closed', '', 'test-document-file', '', '', '2020-02-06 14:01:14', '2020-02-06 14:01:14', '', 0, 'http://dam.local/?post_type=asset&#038;p=98', 0, 'asset', '', 0),
(99, 1, '2020-01-30 07:04:05', '2020-01-30 07:04:05', '', 'ZurielMelidon_21455804', '', 'inherit', 'open', 'closed', '', 'zurielmelidon_21455804', '', '', '2020-01-30 07:04:05', '2020-01-30 07:04:05', '', 98, 'http://dam.local/wp-content/uploads/2020/01/ZurielMelidon_21455804.pdf', 0, 'attachment', 'application/pdf', 0),
(100, 1, '2020-01-30 07:04:14', '2020-01-30 07:04:14', '', 'Test Document file', '', 'inherit', 'closed', 'closed', '', '98-revision-v1', '', '', '2020-01-30 07:04:14', '2020-01-30 07:04:14', '', 98, 'http://dam.local/2020/01/30/98-revision-v1/', 0, 'revision', '', 0),
(192, 1, '2020-02-06 20:28:31', '2020-02-06 20:28:31', '', 'Test Image', '', 'publish', 'closed', 'closed', '', 'test-image', '', '', '2020-02-06 20:28:31', '2020-02-06 20:28:31', '', 0, 'http://dam.local/?post_type=asset&#038;p=192', 0, 'asset', '', 0),
(193, 1, '2020-02-06 20:28:12', '2020-02-06 20:28:12', '', 'David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled', '', 'inherit', 'open', 'closed', '', 'david_myles__leave_tonight__high_res-album-artwork-scaled', '', '', '2020-02-06 20:28:12', '2020-02-06 20:28:12', '', 192, 'http://dam.local/wp-content/uploads/2020/02/David_Myles__Leave_Tonight__high_res-Album-Artwork-scaled-1.jpg', 0, 'attachment', 'image/jpeg', 0),
(194, 1, '2020-02-06 20:28:31', '2020-02-06 20:28:31', '', 'Test Image', '', 'inherit', 'closed', 'closed', '', '192-revision-v1', '', '', '2020-02-06 20:28:31', '2020-02-06 20:28:31', '', 192, 'http://dam.local/2020/02/06/192-revision-v1/', 0, 'revision', '', 0),
(195, 1, '2020-02-06 21:04:07', '2020-02-06 21:04:07', '', 'David Myles - Press Photo 1 Mat Dunlap (Feb 2020)', '', 'publish', 'closed', 'closed', '', 'david-myles-press-photo-1-mat-dunlap-feb-2020', '', '', '2020-02-10 19:15:52', '2020-02-10 19:15:52', '', 0, 'http://dam.local/?post_type=asset&#038;p=195', 0, 'asset', '', 0),
(196, 1, '2020-02-06 21:04:07', '2020-02-06 21:04:07', '', 'David Myles - Press Photo 1 Mat Dunlap (Feb 2020)', '', 'inherit', 'closed', 'closed', '', '195-revision-v1', '', '', '2020-02-06 21:04:07', '2020-02-06 21:04:07', '', 195, 'http://dam.local/2020/02/06/195-revision-v1/', 0, 'revision', '', 0),
(198, 1, '2020-02-09 17:38:03', '2020-02-09 17:38:03', '', 'Test  Video File', '', 'publish', 'closed', 'closed', '', 'test-video-file', '', '', '2020-02-10 19:16:13', '2020-02-10 19:16:13', '', 0, 'http://dam.local/?post_type=asset&#038;p=198', 0, 'asset', '', 0),
(199, 1, '2020-02-09 17:38:03', '2020-02-09 17:38:03', '', 'Test  Video File', '', 'inherit', 'closed', 'closed', '', '198-revision-v1', '', '', '2020-02-09 17:38:03', '2020-02-09 17:38:03', '', 198, 'http://dam.local/2020/02/09/198-revision-v1/', 0, 'revision', '', 0),
(211, 1, '2020-02-10 19:05:44', '2020-02-10 19:05:44', '', 'StarsTL', '', 'inherit', 'open', 'closed', '', 'starstl', '', '', '2020-02-10 19:05:44', '2020-02-10 19:05:44', '', 198, 'http://dam.local/wp-content/uploads/2020/02/StarsTL.mp4', 0, 'attachment', 'video/mp4', 0),
(215, 1, '2020-02-10 20:18:03', '2020-02-10 20:18:03', '', 'Test SvG', '', 'publish', 'closed', 'closed', '', 'test-svg', '', '', '2020-04-09 17:33:49', '2020-04-09 17:33:49', '', 0, 'http://dam.local/?post_type=asset&#038;p=215', 0, 'asset', '', 0),
(216, 1, '2020-02-10 20:17:56', '2020-02-10 20:17:56', '', 'Port-Cities_black-wordmark_vector', '', 'inherit', 'open', 'closed', '', 'port-cities_black-wordmark_vector', '', '', '2020-02-10 20:17:56', '2020-02-10 20:17:56', '', 215, 'http://dam.local/wp-content/uploads/2020/02/Port-Cities_black-wordmark_vector.svg', 0, 'attachment', 'image/svg+xml', 0),
(217, 1, '2020-02-10 20:18:03', '2020-02-10 20:18:03', '', '', '', 'inherit', 'closed', 'closed', '', '215-revision-v1', '', '', '2020-02-10 20:18:03', '2020-02-10 20:18:03', '', 215, 'http://dam.local/2020/02/10/215-revision-v1/', 0, 'revision', '', 0),
(218, 1, '2020-02-10 20:18:15', '2020-02-10 20:18:15', '', 'Test SvG', '', 'inherit', 'closed', 'closed', '', '215-revision-v1', '', '', '2020-02-10 20:18:15', '2020-02-10 20:18:15', '', 215, 'http://dam.local/2020/02/10/215-revision-v1/', 0, 'revision', '', 0),
(219, 1, '2020-02-10 21:25:31', '2020-02-10 21:25:31', '', 'Link To Google', '', 'publish', 'closed', 'closed', '', '219', '', '', '2020-02-13 16:07:24', '2020-02-13 16:07:24', '', 0, 'http://dam.local/?post_type=asset&#038;p=219', 0, 'asset', '', 0),
(220, 1, '2020-02-10 21:25:31', '2020-02-10 21:25:31', '', '', '', 'inherit', 'closed', 'closed', '', '219-revision-v1', '', '', '2020-02-10 21:25:31', '2020-02-10 21:25:31', '', 219, 'http://dam.local/2020/02/10/219-revision-v1/', 0, 'revision', '', 0),
(221, 1, '2020-02-10 21:25:37', '2020-02-10 21:25:37', '', 'Link To Google', '', 'inherit', 'closed', 'closed', '', '219-revision-v1', '', '', '2020-02-10 21:25:37', '2020-02-10 21:25:37', '', 219, 'http://dam.local/2020/02/10/219-revision-v1/', 0, 'revision', '', 0),
(295, 1, '2020-02-14 05:28:05', '2020-02-14 05:28:05', '', 'IMG_1625', '', 'inherit', 'open', 'closed', '', 'img_1625', '', '', '2020-02-14 05:28:05', '2020-02-14 05:28:05', '', 0, 'http://dam.local/wp-content/uploads/2020/02/IMG_1625.mp4', 0, 'attachment', 'video/mp4', 0),
(297, 1, '2020-02-14 05:32:35', '2020-02-14 05:32:35', '', 'vid1', '', 'inherit', 'open', 'closed', '', 'vid1', '', '', '2020-02-14 05:32:35', '2020-02-14 05:32:35', '', 0, 'http://dam.local/wp-content/uploads/2020/02/vid1.mp4', 0, 'attachment', 'video/mp4', 0),
(305, 1, '2020-02-24 20:01:25', '2020-02-24 20:01:25', '', 'So Clean - Damhnait Doyle - lyric video', '', 'inherit', 'open', 'closed', '', 'so-clean-damhnait-doyle-lyric-video', '', '', '2020-02-24 20:01:25', '2020-02-24 20:01:25', '', 0, 'http://dam.local/wp-content/uploads/2020/02/So-Clean-Damhnait-Doyle-lyric-video.mp4', 0, 'attachment', 'video/mp4', 0),
(308, 1, '2020-03-10 21:39:29', '2020-03-10 21:39:29', '', 'So Clean - Damhnait Doyle - lyric video', '', 'inherit', 'open', 'closed', '', 'so-clean-damhnait-doyle-lyric-video-2', '', '', '2020-03-10 21:39:29', '2020-03-10 21:39:29', '', 0, 'http://dam.local/wp-content/uploads/2020/03/So-Clean-Damhnait-Doyle-lyric-video.mp4', 0, 'attachment', 'video/mp4', 0),
(312, 1, '2020-03-14 15:55:01', '2020-03-14 15:55:01', '', 'I STILL SEE U AT PARTIES', '', 'inherit', 'open', 'closed', '', 'i-still-see-u-at-parties', '', '', '2020-03-14 15:55:01', '2020-03-14 15:55:01', '', 0, 'http://dam.local/wp-content/uploads/2020/03/I-STILL-SEE-U-AT-PARTIES.zip', 0, 'attachment', 'application/zip', 0),
(313, 1, '2020-03-14 15:55:09', '2020-03-14 15:55:09', '', 'DM__KIND_OF_LIKE_IT__FINAL', '', 'inherit', 'open', 'closed', '', 'dm__kind_of_like_it__final', '', '', '2020-03-14 17:23:54', '2020-03-14 17:23:54', '', 317, 'http://dam.local/wp-content/uploads/2020/03/DM__KIND_OF_LIKE_IT__FINAL.mp4', 0, 'attachment', 'video/mp4', 0),
(317, 1, '2020-03-14 17:23:54', '2020-03-14 17:23:54', '', 'Kind Of Like  It', '', 'publish', 'closed', 'closed', '', 'kind-of-like-it', '', '', '2020-03-14 17:23:54', '2020-03-14 17:23:54', '', 0, 'http://dam.local/?post_type=asset&#038;p=317', 0, 'asset', '', 0),
(318, 1, '2020-03-14 17:23:54', '2020-03-14 17:23:54', '', 'Kind Of Like  It', '', 'inherit', 'closed', 'closed', '', '317-revision-v1', '', '', '2020-03-14 17:23:54', '2020-03-14 17:23:54', '', 317, 'http://dam.local/2020/03/14/317-revision-v1/', 0, 'revision', '', 0),
(12853, 1, '2020-03-17 15:38:17', '0000-00-00 00:00:00', '', 'Test Loop', '', 'draft', 'closed', 'closed', '', '', '', '', '2020-03-17 15:38:17', '2020-03-17 15:38:17', '', 0, 'http://dam.local/?post_type=asset&#038;p=12853', 0, 'asset', '', 0),
(16955, 1, '2020-04-09 17:47:58', '2020-04-09 17:47:58', '', 'DocX Test', '', 'publish', 'closed', 'closed', '', 'docx-test', '', '', '2020-04-09 17:47:58', '2020-04-09 17:47:58', '', 0, 'https://dam.local/?post_type=asset&#038;p=16955', 0, 'asset', '', 0),
(16956, 1, '2020-04-09 17:47:46', '2020-04-09 17:47:46', '', 'LAM-Bio-2020-FINAL', '', 'inherit', 'open', 'closed', '', 'lam-bio-2020-final', '', '', '2020-04-09 17:47:58', '2020-04-09 17:47:58', '', 16955, 'https://dam.local/wp-content/uploads/2020/04/LAM-Bio-2020-FINAL.docx', 0, 'attachment', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 0),
(16957, 1, '2020-04-09 17:47:58', '2020-04-09 17:47:58', '', 'DocX Test', '', 'inherit', 'closed', 'closed', '', '16955-revision-v1', '', '', '2020-04-09 17:47:58', '2020-04-09 17:47:58', '', 16955, 'https://dam.local/2020/04/09/16955-revision-v1/', 0, 'revision', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_termmeta`
--

CREATE TABLE `wp_termmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_520_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wp_termmeta`
--

INSERT INTO `wp_termmeta` (`meta_id`, `term_id`, `meta_key`, `meta_value`) VALUES
(1, 18, 'project_type', 'single'),
(4, 27, 'project_type', 'single'),
(5, 19, 'project_type', 'tour'),
(6, 23, 'project_type', 'tour'),
(9, 21, 'is_artist_or_project_select_type', 'is_artist_or_project_artist'),
(10, 21, 'project_type', ''),
(11, 34, 'is_artist_or_project_select_type', 'is_artist_or_project_artist'),
(12, 34, 'project_type', ''),
(13, 27, 'is_artist_or_project_select_type', 'is_artist_or_project_project'),
(14, 31, 'is_artist_or_project_select_type', 'is_artist_or_project_artist'),
(15, 31, 'project_type', ''),
(16, 29, 'is_artist_or_project_select_type', 'is_artist_or_project_artist'),
(17, 29, 'project_type', ''),
(18, 33, 'is_artist_or_project_select_type', 'is_artist_or_project_artist'),
(19, 33, 'project_type', ''),
(20, 17, 'is_artist_or_project_select_type', 'is_artist_or_project_artist'),
(21, 17, 'project_type', ''),
(22, 18, 'is_artist_or_project_select_type', 'is_artist_or_project_project'),
(23, 19, 'is_artist_or_project_select_type', 'is_artist_or_project_project'),
(24, 23, 'is_artist_or_project_select_type', 'is_artist_or_project_project'),
(25, 22, 'is_artist_or_project_select_type', 'is_artist_or_project_artist'),
(26, 22, 'project_type', ''),
(27, 30, 'is_artist_or_project_select_type', 'is_artist_or_project_artist'),
(28, 30, 'project_type', ''),
(29, 32, 'is_artist_or_project_select_type', 'is_artist_or_project_artist'),
(30, 32, 'project_type', ''),
(31, 27, 'project_yearyear_select', '2019'),
(32, 18, 'project_yearyear_select', '2019'),
(33, 19, 'project_yearyear_select', '2019'),
(34, 23, 'project_yearyear_select', '2019'),
(59, 43, 'is_artist_or_project_select_type', 'is_artist_or_project_project'),
(60, 43, 'project_type', 'event'),
(61, 43, 'project_yearyear_select', '2022'),
(68, 30, 'project_yearyear_select', ''),
(69, 32, 'project_yearyear_select', ''),
(70, 52, 'is_artist_or_project_select_type', ''),
(71, 52, 'project_type', ''),
(72, 52, 'project_yearyear_select', '');

-- --------------------------------------------------------

--
-- Table structure for table `wp_terms`
--

CREATE TABLE `wp_terms` (
  `term_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(200) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `slug` varchar(200) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `term_group` bigint(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wp_terms`
--

INSERT INTO `wp_terms` (`term_id`, `name`, `slug`, `term_group`) VALUES
(1, 'Uncategorized', 'uncategorized', 0),
(2, 'Mo Kenney', 'mokenney', 0),
(3, 'Joel Plaskett', 'joelplaskett', 0),
(4, 'David Myles', 'davidmyles', 0),
(5, 'Ahead Of Myself', 'ahead-of-myself', 0),
(6, 'Mo Kenney', 'mo-kenney', 0),
(7, 'Ahead Of Myself', 'ahead-of-myself', 0),
(8, 'Australian Tour 2019', 'australian-tour-2019', 0),
(9, 'post-format-image', 'post-format-image', 0),
(10, 'black and white', 'black-and-white', 0),
(11, 'black', 'black', 0),
(12, 'pink text', 'pink-text', 0),
(13, 'mo left hand side', 'mo-left-hand-side', 0),
(14, 'black and white mo', 'black-and-white-mo', 0),
(15, 'Mo Kenney', 'mokenney', 0),
(16, 'Ahead Of Myself', 'ahead-of-myself', 0),
(17, 'Mo Kenney', 'mokenney', 0),
(18, 'Ahead Of Myself', 'ahead-of-myself', 0),
(19, 'Austalian Tour 2019', 'austalian-tour-2019', 0),
(20, 'mo left side', 'mo-left-side', 0),
(21, 'David Myles', 'david-myles', 0),
(22, 'Port Cities', 'port-cities', 0),
(23, 'Crash Test Dummies Tour 2019', 'crash-test-dummies-tour-2019', 0),
(24, 'texas', 'texas', 0),
(25, 'south eastern', 'south-eastern', 0),
(27, '6 Feet Under', '6-feet-under', 0),
(28, 'post-format-audio', 'post-format-audio', 0),
(29, 'Joel Plaskett', 'joel-plaskett', 0),
(30, 'Carleton Stone', 'carleton-stone', 0),
(31, 'Gordie Sampson', 'gordie-sampson', 0),
(32, 'Dylan Guthro', 'dylan-guthro', 0),
(33, 'Kim Stockwood', 'kim-stockwood', 0),
(34, 'Damhnait Doyle', 'damhnait-doyle', 0),
(43, 'Test Project with Hi-Res Images', 'test-project-with-hi-res-images', 0),
(44, 'Audio', 'format_audio', 0),
(45, 'Document', 'format_document', 0),
(46, 'Image', 'format_image', 0),
(47, 'Audio Zip', 'format_audio-zip', 0),
(48, 'Link', 'format_link', 0),
(49, 'Video', 'format_video', 0),
(52, 'Test Port cities Project', 'test-port-cities-project', 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_term_relationships`
--

CREATE TABLE `wp_term_relationships` (
  `object_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `term_order` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wp_term_relationships`
--

INSERT INTO `wp_term_relationships` (`object_id`, `term_taxonomy_id`, `term_order`) VALUES
(15, 6, 0),
(15, 8, 0),
(15, 9, 0),
(15, 15, 0),
(15, 16, 0),
(30, 9, 0),
(30, 10, 0),
(30, 11, 0),
(30, 12, 0),
(30, 17, 0),
(30, 19, 0),
(30, 20, 0),
(30, 46, 0),
(50, 9, 0),
(50, 10, 0),
(50, 17, 0),
(50, 23, 0),
(50, 24, 0),
(50, 25, 0),
(50, 46, 0),
(54, 27, 0),
(54, 28, 0),
(54, 34, 0),
(54, 44, 0),
(89, 9, 0),
(89, 21, 0),
(89, 43, 0),
(89, 46, 0),
(93, 47, 0),
(98, 45, 0),
(104, 4, 0),
(106, 3, 0),
(106, 5, 0),
(108, 4, 0),
(110, 1, 0),
(110, 2, 0),
(110, 3, 0),
(112, 2, 0),
(112, 4, 0),
(114, 1, 0),
(114, 2, 0),
(114, 3, 0),
(116, 2, 0),
(116, 3, 0),
(118, 2, 0),
(118, 3, 0),
(118, 5, 0),
(120, 1, 0),
(120, 2, 0),
(120, 3, 0),
(120, 4, 0),
(122, 1, 0),
(122, 2, 0),
(122, 3, 0),
(122, 5, 0),
(192, 21, 0),
(192, 46, 0),
(195, 46, 0),
(198, 21, 0),
(198, 43, 0),
(198, 49, 0),
(215, 22, 0),
(215, 46, 0),
(215, 52, 0),
(219, 48, 0),
(317, 21, 0),
(317, 49, 0),
(16955, 22, 0),
(16955, 45, 0),
(16955, 52, 0);

-- --------------------------------------------------------

--
-- Table structure for table `wp_term_taxonomy`
--

CREATE TABLE `wp_term_taxonomy` (
  `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL,
  `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `taxonomy` varchar(32) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `description` longtext COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `count` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wp_term_taxonomy`
--

INSERT INTO `wp_term_taxonomy` (`term_taxonomy_id`, `term_id`, `taxonomy`, `description`, `parent`, `count`) VALUES
(1, 1, 'category', '', 0, 0),
(2, 2, 'category', 'Mo Kenney\'s projects and assets.', 0, 0),
(3, 3, 'category', 'Joel Plaskett\'s projects and assets.', 0, 0),
(4, 4, 'category', 'David Myles\' projects and assets.', 0, 0),
(5, 5, 'category', 'Assets related to Ahead Of Myself.', 2, 0),
(6, 6, 'artist', '', 0, 1),
(7, 7, 'project', '', 0, 0),
(8, 8, 'project', '', 0, 1),
(9, 9, 'post_format', '', 0, 0),
(10, 10, 'post_tag', '', 0, 2),
(11, 11, 'post_tag', '', 0, 1),
(12, 12, 'post_tag', '', 0, 1),
(13, 13, 'post_tag', '', 0, 0),
(14, 14, 'post_tag', '', 0, 0),
(15, 15, 'artist-project', 'Mo Kenney\'s projects and assets.', 0, 1),
(16, 16, 'artist-project', 'Assets for Ahead Of Myself.', 15, 1),
(17, 17, 'artist_project', 'Mo Kenney\'s projects and assets.', 0, 2),
(18, 18, 'artist_project', 'Assets for Ahead Of Myself.', 17, 0),
(19, 19, 'artist_project', '', 17, 1),
(20, 20, 'post_tag', '', 0, 1),
(21, 21, 'artist_project', '', 0, 4),
(22, 22, 'artist_project', '', 0, 2),
(23, 23, 'artist_project', '', 17, 1),
(24, 24, 'post_tag', '', 0, 1),
(25, 25, 'post_tag', '', 0, 1),
(27, 27, 'artist_project', '', 34, 1),
(28, 28, 'post_format', '', 0, 0),
(29, 29, 'artist_project', 'Joel Plaskett\'s projects and assets.', 0, 0),
(30, 30, 'artist_project', 'Carleton Stone\'s projects and assets.', 0, 0),
(31, 31, 'artist_project', 'Gordie Sampson\'s projects and assets.', 0, 0),
(32, 32, 'artist_project', 'Dylan Guthro\'s projects and assets.', 0, 0),
(33, 33, 'artist_project', 'Kim Stockwood\'s projects and assets.', 0, 0),
(34, 34, 'artist_project', 'Damhnait Doyle\'s projects and assets.', 0, 1),
(43, 43, 'artist_project', '', 21, 2),
(44, 44, 'format', 'WAV, MP3, URL', 0, 1),
(45, 45, 'format', 'Text, PDF, URL', 0, 2),
(46, 46, 'format', 'JPG, PNG, SVG', 0, 6),
(47, 47, 'format', '', 0, 1),
(48, 48, 'format', '', 0, 1),
(49, 49, 'format', '', 0, 2),
(52, 52, 'artist_project', '', 22, 2);

-- --------------------------------------------------------

--
-- Table structure for table `wp_usermeta`
--

CREATE TABLE `wp_usermeta` (
  `umeta_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_520_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wp_usermeta`
--

INSERT INTO `wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'nickname', 'admin'),
(2, 1, 'first_name', ''),
(3, 1, 'last_name', ''),
(4, 1, 'description', ''),
(5, 1, 'rich_editing', 'true'),
(6, 1, 'syntax_highlighting', 'true'),
(7, 1, 'comment_shortcuts', 'false'),
(8, 1, 'admin_color', 'fresh'),
(9, 1, 'use_ssl', '0'),
(10, 1, 'show_admin_bar_front', 'true'),
(11, 1, 'locale', ''),
(12, 1, 'wp_capabilities', 'a:1:{s:13:\"administrator\";b:1;}'),
(13, 1, 'wp_user_level', '10'),
(14, 1, 'dismissed_wp_pointers', ''),
(15, 1, 'show_welcome_panel', '0'),
(17, 1, 'wp_dashboard_quick_press_last_post_id', '16954'),
(18, 1, 'community-events-location', 'a:1:{s:2:\"ip\";s:9:\"127.0.0.0\";}'),
(19, 1, 'closedpostboxes_dashboard', 'a:4:{i:0;s:19:\"dashboard_right_now\";i:1;s:18:\"dashboard_activity\";i:2;s:21:\"dashboard_quick_press\";i:3;s:17:\"dashboard_primary\";}'),
(20, 1, 'metaboxhidden_dashboard', 'a:0:{}'),
(21, 1, 'closedpostboxes_asset', 'a:0:{}'),
(22, 1, 'metaboxhidden_asset', 'a:3:{i:0;s:12:\"postimagediv\";i:1;s:7:\"slugdiv\";i:2;s:9:\"add-asset\";}'),
(23, 1, 'meta-box-order_asset', 'a:3:{s:4:\"side\";s:44:\"submitdiv,artist_projectdiv,tagsdiv-post_tag\";s:6:\"normal\";s:50:\"asset_format_box_ID,postimagediv,slugdiv,add-asset\";s:8:\"advanced\";s:0:\"\";}'),
(24, 1, 'screen_layout_asset', '2'),
(25, 1, 'wp_user-settings', 'libraryContent=browse&imgsize=large'),
(26, 1, 'wp_user-settings-time', '1581657977'),
(81, 1, 'recent_assets', 'a:10:{i:0;i:219;i:1;i:50;i:2;i:54;i:3;i:89;i:4;i:93;i:5;i:98;i:6;i:192;i:7;i:195;i:8;i:215;i:9;i:317;}'),
(84, 1, 'session_tokens', 'a:1:{s:64:\"f1d16f81313781806c065b409878d27a99a3a83a79b0e1922d60716922c40fd3\";a:4:{s:10:\"expiration\";i:1586623333;s:2:\"ip\";s:9:\"127.0.0.1\";s:2:\"ua\";s:82:\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:74.0) Gecko/20100101 Firefox/74.0\";s:5:\"login\";i:1586450533;}}'),
(85, 2, 'nickname', 'general'),
(86, 2, 'first_name', ''),
(87, 2, 'last_name', ''),
(88, 2, 'description', ''),
(89, 2, 'rich_editing', 'true'),
(90, 2, 'syntax_highlighting', 'true'),
(91, 2, 'comment_shortcuts', 'false'),
(92, 2, 'admin_color', 'fresh'),
(93, 2, 'use_ssl', '0'),
(94, 2, 'show_admin_bar_front', 'true'),
(95, 2, 'locale', ''),
(96, 2, 'wp_capabilities', 'a:1:{s:6:\"editor\";b:1;}'),
(97, 2, 'wp_user_level', '7'),
(98, 2, 'dismissed_wp_pointers', ''),
(99, 2, 'session_tokens', 'a:2:{s:64:\"3ebd08e6d8e13cf1dbabd7775e85552142fb29ee2e220227e5c2d14f9916d565\";a:4:{s:10:\"expiration\";i:1581804813;s:2:\"ip\";s:3:\"::1\";s:2:\"ua\";s:82:\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:72.0) Gecko/20100101 Firefox/72.0\";s:5:\"login\";i:1581632013;}s:64:\"4e3dd50eb0cc0618ed0d60b589cf6996fffbfafa6dca5cd9caa2bee80a7dda20\";a:4:{s:10:\"expiration\";i:1581806978;s:2:\"ip\";s:9:\"127.0.0.1\";s:2:\"ua\";s:82:\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:72.0) Gecko/20100101 Firefox/72.0\";s:5:\"login\";i:1581634178;}}'),
(100, 2, 'wp_dashboard_quick_press_last_post_id', '269');

-- --------------------------------------------------------

--
-- Table structure for table `wp_users`
--

CREATE TABLE `wp_users` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `user_login` varchar(60) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `user_pass` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `user_nicename` varchar(50) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `user_email` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `user_url` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT '0',
  `display_name` varchar(250) COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `wp_users`
--

INSERT INTO `wp_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES
(1, 'admin', '$P$Bzq4MZsJ.J5WRHbglBqDwNZNfcZ2K6.', 'admin', 'nik@ordinaryartistservices.com', '', '2019-12-10 20:14:15', '', 0, 'admin'),
(2, 'general', '$P$BjR9c4WvAxcREEioTTGSdBKKlHwJa01', 'general', 'not@a-user.com', '', '2020-02-13 22:10:35', '', 0, 'general');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wp_commentmeta`
--
ALTER TABLE `wp_commentmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_comments`
--
ALTER TABLE `wp_comments`
  ADD PRIMARY KEY (`comment_ID`),
  ADD KEY `comment_post_ID` (`comment_post_ID`),
  ADD KEY `comment_approved_date_gmt` (`comment_approved`,`comment_date_gmt`),
  ADD KEY `comment_date_gmt` (`comment_date_gmt`),
  ADD KEY `comment_parent` (`comment_parent`),
  ADD KEY `comment_author_email` (`comment_author_email`(10));

--
-- Indexes for table `wp_links`
--
ALTER TABLE `wp_links`
  ADD PRIMARY KEY (`link_id`),
  ADD KEY `link_visible` (`link_visible`);

--
-- Indexes for table `wp_options`
--
ALTER TABLE `wp_options`
  ADD PRIMARY KEY (`option_id`),
  ADD UNIQUE KEY `option_name` (`option_name`),
  ADD KEY `autoload` (`autoload`);

--
-- Indexes for table `wp_postmeta`
--
ALTER TABLE `wp_postmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_posts`
--
ALTER TABLE `wp_posts`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `post_name` (`post_name`(191)),
  ADD KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`ID`),
  ADD KEY `post_parent` (`post_parent`),
  ADD KEY `post_author` (`post_author`);

--
-- Indexes for table `wp_termmeta`
--
ALTER TABLE `wp_termmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `term_id` (`term_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_terms`
--
ALTER TABLE `wp_terms`
  ADD PRIMARY KEY (`term_id`),
  ADD KEY `slug` (`slug`(191)),
  ADD KEY `name` (`name`(191));

--
-- Indexes for table `wp_term_relationships`
--
ALTER TABLE `wp_term_relationships`
  ADD PRIMARY KEY (`object_id`,`term_taxonomy_id`),
  ADD KEY `term_taxonomy_id` (`term_taxonomy_id`);

--
-- Indexes for table `wp_term_taxonomy`
--
ALTER TABLE `wp_term_taxonomy`
  ADD PRIMARY KEY (`term_taxonomy_id`),
  ADD UNIQUE KEY `term_id_taxonomy` (`term_id`,`taxonomy`),
  ADD KEY `taxonomy` (`taxonomy`);

--
-- Indexes for table `wp_usermeta`
--
ALTER TABLE `wp_usermeta`
  ADD PRIMARY KEY (`umeta_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indexes for table `wp_users`
--
ALTER TABLE `wp_users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_login_key` (`user_login`),
  ADD KEY `user_nicename` (`user_nicename`),
  ADD KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wp_commentmeta`
--
ALTER TABLE `wp_commentmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wp_comments`
--
ALTER TABLE `wp_comments`
  MODIFY `comment_ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wp_links`
--
ALTER TABLE `wp_links`
  MODIFY `link_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wp_options`
--
ALTER TABLE `wp_options`
  MODIFY `option_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1747;

--
-- AUTO_INCREMENT for table `wp_postmeta`
--
ALTER TABLE `wp_postmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49943;

--
-- AUTO_INCREMENT for table `wp_posts`
--
ALTER TABLE `wp_posts`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16958;

--
-- AUTO_INCREMENT for table `wp_termmeta`
--
ALTER TABLE `wp_termmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `wp_terms`
--
ALTER TABLE `wp_terms`
  MODIFY `term_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `wp_term_taxonomy`
--
ALTER TABLE `wp_term_taxonomy`
  MODIFY `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `wp_usermeta`
--
ALTER TABLE `wp_usermeta`
  MODIFY `umeta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `wp_users`
--
ALTER TABLE `wp_users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
