import { Link } from 'react-router-dom';
import toastr from 'toastr';

import * as ingredientsService from '../../../../services/ingredientsService.js';

function IngredientAdminSingleRow({ id, name, recipeIngredientsCount, clickHandler }) {
    const remove = () => {
        ingredientsService
            .removeFromAdmin(id)
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
        <tr className=''>
            <td>{name}</td>
            <td>{recipeIngredientsCount}</td>
            <td><Link to={`/admin/ingredients/update/${id}`}><button className="special-btn warning">Update</button></Link></td>
            <td><button className="special-btn danger" onClick={remove}>Delete</button></td >
        </tr >
    );
}

export default IngredientAdminSingleRow;