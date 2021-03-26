import { useState, useEffect } from 'react';

import * as commentsService from '../../../services/commentsService.js';
import CreateComment from '../CreateComment/CreateComment.jsx';

import './CommentsListCurrentRecipe.css';

function CommentsListCurrentRecipe(props) {

    let [comments] = useState({});

    useEffect(() => {
        commentsService.getAllCurrentRecipe(props.recipeId)
            .then(res => comments(res));
    }, []);

    const reload = () => {
        console.log("in reload");
    }

    return (
        <div className="comments-list-wrapper">
            <CreateComment
                clickHandler={reload}
                recipeId={props.recipeId} />
            <article className="post post-content">
                {/* <app-single-comment [comment] = "comment" ></app - single - comment > */}
            </article >
        </div>
    );
}

export default CommentsListCurrentRecipe;