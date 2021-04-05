import api from './api.js';
import { requester } from './requester.js';

export const all = () => {
    const url = api.allRecipes;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const order = (criteria) => {
    let url = `${api.orderRecipes}/${criteria}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getDetails = (id) => {
    let url = `${api.detailsRecipe}/${id}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getByCategory = (categoryId) => {
    let url = `${api.recipesCurrentCategory}/${categoryId}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const search = (query) => {
    let url = `${api.searchRecipe}/${query}`;

    return requester(url, 'GET')
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

    const url = api.createRecipe;

    return requester(url, 'POST', recipe)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const remove = (recipeId) => {
    const url = `${api.deleteRecipe}/${recipeId}`;

    return requester(url, 'DELETE')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const like = (id) => {
    const url = `${api.recipeLike}/${id}`;

    return requester(url, 'POST')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const dislike = (id) => {
    const url = `${api.recipeDislike}/${id}`;

    return requester(url, 'POST')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getRecipeForUpdate = (id) => {
    let url = `${api.getRecipeForUpdate}/${id}`;

    return requester(url, 'GET')
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

    const url = `${api.updateRecipe}`;

    return requester(url, 'PUT', recipe)
        .then(res => res.json())
        .catch(err => console.error(err));
}