import { useState, useEffect } from 'react';
import toastr from 'toastr';

import * as ingredientsService from '../../../services/ingredientsService.js';
import * as authService from '../../../services/authService.js';
import RecipeIngredientRow from '../RecipeIngredientRow/RecipeIngredientRow.jsx';

function RecipeIngredientsList({ match, history }) {
    const [ingredients, setIngredients] = useState([]);
    const recipeId = match.params.id;

    useEffect(() => {
        if (!authService.isAuthenticated()) {
            history.push('/login');
            return;
        }

        loadIngredients();
    }, []);

    const remove = (ingredientId) => {
        ingredientsService
            .remove(recipeId, ingredientId)
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
            .getByRecipe(recipeId)
            .then(ingredients => setIngredients(ingredients))
            .catch(err => console.error(err));
    }

    return (
        <section id="recipe-ingredient-list" className="section">
            <div className="container">
                <h1 className="title text-center cursive-font-style">Ingredients</h1>
                <table className="table table-bordered table-hover custom-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients
                            .map(i =>
                                <RecipeIngredientRow
                                    key={i.ingredientId}
                                    ingredientId={i.ingredientId}
                                    recipeId={i.recipeId}
                                    ingredientName={i.ingredientName}
                                    quantity={i.quantity}
                                    clickHandler={remove} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default RecipeIngredientsList;