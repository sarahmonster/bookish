import React, { Component } from 'react';

import './style.scss';
import NavigationMenu from 'components/navigation-menu';

export default class SiteFooter extends Component {
    render() {
        return (
            <footer id="colophon" className="site-footer" role="contentinfo">
                <div className="site-info">
                   Made with <span className="emoji">❤️</span> and <a href="https://wordpress.org">WordPress</a>
                    <span className="sep"> &middot; </span>
                    Theme on <a href="https://github.com/sarahmonster/bookish/" rel="designer">Github</a>
                </div>

                <NavigationMenu name="footer_menu"/>
            </footer>
        );
    }
}
