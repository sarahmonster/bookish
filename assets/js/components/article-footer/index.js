import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTaxInfo } from 'actions';
import TagList from 'components/tag-list';
import CategoryList from 'components/category-list';
import './style.scss';

export default class ArticleFooter extends Component {
    render() {
        const { categories, tags, isSingle } = this.props;

        return (
            <footer className="article-footer">
                <CategoryList categories={ categories } />
                <TagList tagIDs={ tags } isSingle={ isSingle } />
            </footer>
        );
    }
}
