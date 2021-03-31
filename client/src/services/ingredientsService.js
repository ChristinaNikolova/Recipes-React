import api from './api.js';


export const getByRecipe = (recipeId) => {
    return fetch(`${api.ingredientsCurrentRecipe}/${recipeId}`)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const remove = (recipeId, ingredientId) => {
    return fetch(`${api.deleteIngredientCurrentRecipe}?ingredientId=${ingredientId}&recipeId=${recipeId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err => console.error(err));;
}

export const getAll = () => {
    return fetch(api.adminAllIngredients)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const removeFromAdmin = (id) => {
    return fetch(`${api.adminDeleteIngredient}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch(err => console.error(err));
}

export const getIngredientForUpdate = (id) => {
    return fetch(`${api.adminGetIngredientForUpdate}/${id}`)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const update = (id, name) => {
    const ingredient = {
        id,
        name
    };

    return fetch(`${api.adminUpdateIngredient}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredient)
    }).catch(err => console.error(err));
}

export const create = (name) => {
    let ingredient = {
        name
    };

    return fetch(api.adminCreateIngredient, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredient)
    }).catch(err => console.error(err));
}