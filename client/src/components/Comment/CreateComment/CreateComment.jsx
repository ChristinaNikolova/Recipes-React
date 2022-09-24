import { useState } from 'react';

import * as validator from '../../../utils/validations/commentValidator.js';

import Input from '../../shared/Input/Input.jsx';

import './CreateComment.css';

function CreateComment({ onCreate }) {
    const [errorMessage, setErrorMessage] = useState('');

    const onCreateCommentSubmitHandler = (e) => {
        e.preventDefault();

        const content = e.target.content.value;

        setErrorMessage(validator.validContent(content));

        if (validator.validContent(content) === '') {
            e.target.content.value = '';
            onCreate(content);
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