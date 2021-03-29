import api from './api.js';

export const getFavourite = () => {
    return fetch(api.favouriteRecipes)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getOwn = () => {
    return fetch(api.ownRecipes)
        .then(res => res.json())
        .catch(err => console.error(err));
}