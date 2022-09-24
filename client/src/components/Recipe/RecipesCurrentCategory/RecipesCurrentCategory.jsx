import { useState, useEffect } from 'react';

import * as recipesService from '../../../services/recipesService.js';

import SingleRecipe from '../SingleRecipe/SingleRecipe.jsx'

import './RecipesCurrentCategory.css';

function RecipesCurrentCategory({ match }) {
    const [recipes, setRecipes] = useState([]);
    const categoryId = match.params.id;

    useEffect(() => {
        recipesService
            .getByCategory(categoryId)
            .then(recipes => setRecipes(recipes))
            .catch(err => console.error(err));
    }, []);

    const categoryName = recipes[0]
        ? recipes[0].categoryName
        : null;

    return (
        <section id="recipes-currect-category" className="section">
            <div className="container">
                <h1 className="title cursive-font-style">Recipes in <span className="recipes-in-category">{categoryName}</span> category: </h1>
                <hr />
                <div className="recipes-currect-category-list">
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
        </section>
    );

}

export default RecipesCurrentCategory;