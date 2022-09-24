import { Link } from 'react-router-dom';

function FavouriteRecipesRow({ recipeId, recipeTitle, recipePicture, recipeCategoryName, recipeAuthorUserName, clickHandler }) {
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
            <td><button className="special-btn danger" onClick={() => clickHandler(recipeId)}>Remove</button></td>
        </tr >);
}

export default FavouriteRecipesRow;