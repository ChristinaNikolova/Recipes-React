import { useState, useEffect } from 'react';

import * as commentsService from '../../../services/commentsService.js';
import CreateComment from '../CreateComment/CreateComment.jsx';
import SingleComment from '../SingleComment/SingleComment.jsx';

function CommentsListCurrentRecipe({ recipeId }) {
    const [comments, setComments] = useState([]);
    const [hasToReload, setHasToReload] = useState(false);

    useEffect(() => {
        commentsService
            .getAllCurrentRecipe(recipeId)
            .then(comments => setComments(comments))
            .then(setHasToReload(false))
            .catch(err => console.error(err));
    }, [hasToReload]);

    const reload = () => {
        setTimeout(() => {
            setHasToReload(true);
        }, 250);
    }

    return (
        <section id="comments">
            <CreateComment
                clickHandler={reload}
                recipeId={recipeId} />
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