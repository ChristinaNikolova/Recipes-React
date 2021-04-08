import { useState, useEffect } from 'react';

import * as usersService from '../../../services/usersService.js';
import * as authService from '../../../services/authService.js';
import OwnRecipesRow from '../OwnRecipesRow/OwnRecipesRow.jsx';
import UserTableHead from '../../shared/UserTableHead/UserTableHead.jsx';

import './OwnRecipes.css';

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
            .then(setHasToReload(false));
    }, [hasToReload]);

    const reload = () => {
        setTimeout(() => {
            setHasToReload(true);
        }, 250);
    }

    return (
        <div className="own-recipes-wrapper" >
            <div className="container">
                <h1 className="text-center cursive-font-style p-1">My Own Recipes</h1>
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
            <div className="fill pt-1 pb-1"></div>
        </div >);
}

export default OwnRecipes;