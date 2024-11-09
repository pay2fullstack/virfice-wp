<?php

namespace Virfice\Includes\ShortCodes;

// Security check to ensure this file is not accessed directly
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class WooCommerceEmailShortcodeReplacer
{
    private $order;
    private $customer;

    public function __construct($order_id)
    {
        $this->order = \wc_get_order($order_id); // Add a leading backslash
        $this->customer = $this->order ? new \WC_Customer($this->order->get_customer_id()) : null; // Add a leading backslash

    }

    public function replace_shortcodes($content)
    {
        if (!$this->order) {
            return $content;
        }

        // Define the shortcodes and their replacements
        $shortcodes = [
            '{site_title}' => get_bloginfo('name'),
            '{order_date}' => $this->order->get_date_created()->date('F j, Y'),
            '{order_number}' => $this->order->get_order_number(),
            '{order_total}' => \wc_price($this->order->get_total()),
            '{order_subtotal}' => \wc_price($this->order->get_subtotal()),
            '{order_payment_method}' => $this->order->get_payment_method_title(),
            '{order_billing_address}' => $this->order->get_formatted_billing_address(),
            '{order_shipping_address}' => $this->order->get_formatted_shipping_address(),
            '{customer_first_name}' => $this->order->get_billing_first_name(),
            '{customer_last_name}' => $this->order->get_billing_last_name(),
            '{customer_full_name}' => $this->order->get_billing_first_name() . ' ' . $this->order->get_billing_last_name(),
            '{customer_email}' => $this->order->get_billing_email(),
            '{store_url}' => get_home_url(),
            '{store_address}' => $this->get_store_address(),
            '{store_phone}' => get_option('woocommerce_store_phone'),
            '{discount_amount}' => \wc_price($this->get_order_discount()),
            '{shipping_method}' => $this->order->get_shipping_method(),
            '{tracking_number}' => $this->get_tracking_number(),
            '{subscription_number}' => $this->get_subscription_number(),
            '{subscription_date}' => $this->get_subscription_date(),
            '{subscription_total}' => $this->get_subscription_total(),
        ];

        // Handle conditional shortcodes
        $content = $this->replace_conditional_shortcodes($content);

        // Replace simple shortcodes
        foreach ($shortcodes as $shortcode => $value) {
            $content = str_replace($shortcode, $value, $content);
        }

        // Replace item-specific shortcodes if applicable
        $content = $this->replace_item_shortcodes($content);

        return $content;
    }

    private function replace_conditional_shortcodes($content)
    {
        // Handle [if_paid]content[/if_paid]
        if ($this->order->is_paid()) {
            $content = preg_replace('/\[if_paid\](.*?)\[\/if_paid\]/s', '$1', $content);
        } else {
            $content = preg_replace('/\[if_paid\].*?\[\/if_paid\]/s', '', $content);
        }

        // Handle [if_pending]content[/if_pending]
        if ($this->order->get_status() === 'pending') {
            $content = preg_replace('/\[if_pending\](.*?)\[\/if_pending\]/s', '$1', $content);
        } else {
            $content = preg_replace('/\[if_pending\].*?\[\/if_pending\]/s', '', $content);
        }

        return $content;
    }

    private function replace_item_shortcodes($content)
    {
        // Find and replace item-specific shortcodes if applicable
        if (strpos($content, '{item_') !== false) {
            $items_content = '';
            foreach ($this->order->get_items() as $item) {
                $item_data = [
                    '{item_name}' => $item->get_name(),
                    '{item_quantity}' => $item->get_quantity(),
                    '{item_price}' => \wc_price($item->get_total()),
                    '{item_sku}' => $item->get_product() ? $item->get_product()->get_sku() : ''
                ];

                $item_content = $content;
                foreach ($item_data as $shortcode => $value) {
                    $item_content = str_replace($shortcode, $value, $item_content);
                }

                $items_content .= $item_content;
            }
            $content = $items_content;
        }
        return $content;
    }

    private function get_store_address()
    {
        $address = [
            get_option('woocommerce_store_address'),
            get_option('woocommerce_store_address_2'),
            get_option('woocommerce_store_city'),
            get_option('woocommerce_store_postcode')
        ];

        return implode(', ', array_filter($address));
    }

    private function get_order_discount()
    {
        $discount_total = 0;
        foreach ($this->order->get_items('coupon') as $item) {
            $discount_total += $item->get_discount();
        }
        return $discount_total;
    }

    private function get_tracking_number()
    {
        // Placeholder: Replace with actual tracking plugin method if available
        return $this->order->get_meta('tracking_number', true);
    }

    private function get_subscription_number()
    {
        return $this->order->get_meta('_subscription_number', true) ?: '';
    }

    private function get_subscription_date()
    {
        $date = $this->order->get_meta('_subscription_date', true);
        return $date ? date('F j, Y', strtotime($date)) : '';
    }

    private function get_subscription_total()
    {
        return $this->order->get_meta('_subscription_total', true) ? \wc_price($this->order->get_meta('_subscription_total', true)) : '';
    }
}

// Usage
// $order_id = 123; // Replace with the actual order ID
// $content = "Thank you {customer_full_name} for your purchase on {order_date}. Your order number is {order_number} and total amount is {order_total}.";

// $replacer = new WooCommerceEmailShortcodeReplacer($order_id);
// $email_content = $replacer->replace_shortcodes($content);

// echo $email_content;
