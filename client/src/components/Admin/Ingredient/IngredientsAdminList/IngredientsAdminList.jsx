import { useState, useEffect } from 'react';
import toastr from 'toastr';

import * as ingredientsService from '../../../../services/ingredientsService.js';
import * as authService from '../../../../services/authService.js';

import IngredientAdminSingleRow from '../IngredientAdminSingleRow/IngredientAdminSingleRow.jsx';
import AdminTableHead from '../../../shared/Administration/AdminTableHead/AdminTableHead.jsx';

import './IngredientsAdminList.css';

function IngredientsAdminList({ history }) {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        if (!authService.isAdmin()) {
            history.push('/');
            return;
        }
        loadIngredients();
    }, []);

    const remove = (ingredientId) => {
        ingredientsService
            .removeFromAdmin(ingredientId)
            .then((data) => {
                if (data['status'] === 400) {
                    toastr.error(data['message'], 'Error');
                    return;
                }
                loadIngredients();
                toastr.success(data['message'], 'Success');
            });
    }

    const loadIngredients = () => {
        ingredientsService
            .getAll()
            .then(ingredients => setIngredients(ingredients))
            .catch(err => console.error(err));
    }

    return (
        <section id="admin-ingredients" className="section">
            <div className="container">
                <h1 className="title text-center cursive-font-style">Ingredients</h1>
                <hr />
                <table className="table table-striped table-bordered table-hover">
                    <AdminTableHead />
                    <tbody>
                        {ingredients
                            .map(i => <IngredientAdminSingleRow
                                key={i.id} id={i.id}
                                name={i.name}
                                recipeIngredientsCount={i.recipeIngredientsCount}
                                clickHandler={remove} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default IngredientsAdminList;