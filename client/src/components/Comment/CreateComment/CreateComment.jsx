import { useState } from 'react';
import toastr from 'toastr';

import Input from '../../shared/Input/Input.jsx';
import * as commentsService from '../../../services/commentsService.js';
import * as validator from '../../../utils/validations/commentValidator.js';

import './CreateComment.css';

function CreateComment({ recipeId, clickHandler }) {
    const [errorMessage, setErrorMessage] = useState('');

    const onCreateCommentSubmitHandler = (e) => {
        e.preventDefault();

        const content = e.target.content.value;

        setErrorMessage(validator.validContent(content));

        if (validator.validContent(content) === '') {
            e.target.content.value = '';

            commentsService
                .create(content, recipeId)
                .then((data) => {
                    if (data['status'] === 400) {
                        toastr.error(data['message'], 'Error');
                        return;
                    }
                    toastr.success(data['message'], 'Success');
                    clickHandler();
                });
        }
    }

    return (
        <div className="create-comment-wrapper">
            <h2 className="cursive-font-style comments-title">Comments</h2>
            <div className="post post-content">
                <h5 className="comments-title-second-title">Leave comment</h5>
                <form className="comment-form" onSubmit={onCreateCommentSubmitHandler}>
                    <Input
                        type='text'
                        name='content'
                        label=''
                        placeholder='Write you comment...'
                        error={errorMessage} />
                    <button type="submit" className="btn btn-secondary mt-2 add-comment-button" > Add Comment</button >
                </form>
            </div>
        </div>
    );
}

export default CreateComment;