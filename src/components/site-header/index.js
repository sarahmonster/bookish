import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import NavigationMenu from 'components/navigation-menu';
import Search from 'components/search';

class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <h1 className="site-branding"><Link to='/'>{ RT_API.siteName }</Link></h1>
                <NavigationMenu name="main_menu" />
            </header>
        );
    }
}

module.exports = Header;
