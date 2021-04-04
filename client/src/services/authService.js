import api from './api.js';
import toastr from 'toastr';

export const register = (username, email, password) => {
    const user = {
        username,
        email,
        password
    }

    return fetch(api.register, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).catch(err => console.error(err));
}

export const login = (email, password) => {
    const user = {
        email,
        password
    }

    return fetch(api.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(err => toastr.error(err));
}

export const logout = () => {
    return localStorage.clear();
}

export const isAuthenticated = () => {
    let isAuth = false;
    return localStorage.getItem('authToken') !== null ? isAuth : !isAuth;
}

export const isAdmin = () => {
    let isUserAdmin = false;
    return localStorage.getItem('isAdmin') !== 'true' ? isUserAdmin : !isUserAdmin;
}