import api from './api.js';

export const all = () => {
    return fetch(api.allCategories)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getAllNames = () => {
    return fetch(api.allCategoriesNames)
        .then(res => res.json())
        .catch(err => console.error(err));
}