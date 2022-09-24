import { useState, useEffect } from 'react';
import toastr from 'toastr';

import * as recipesService from '../../../services/recipesService.js';
import * as usersService from '../../../services/usersService.js';
import * as authService from '../../../services/authService.js';

import OwnRecipesRow from '../OwnRecipesRow/OwnRecipesRow.jsx';
import UserTableHead from '../../shared/UserTableHead/UserTableHead.jsx';

import './OwnRecipes.css'

function OwnRecipes({ history }) {
    const [ownRecipes, setOwnRecipes] = useState([]);

    useEffect(() => {
        if (!authService.isAuthenticated()) {
            history.push('/login');
            return;
        }
        loadUserRecipes();
    }, []);

    const remove = (recipeId) => {
        recipesService
            .remove(recipeId)
            .then((data) => {
                if (data['status'] === 400) {
                    toastr.error(data['message'], 'Error');
                    return;
                }
                loadUserRecipes();
                toastr.success(data['message'], 'Success');
            });
    }

    const loadUserRecipes = () => {
        usersService
            .getOwn()
            .then(ownRecipes => setOwnRecipes(ownRecipes))
            .catch(err => console.error(err));
    }

    return (
        <section id="own-recipes" className="section">
            <div className="container">
                <h1 className="title text-center cursive-font-style">My Own Recipes</h1>
                <hr />
                <table className="table table-bordered table-hover custom-table">
                    <UserTableHead isAuthor={false} />
                    <tbody>
                        {ownRecipes
                            .map(r => <OwnRecipesRow
                                key={r.id}
                                id={r.id}
                                title={r.title}
                                picture={r.picture}
                                categoryName={r.categoryName}
                                clickHandler={remove} />)}
                    </tbody>
                </table>
            </div >
        </section >
    );
}

export default OwnRecipes;