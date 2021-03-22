import { Component } from 'react';
import * as recipesService from '../../../services/recipesService.js';

import './RecipeDetails.css';

class RecipeDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recipe: {}
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        recipesService
            .getDetails(id)
            .then(recipe => this.setState({ recipe: recipe }))
    }

    render() {
        const recipe = this.state.recipe;

        return (
            <div className="recipe-details-wrapper">
                <div className="pl-4">
                    <h2 className="text-center p-1">{recipe.title}</h2>
                    <hr />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-3">
                                    <ul>
                                        <li>
                                            <div className="feature-wrap mb-3">
                                                <div className="media-body space-sm">
                                                    <i className="far fa-clock"></i>
                                                    <span className="feature-title ml-2">PREP TIME:</span>
                                                    <span className="feature-sub-title ml-2">{recipe.preparationTime} Mins</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feature-wrap mb-3">
                                                <div className="media-body space-sm">
                                                    <i className="fas fa-utensils"></i>
                                                    <span className="feature-title ml-2">COOK TIME:</span>
                                                    <span className="feature-sub-title ml-2">{recipe.cookingTime} Mins</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feature-wrap mb-3">
                                                <div className="media-body space-sm">
                                                    <i className="fas fa-users"></i>
                                                    <span className="feature-title ml-2">SERVING:</span>
                                                    <span className="feature-sub-title ml-2">
                                                        {recipe.portions} Portions
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feature-wrap mb-3">
                                                <div className="media-body space-sm">
                                                    <i className="fas fa-book"></i>
                                                    <span className="feature-title ml-2">CATEGORY:</span>
                                                    <span className="feature-sub-title ml-2"><a className="hover-effect">{recipe.categoryName}</a></span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <img className='recipe-details-img' src={recipe.picture} alt={recipe.title} />
                                </div>
                                <div className="col-lg-3">
                                    <div className="ingridients-wrap">
                                        <h3 className="item-title"><i className="fas fa-list-ul"></i> Ingridients</h3>
                                        <div className="checkbox checkbox-primary">
                                            {/* <label><i className="fas fa-check ml-2 mr-2"></i> {quantity}: {ingredientName}</label> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 meta mb-2 mt-2">
                                <span className="single-meta m-2">
                                    <i className="far fa-calendar-alt"></i> Created on: {recipe.formattedCreatedOn}
                                </span>
                                <span className="single-meta m-2">
                                    <i className="fas fa-user"></i> by <span>{recipe.authorUserName}</span>
                                </span>
                                <span className="single-meta m-2">
                                    <i className="far fa-heart"><span className="like-text"> Add to favourites</span></i>
                                    <i className="fas fa-heart"><span className="like-text"> Remove from favourites</span></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <hr />
                            <h4>How to prepare:</h4>
                            <p className="item-description m-2">
                                {recipe.content}
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="custom-margin-left" />
                ...
                <div className="fill pt-1 pb-1"></div>
            </div>
        );
    }
}

export default RecipeDetails;