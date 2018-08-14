import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './style.scss';
import ArticleTitle from 'components/article-title';

class ArticleExcerpt extends Component {
	constructor() {
		super();
	}

	navigate( event ) {
		if ( event.target.tagName === 'A' ) {
			let href = event.target.getAttribute('href');
			if ((href.includes(RT_API.baseUrl) || href.startsWith('/')) && '_blank' !== event.target.getAttribute('target').toLowerCase()) {
				event.preventDefault();
				href = href.replace(RT_API.baseUrl, '');
				this.props.history.push(href);
			}
		}
	}

	render() {
		const { link, title, children } = this.props;

        return (
        	<React.Fragment>
	            <header className="article-excerpt-header">
	                <ArticleTitle link={ link }>{ title }</ArticleTitle>
	            </header>

				<div className="article-excerpt-content"
					dangerouslySetInnerHTML={ {__html: children } } onClick={ event => this.navigate( event ) }
				/>
			</React.Fragment>
		);
	}
}

function mapStateToProps( { router } ) {
	return { router };
}

export default withRouter( connect()( ArticleExcerpt ));
