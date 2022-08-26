import { useState, useEffect } from 'react';
import toastr from 'toastr';

import Input from '../../../shared/Input/Input.jsx';
import * as authService from '../../../../services/authService.js';
import * as ingredientsService from '../../../../services/ingredientsService.js';
import * as validator from '../../../../utils/validations/ingredientValidator.js';
import AdminFormWrapper from '../../../shared/Administration/AdminFormWrapper/AdminFormWrapper.jsx';

import './IngredientAdminCreate.css';

function IngredientAdminCreate({ history }) {
    const [errorName, setErrorName] = useState('');

    useEffect(() => {
        if (!authService.isAdmin()) {
            history.push('/');
            return;
        }
    }, [])

    const onCreateIngredientSubmitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;

        setErrorName(validator.validName(name));

        if (validator.validName(name) === '') {
            ingredientsService
                .create(name)
                .then((data) => {
                    if (data['status'] === 400) {
                        toastr.error(data['message'], 'Error');
                        return;
                    }
                    toastr.success(data['message'], 'Success');
                    history.push(`/admin/ingredients`);
                });
        }
    }

    return (
        <section id="admin-ingredient-create" className="section">
            <div className="container">
                <AdminFormWrapper title="Create New Ingredient" />
                <form className="form" onSubmit={onCreateIngredientSubmitHandler}>
                    <div className="form-group">
                        <Input
                            type='text'
                            name='name'
                            label='Name'
                            error={errorName} />
                    </div>
                    <button className="custom-btn" type="submit" >Create</button>
                </form>
            </div>
        </section>
    );
}

export default IngredientAdminCreate;