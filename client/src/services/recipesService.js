import api from './api.js';
import { requester } from './requester.js';

export const all = () => {
    const url = api.allRecipes;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const order = (criteria) => {
    const url = `${api.orderRecipes}/${criteria}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getDetails = (id) => {
    const url = `${api.detailsRecipe}/${id}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getByCategory = (categoryId) => {
    const url = `${api.recipesCurrentCategory}/${categoryId}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const search = (query) => {
    const url = `${api.searchRecipe}/${query}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const create = (title, content, portions, preparationTime, cookingTime, categoryName, picture, ingredients) => {
    const recipe = {
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
    const url = `${api.getRecipeForUpdate}/${id}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const update = (id, title, content, portions, preparationTime, cookingTime, categoryName, picture, ingredients) => {
    const recipe = {
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