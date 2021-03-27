import * as commentsService from '../../../services/commentsService.js';

import './CreateComment.css';

function CreateComment(props) {

    const onCreateCommentSubmitHandler = (e) => {
        e.preventDefault();
        //Validate
        const content = e.target.content.value;
        const recipeId = props.recipeId;
        e.target.content.value = '';

        commentsService
            .create(content, recipeId)
            .then(props.clickHandler());
    }

    return (
        <div className="create-comment-wrapper">
            <h2 className="cursive-font-style comments-title">Comments</h2>
            <div className="post post-content">
                <h5 className="comments-title-second-title">Leave comment</h5>
                <form className="comment-form" onSubmit={onCreateCommentSubmitHandler}>
                    <textarea className="comment-form-text-area" type="text" name="content" placeholder="Write you comment..."></textarea>
                    <button type="submit" className="btn btn-secondary mt-2 add-comment-button" > Add Comment</button >
                </form>
            </div>
        </div>
    );
}

export default CreateComment;