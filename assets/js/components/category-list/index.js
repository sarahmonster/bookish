import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export default class CategoryList extends Component {
    renderCategories() {
        const { categories } = this.props;

        if ( 'undefined' !== typeof categories ) {
            return categories.map( ( cat, i ) => {
                if ( 1 == categories.length || cat.slug !== 'uncategorized' ) {
                    return (
                        <span key={ cat.term_id }>
                            <Link to={ this.getCategoryPath( cat.link ) } className="category-link">#{ cat.name }</Link>
                        </span>
                    );
                }
            });
        }
    }

    getCategoryPath( link ) {
        var el = document.createElement( 'a' );
        el.href = link;
        return el.pathname;
    }

    render() {
        return (
            <div className="category-list">
                { this.renderCategories() }
            </div>
        );
    }
}
