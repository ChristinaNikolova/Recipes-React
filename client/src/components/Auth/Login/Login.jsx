import Input from '../../shared/Input/Input.jsx';

import './Login.css';

function Login() {
    return (
        <div className="login-wrapper">
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <h1 className="p-1 cursive-font-style">Sign In</h1>
                <div className="row">
                    <div className="col-lg-10">
                        <form className="mt-2">
                            <Input
                                type='email'
                                name='email'
                                label='Email' />

                            <Input
                                type='password'
                                name='password'
                                label='Password' />

                            <button type="submit" class="btn btn-dark">Sign In</button>
                        </form>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Login;