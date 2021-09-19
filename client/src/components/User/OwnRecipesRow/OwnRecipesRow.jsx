import { Link } from 'react-router-dom';
import toastr from 'toastr';

import * as recipesService from '../../../services/recipesService.js';

import './OwnRecipesRow.css';

function OwnRecipesRow({ id, title, picture, categoryName, clickHandler }) {
    const remove = () => {
        recipesService
            .remove(id)
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
                <Link to={`/recipes/details/${id}`}><h6 className="title-own-recipe">{title}</h6></Link>
            </td >
            <td>
                <img className="pic-own-recipe" src={picture} alt="recipe-pic" />
            </td>
            <td>{categoryName}</td>
            <td><Link to={`/recipes/ingredients/${id}`}><button className="btn btn-secondary">Delete Ingredients</button></Link></td>
            <td><Link to={`/recipes/update/${id}`}><button className="btn btn-warning">Update</button></Link></td >
            <td><button className="btn btn-danger" onClick={remove}>Delete</button></td >
        </tr>);
}

export default OwnRecipesRow;