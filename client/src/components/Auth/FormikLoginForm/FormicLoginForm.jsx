import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../../shared/Input/Input.jsx';
import * as validator from '../../../utils/validations/authValidator.js';

function FormicLoginForm() {
    return (
        <div></div>
        // <Formik
        //     values={{
        //         email: '',
        //         password: ''
        //     }}
        //     validate={Yup.object({
        //         email: Yup.string()
        //             .required('Field is required.')
        //             .email('Invalid email.'),
        //         password: Yup.string()
        //             .required('Field is required.')
        //     })}
        //     onSubmit={(values, { setSubmitting, resetForm }) => {
        //     }}>
        //     {({
        //         email,
        //         errors,
        //         touched,
        //         handleChange,
        //         handleBlur,
        //         handleSubmit,
        //         isSubmitting,
        //     }) => (
        //         <form onSubmit={handleSubmit}>
        //             <Input
        //                 type='email'
        //                 name='email'
        //                 label='Email'
        //                 values={email}
        //                 error={validate.email} />

        //             <Input
        //                 type='password'
        //                 name='password'
        //                 label='Password' />

        //             <button className="btn btn-dark" type="submit">Login </button>
        //         </form>
        //     )}
        // </Formik>);
    );
}

export default FormicLoginForm;