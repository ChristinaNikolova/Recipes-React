import { useState, useEffect } from 'react';

import * as ingredientsService from '../../../../services/ingredientsService.js';
import * as authService from '../../../../services/authService.js';
import IngredientAdminSingleRow from '../IngredientAdminSingleRow/IngredientAdminSingleRow.jsx';
import AdminTableHead from '../../../shared/Administration/AdminTableHead/AdminTableHead.jsx';

import './IngredientsAdminList.css';

function IngredientsAdminList({ history }) {
    const [ingredients, setIngredients] = useState([]);
    const [hasToReload, setHasToReload] = useState(false);

    useEffect(() => {
        if (!authService.isAdmin()) {
            history.push('/');
            return;
        }

        ingredientsService
            .getAll()
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
                                clickHandler={reload} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default IngredientsAdminList;