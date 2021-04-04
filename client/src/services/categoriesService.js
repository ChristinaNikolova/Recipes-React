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

export const getAllForAdmin = () => {
    return fetch(api.adminAllCategories)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const removeFromAdmin = (id) => {
    return fetch(`${api.adminDeleteCategory}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res=>res.json())
    .catch(err => console.error(err));
}

export const getCategoryForUpdate = (id) => {
    return fetch(`${api.adminGetCategoryForUpdate}/${id}`)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export const update = (id, name, picture) => {
    const category = {
        id,
        name,
        picture
    };

    return fetch(`${api.adminUpdateCategory}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(category)
    })
    .then(res=>res.json())
    .catch(err => console.error(err));
}

export const create = (name, picture) => {
    let category = {
        name,
        picture
    };

    return fetch(api.adminCreateCategory, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(category)
    })
    .then(res=>res.json())
    .catch(err => console.error(err));
}