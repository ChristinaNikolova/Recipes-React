import { useState, useEffect } from 'react';

import * as ingredientsService from '../../../../services/ingredientsService.js';
import IngredientAdminSingleRow from '../IngredientAdminSingleRow/IngredientAdminSingleRow.jsx';

import './IngredientsAdminList.css';

function IngredientsAdminList() {
    const [ingredients, setIngredients] = useState([]);
    const [hasToRealod, setHasToReload] = useState(false)

    useEffect(() => {
        ingredientsService.getAll()
            .then(ingredients => setIngredients(ingredients))
            .then(setHasToReload(false));
    }, [hasToRealod]);

    const reload = () => {
        setHasToReload(true);
    }

    return (
        <div className="all-ingredients-wrapper">
            <div className="container">
                <h1 className="text-center cursive-font-style p-1">Ingredients</h1>
                <hr />
                <table className="table table-striped table-bordered table-hover custom-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Recipes Count</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients
                            .map(i => <IngredientAdminSingleRow
                                key={i.id} id={i.id}
                                name={i.name}
                                recipeIngredientsCount={i.recipeIngredientsCount}
                                clickHandler={reload} />)}
                    </tbody>
                </table>
                <div className="fill pb-1 pt-1"></div>
            </div >
        </div >);
}

export default IngredientsAdminList;