import './FavouriteRecipesRow.css';

import { Link } from 'react-router-dom';

function FavouriteRecipesRow({ recipeId, recipeTitle, recipePicture, recipeCategoryName, recipeAuthorUserName }) {
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
            <td><button className="btn btn-danger">Remove</button></td>
        </tr >
    );
}

export default FavouriteRecipesRow;