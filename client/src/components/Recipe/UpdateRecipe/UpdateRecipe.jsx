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
    }, [])

    const updateRecipe = () => {
        history.push(`/recipes/details/${recipeId}`);
        return;
    }

    return (
        <div className="update-form-wrapper">
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1 className="cursive-font-style p-1">Update Recipe</h1>
                    </div>
                </div>
                <UpdateRecipeForm recipeId={recipeId} clickHandler={updateRecipe} isAuth={authService.isAuthenticated()} />
            </div>
            <div className="fill pt-2 pb-2"></div>
        </div>
    );
}

export default UpdateRecipe;