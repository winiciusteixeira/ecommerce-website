<?php
/**
 * Class WC_Shipping_Local_Pickup file.
 *
 * @package WooCommerce\Shipping
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Automattic\WooCommerce\Enums\ProductTaxStatus;

/**
 * Local Pickup Shipping Method.
 *
 * A simple shipping method allowing free pickup as a shipping method.
 *
 * @class       WC_Shipping_Local_Pickup
 * @version     2.6.0
 * @package     WooCommerce\Classes\Shipping
 */
class WC_Shipping_Local_Pickup extends WC_Shipping_Method {

	/**
	 * Shipping method cost.
	 *
	 * @var string
	 */
	public $cost;


	/**
	 * Constructor.
	 *
	 * @param int $instance_id Instance ID.
	 */
	public function __construct( $instance_id = 0 ) {
		$this->id                 = 'local_pickup';
		$this->instance_id        = absint( $instance_id );
		$this->method_title       = __( 'Local pickup', 'woocommerce' );
		$this->method_description = __( 'Allow customers to pick up orders themselves. By default, when using local pickup store base taxes will apply regardless of customer address.', 'woocommerce' );
		$this->supports           = array(
			'shipping-zones',
			'instance-settings',
			'instance-settings-modal',
		);
		$this->init();
	}

	/**
	 * Initialize local pickup.
	 */
	public function init() {

		// Load the settings.
		$this->init_form_fields();
		$this->init_settings();

		// Define user set variables.
		$this->title      = $this->get_option( 'title' );
		$this->tax_status = $this->get_option( 'tax_status' );
		$this->cost       = $this->get_option( 'cost' );

		// Actions.
		add_action( 'woocommerce_update_options_shipping_' . $this->id, array( $this, 'process_admin_options' ) );
	}

	/**
	 * Calculate local pickup shipping.
	 *
	 * @param array $package Package information.
	 */
	public function calculate_shipping( $package = array() ) {
		$this->add_rate(
			array(
				'label'   => $this->title,
				'package' => $package,
				'cost'    => $this->cost,
			)
		);
	}

	/**
	 * Sanitize the cost field.
	 *
	 * @since 8.3.0
	 * @param string $value Unsanitized value.
	 * @throws Exception Last error triggered.
	 * @return string
	 */
	public function sanitize_cost( $value ) {
		return \Automattic\WooCommerce\Utilities\NumberUtil::sanitize_cost_in_current_locale( $value );
	}

	/**
	 * Init form fields.
	 */
	public function init_form_fields() {
		$this->instance_form_fields = array(
			'title'      => array(
				'title'       => __( 'Name', 'woocommerce' ),
				'type'        => 'text',
				'description' => __( 'Your customers will see the name of this shipping method during checkout.', 'woocommerce' ),
				'default'     => __( 'Local pickup', 'woocommerce' ),
				'placeholder' => __( 'e.g. Local pickup', 'woocommerce' ),
				'desc_tip'    => true,
			),
			'tax_status' => array(
				'title'   => __( 'Tax status', 'woocommerce' ),
				'type'    => 'select',
				'class'   => 'wc-enhanced-select',
				'default' => ProductTaxStatus::TAXABLE,
				'options' => array(
					ProductTaxStatus::TAXABLE => __( 'Taxable', 'woocommerce' ),
					ProductTaxStatus::NONE    => _x( 'None', 'Tax status', 'woocommerce' ),
				),
			),
			'cost'       => array(
				'title'             => __( 'Cost', 'woocommerce' ),
				'type'              => 'text',
				'class'             => 'wc-shipping-modal-price',
				'placeholder'       => wc_format_localized_price( 0 ),
				'description'       => __( 'Optional cost for local pickup.', 'woocommerce' ),
				'default'           => '',
				'desc_tip'          => true,
				'sanitize_callback' => array( $this, 'sanitize_cost' ),
			),
		);
	}
}
