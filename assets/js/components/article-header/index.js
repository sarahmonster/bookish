import React, { Component } from 'react';

import './style.scss';
import ArticleTitle from 'components/article-title';
import FormattedDate from 'components/formatted-date';

export default class PageHeader extends Component {
    render() {
        const { date, formattedDate, title, featuredImage } = this.props;
        return (
            <header className="article-header">
                { date && formattedDate &&
                    <div className="article-meta">
                        <FormattedDate date={ date } formattedDate={ formattedDate } />
                    </div>
                }

                <ArticleTitle>{ title }</ArticleTitle>
                { featuredImage &&
                    <img className="teensy" src={ featuredImage } />
                }
            </header>
        );
    }
}
