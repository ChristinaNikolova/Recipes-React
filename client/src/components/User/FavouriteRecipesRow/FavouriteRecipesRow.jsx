import { Link } from 'react-router-dom';

import * as recipesService from '../../../services/recipesService.js';

import './FavouriteRecipesRow.css';

function FavouriteRecipesRow({ recipeId, recipeTitle, recipePicture, recipeCategoryName, recipeAuthorUserName, clickHandler }) {

    const removeFromFav = () => {
        recipesService
            .dislike(recipeId)
            .then(clickHandler());
    }

    return (
        <tr>
            <td>
                <Link to={`/recipes/details/${recipeId}`} className="custom-title-fav-recipe"><h6>{recipeTitle}</h6></Link>
            </td>
            <td>
                <img className="pic-fav-recipe" src={recipePicture} alt="recipe-pic" />
            </td>
            <td>{recipeCategoryName}</td>
            <td>{recipeAuthorUserName}</td>
            <td><button className="btn btn-danger" onClick={removeFromFav}>Remove</button></td>
        </tr >
    );
}

export default FavouriteRecipesRow;