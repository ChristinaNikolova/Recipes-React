import { useState, useEffect } from 'react';
import toastr from 'toastr';

import * as commentsService from '../../../services/commentsService.js';

import CreateComment from '../CreateComment/CreateComment.jsx';
import SingleComment from '../SingleComment/SingleComment.jsx';

function CommentsListCurrentRecipe({ recipeId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        loadComments();
    }, []);

    const createComment = (content) => {
        commentsService
            .create(content, recipeId)
            .then((data) => {
                if (data['status'] === 400) {
                    toastr.error(data['message'], 'Error');
                    return;
                }
                loadComments();
                toastr.success(data['message'], 'Success');
            });
    }

    const loadComments = () => {
        commentsService
            .getAllCurrentRecipe(recipeId)
            .then(comments => setComments(comments))
            .catch(err => console.error(err));
    }

    return (
        <section id="comments">
            <CreateComment
                onCreate={createComment} />
            <div>
                {comments.map(c => <SingleComment
                    key={c.id}
                    content={c.content}
                    formattedCreatedOn={c.formattedCreatedOn}
                    clientUserName={c.clientUserName} />)}
            </div>
        </section>
    );

}

export default CommentsListCurrentRecipe;