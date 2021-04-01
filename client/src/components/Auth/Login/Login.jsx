import { useState } from 'react';

import Input from '../../shared/Input/Input.jsx';
import * as authService from '../../../services/authService.js'
import * as validator from '../../../utils/validations/authValidator.js';

import './Login.css';

function Login({ history }) {
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

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
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('username', data['username']);
                    localStorage.setItem('isAdmin', data['isAdmin']);
                    history.push('/')
                    return;
                });
        }
    }

    return (
        <div className="login-wrapper">
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <h1 className="cursive-font-style p-1">Sign In</h1>
                <div className="row">
                    <div className="col-lg-10">
                        <form className="mt-2" onSubmit={onLoginSubmitHandler}>
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

                            <button className="btn btn-dark" type="submit">Sign In</button>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Login;