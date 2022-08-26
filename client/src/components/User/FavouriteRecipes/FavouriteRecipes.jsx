import { useState, useEffect } from 'react';

import * as usersService from '../../../services/usersService.js';
import * as authService from '../../../services/authService.js';
import FavouriteRecipesRow from '../FavouriteRecipesRow/FavouriteRecipesRow.jsx';
import UserTableHead from '../../shared/UserTableHead/UserTableHead.jsx';

import './FavouriteRecipes.css'

function FavouriteRecipes({ history }) {
    const [favRecipes, setFavRecipes] = useState([]);
    const [hasToReload, setHasToReload] = useState(false);

    useEffect(() => {
        if (!authService.isAuthenticated()) {
            history.push('/login');
            return;
        }

        usersService
            .getFavourite()
            .then(favRecipes => setFavRecipes(favRecipes))
            .then(setHasToReload(false))
            .catch(err => console.error(err));
    }, [hasToReload]);

    const reload = () => {
        setTimeout(() => {
            setHasToReload(true);
        }, 250);
    }

    return (
        <section id="favourite-recipes" className="section">
            <div className="container">
                <h1 className="title text-center cursive-font-style">My Favourite Recipes</h1>
                <hr />
                <table className="table table-bordered table-hover custom-table">
                    <UserTableHead isAuthor={true} />
                    <tbody>
                        {favRecipes
                            .map(r => <FavouriteRecipesRow
                                key={r.recipeId}
                                recipeId={r.recipeId}
                                recipeTitle={r.recipeTitle}
                                recipePicture={r.recipePicture}
                                recipeCategoryName={r.recipeCategoryName}
                                recipeAuthorUserName={r.recipeAuthorUserName}
                                clickHandler={reload} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default FavouriteRecipes;