<?php

/**
 * Plugin Name: Gallery Show Block
 * Description: Adds a custom block with a 6-field form for gallery show details
 * Version: 0.5.0
 * Author: Ray Weitzenberg
 */

function custom_form_block_enqueue()
{
    // Enqueue Babel standalone
    wp_enqueue_script(
        'babel-standalone',
        'https://unpkg.com/@babel/standalone/babel.min.js',
        array(),
        null,
        true
    );

    // Enqueue block script
    wp_enqueue_script(
        'custom-form-block-editor',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-components', 'babel-standalone'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js'),
        true
    );

    // Add type="text/babel" to script
    add_filter('script_loader_tag', 'add_type_attribute', 10, 3);
}
add_action('enqueue_block_editor_assets', 'custom_form_block_enqueue');

function add_type_attribute($tag, $handle, $src)
{
    if ('custom-form-block-editor' === $handle) {
        $tag = '<script type="text/babel" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}
