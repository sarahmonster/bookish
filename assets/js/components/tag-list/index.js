import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTaxInfo } from 'actions';
import './style.scss';

class TagList extends Component {

    componentWillMount() {
        const { tagIDs, isSingle } = this.props;
        if ( 'undefined' !== typeof tagIDs && tagIDs.length && isSingle ) {
            this.props.fetchTaxInfo( 'tags', tagIDs );
        }
    }

    componentWillReceiveProps( nextProps ) {
        const { tagIDs, isSingle } = this.props;

        if ( ( tagIDs !== nextProps.tagIDs || tagIDs.length !== tagIDs.length )
            && nextProps.tagIDs.length && nextProps.isSingle) {
            this.props.fetchTaxInfo( 'tags', nextProps.tagIDs );
        }
    }

    renderTags() {
        const { tags } = this.props;

        return <div className="tags nav">
            { tags.map(tag => {
                return <a className="tag-link" href={ `/tag/${tag.name}` } key={ tag.id }>#{ tag.name }</a>
            } ) }
        </div>;
    }

    render() {
        const { tagIDs } = this.props;

        return (
            <footer className="card-footer">
                { 'undefined' !== typeof tagIDs && tagIDs.length > 0 && this.renderTags() }
            </footer>
        );
    }
}

function mapStateToProps( { tags } ) {
    return { tags };
}

export default connect( mapStateToProps, { fetchTaxInfo } )( TagList );

