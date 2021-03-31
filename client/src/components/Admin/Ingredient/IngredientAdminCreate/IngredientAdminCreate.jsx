import { useState } from 'react';

import Input from '../../../shared/Input/Input.jsx';
import * as ingredientsService from '../../../../services/ingredientsService.js';
import * as validator from '../../../../utils/validations/ingredientValidator.js';

import './IngredientAdminCreate.css';

function IngredientAdminCreate({ history }) {
    const [errorName, setErrorName] = useState('');

    const onCreateIngredientSubmitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;

        setErrorName(validator.validName(name));

        if (validator.validName(name) === '') {
            ingredientsService
                .create(name)
                .then(() => {
                    history.push(`/admin/ingredients`);
                    return;
                });
        }
    }

    return (
        <div className="create-ingredient-wrapper">
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1 className="cursive-font-style p-2">Create New Ingredient</h1>
                        <hr />
                    </div>
                </div>
                <form className="create-ingredient-form" onSubmit={onCreateIngredientSubmitHandler}>
                    <div className="row space-top">
                        <div className="col-lg-8">
                            <div className="form-group">
                                <Input
                                    type='text'
                                    name='name'
                                    label='Name'
                                    error={errorName} />
                            </div>
                            <button className="btn btn-secondary" type="submit" >Create</button>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    );
}

export default IngredientAdminCreate;