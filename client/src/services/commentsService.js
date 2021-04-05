import api from './api.js';
import { requester } from './requester.js';

export const getAllCurrentRecipe = (recipeId) => {
    const url = `${api.allCommentsCurrentRecipe}/${recipeId}`;

    return requester(url, "GET")
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const create = (content, recipeId) => {
    let comment = {
        content,
        recipeId
    };

    const url = api.createComment;

    return requester(url, 'POST', comment)
        .then(res => res.json())
        .catch(err => console.error(err));
}