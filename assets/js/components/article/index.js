import React, { Component } from 'react';

import './style.scss';
import ArticleHeader from 'components/article-header';
import ArticleContent from 'components/article-content';
import ArticleFooter from 'components/article-footer';
import ArticleExcerpt from 'components/article-excerpt';

export default class Article extends Component {
	getClasses() {
		return this.props.isSingle ? 'single' : 'excerpt';
	}

	getFeaturedImageSrc() {
		const { post, isSingle } = this.props;

		if ( post.featured_image_url ) {
			if ( isSingle ) {
				return post.featured_image_url.large;
			} else {
				return post.featured_image_url.full;
			}
		} else {
			return null;
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

	render() {
		const { post, isSingle } = this.props;

		if ( isSingle ) {
			document.title = `${ post.title.rendered } | ${ RT_API.siteName }`;
		}

		return (
			<article className={ this.getClasses() }>
				{ isSingle &&
					<React.Fragment>
						<ArticleHeader
							title = { post.title.rendered }
							featuredImage = { this.getFeaturedImageSrc() }
							date={ post.date }
							formattedDate={ post.formatted_date }
						/>

						<ArticleContent>
							{ post.content.rendered }
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
					</React.Fragment>
					}

					{ !isSingle &&
						<ArticleExcerpt
							title = { post.title.rendered }
							link = { post.link }
							featuredImage = { this.getFeaturedImageSrc() }
							date={ post.date }
							formattedDate={ post.formatted_date }
							postType={ post.type }
						>
							{ post.excerpt.rendered }
						</ArticleExcerpt>
					}
			</article>
		);
	 }
 }
