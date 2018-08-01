import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ArticleTitle extends Component {
    extractPath( link ) {
        const url = document.createElement('a');
        url.href = link;

        return link.replace(`${url.protocol}//${url.host}`, '');
    }

    render() {
        const { link, isSingle, children } = this.props;
        if ( isSingle ) {
            return ( <h1 className="article-title" dangerouslySetInnerHTML={ {__html: children} } /> );
        } else {
            return (
                <Link className="article-title" to={ this.extractPath( link ) }>
                    <h1 dangerouslySetInnerHTML={ {__html: children} } />
                </Link>
            );
        }
    }
}
