import { useState, useEffect } from 'react';

import * as usersService from '../../../services/usersService.js';
import * as authService from '../../../services/authService.js';
import OwnRecipesRow from '../OwnRecipesRow/OwnRecipesRow.jsx';
import UserTableHead from '../../shared/UserTableHead/UserTableHead.jsx';

import './OwnRecipes.css'

function OwnRecipes({ history }) {
    const [ownRecipes, setOwnRecipes] = useState([]);
    const [hasToReload, setHasToReload] = useState(false);

    useEffect(() => {
        if (!authService.isAuthenticated()) {
            history.push('/login');
            return;
        }

        usersService
            .getOwn()
            .then(ownRecipes => setOwnRecipes(ownRecipes))
            .then(setHasToReload(false))
            .catch(err => console.error(err));
    }, [hasToReload]);

    const reload = () => {
        setTimeout(() => {
            setHasToReload(true);
        }, 250);
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
                                clickHandler={reload} />)}
                    </tbody>
                </table>
            </div >
        </section >
    );
}

export default OwnRecipes;