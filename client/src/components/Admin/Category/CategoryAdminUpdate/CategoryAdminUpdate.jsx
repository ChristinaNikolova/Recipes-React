import { useState, useEffect } from 'react';
import toastr from 'toastr';

import * as categoriesService from '../../../../services/categoriesService.js';
import * as validator from '../../../../utils/validations/categoryValidator.js';

import Input from '../../../shared/Input/Input.jsx';
import AdminFormWrapper from '../../../shared/Administration/AdminFormWrapper/AdminFormWrapper.jsx';

function CategoryAdminUpdate({ match, history }) {
    const [category, setCategory] = useState({});
    const [errorName, setErrorName] = useState('');
    const [errorPicture, setErrorPicture] = useState('');
    const id = match.params.id;

    useEffect(() => {
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
                    if (data['status'] === 400) {
                        toastr.error(data['message'], 'Error');
                        return;
                    }
                    toastr.success(data['message'], 'Success');
                    history.push(`/admin/categories`);
                });
        }
    }

    return (
        <section id="admin-category-update" className="section">
            <div className="container">
                <AdminFormWrapper title="Update Category" />
                <form className="form" onSubmit={updateCategorySubmitHandler}>
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

                    <button className="custom-btn" type="submit">Update</button>
                </form >
            </div >
        </section >
    );
}

export default CategoryAdminUpdate;