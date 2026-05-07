<?php
/**
 * Plugin Name: Thailande Services — Assistant assurance (chatbot)
 * Description: Widget flottant « Assistant assurance » : collecte multi-personnes et envoi via Web3Forms (sans hCaptcha dans l’UI du chat), comme sur thailande-services.fr.
 * Version: 1.0.5
 * Author: Thailande-services
 * License: GPLv2 or later
 * Text Domain: ts-chatbot
 */

if (!defined('ABSPATH')) {
    exit;
}

define('TS_ASSURANCE_CHATBOT_VERSION', '1.0.5');
define('TS_ASSURANCE_CHATBOT_DIR', plugin_dir_path(__FILE__));
define('TS_ASSURANCE_CHATBOT_URL', plugin_dir_url(__FILE__));
global $ts_assurance_chatbot_rendered;
$ts_assurance_chatbot_rendered = false;

add_action('admin_menu', function () {
    add_options_page(
        __('Assistant assurance', 'thailande-services-assurance-chatbot'),
        __('Assistant assurance', 'thailande-services-assurance-chatbot'),
        'manage_options',
        'ts-assurance-chatbot',
        'ts_assurance_chatbot_render_settings_page'
    );
});

add_action('admin_init', function () {
    register_setting('ts_assurance_chatbot', 'ts_chatbot_access_key', [
        'type' => 'string',
        'sanitize_callback' => 'sanitize_text_field',
        'default' => '',
    ]);
    register_setting('ts_assurance_chatbot', 'ts_chatbot_wa_url', [
        'type' => 'string',
        'sanitize_callback' => 'esc_url_raw',
        'default' => 'https://wa.me/66634432634',
    ]);
    register_setting('ts_assurance_chatbot', 'ts_chatbot_from_name', [
        'type' => 'string',
        'sanitize_callback' => 'sanitize_text_field',
        'default' => 'WordPress — chatbot assurance',
    ]);
});

function ts_assurance_chatbot_render_settings_page(): void
{
    if (!current_user_can('manage_options')) {
        return;
    }
    ?>
    <div class="wrap">
        <h1><?php echo esc_html__('Assistant assurance (chatbot)', 'thailande-services-assurance-chatbot'); ?></h1>
        <p>
            <?php echo esc_html__('Même clé Web3Forms que le formulaire contact, ou une clé dédiée sans hCaptcha côté Web3Forms pour les envois automatiques.', 'thailande-services-assurance-chatbot'); ?>
            <a href="https://web3forms.com" target="_blank" rel="noopener">web3forms.com</a>
        </p>
        <form method="post" action="options.php">
            <?php settings_fields('ts_assurance_chatbot'); ?>
            <table class="form-table" role="presentation">
                <tr>
                    <th scope="row"><label for="ts_chatbot_access_key"><?php echo esc_html__('Access key Web3Forms', 'thailande-services-assurance-chatbot'); ?></label></th>
                    <td>
                        <input name="ts_chatbot_access_key" id="ts_chatbot_access_key" type="text" class="regular-text"
                               value="<?php echo esc_attr(get_option('ts_chatbot_access_key', '')); ?>" autocomplete="off"/>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="ts_chatbot_wa_url"><?php echo esc_html__('Lien WhatsApp (wa.me)', 'thailande-services-assurance-chatbot'); ?></label></th>
                    <td>
                        <input name="ts_chatbot_wa_url" id="ts_chatbot_wa_url" type="url" class="regular-text"
                               value="<?php echo esc_attr(get_option('ts_chatbot_wa_url', 'https://wa.me/66634432634')); ?>"/>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="ts_chatbot_from_name"><?php echo esc_html__('From name (e-mail)', 'thailande-services-assurance-chatbot'); ?></label></th>
                    <td>
                        <input name="ts_chatbot_from_name" id="ts_chatbot_from_name" type="text" class="regular-text"
                               value="<?php echo esc_attr(get_option('ts_chatbot_from_name', 'WordPress — chatbot assurance')); ?>"/>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
        <h2><?php echo esc_html__('Affichage', 'thailande-services-assurance-chatbot'); ?></h2>
        <p><code>[ts_assurance_chatbot]</code> — <?php echo esc_html__('placez ce shortcode dans un widget HTML ou le contenu d’une page (souvent le pied de page).', 'thailande-services-assurance-chatbot'); ?></p>
        <p>
            <?php echo esc_html__('Option : ajoutez dans le thème (header) une meta pour repli de clé :', 'thailande-services-assurance-chatbot'); ?>
            <code>&lt;meta name="web3forms-access-key" content="VOTRE_CLE" /&gt;</code>
        </p>
    </div>
    <?php
}

add_shortcode('ts_assurance_chatbot', function () {
    global $ts_assurance_chatbot_rendered;
    $ts_assurance_chatbot_rendered = true;
    ob_start();
    echo '<div id="ts-assurance-chatbot" class="ts-assurance-chatbot-mount"></div>';
    return (string) ob_get_clean();
});

/**
 * Repli global : affiche le chatbot dans le footer si le shortcode n'a pas été rendu.
 * Utile sur certains builders / pages d'accueil qui n'interprètent pas les shortcodes.
 */
add_action('wp_footer', function () {
    if (is_admin() || wp_doing_ajax() || is_feed() || is_embed()) {
        return;
    }
    global $ts_assurance_chatbot_rendered;
    if ($ts_assurance_chatbot_rendered) {
        return;
    }
    echo '<div id="ts-assurance-chatbot" class="ts-assurance-chatbot-mount"></div>';
}, 30);

add_action('wp_enqueue_scripts', function () {
    $key = get_option('ts_chatbot_access_key', '');
    $key = is_string($key) ? trim($key) : '';
    if (!apply_filters('ts_assurance_chatbot_enqueue_assets', true)) {
        return;
    }

    wp_enqueue_style(
        'ts-assurance-chatbot',
        TS_ASSURANCE_CHATBOT_URL . 'assets/chatbot.css',
        [],
        TS_ASSURANCE_CHATBOT_VERSION
    );

    wp_enqueue_script(
        'ts-assurance-chatbot',
        TS_ASSURANCE_CHATBOT_URL . 'assets/chatbot.js',
        [],
        TS_ASSURANCE_CHATBOT_VERSION,
        true
    );

    wp_localize_script('ts-assurance-chatbot', 'tsAssuranceChatbot', [
        'accessKey' => $key,
        'waMeUrl' => get_option('ts_chatbot_wa_url', 'https://wa.me/66634432634'),
        'fromName' => get_option('ts_chatbot_from_name', 'WordPress — chatbot assurance'),
    ]);
});
