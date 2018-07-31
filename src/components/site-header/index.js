import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './style.scss';
import Menu from 'components/menu';
import Search from 'components/search';

class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <h1 className="navbar-brand"><Link to='/'>{RT_API.siteName}</Link></h1>
                <nav className="collapse navbar-collapse">
                    <Menu name="main_menu" />
                    <Search searchTerm={this.props.searchTerm} isSearch={this.props.isSearch} />
                </nav>
            </header>
        );
    }
}

module.exports = Header;
