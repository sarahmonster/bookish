import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ArticleContent from 'components/article-content';
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
            <ArticleContent>{this.props.comment.content.rendered}</ArticleContent>
            <em>- {this.props.comment.author_name}</em>
            <Link
                className="pull-right btn btn-sm"
                to={`#comment-${this.props.comment.id}`}
                onClick={this.replyToComment.bind(this)}>{this.state.active ? 'Cancel' : 'Reply'}</Link>
            {this.state.active && <CommentForm pId={this.props.pId} replyCommentId={this.props.comment.id}/>}
        </div>
    }
}
