import { Component } from 'react';

import * as ingredientsService from '../../../services/ingredientsService.js';
import RecipeIngredientRow from '../RecipeIngredientRow/RecipeIngredientRow.jsx';

import './RecipeIngredientsList.css';

class RecipeIngredientsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredients: []
        };
    }

    componentDidMount() {
        this.getIngredients();
    }

    reload() {
        setTimeout(() => {
            this.getIngredients();
        }, 300);
    }

    getIngredients() {
        let recipeId = this.props.match.params.id;

        ingredientsService
            .getByRecipe(recipeId)
            .then(ingredients => this.setState({ ingredients: ingredients }));
    }

    render() {
        return (
            <div className="recipe-ingredients-wrapper">
                <div className="container">
                    <h1 className="text-center cursive-font-style p-1">Ingredients</h1>
                    <hr />
                    <table className="table table-bordered table-hover custom-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ingredients.map(i =>
                                <RecipeIngredientRow
                                    key={i.ingredientId}
                                    ingredientId={i.ingredientId}
                                    recipeId={i.recipeId}
                                    ingredientName={i.ingredientName}
                                    quantity={i.quantity}
                                    clickHandler={this.reload.bind(this)} />)}
                        </tbody>
                    </table>
                </div >
                <div className="fill pt-1 pb-1"></div>
            </div >
        );
    }
}

export default RecipeIngredientsList;