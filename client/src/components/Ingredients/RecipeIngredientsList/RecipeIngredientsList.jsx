import { useState, useEffect } from 'react';

import * as ingredientsService from '../../../services/ingredientsService.js';
import * as authService from '../../../services/authService.js';
import RecipeIngredientRow from '../RecipeIngredientRow/RecipeIngredientRow.jsx';

function RecipeIngredientsList({ match, history }) {
    const [ingredients, setIngredients] = useState([]);
    const [hasToReload, setHasToReload] = useState(false);
    const recipeId = match.params.id;

    useEffect(() => {
        if (!authService.isAuthenticated()) {
            history.push('/login');
            return;
        }

        ingredientsService
            .getByRecipe(recipeId)
            .then(ingredients => setIngredients(ingredients))
            .then(setHasToReload(false))
            .catch(err => console.error(err));
    }, [hasToReload]);

    const reload = () => {
        setTimeout(() => {
            setHasToReload(true);
        }, 250);
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
                                    clickHandler={reload} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default RecipeIngredientsList;