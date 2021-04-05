import api from './api.js';
import { requester } from './requester.js';

export const getFavourite = () => {
    const url = api.favouriteRecipes;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getOwn = () => {
    const url = api.ownRecipes;

    return requester(url, 'GET')
        .then(res => res.json())
        .catch(err => console.error(err));
}