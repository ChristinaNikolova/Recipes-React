import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import toastr from 'toastr';

import Input from '../../shared/Input/Input.jsx';
import * as authService from '../../../services/authService.js'
import * as validator from '../../../utils/validations/authValidator.js';

function Login({ history, clickHandler }) {
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    useEffect(() => {
        if (authService.isAuthenticated()) {
            history.push('/');
            return;
        }
    }, [])

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorEmail(validator.validEmail(email));
        setErrorPassword(validator.validPassword(password));

        if (validator.validEmail(email) === '' &&
            validator.validPassword(password) === '') {
            authService
                .login(email, password)
                .then((data) => {
                    if (data['status'] === 400) {
                        toastr.error(data['message'], 'Error');
                        return;
                    }
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('username', data['username']);
                    localStorage.setItem('isAdmin', data['isAdmin']);
                    toastr.success(data['message'], 'Success');
                    clickHandler();
                    history.push('/');
                });

        }
    }

    return (
        <section id="login" className="section">
            <div className="container">
                <h1 className="title cursive-font-style">Sign In</h1>
                <form className="form" onSubmit={onLoginSubmitHandler}>
                    <Input
                        type='email'
                        name='email'
                        label='Email'
                        error={errorEmail} />

                    <Input
                        type='password'
                        name='password'
                        label='Password'
                        error={errorPassword} />

                    <button className="custom-btn" type="submit">Sign In</button>
                </form>
            </div >
        </section >
    );
}

export default withRouter(Login);