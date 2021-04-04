import api from './api.js';
import toastr from 'toastr';

export const all = () => {
    return fetch(api.allRecipes)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const order = (criteria) => {
    let url = `${api.orderRecipes}/${criteria}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getDetails = (id) => {
    let url = `${api.detailsRecipe}/${id}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getByCategory = (categoryId) => {
    let url = `${api.recipesCurrentCategory}/${categoryId}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const search = (query) => {
    let url = `${api.searchRecipe}/${query}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const create = (title, content, portions, preparationTime, cookingTime, categoryName, picture, ingredients) => {
    let recipe = {
        title,
        content,
        portions,
        preparationTime,
        cookingTime,
        categoryName,
        picture,
        ingredients
    };

    return fetch(api.createRecipe, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe)
    })
    .then(res => res.json())
    .catch(err => console.error(err));
}

export const remove = (recipeId) => {
    return fetch(`${api.deleteRecipe}/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err => console.error(err));
}

export const like = (id) => {
    return fetch(`${api.recipeLike}/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res=>res.json())
    .catch(err => console.error(err));
}

export const dislike = (id) => {
    return fetch(`${api.recipeDislike}/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res=>res.json())
    .catch(err => console.error(err));
}

export const getRecipeForUpdate = (id) => {
    let url = `${api.getRecipeForUpdate}/${id}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const update = (id, title, content, portions, preparationTime, cookingTime, categoryName, picture, ingredients) => {

    let recipe = {
        id,
        title,
        content,
        portions,
        preparationTime,
        cookingTime,
        categoryName,
        picture,
        ingredients
    };

    return fetch(`${api.updateRecipe}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe)
    })
    .then(res => res.json())
    .catch(err => console.error(err));
}