<?php
/*
Plugin Name: Image Post Gallery
Description: A plugin for display a shortcode gallery
Version: 1.0.0
Author: M.Mehdi
*/

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

define('IPG_VERSION', '1.0.0');
define('IPG_DIR_PATH', plugin_dir_path(__FILE__));
define('IPG_DIR_URL', plugin_dir_url(__FILE__));

// Include necessary files
include_once IPG_DIR_PATH . '/inc/dump-shortcode.php';
include_once IPG_DIR_PATH . '/view/gallery-view.php';
include_once IPG_DIR_PATH . '/inc/add-metabox.php';

function save_custom_images_metabox($post_id)
{
    // جلوگیری از ذخیره‌سازی خودکار وردپرس
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return $post_id;

    // بررسی امکان ویرایش پست توسط کاربر
    if (!current_user_can('edit_post', $post_id)) return $post_id;

    // پردازش و ذخیره ID‌های تصاویر
    if (isset($_POST['custom_image_ids'])) {
        $image_ids = sanitize_text_field($_POST['custom_image_ids']);
        $image_ids = implode(',', array_map('intval', explode(',', $image_ids)));

        if ($image_ids) {
            update_post_meta($post_id, '_custom_image_ids', $image_ids);
        } else {
            delete_post_meta($post_id, '_custom_image_ids');
        }
    }

    // پردازش و ذخیره ID تصویر تکی
    if (isset($_POST['custom_single_image_id'])) {
        $single_image_id = intval($_POST['custom_single_image_id']);

        if ($single_image_id) {
            update_post_meta($post_id, '_custom_single_image_id', $single_image_id);
        } else {
            delete_post_meta($post_id, '_custom_single_image_id');
        }
    }

    return $post_id;
}
add_action('save_post', 'save_custom_images_metabox');




// function enqueue_lightgallery_and_slick()
// {
//     // بارگذاری jQuery پیش‌فرض وردپرس
//     wp_enqueue_script('jquery');

//     // بارگذاری lightGallery از CDN
//     wp_enqueue_script('lightgallery', 'https://cdn.skypack.dev/lightgallery@2.0.0-beta.3', array('jquery'), null, true);

//     // بارگذاری CSS مربوط به lightGallery
//     wp_enqueue_style('lightgallery-css', 'https://cdn.skypack.dev/lightgallery@2.0.0-beta.3/css/lightgallery.min.css');

//     // بارگذاری Slick Carousel از CDN
//     wp_enqueue_script('slick-js', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), null, true);

//     // بارگذاری CSS مربوط به Slick Carousel
//     wp_enqueue_style('slick-css', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
//     wp_enqueue_style('slick-theme-css', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css');
// }
// add_action('wp_enqueue_scripts', 'enqueue_lightgallery_and_slick');


// function enqueue_assets()
// {
//     // Define the base URL
//     $base_url = IPG_DIR_URL;

//     // Styles
//     echo "<link rel='stylesheet' id='woocommerce-layout-rtl-css' href='{$base_url}assets/css/woocommerce-layout-rtl5125.css?ver=7.9.0' media='all' />\n";
//     echo "<link rel='stylesheet' id='custom-styles-css' href='{$base_url}assets/css/new-styles84fc.css?ver=6.4.3' media='all' />\n";
//     echo "<link rel='stylesheet' id='bootstrap-css' href='{$base_url}assets/css/bootstrap.rtl.min2513.css?ver=5.2.3' media='all' />\n";
//     echo "<link rel='stylesheet' id='owl-carousel-css' href='{$base_url}assets/css/owl.carousel.min531b.css?ver=2.3.4' media='all' />\n";
//     echo "<link rel='stylesheet' id='owl-carousel-default-css' href='{$base_url}assets/css/owl.theme.default.min531b.css?ver=2.3.4' media='all' />\n";
//     echo "<link rel='stylesheet' id='vertuka-style-css' href='{$base_url}assets/css/style396f.css?ver=2.1.338' media='all' />\n";
//     echo "<link rel='stylesheet' id='vertuka-responsive-css' href='{$base_url}assets/css/responsive396f.css?ver=2.1.338' media='all' />\n";

//     // Scripts
//     echo "<script src='{$base_url}assets/js/jquery.minf43b.js?ver=3.7.1' id='jquery-core-js'></script>\n";
//     echo "<script src='{$base_url}assets/js/jquery-migrate.min5589.js?ver=3.4.1' id='jquery-migrate-js'></script>\n";
//     echo "<script src='{$base_url}assets/js/bootstrap.bundle.min2513.js?ver=5.2.3' id='bootstrap-js'></script>\n";
//     echo "<script src='{$base_url}assets/js/owl.carousel.min531b.js?ver=2.3.4' id='owl-carousel-js'></script>\n";
//     echo "<script src='{$base_url}assets/js/jquery.datatables.min0da7.js?ver=2.1.327' id='jquery-datatable-js'></script>\n";
//     echo "<script src='{$base_url}assets/js/datatables.bootstrap4.min0da7.js?ver=2.1.327' id='datatable-bootstrap-js'></script>\n";
//     echo "<script src='{$base_url}assets/js/scripts0da7.js?ver=2.1.327' id='vertuka-scripts-js'></script>\n";
//     echo "<script src='https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min84fc.js?ver=6.4.3' id='slick-carousel-js'></script>\n";

//     // Additional Script
//     echo "<script id='slick-carousel-js-after'>
//         jQuery(document).ready(function ($) {
//             $('.custom-gallery-slider').not('.slick-initialized').slick({
//                 dots: true,
//                 infinite: true,
//                 speed: 500,
//                 fade: true,
//                 cssEase: 'linear',
//                 adaptiveHeight: true
//             });
//         });
//     </script>\n";
// }
// add_action('wp_head', 'enqueue_assets');
