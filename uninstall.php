<?php
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

// Delete plugin options
delete_option('toc_block_settings');

// Delete metadata related to TOC
global $wpdb;
$wpdb->query("DELETE FROM $wpdb->postmeta WHERE meta_key='_toc_data'");
