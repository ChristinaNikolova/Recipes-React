import { Component } from 'react';

import * as usersService from '../../../services/usersService.js';
import FavouriteRecipesRow from '../FavouriteRecipesRow/FavouriteRecipesRow.jsx';

import './FavouriteRecipes.css';

class FavouriteRecipes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favRecipes: []
        };
    }

    componentDidMount() {
        usersService
            .getFavourite()
            .then(recipes => this.setState({ favRecipes: recipes }));
    }


    render() {
        return (
            <div className="favourite-recipes-wrapper">
                <div className="container">
                    <h1 className="text-center cursive-font-style p-1">My Favourite Recipes</h1>
                    <hr />
                    <table className="table table-bordered table-hover custom-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Picture</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.favRecipes
                                .map(r => <FavouriteRecipesRow
                                    key={r.recipeId}
                                    recipeId={r.recipeId}
                                    recipeTitle={r.recipeTitle}
                                    recipePicture={r.recipePicture}
                                    recipeCategoryName={r.recipeCategoryName}
                                    recipeAuthorUserName={r.recipeAuthorUserName} />)}
                        </tbody>
                    </table>
                </div >
                <div className="fill pt-1 pb-1"></div>
            </div >
        );
    }
}

export default FavouriteRecipes;