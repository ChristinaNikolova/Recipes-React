import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as recipesService from '../../../services/recipesService.js';
import * as authService from '../../../services/authService.js';
import RecipesOrder from '../RecipesOrder/RecipesOrder.jsx';
import SearchRecipe from '../SearchRecipe/SearchRecipe.jsx';
import SingleRecipe from '../SingleRecipe/SingleRecipe.jsx';

import './RecipesList.css';

function RecipesList({ history }) {
    const [recipes, setRecipes] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        if (!(authService.isAuthenticated())) {
            history.push('/')
        }
    }, [])

    useEffect(() => {
        recipesService
            .all()
            .then(recipes => setRecipes(recipes));
    }, [isSearched]);

    const order = (orderCriteria) => {
        recipesService
            .order(orderCriteria)
            .then(recipes => setRecipes(recipes));
    }

    const search = (query) => {
        if (query === undefined) {
            setIsSearched(false);
            return;
        }

        recipesService
            .search(query)
            .then(recipes => setTimeout(() => {
                setRecipes(recipes)
            }, 100));

        setIsSearched(true);
    }

    return (
        <div className="recipes-wrapper">
            <div className="container">
                <div className="fill pt-1 pb-1"></div>
                <hr className="hr-fill" />

                <SearchRecipe
                    clickHandler={search}
                    isSearched={isSearched} />

                {!isSearched
                    ? <RecipesOrder clickHandler={order} />
                    : null}
                <div className="row">
                    <div className="col-md-12">
                        {!isSearched
                            ? <h1 className="text-center mb-0 pt-2 cursive-font-style">All Recipes</h1>
                            : <h1 className="text-center mb-0 pt-2 cursive-font-style">Searched Recipes Result</h1>}
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 custom-position-resipes-list">
                        <Link to="/recipes/create"
                            className="btn btn-primary btn-lg mt-4 text-center create-recipe-btn"
                            role="button">Create new recipe</Link>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <hr />
                <div className="row">
                    {recipes.length > 0
                        ? recipes
                            .map(r => <SingleRecipe
                                key={r.id}
                                id={r.id}
                                title={r.title}
                                picture={r.picture}
                                content={r.content}
                                categoryId={r.categoryId}
                                categoryName={r.categoryName}
                                recipeLikesCount={r.recipeLikesCount}
                                commentsCount={r.commentsCount}
                            />)
                        : <h4 className="col-lg-12 text-center nothing-found cursive-font-style">Nothing found!</h4>
                    }
                </div>
            </div>
        </div>
    );
}

export default RecipesList;