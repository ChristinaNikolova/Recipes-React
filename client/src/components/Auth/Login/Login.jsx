import FormicLoginForm from '../FormikLoginForm/FormicLoginForm';
import './Login.css';

function Login() {
    return (
        <div className="login-wrapper">
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <h1 className="p-1 cursive-font-style">Sign In</h1>
                <div className="row">
                    <div className="col-lg-10">
                        <FormicLoginForm />
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Login;