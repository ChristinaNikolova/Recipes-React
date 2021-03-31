import api from './api.js';

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