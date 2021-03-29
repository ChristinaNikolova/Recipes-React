import { Link } from 'react-router-dom';

import * as recipesService from '../../../services/recipesService.js';

import './OwnRecipesRow.css';

function OwnRecipesRow({ id, title, picture, categoryName }) {

    const remove = () => {
        recipesService
            .remove(id);
    }

    return (
        <tr>
            <td>
                <Link to={`/recipes/details/${id}`}><h6 className="title-own-recipe">{title}</h6></Link>
            </td >
            <td>
                <img className="pic-own-recipe" src={picture} alt="recipe-pic" />
            </td>
            <td>{categoryName}</td>
            <td><button className="btn btn-secondary">Delete Ingredients</button></td>
            <td><button className="btn btn-warning">Update</button></td >
            <td><button className="btn btn-danger" onClick={remove}>Delete</button></td >
        </tr>
    );
}

export default OwnRecipesRow;