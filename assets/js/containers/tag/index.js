import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchPostsFromTax, getTaxIdFromSlug, ROUTER} from 'actions/index';

import Header from 'components/site-header';
import Main from 'components/site-content';
import Footer from 'components/site-footer';

class Category extends Component {
    componentWillMount() {
        this.props.getTaxIdFromSlug('tags', this.props.match.params.slug);
        this.props.dispatch({
            type: ROUTER,
            payload: this.props.match
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.slug !== nextProps.match.params.slug) {
            this.props.getTaxIdFromSlug('tags', nextProps.match.params.slug);
        }

        if (JSON.stringify(this.props.tags) !== JSON.stringify(nextProps.tags)) {
            this.props.fetchPostsFromTax('tags', nextProps.tags[0].id, nextProps.match.params.pageNum);
        }
        this.props.dispatch({
            type: ROUTER,
            payload: this.props.match
        });
    }

    render() {
        const { tags } = this.props;
        let title = `Stories | ${ RT_API.siteName }`;
        if ( tags.length ) {
            title = `${ tags[0].name } | ${ RT_API.siteName }`;
        }
        document.title = title;

        return (
            <section className="container-fluid template-tag">
                <Header/>
                <Main/>
                <Footer/>
            </section>
        );
    }
}

function mapStateToProps({tags}) {
    return {tags};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({fetchPostsFromTax, getTaxIdFromSlug, dispatch}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
