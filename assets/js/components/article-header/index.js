import React, { Component } from 'react';
import classnames from 'classnames';

import './style.scss';
import ArticleTitle from 'components/article-title';
import FormattedDate from 'components/formatted-date';

export default class PageHeader extends Component {
    render() {
        const { date, formattedDate, title, type } = this.props;
        const classes = classnames( 'article-header', {
            'fancy': 'post' == type || 'intro' == type,
            'spacer': 'page' == type,
        } );
        return (
            <header className={ classes }>
                { date && formattedDate &&
                    <div className="article-meta">
                        <FormattedDate date={ date } formattedDate={ formattedDate } />
                    </div>
                }
                <ArticleTitle>{ title }</ArticleTitle>
            </header>
        );
    }
}
