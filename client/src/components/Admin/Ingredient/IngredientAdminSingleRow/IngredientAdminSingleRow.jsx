import * as ingredientsService from '../../../../services/ingredientsService.js';

function IngredientAdminSingleRow({ id, name, recipeIngredientsCount, clickHandler }) {

    const remove = () => {
        ingredientsService.removeFromAdmin(id)
            .then(clickHandler());
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{recipeIngredientsCount}</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger" onClick={remove}>Delete</button></td >
        </tr >
    );
}

export default IngredientAdminSingleRow;