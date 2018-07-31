<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Theme_Support' ) ) :

	class Theme_Support {
		function __construct() {
		}

		function init() {
			$this->hooks();
			$this->menus();
		}

		private function hooks() {
			$this->remove_junk();
			$this->add_typekit();
			add_theme_support( 'post-thumbnails' );
			add_filter( 'rest_allow_anonymous_comments', '__return_true' );
			add_action( 'after_setup_theme', [ $this, 'title_tag' ] );
			add_filter( 'nav_menu_css_class', [ $this, 'bootstrap_menu_classes' ], 1, 3 );
			add_filter( 'nav_menu_link_attributes', [ $this, 'bootstrap_menu_link_classes' ], 10, 3 );
			add_action( 'get_search_form', [ $this, 'alt_search_form' ] );
		}

		function bootstrap_menu_classes( $classes, $item, $args ) {
			$classes[] = 'nav-item';

			return $classes;
		}

		function bootstrap_menu_link_classes( $atts, $item, $args ) {
			$atts['class'] = 'nav-link';


			return $atts;
		}

		function alt_search_form() {
			$form = '<form role="search" method="get" id="searchform" class="form-inline my-2 my-lg-0" action="' . home_url( '/' ) . '" >
                        <input type="text" value="' . get_search_query() . '" name="s" class="form-control mr-sm-2" placeholder="Search for..." />
    				</form>';

			return $form;
		}

		private function remove_junk() {
			remove_action( 'wp_head', 'rsd_link' ); // remove really simple discovery link
			remove_action( 'wp_head', 'wp_generator' ); // remove wordpress version

			remove_action( 'wp_head', 'feed_links', 2 ); // remove rss feed links (make sure you add them in yourself if youre using feedblitz or an rss service)
			remove_action( 'wp_head', 'feed_links_extra', 3 ); // removes all extra rss feed links

			remove_action( 'wp_head', 'index_rel_link' ); // remove link to index page
			remove_action( 'wp_head', 'wlwmanifest_link' ); // remove wlwmanifest.xml (needed to support windows live writer)

			remove_action( 'wp_head', 'start_post_rel_link', 10, 0 ); // remove random post link
			remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); // remove parent post link
			remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 ); // remove the next and previous post links
			remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );

			remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0 );
		}

		private function add_typekit() {
			/**
			 * Enqueue Typekit fonts
			 *
			 * @action wp_head
			 * @return string
			 */
			function phoenix_fonts() {
				$kit = 'rmt3uuy';
				?>
				<script>
				    // try{!function(t,e,n,r,a,s,i,l)
				</script>
				<script>
				(function(d) {
				var config = {
					kitId: '<?php echo $kit; ?>',
					scriptTimeout: 3000
				},
				h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
				})(document);
			</script>
				<?php
			}
			add_action( 'wp_head', 'phoenix_fonts', 20 );
		}

		private function menus() {
			register_nav_menus( array(
				'main_menu'   => 'Main Menu',
				'footer_menu' => 'Footer Menu',
			) );
		}


		public function title_tag() {
			add_theme_support( 'title-tag' );
		}

	}

endif;
