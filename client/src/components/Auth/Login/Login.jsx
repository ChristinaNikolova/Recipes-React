import { useState } from 'react';

import Input from '../../shared/Input/Input.jsx';
import * as validator from '../../../utils/validations/authValidator.js';

import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [passwod, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const onLoginSumbitHandler = (e) => {
        e.preventDefault();
        const { email, password } = e.target;

        if (() => validator.validEmail(email.value) !== '') {
            setErrorEmail(() => validator.validEmail(email.value));
            console.log(errorEmail);
        } else {
            setErrorEmail('');
        }

        console.log(email.value);
        console.log(password.value);
    }

    const onChangeE = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
        console.log(email);
    }

    const onChangeP = (e) => {
       setPassword(e.target.value);
    }

    return (
        <div className="login-wrapper">
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <h1 className="p-1 cursive-font-style">Sign In</h1>
                <div className="row">
                    <div className="col-lg-10">
                        <form className="mt-2" onSubmit={onLoginSumbitHandler}>
                            <Input
                                type='email'
                                name='email'
                                label='Email'
                                onChange={onChangeE} />

                            <Input
                                type='password'
                                name='password'
                                label='Password'
                                onChange={onChangeP} />

                            <button className="btn btn-dark" type="submit">Sign In</button>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Login;