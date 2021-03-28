import Input from '../../shared/Input/Input.jsx';

import './Register.css';

function Register() {
    return (
        <div className="register-wrapper">
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <h1 className="p-1 cursive-font-style">Register</h1>
                <div className="row">
                    <div className="col-lg-10">
                        <form>
                            <Input
                                type='text'
                                name='username'
                                label='Username' />

                            <Input
                                type='email'
                                name='email'
                                label='Email' />

                            <Input
                                type='password'
                                name='password'
                                label='Password' />

                            <Input
                                type='password'
                                name='repeatPassword'
                                label='Repeat password' />

                            <button className="btn btn-dark" type="submit" > Register</button >
                        </form >
                    </div >
                </div >
            </div >
        </div >
    );
}

export default Register;