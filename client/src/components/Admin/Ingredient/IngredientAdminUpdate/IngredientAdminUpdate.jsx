import { useState, useEffect } from 'react';
import toastr from 'toastr';

import * as validator from '../../../../utils/validations/ingredientValidator.js';
import * as ingredientsService from '../../../../services/ingredientsService.js';

import Input from '../../../shared/Input/Input.jsx';
import AdminFormWrapper from '../../../shared/Administration/AdminFormWrapper/AdminFormWrapper.jsx';

import './IngredientAdminUpdate.css';

function IngredientAdminUpdate({ match, history }) {
    const [ingredient, setIngredient] = useState({});
    const [errorName, setErrorName] = useState('');
    const id = match.params.id;

    useEffect(() => {
        ingredientsService
            .getIngredientForUpdate(id)
            .then(ingredient => setIngredient(ingredient))
            .catch(err => console.error(err));
    }, []);

    const updateIngredientSubmitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;

        setErrorName(validator.validName(name));

        if (validator.validName(name) === '') {
            ingredientsService
                .update(id, name)
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
        <section id="admin-ingredient-update" className="section">
            <div className="container">
                <AdminFormWrapper title="Update Ingredient" />
                <form className="form" onSubmit={updateIngredientSubmitHandler}>
                    <div className="form-group">
                        <Input
                            type='text'
                            name='name'
                            label='Name'
                            value={ingredient.name}
                            error={errorName} />
                    </div>
                    <button className="custom-btn" type="submit">Update</button>
                </form>
            </div>
        </section>
    );
}

export default IngredientAdminUpdate;