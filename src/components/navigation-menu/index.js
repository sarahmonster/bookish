import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';
import { fetchMenu } from 'actions';

class NavigationMenu extends Component {
    componentDidMount () {
        this.props.actions.fetchMenu( this.props.name );
    }

    shouldComponentUpdate( nextProps ) {
        return this.props.name === nextProps.menu.name;
    }

    renderMenu( menu ) {
        if ( this.props.name === menu.name ) {
            return menu.items.map( item => {
                return (
                    <li key={ item.ID } className="navigation-menu-item">
                        <Link className="navigation-menu-link" to={ NavigationMenu.getRelativeUrl( item.url ) }>{ item.title }</Link>
                    </li>
                );
            });
        }
    }

    static getRelativeUrl( url ) {
        if (url === window.location.origin) {
            return '/';
        }

        return url.substr( window.location.origin.length );
    }

    getClasses( location='' ){
        switch(location) {
            case 'main_menu':
                return 'navigation-menu-container main-navigation';
            case 'footer_menu':
                return 'navigation-menu-container footer-navigation';
            default:
                return '';
        }
    }

    render() {
        return (
            <nav className="navigation-menu">
                <ul className={ this.getClasses( this.props.menu.name ) }>
                    { this.renderMenu( this.props.menu ) }
                </ul>
            </nav>
        );
    }
}

function mapStateToProps( { menu } ) {
    return { menu };
}

function mapDispatchToProps( dispatch )  {
    return {
        actions: bindActionCreators(
            { fetchMenu },
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( NavigationMenu );
