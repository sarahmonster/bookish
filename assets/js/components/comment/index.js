import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Content from 'components/content';
import CommentForm from 'components/comment-form';

export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }

    replyToComment(e) {
        e.preventDefault();
        this.setState({active: !this.state.active});
    }

    render() {
        return <div className="card-block">
            <Content>{this.props.comment.content.rendered}</Content>
            <em>- {this.props.comment.author_name}</em>
            <Link
                className="pull-right btn btn-sm"
                to={`#comment-${this.props.comment.id}`}
                onClick={this.replyToComment.bind(this)}>{this.state.active ? 'Cancel' : 'Reply'}</Link>
            {this.state.active && <CommentForm pId={this.props.pId} replyCommentId={this.props.comment.id}/>}
        </div>
    }
}
