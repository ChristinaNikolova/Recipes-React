import { useState, useEffect } from 'react';

import * as usersService from '../../../services/usersService.js';
import * as authService from '../../../services/authService.js';
import FavouriteRecipesRow from '../FavouriteRecipesRow/FavouriteRecipesRow.jsx';
import UserTableHead from '../../shared/UserTableHead/UserTableHead.jsx';

import './FavouriteRecipes.css';

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
            .then(setHasToReload(false));
    }, [hasToReload]);

    const reload = () => {
        setTimeout(() => {
            setHasToReload(true);
        }, 250);
    }

    return (
        <div className="favourite-recipes-wrapper">
            <div className="container">
                <h1 className="text-center cursive-font-style p-1">My Favourite Recipes</h1>
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
            </div >
            <div className="fill pt-1 pb-1"></div>
        </div >
    );
}

export default FavouriteRecipes;