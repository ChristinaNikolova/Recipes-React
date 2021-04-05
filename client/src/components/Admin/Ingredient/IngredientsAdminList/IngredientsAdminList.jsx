import { useState, useEffect } from 'react';

import * as ingredientsService from '../../../../services/ingredientsService.js';
import * as authService from '../../../../services/authService.js';
import IngredientAdminSingleRow from '../IngredientAdminSingleRow/IngredientAdminSingleRow.jsx';

import './IngredientsAdminList.css';

function IngredientsAdminList({ history }) {
    const [ingredients, setIngredients] = useState([]);
    const [hasToReload, setHasToReload] = useState(false);
    
    useEffect(() => {
        if (!authService.isAdmin()) {
            history.push('/');
            return;
        }

        ingredientsService.getAll()
            .then(ingredients => setIngredients(ingredients))
            .then(setHasToReload(false));
    }, [hasToReload]);

    const reload = () => {
        setTimeout(() => {
            setHasToReload(true);
        }, 250);
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