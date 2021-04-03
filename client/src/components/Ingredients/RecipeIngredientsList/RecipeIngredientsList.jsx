import { useState, useEffect } from 'react';

import * as ingredientsService from '../../../services/ingredientsService.js';
import RecipeIngredientRow from '../RecipeIngredientRow/RecipeIngredientRow.jsx';

import './RecipeIngredientsList.css';

function RecipeIngredientsList(props) {
    const [ingredients, setIngredients] = useState([]);
    const [hasToReload, setHasToReload] = useState(false);

    useEffect((props) => {
        const recipeId = props.match.params.id;

        ingredientsService
            .getByRecipe(recipeId)
            .then(ingredients => setIngredients(ingredients))
            .then(setHasToReload(false));
    }, [hasToReload]);

    const reload = () => {
        setTimeout(() => {
            setHasToReload(true);
        }, 250);
    }

    return (
        <div className="recipe-ingredients-wrapper">
            <div className="container">
                <h1 className="text-center cursive-font-style p-1">Ingredients</h1>
                <hr />
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
            </div >
            <div className="fill pt-1 pb-1"></div>
        </div >
    );
}

export default RecipeIngredientsList;