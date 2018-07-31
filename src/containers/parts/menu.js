import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchMenu} from '../../actions';

class Menu extends Component {
    componentDidMount () {
        this.props.actions.fetchMenu(this.props.name);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.name === nextProps.menu.name;
    }

    renderMenu(menu) {
        if ( this.props.name === menu.name) {
            return menu.items.map(item => {
                return (
                    <li key={item.ID} className="nav-item">
                        <Link className="nav-link" to={Menu.getRelativeUrl(item.url)}>{item.title}</Link>
                    </li>
                );
            });
        }
    }

    static getRelativeUrl(url) {
        if (url === window.location.origin) {
            return '/';
        }

        return url.substr(window.location.origin.length);
    }

    getClasses(location=''){
        switch(location) {
            case 'main_menu':
                return 'navbar-nav mr-auto';
            case 'footer_menu':
                return 'nav justify-content-center';
            default:
                return '';
        }
    }

    render() {
        console.log("MENU",this.props)
        return (
            <ul className={this.getClasses(this.props.menu.name)}>
                {this.renderMenu(this.props.menu)}
            </ul>
        );
    }
}

function mapStateToProps({menu}) {
    return {menu};
}

function mapDispatchToProps(dispatch)  {
    return {
        actions: bindActionCreators({fetchMenu}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);