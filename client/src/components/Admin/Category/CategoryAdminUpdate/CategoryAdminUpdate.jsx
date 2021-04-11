import { useState, useEffect } from 'react';
import toastr from 'toastr';

import Input from '../../../shared/Input/Input.jsx';
import * as authService from '../../../../services/authService.js';
import * as categoriesService from '../../../../services/categoriesService.js';
import * as validator from '../../../../utils/validations/categoryValidator.js';
import AdminFormWrapper from '../../../shared/Administration/AdminFormWrapper/AdminFormWrapper.jsx';

import './CategoryAdminUpdate.css';

function CategoryAdminUpdate({ match, history }) {
    const [category, setCategory] = useState({});
    const [errorName, setErrorName] = useState('');
    const [errorPicture, setErrorPicture] = useState('');
    const id = match.params.id;

    useEffect(() => {
        if (!authService.isAdmin()) {
            history.push('/');
            return;
        }

        categoriesService
            .getCategoryForUpdate(id)
            .then(category => setCategory(category))
            .catch(err => console.error(err));
    }, []);

    const updateCategorySubmitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const picture = e.target.picture.value;

        setErrorName(validator.validName(name));
        setErrorPicture(validator.validPicture(picture));

        if (validator.validName(name) === '' &&
            validator.validPicture(picture) === '') {
            categoriesService
                .update(id, name, picture)
                .then((data) => {
                    if (data['status'] !== 400) {
                        toastr.success(data['message'], 'Success');
                        history.push(`/admin/categories`);
                        return;
                    }
                    toastr.error(data['message'], 'Error');
                });
        }
    }

    return (
        <div className="update-category-wrapper">
            <div className="container">
                <AdminFormWrapper title="Update Category" />
                <form className="update-category-form" onSubmit={updateCategorySubmitHandler}>
                    <div className="row space-top">
                        <div className="col-lg-8">
                            <Input
                                type='text'
                                name='name'
                                label='Name'
                                value={category.name}
                                error={errorName} />

                            <Input
                                type='url'
                                name='picture'
                                label='Picture'
                                value={category.picture}
                                error={errorPicture} />

                            <button className="btn btn-secondary" type="submit">Update</button>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    );
}

export default CategoryAdminUpdate;