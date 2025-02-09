<?php
/**
 * Plugin Name: Table of Contents Very Simple Block
 * Description: A Gutenberg block that automatically generates a Table of Contents.
 * Version: 1.0.0
 * Author: Maria Zebroff
 * Author URI: http://mariazebroff.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: toc-block
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Define plugin path
define('TOC_BLOCK_PLUGIN_DIR', plugin_dir_path(__FILE__));




class TocBlock {
    function __construct()
    {
        add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
        add_action('wp_enqueue_scripts', array($this, 'frontendAssets'));
    }

    function adminAssets() {
        wp_enqueue_script('toc-block-editor', plugin_dir_url(__FILE__) . '/build/editor.js', array('wp-blocks', 'wp-editor', 'wp-element', 'wp-components', 'wp-i18n', 'wp-block-editor'));

    }

    function frontendAssets() {
        wp_enqueue_script('toc-frontend', plugin_dir_url(__FILE__) . '/build/frontend.js',
            array('wp-blocks', 'wp-editor', 'wp-element', 'wp-components', 'wp-i18n', 'wp-block-editor')
        );
    }
}

$TocBlock = new TocBlock();


// [toc shownumbers="true" collapsible="true"]
// [toc]
function toc_shortcode($atts) {
    global $post;

    if (!$post) {
        return ''; // Exit if no post content is available
    }

    // Set default values for attributes
    $atts = shortcode_atts(
        array(
            'shownumbers' => false,   // Default value for showNumbers
            'collapsible' => false,    // Default value for collapsible
        ),
        $atts, 'toc'  // 'toc' is the name of the shortcode
    );

    //var_dump($atts);
    $atts['shownumbers'] = filter_var($atts['shownumbers'], FILTER_VALIDATE_BOOLEAN);
    $atts['collapsible'] = filter_var($atts['collapsible'], FILTER_VALIDATE_BOOLEAN);



    // Extract headings (h1 - h6) from post content
    preg_match_all('/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/', $post->post_content, $matches, PREG_SET_ORDER);

    $headings = array();
    foreach ($matches as $match) {
        $level = 'h' . $match[1];
        $text = strip_tags($match[2]); // Get heading text
        $id = sanitize_title($text); // Generate ID from text

        if (substr($text, -1) === '?') {
            $id .= '?';
        }else if (substr($text, -1) === '!'){
            $id .= '!';
        }

        // Store heading data
        $headings[] = array(
            'level' => $level,
            'text'  => $text,
            'id'    => $id,
        );
    }

    // Combine attributes and headings into a single array
    $attributes = array(
        'showNumbers' => $atts['shownumbers'],
        'collapsible' => $atts['collapsible'],
        'headings'    => $headings,
    );
// echo "LLLLLLLLL";
    //var_dump($attributes);
    //var_dump($atts);

    // JSON encode the attributes to pass to the frontend
    $attributes_json = json_encode($attributes);

    // Return the necessary HTML structure with the encoded attributes
    return '<div class="wp-block-toc-block">
                <div class="data-div" data-attributes=\'' . esc_attr($attributes_json) . '\'>TOC BLOCK</div>
            </div>';
}

// Register the shortcode
add_shortcode('toc', 'toc_shortcode');



