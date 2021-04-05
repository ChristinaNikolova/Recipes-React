import { useState, useEffect } from 'react';
import toastr from 'toastr';

import Input from '../../../shared/Input/Input.jsx';
import * as authService from '../../../../services/authService.js';
import * as categoriesService from '../../../../services/categoriesService.js';
import * as validator from '../../../../utils/validations/categoryValidator.js';

import './CategoryAdminCreate.css';

function CategoryAdminCreate({ history }) {
    const [errorName, setErrorName] = useState('');
    const [errorPicture, setErrorPicture] = useState('');

    useEffect(() => {
        if (!(authService.isAuthenticated() && authService.isAdmin())) {
            history.push('/')
        }
    }, [])

    const onCreateCategorySubmitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const picture = e.target.picture.value;

        setErrorName(validator.validName(name));
        setErrorPicture(validator.validPicture(picture));

        if (validator.validName(name) === '' &&
            validator.validPicture(picture) === '') {
            categoriesService
                .create(name, picture)
                .then((data) => {
                    if (data['status'] !== 400) {
                        history.push('/admin/categories');
                        toastr.success(data['message'], 'Success');
                        return;
                    }
                    toastr.error(data['message'], 'Error');
                });
        }
    }

    return (
        <div className="create-category-wrapper">
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1 className="cursive-font-style p-2">Create New Category</h1>
                        <hr />
                    </div>
                </div>
                <form className="create-category-form" onSubmit={onCreateCategorySubmitHandler}>
                    <div className="row space-top">
                        <div className="col-lg-8">
                            <Input
                                type='text'
                                name='name'
                                label='Name'
                                error={errorName} />

                            <Input
                                type='url'
                                name='picture'
                                label='Picture'
                                error={errorPicture} />

                            <button className="btn btn-secondary" type="submit">Create</button>
                        </div>
                    </div >
                </form >
            </div>
        </div >
    );
}

export default CategoryAdminCreate;