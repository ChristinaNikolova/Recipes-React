import { useState, useEffect } from 'react';
import toastr from 'toastr';

import * as usersService from '../../../services/usersService.js';
import * as recipesService from '../../../services/recipesService.js';

import FavouriteRecipesRow from '../FavouriteRecipesRow/FavouriteRecipesRow.jsx';
import UserTableHead from '../../shared/UserTableHead/UserTableHead.jsx';

import './FavouriteRecipes.css'

function FavouriteRecipes() {
    const [favRecipes, setFavRecipes] = useState([]);

    useEffect(() => {
        loadFavRecipes();
    }, []);

    const removeFromFav = (recipeId) => {
        recipesService
            .dislike(recipeId)
            .then((data) => {
                if (data['status'] === 400) {
                    toastr.error(data['message'], 'Error');
                    return;
                }
                loadFavRecipes();
                toastr.success(data['message'], 'Success');
            });
    }

    const loadFavRecipes = () => {
        usersService
            .getFavourite()
            .then(favRecipes => setFavRecipes(favRecipes))
            .catch(err => console.error(err));
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
                                clickHandler={removeFromFav} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default FavouriteRecipes;