import { useState, useEffect } from 'react';

import SingleRecipe from '../SingleRecipe/SingleRecipe.jsx'
import * as authService from '../../../services/authService.js';
import * as recipesService from '../../../services/recipesService.js';

import './RecipesCurrentCategory.css';

function RecipesCurrentCategory({ match, history }) {
    const [recipes, setRecipes] = useState([]);
    const categoryId = match.params.id;

    useEffect(() => {
        if (!authService.isAuthenticated()) {
            history.push('/')
        }
    }, [])

    useEffect(() => {
        recipesService
            .getByCategory(categoryId)
            .then(recipes => setRecipes(recipes));
    }, []);

    const categoryName = recipes[0]
        ? recipes[0].categoryName
        : null;

    return (
        <div className="recipes-current-category-wrapper">
            <div className="container">
                <div className="col-md-12">
                    <h1 className="text-center p-1 cursive-font-style">Recipes in <span className="recipes-in-category">{categoryName}</span> category: </h1>
                    <hr />
                </div>
                <div className="row">
                    {recipes
                        .map(r => <SingleRecipe
                            key={r.id}
                            id={r.id}
                            title={r.title}
                            picture={r.picture}
                            content={r.content}
                            categoryName={r.categoryName}
                            recipeLikesCount={r.recipeLikesCount}
                            commentsCount={r.commentsCount} />)}
                </div>
            </div>
        </div>
    );

}

export default RecipesCurrentCategory;