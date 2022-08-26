import { useEffect } from 'react';

import CreateRecipeForm from './CreateRecipeForm.jsx';
import * as authService from '../../../services/authService.js';

import './CreateRecipe.css';

function CreateRecipe({ history }) {
    useEffect(() => {
        if (!authService.isAuthenticated()) {
            history.push('/login');
            return;
        }
    }, []);

    const createRecipe = () => {
        history.push(`/recipes`);
        return;
    }

    return (
        <section id="create-recipe" className="section">
            <div className="container">
                <h1 className="title cursive-font-style">Create New Recipe</h1>
                <CreateRecipeForm clickHandler={createRecipe} isAuth={authService.isAuthenticated()} />
            </div>
        </section>
    );
}

export default CreateRecipe;