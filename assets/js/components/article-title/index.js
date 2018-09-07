import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export default class ArticleTitle extends Component {
    extractPath( link ) {
        const url = document.createElement('a');
        url.href = link;

        return link.replace(`${url.protocol}//${url.host}`, '');
    }

    render() {
        const { link, children } = this.props;
        if ( link ) {
            return (
                <h2>
                    <Link className="article-title" to={ this.extractPath( link ) } dangerouslySetInnerHTML={ {__html: children} } />
                </h2>
            );
        } else {
             return ( <h1 className="article-title" dangerouslySetInnerHTML={ {__html: children} } /> );
        }
    }
}
