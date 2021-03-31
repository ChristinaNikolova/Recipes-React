import { useState } from 'react';

import Input from '../../shared/Input/Input.jsx';
import * as authService from '../../../services/authService.js'
import * as validator from '../../../utils/validations/authValidator.js';

import './Login.css';

function Login() {

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        authService
            .login(email, password)
            .then((data) => {
                console.log(data);
                localStorage.setItem('token', data['token']);
                localStorage.setItem('username', data['username']);
                localStorage.setItem('isAdmin', data['isAdmin']);
            });
    }

    return (
        <div className="login-wrapper">
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <h1 className="cursive-font-style p-1">Sign In</h1>
                <div className="row">
                    <div className="col-lg-10">
                        <form className="mt-2" onSubmit={onLoginSubmitHandler}>
                            <div className="form-group">
                                <label className="control-label" for="email">Email</label>
                                <input type="text" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="password">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <button className="btn btn-dark" type="submit">Sign In</button>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Login;