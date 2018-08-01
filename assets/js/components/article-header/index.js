import React, { Component } from 'react';

import './style.scss';
import ArticleTitle from 'components/article-title';
import CategoryList from 'components/category-list';
import FormattedDate from 'components/formatted-date';

export default class PageHeader extends Component {
    render() {
        const { categories, date, formattedDate, postType, link, isSingle, title, featuredImage } = this.props;
        return (
            <header className="article-header">
                <div className="article-meta">
                    <CategoryList categories={ categories } />
                    <FormattedDate date={ date } formattedDate={ formattedDate } postType={ postType } isSingle={ isSingle } />
                </div>

                <ArticleTitle link={ link } isSingle={ isSingle }>{ title }</ArticleTitle>
                <img className="teensy" src={ featuredImage } />
            </header>
        );
    }
}
