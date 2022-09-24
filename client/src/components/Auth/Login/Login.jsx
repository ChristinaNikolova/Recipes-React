import { useState, useContext } from 'react';
import toastr from 'toastr';

import * as validator from '../../../utils/validations/authValidator.js';
import { AuthContext } from '../../../contexts/AuthContexts.jsx';
import * as authService from '../../../services/authService.js'

import Input from '../../shared/Input/Input.jsx';

function Login({ history }) {
    const { userLogin } = useContext(AuthContext);
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
                    if (data['status'] === 400) {
                        toastr.error(data['message'], 'Error');
                        return;
                    }
                    userLogin(data);
                    toastr.success(data['message'], 'Success');
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

export default Login;