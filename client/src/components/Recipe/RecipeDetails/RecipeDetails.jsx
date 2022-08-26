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
            .then(recipe => this.setState({ recipe: recipe }))
            .catch(err => console.error(err));
    }

    addToFav() {
        const recipeId = this.state.recipe.id;
        const isFavourite = this.state.recipe.isFavourite;

        recipesService
            .like(recipeId)
            .then((data) => this.setNewState(data, isFavourite))
            .catch(err => console.error(err));
    }

    removeFromFav() {
        const recipeId = this.state.recipe.id;
        const isFavourite = this.state.recipe.isFavourite;

        recipesService
            .dislike(recipeId)
            .then((data) => this.setNewState(data, isFavourite))
            .catch(err => console.error(err));
    }

    setNewState(data, isFavourite) {
        {
            if (data['status'] === 400) {
                toastr.error(data['message'], 'Error');
                return;
            }
            toastr.success(data['message'], 'Success');
            this.setState(state => (
                {
                    recipe: Object.assign({}, state.recipe, { isFavourite: !isFavourite })
                }));
        }
    }


    render() {
        const recipe = this.state.recipe;

        return (
            <section id="recipe-details" className="section" >
                <div className="recipe-details-wrapper">
                    <h2 className="title text-center cursive-font-style">{recipe.title}</h2>
                    <hr />
                    <div className="recipe-details-content">
                        <div className="recipe-details-content-data">
                            <div className="recipe-details-content-data-wrapper">
                                <ul className='recipe-details-content-data-ul'>
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
                            <div className="recipe-details-content-data-wrapper">
                                <img className='recipe-details-content-data-img' src={recipe.picture} alt={recipe.title} />
                                <ul className="recipe-details-content-data-ul cursive-font-style">
                                    <li>
                                        <i className="far fa-calendar-alt"></i> Created on: {recipe.formattedCreatedOn}
                                    </li>
                                    <li>
                                        <i className="fas fa-user"></i> by <span>{recipe.authorUserName}</span>
                                    </li>
                                    <li>
                                        {recipe.isFavourite
                                            ? <i className="fas fa-heart" onClick={this.removeFromFav.bind(this)}><span className="like-text cursive-font-style"> Remove from favourites</span></i>
                                            : <i className="far fa-heart" onClick={this.addToFav.bind(this)}><span className="like-text cursive-font-style"> Add to favourites</span></i>}
                                    </li>
                                </ul>
                            </div>
                            <div className="recipe-details-content-data-wrapper">
                                <div className="ingridients-wrap">
                                    <h3 className="item-title cursive-font-style"><i className="fas fa-list-ul"></i> Ingridients</h3>
                                    {recipe.ingredients
                                        ? recipe.ingredients.map(i => <div key={i.ingredientId} className="checkbox checkbox-primary"><label><i className="fas fa-check ml-2 mr-2"></i> {i.quantity}: {i.ingredientName}</label></div>)
                                        : null
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="recipe-prepare-wrapper">
                        <hr />
                        <h4 className="recipe-prepare-title cursive-font-style">How to prepare:</h4>
                        <p className="recipe-prepare-desc">
                            {recipe.content}
                        </p>
                    </div>
                </div>
                {recipe.id
                    ? <CommentsListCurrentRecipe recipeId={recipe.id} />
                    : null
                }
            </section>
        );
    }
}

export default RecipeDetails;