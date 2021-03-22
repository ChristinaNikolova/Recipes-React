import api from './api.js';

export const all = () => {
    return fetch(api.allRecipes)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const order = (criteria) => {
    let url = `${api.orderRecipes}${criteria}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getDetails = (id) => {
    let url = `${api.detailsRecipe}${id}`;

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const getByCategory = (categoryId) => {
    let url = `${api.getByCategory}${categoryId}`;
    console.log("in service");
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}