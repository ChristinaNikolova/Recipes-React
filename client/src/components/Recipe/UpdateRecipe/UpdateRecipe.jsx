import { useEffect } from 'react';

import * as authService from '../../../services/authService.js';
import UpdateRecipeForm from './UpdateRecipeForm.jsx';

import './UpdateRecipe.css';

function UpdateRecipe({ history, match }) {
    const recipeId = match.params.id;

    useEffect(() => {
        if (!authService.isAuthenticated()) {
            history.push('/login');
            return;
        }
    }, []);

    const updateRecipe = () => {
        history.push(`/recipes/details/${recipeId}`);
        return;
    }

    return (
        <section id="recipe-update" className="section">
            <div className="container">
                <h1 className="title cursive-font-style">Update Recipe</h1>
                <UpdateRecipeForm recipeId={recipeId} clickHandler={updateRecipe} isAuth={authService.isAuthenticated()} />
            </div>
        </section>
    );
}

export default UpdateRecipe;