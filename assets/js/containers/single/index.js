import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from 'actions/index';

import Header from 'components/site-header';
import SiteContent from 'components/site-content';
import Footer from 'components/site-footer';

class Single extends Component {
    componentWillMount() {
        this.props.fetchPost( this.props.location.pathname );
    }

    componentWillReceiveProps( nextProps ) {
        if ( this.props.location.pathname !== nextProps.location.pathname ) {
            this.props.fetchPost( nextProps.location.pathname );
        }
    }

    render() {
        return (
            <section className="container-fluid template-single">
                <Header/>
                <SiteContent />
                <Footer/>
            </section>
        );
    }
}


function mapStateToProps( { posts } ) {
    return { posts };
}

export default connect(
    mapStateToProps,
    { fetchPost }
)( Single );
