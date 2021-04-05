import api from './api.js';
import { requester } from './requester.js';


export const getByRecipe = (recipeId) => {
    const url = `${api.ingredientsCurrentRecipe}/${recipeId}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const remove = (recipeId, ingredientId) => {
    const url = `${api.deleteIngredientCurrentRecipe}?ingredientId=${ingredientId}&recipeId=${recipeId}`;

    return requester(url, 'DELETE')
        .then(res => res.json())
        .catch(err => console.error(err));;
}

export const getAll = () => {
    const url = api.adminAllIngredients;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const removeFromAdmin = (id) => {
    const url = `${api.adminDeleteIngredient}/${id}`;

    return requester(url, 'DELETE')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getIngredientForUpdate = (id) => {
    const url = `${api.adminGetIngredientForUpdate}/${id}`;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const update = (id, name) => {
    const ingredient = {
        id,
        name
    };

    const url = `${api.adminUpdateIngredient}`;

    return requester(url, 'PUT', ingredient)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const create = (name) => {
    const ingredient = {
        name
    };

    const url = api.adminCreateIngredient

    return requester(url, 'POST', ingredient)
        .then(res => res.json())
        .catch(err => console.error(err));
}