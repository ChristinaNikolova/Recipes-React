import { Component } from 'react';

import * as commentsService from '../../../services/commentsService.js';
import CreateComment from '../CreateComment/CreateComment.jsx';
import SingleComment from '../SingleComment/SingleComment.jsx';

import './CommentsListCurrentRecipe.css';

class CommentsListCurrentRecipe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        this.getAllCommentsCurrentRecipe();
    }

    getAllCommentsCurrentRecipe() {
        commentsService
            .getAllCurrentRecipe(this.props.recipeId)
            .then(comments => this.setState({ comments: comments }));
    }

    reload() {
        setTimeout(() => {
            this.getAllCommentsCurrentRecipe();
        }, 300);

    }

    render() {
        console.log(this.state.comments.length);
        if (!this.state.comments) {
            return null;
        }

        return (
            <div className="comments-list-wrapper">
                <CreateComment
                    clickHandler={this.reload.bind(this)}
                    recipeId={this.props.recipeId} />
                <article className="post post-content">
                    {this.state.comments.map(c => <SingleComment
                        key={c.id}
                        content={c.content}
                        formattedCreatedOn={c.formattedCreatedOn}
                        clientUserName={c.clientUserName} />)}
                </article >
            </div>
        );
    }
}

export default CommentsListCurrentRecipe;