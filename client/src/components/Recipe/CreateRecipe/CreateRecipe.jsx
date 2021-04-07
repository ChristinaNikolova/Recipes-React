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
        <div className="create-recipe-wrapper" >
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1 className="cursive-font-style p-1">Create New Recipe</h1>
                    </div>
                </div>
                <CreateRecipeForm clickHandler={createRecipe} isAuth={authService.isAuthenticated()} />
            </div >
            <div className="fill pt-2 pb-2"></div>
        </div >
    );
}

export default CreateRecipe;