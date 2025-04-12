<?php

namespace SuperFrete_API\Helpers;

if (!defined('ABSPATH')) exit; // Segurança

class SuperFrete_Notice {

    /**
     * Adiciona uma mensagem de erro para exibição no popup
     * @param string $message Mensagem de erro a ser exibida.
     * @param array $missing_fields Campos que precisam ser preenchidos.
     */
    public static function add_error($order_id, $message, $missing_fields = []) {
        if (!session_id()) {
            session_start();
        }

        $_SESSION['superfrete_errors'][] = [
            'message' => $message,
            'missing_fields' => $missing_fields,
            'order_id' => $order_id
        ];
    }

    /**
     * Exibe os erros armazenados em um popup no frontend
     */
public static function display_errors() {
    if (!session_id()) {
        session_start();
    }

    if (!empty($_SESSION['superfrete_errors'])) {
        $error_data = array_pop($_SESSION['superfrete_errors']); // Pega o erro mais recente
        $message = $error_data['message'];
        $missing_fields = $error_data['missing_fields'];
        $order_id = $error_data['order_id'];
        
        echo '<div id="superfrete-popup" class="superfrete-popup">';
        echo '<div class="superfrete-popup-content">';
      
        echo '<h3>Erro no Cálculo do Frete</h3>';
        echo '<p>' . esc_html($message) . '</p>';
        
        // Se há campos ausentes, exibe o formulário para preenchimento
        if (!empty($missing_fields)) {
            echo '<form id="superfrete-form">';
            echo '<input type="hidden" id="order_id" name="order_id" value="' . esc_attr($order_id) . '" required>';
            
            // Adiciona o campo oculto para o nonce
  echo '<input type="hidden" name="_ajax_nonce" value="' . esc_attr(wp_create_nonce('superfrete_update_address_nonce')) . '">';          
            foreach ($missing_fields as $field => $label) {
                echo '<label>' . esc_html($label) . '</label>';
                echo '<input type="text" name="' . esc_attr($field) . '" required>';
            }
            echo '<button type="submit">Corrigir Dados</button>';
            echo '</form>';
        }

        echo '</div></div>';
    }
}
}

// Garante que o popup seja carregado no frontend
add_action('wp_footer', ['SuperFrete_API\Helpers\SuperFrete_Notice', 'display_errors']);