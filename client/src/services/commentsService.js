import api from './api.js';


export const getAllCurrentRecipe = (recipeId) => {
    const url = `${api.allCommentsCurrentRecipe}/${recipeId}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const create = (content, recipeId) => {
    let comment = {
        content,
        recipeId
    };

    return fetch(api.createComment, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    }).catch(err => console.error(err));
}