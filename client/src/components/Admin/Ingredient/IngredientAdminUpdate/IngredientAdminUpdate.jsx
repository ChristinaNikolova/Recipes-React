import { useState, useEffect } from 'react';
import toastr from 'toastr';

import Input from '../../../shared/Input/Input.jsx';
import * as authService from '../../../../services/authService.js';
import * as validator from '../../../../utils/validations/ingredientValidator.js';
import * as ingredientsService from '../../../../services/ingredientsService.js';
import AdminFormWrapper from '../../../shared/Administration/AdminFormWrapper/AdminFormWrapper.jsx';

import './IngredientAdminUpdate.css';

function IngredientAdminUpdate({ match, history }) {
    const [ingredient, setIngredient] = useState({});
    const [errorName, setErrorName] = useState('');
    const id = match.params.id;

    useEffect(() => {
        if (!authService.isAdmin()) {
            history.push('/');
            return;
        }

        ingredientsService
            .getIngredientForUpdate(id)
            .then(ingredient => setIngredient(ingredient))
    }, []);

    const updateIngredientSubmitHandler = (e) => {
        e.preventDefault();
        
        const name = e.target.name.value;

        setErrorName(validator.validName(name));

        if (validator.validName(name) === '') {
            ingredientsService
                .update(id, name)
                .then((data) => {
                    if (data['status'] !== 400) {
                        toastr.success(data['message'], 'Success');
                        history.push(`/admin/ingredients`);
                        return;
                    }
                    toastr.error(data['message'], 'Error');
                });
        }
    }

    return (
        <div className="update-ingredient-wrapper">
            <div className="container">
                <AdminFormWrapper title="Update Ingredient" />
                <form className="update-ingredient-form" onSubmit={updateIngredientSubmitHandler}>
                    <div className="row space-top">
                        <div className="col-lg-8">
                            <div className="form-group">
                                <Input
                                    type='text'
                                    name='name'
                                    label='Name'
                                    value={ingredient.name}
                                    error={errorName} />
                            </div>
                            <button className="btn btn-secondary" type="submit">Update</button>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    );
}

export default IngredientAdminUpdate;