import { Component } from 'react';
import { Link } from 'react-router-dom';

import * as recipesService from '../../../services/recipesService.js';
import RecipesOrder from '../RecipesOrder/RecipesOrder.jsx';
import SearchRecipe from '../SearchRecipe/SearchRecipe.jsx';
import SingleRecipe from '../SingleRecipe/SingleRecipe.jsx';

import './RecipesList.css';

class RecipesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        recipesService
            .all()
            .then(recipes => this.setState({ recipes: recipes }));
    }

    order(orderCriteria) {
        recipesService
            .order(orderCriteria)
            .then(recipes => this.setState({ recipes: recipes }));
    }

    search(query) {
        console.log("queru:" + query);
        
        recipesService
            .search(query)
            .then(recipes => this.setState({ recipes: recipes }));
    }

    render() {
        console.log(this.state.recipes);

        return (
            <div className="recipes-wrapper">
                <div className="container">
                    <div className="fill pt-1 pb-1"></div>
                    <hr className="hr-fill" />
                    <SearchRecipe
                        clickHandler={this.search.bind(this)} />
                    <RecipesOrder
                        clickHandler
                        ={this
                            .order
                            .bind(this)} />
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center mb-0 pt-2 cursive-font-style">All Recipes</h1>
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
                        {this
                            .state
                            .recipes
                            .map(r => <SingleRecipe
                                key={r.id}
                                id={r.id}
                                title={r.title}
                                picture={r.picture}
                                content={r.content}
                                categoryId={r.categoryId}
                                categoryName={r.categoryName}
                                recipeLikesCount={r.recipeLikesCount}
                                commentsCount={r.commentsCount} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipesList;