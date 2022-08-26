import { Link } from 'react-router-dom';
import toastr from 'toastr';

import * as recipesService from '../../../services/recipesService.js';

function FavouriteRecipesRow({ recipeId, recipeTitle, recipePicture, recipeCategoryName, recipeAuthorUserName, clickHandler }) {
    const removeFromFav = () => {
        recipesService
            .dislike(recipeId)
            .then((data) => {
                if (data['status'] === 400) {
                    toastr.error(data['message'], 'Error');
                    return;
                }
                toastr.success(data['message'], 'Success');
                clickHandler();
            });
    }

    return (
        <tr>
            <td>
                <Link to={`/recipes/details/${recipeId}`} className="td-link">{recipeTitle}</Link>
            </td>
            <td>
                <img className="table-pic" src={recipePicture} alt="recipe-pic" />
            </td>
            <td>{recipeCategoryName}</td>
            <td>{recipeAuthorUserName}</td>
            <td><button className="special-btn danger" onClick={removeFromFav}>Remove</button></td>
        </tr >);
}

export default FavouriteRecipesRow;