<?php

class Filters_Widget extends WP_Widget {

	public function __construct() {

		parent::__construct(
			'filters-widget',
			__( 'Filters', 'text_domain' ),
			array(
				'description' => __( 'Displays a list of Artists and projects.', 'text_domain' ),
				'classname'   => 'filters-class',
			)
		);

	}

	public function widget( $args, $instance ) {

		echo "widget output";

	}

	public function form( $instance ) {

	}

	public function update( $new_instance, $old_instance ) {

	}

}

function dam_filters_register_widgets() {
	register_widget( 'Filters_Widget' );
}
add_action( 'widgets_init', 'dam_filters_register_widgets' );

?>