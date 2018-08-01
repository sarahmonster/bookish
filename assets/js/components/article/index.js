import React, { Component } from 'react';

import './style.scss';
import ArticleHeader from 'components/article-header';
import Content from 'components/content';
import Meta from 'components/meta';
import ArticleFooter from 'components/article-footer';

export default class Article extends Component {
	getClasses() {
		return this.props.isSingle ? 'card single w-75' : 'card archive';
	 }

	getFeaturedImageSrc() {
		if (this.props.post.featured_image_url) {
			return this.props.isSingle ? this.props.post.featured_image_url.large : this.props.post.featured_image_url.full;
		 } else {
			return '';
		 }
	 }

	getCategories(cat_ids) {
		if ('undefined' !== typeof cat_ids) {
			return cat_ids.map(cat_id => {
				return RT_API['categories'].filter(cat => {
					return cat.term_id === cat_id
				 })[0];
			 });
		 }
	 }

	getContent(post, isSingle) {
		return (isSingle) ? post.content.rendered : post.excerpt.rendered;
	 }

	render() {
		const { post, isSingle } = this.props;
		return (
			<article className={ this.getClasses() }>
				<ArticleHeader
					title = { post.title.rendered }
					link = { post.link }
					featuredImage = { this.getFeaturedImageSrc }
					categories={ this.getCategories( post.categories ) }
					date={ post.date }
					formattedDate={ post.formatted_date }
					postType={ post.type }
					isSingle={ isSingle }
				/>

				<Content isSingle={ this.props.isSingle }>
					{ this.getContent(post, this.props.isSingle) }
				</Content>

				<ArticleFooter
					type = { post.type }
					pId = { post.id }
					isSingle = { isSingle }
					tagIds = { post.tags }
				    commentStatus = { post.comment_status }
				    showComments = {  false  }
				 />
			</article>
		);
	 }
 }
