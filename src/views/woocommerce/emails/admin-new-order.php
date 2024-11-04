<?php

use Virfice\Includes\ShortCodes\DomShortCode;
use Virfice\Utils;

if (! defined('ABSPATH')) {
    exit;
}
$email_id = 'new_order';
$template = Utils::get_template_content_from_woo_email_id($email_id);


// Start output buffering
ob_start();
// Execute the action, which will output content to the buffer
do_action('woocommerce_email_order_details', $order, $sent_to_admin, $plain_text, $email);
// Get the contents of the buffer and save it to a string
$woocommerce_email_order_details = ob_get_clean();



//TODO: do shortcodes
$template = DomShortCode::run($template, ['woocommerce_email_order_details' => $woocommerce_email_order_details]);

// echo Utils::virfice_wp_kses_allowed_html($template);
echo $template;
