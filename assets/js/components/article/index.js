import React, { Component } from 'react';

import './style.scss';
import ArticleHeader from 'components/article-header';
import ArticleContent from 'components/article-content';
import ArticleFooter from 'components/article-footer';

export default class Article extends Component {
	getClasses() {
		return this.props.isSingle ? 'single' : 'archive';
	 }

	getFeaturedImageSrc() {
		if (this.props.post.featured_image_url) {
			return this.props.isSingle ? this.props.post.featured_image_url.large : this.props.post.featured_image_url.full;
		 } else {
			return '';
		 }
	 }

	getCategories( cat_ids ) {
		if ( 'undefined' !== typeof cat_ids ) {
			return cat_ids.map( cat_id => {
				return RT_API['categories'].filter( cat => {
					return cat.term_id === cat_id
				 })[0];
			 });
		 }
	 }

	getContent( post, isSingle ) {
		return ( isSingle ) ? post.content.rendered : post.excerpt.rendered;
	}

	render() {
		const { post, isSingle } = this.props;

		if ( isSingle ) {
			document.title = `${ post.title.rendered } | ${ RT_API.siteName }`;
		}

		return (
			<article className={ this.getClasses() }>
				<ArticleHeader
					title = { post.title.rendered }
					link = { post.link }
					featuredImage = { this.getFeaturedImageSrc }
					date={ post.date }
					formattedDate={ post.formatted_date }
					postType={ post.type }
					isSingle={ isSingle }
				/>

				<ArticleContent isSingle={ isSingle }>
					{ this.getContent( post, isSingle ) }
				</ArticleContent>

				<ArticleFooter
					type = { post.type }
					pId = { post.id }
					isSingle = { isSingle }
					tags = { post.tags }
				    commentStatus = { post.comment_status }
				    showComments = {  false  }
				    categories={ this.getCategories( post.categories ) }
				 />
			</article>
		);
	 }
 }
