import { useState, useContext } from 'react';
import toastr from 'toastr';

import * as authService from '../../../services/authService.js'
import * as validator from '../../../utils/validations/authValidator.js';
import { AuthContext } from '../../../contexts/AuthContexts.jsx';

import Input from '../../shared/Input/Input.jsx';

function Register({ history }) {
    const { userLogin } = useContext(AuthContext);
    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRePassword, setErrorRePassword] = useState('');

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rePassword = e.target.repeatPassword.value;

        setErrorUsername(validator.validUsername(username));
        setErrorEmail(validator.validEmail(email));
        setErrorPassword(validator.validPassword(password));
        setErrorRePassword(validator.validPasswordsMatch(password, rePassword));

        if (validator.validUsername(username) === '' &&
            validator.validEmail(email) === '' &&
            validator.validPassword(password) === '' &&
            validator.validPasswordsMatch(password, rePassword) === '') {
            authService
                .register(username, email, password)
                .then((data) => {
                    if (data['status'] === 400) {
                        toastr.error(data['message'], 'Error');
                        return;
                    }
                    userLogin(data);
                    history.push('/');
                    toastr.success(data['message'], 'Success');
                });
        }
    }

    return (
        <section id="register" className="section">
            <div className="container">
                <h1 className="title cursive-font-style">Register</h1>
                <form className="form" onSubmit={onRegisterSubmitHandler}>
                    <Input
                        type='text'
                        name='username'
                        label='Username'
                        error={errorUsername} />

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

                    <Input
                        type='password'
                        name='repeatPassword'
                        label='Repeat password'
                        error={errorRePassword} />

                    <button className="custom-btn" type="submit"> Register</button >
                </form>
            </div>
        </section>
    );
}

export default Register;