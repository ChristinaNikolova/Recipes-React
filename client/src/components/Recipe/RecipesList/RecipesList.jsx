import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as recipesService from '../../../services/recipesService.js';
import RecipesOrder from '../RecipesOrder/RecipesOrder.jsx';
import SearchRecipe from '../SearchRecipe/SearchRecipe.jsx';
import SingleRecipe from '../SingleRecipe/SingleRecipe.jsx';

import './RecipesList.css';

function RecipesList() {
    const [recipes, setRecipes] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        recipesService
            .all()
            .then(recipes => setRecipes(recipes))
            .catch(err => console.error(err));
    }, [isSearched]);

    const order = (orderCriteria) => {
        recipesService
            .order(orderCriteria)
            .then(recipes => setRecipes(recipes))
            .catch(err => console.error(err));
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
            }, 100))
            .catch(err => console.error(err));

        setIsSearched(true);
    }

    return (
        <section id="recipes" className="section">
            <div className="container">
                <SearchRecipe
                    clickHandler={search}
                    isSearched={isSearched} />

                {!isSearched
                    ? <RecipesOrder clickHandler={order} />
                    : null}

                <div className="recipes-title-wrapper">
                    {!isSearched
                        ? <h1 className="title cursive-font-style">All Recipes</h1>
                        : <h1 className="title cursive-font-style">Searched Recipes Result</h1>}
                    <Link to="/recipes/create"
                        className="custom-btn"
                        role="button">Create new recipe
                    </Link>
                </div>
                <hr />
                <div className="recipes-wrapper">
                    {recipes.length > 0
                        ? recipes
                            .map(r => <SingleRecipe
                                key={r.id}
                                id={r.id}
                                title={r.title}
                                picture={r.picture}
                                shortContent={r.shortContent}
                                categoryId={r.categoryId}
                                categoryName={r.categoryName}
                                recipeLikesCount={r.recipeLikesCount}
                                commentsCount={r.commentsCount} />)
                        : <h4 className="title nothing-found cursive-font-style">Nothing found!</h4>
                    }
                </div>
            </div>
        </section>
    );
}

export default RecipesList;