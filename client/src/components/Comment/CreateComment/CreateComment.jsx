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
        <section id="comment-create" className="section">
            <h2 className="title cursive-font-style">Comments</h2>
            <h5 className="comment-create-second-title">Leave comment</h5>
            <form className="form" onSubmit={onCreateCommentSubmitHandler}>
                <Input
                    type='text'
                    name='content'
                    label=''
                    placeholder='Write you comment...'
                    error={errorMessage} />
                <button type="submit" className="custom-btn"> Add Comment</button>
            </form>
            <hr />
        </section>
    );
}

export default CreateComment;