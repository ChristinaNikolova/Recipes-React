import { useState, useEffect } from 'react';
import toastr from 'toastr';

import Input from '../../../shared/Input/Input.jsx';
import * as authService from '../../../../services/authService.js';
import AdminFormWrapper from '../../../shared/Administration/AdminFormWrapper/AdminFormWrapper.jsx';
import * as categoriesService from '../../../../services/categoriesService.js';
import * as validator from '../../../../utils/validations/categoryValidator.js';

function CategoryAdminCreate({ history }) {
    const [errorName, setErrorName] = useState('');
    const [errorPicture, setErrorPicture] = useState('');

    useEffect(() => {
        if (!authService.isAdmin()) {
            history.push('/');
            return;
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
                    if (data['status'] === 400) {
                        toastr.error(data['message'], 'Error');
                        return;
                    }
                    history.push('/admin/categories');
                    toastr.success(data['message'], 'Success');
                });
        }
    }

    return (
        <section id="admin-category-create" className="section">
            <div className="container">
                <AdminFormWrapper title="Create New Category" />
                <form className="form" onSubmit={onCreateCategorySubmitHandler}>
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

                    <button className="custom-btn" type="submit">Create</button>
                </form>
            </div>
        </section>
    );
}

export default CategoryAdminCreate;