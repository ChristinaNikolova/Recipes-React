import {Component} from 'react';

import * as recipesService from '../../../services/recipesService.js';
import RecipesOrder from '../RecipesOrder/RecipesOrder.jsx';
import SingleRecipe from '../SingleRecipe/SingleRecipes.jsx';

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
            .then(recipes => this.setState({recipes: recipes}));
    }

    render() {
        return (
            <div className="recipes-wrapper">
                <div className="container">
                    <div className="fill pt-1 pb-1"></div>
                    {/* <hr className="hr-fill"/>  <app-search-recipe></app-search-recipe> */}
                    <RecipesOrder />
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center mb-0 pt-2">All Recipes</h1>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-md-6 custom-position">
                            <a
                                className="btn btn-primary btn-lg mt-4 text-center create-recipe-btn"
                                role="button">Create new recipe</a>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-4">
                            {this
                                .state
                                .recipes
                                .map(r => <SingleRecipe
                                    key={r.id}
                                    id={r.id}
                                    title={r.title}
                                    picture={r.picture}
                                    content={r.content}
                                    categoryName={r.categoryName}
                                    recipeLikesCount={r.recipeLikesCount}
                                    commentsCount={r.commentsCount}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipesList;