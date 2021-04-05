import { Component } from 'react';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

import * as recipesService from '../../../services/recipesService.js';
import * as authService from '../../../services/authService.js';
import CommentsListCurrentRecipe from '../../Comment/CommentsListCurrentRecipe/CommentsListCurrentRecipe.jsx';

import './RecipeDetails.css';

class RecipeDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recipe: {}
        };
    }

    componentDidMount() {
        if (!authService.isAuthenticated()) {
            this.props.history.push('/login');
            return;
        }

        const recipeId = this.props.match.params.id;
        recipesService
            .getDetails(recipeId)
            .then(recipe => this.setState({ recipe: recipe }));
    }

    addToFav() {
        const recipeId = this.state.recipe.id;
        const isFavourite = this.state.recipe.isFavourite;

        recipesService
            .like(recipeId)
            .then((data) => this.setNewState(data, isFavourite));
    }

    removeFromFav() {
        const recipeId = this.state.recipe.id;
        const isFavourite = this.state.recipe.isFavourite;

        recipesService
            .dislike(recipeId)
            .then((data) => this.setNewState(data, isFavourite));
    }

    setNewState(data, isFavourite) {
        {
            if (data['status'] !== 400) {
                toastr.success(data['message'], 'Success');

                this.setState(state => (
                    {
                        recipe: Object.assign({}, state.recipe, { isFavourite: !isFavourite })
                    }));
                return;
            }
            toastr.error(data['message'], 'Error');
        }
    }


    render() {
        const recipe = this.state.recipe;

        return (
            <div className="recipe-details-wrapper" >
                <div className="pl-4">
                    <h2 className="text-center p-1 cursive-font-style">{recipe.title}</h2>
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
                                                    <span className="feature-title ml-2 cursive-font-style">PREP TIME:</span>
                                                    <span className="feature-sub-title ml-2">{recipe.preparationTime} Mins</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feature-wrap mb-3">
                                                <div className="media-body space-sm">
                                                    <i className="fas fa-utensils"></i>
                                                    <span className="feature-title ml-2 cursive-font-style">COOK TIME:</span>
                                                    <span className="feature-sub-title ml-2">{recipe.cookingTime} Mins</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="feature-wrap mb-3">
                                                <div className="media-body space-sm">
                                                    <i className="fas fa-users"></i>
                                                    <span className="feature-title ml-2 cursive-font-style">SERVING:</span>
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
                                                    <span className="feature-title ml-2 cursive-font-style">CATEGORY:</span>
                                                    <span className="feature-sub-title ml-2"><Link to={`/recipes/current-category/${recipe.categoryId}`} className="hover-effect">{recipe.categoryName}</Link></span>
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
                                        <h3 className="item-title cursive-font-style"><i className="fas fa-list-ul"></i> Ingridients</h3>
                                        {recipe.ingredients
                                            ? recipe.ingredients.map(i => <div key={i.ingredientId} className="checkbox checkbox-primary"><label><i className="fas fa-check ml-2 mr-2"></i> {i.quantity}: {i.ingredientName}</label></div>)
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 meta mb-2 mt-2 cursive-font-style">
                                <span className="single-meta m-2">
                                    <i className="far fa-calendar-alt"></i> Created on: {recipe.formattedCreatedOn}
                                </span>
                                <span className="single-meta m-2">
                                    <i className="fas fa-user"></i> by <span>{recipe.authorUserName}</span>
                                </span>
                                <span className="single-meta m-2">
                                    {recipe.isFavourite
                                        ? <i className="fas fa-heart" onClick={this.removeFromFav.bind(this)}><span className="like-text cursive-font-style"> Remove from favourites</span></i>
                                        : <i className="far fa-heart" onClick={this.addToFav.bind(this)}><span className="like-text cursive-font-style"> Add to favourites</span></i>}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <hr />
                            <h4 className="cursive-font-style">How to prepare:</h4>
                            <p className="item-description m-2">
                                {recipe.content}
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="custom-margin-left" />
                { recipe.id
                    ? <CommentsListCurrentRecipe recipeId={recipe.id} />
                    : null
                }
                < div className="fill pt-1 pb-1" ></div >
            </div >
        );
    }
}

export default RecipeDetails;