import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './style.scss';
import Article from 'components/article';
import Empty from 'components/empty';
import PageNav from 'components/page-nav';

class Main extends Component {
	componentWillUpdate() {
		window.scrollTo(0, 0);
	}

	isSingle() {
		return 1 === this.props.posts.length;
	}

	renderPosts(posts) {
		if (posts.length) {
			return posts.map(post => {
				return (<Article key={post.id}
				                 post={post}
				                 isSingle={this.isSingle()}/>);
			});
		} else {
			const counter = [...Array(20)];
			return counter.map((val, i) => {
				return (<Empty key={i}/>);
			});
		}
	}

	getClasses() {
		return this.isSingle() ? '' : 'grid';
	}

	render() {
		const { posts, getClasses, renderPosts } = this.props;

		return (
			<React.Fragment>
				<main id="site-content" className={ this.getClasses() }>
					<ReactCSSTransitionGroup
						transitionName="fade"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={1}>
						{this.renderPosts(this.props.posts)}
					</ReactCSSTransitionGroup>
				</main>
				<PageNav shouldRender={10 === this.props.posts.length}/>
			</React.Fragment>
		);
	}
}


function mapStateToProps({posts}) {
	return {posts};
}

export default connect(mapStateToProps)(Main)
