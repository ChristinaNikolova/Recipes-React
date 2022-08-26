import toastr from 'toastr';

import * as ingredientsService from '../../../services/ingredientsService.js';

function RecipeIngredientRow({ ingredientId, recipeId, ingredientName, quantity, clickHandler }) {
    const remove = () => {
        ingredientsService
            .remove(recipeId, ingredientId)
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
            <td>{ingredientName}</td>
            <td>{quantity}</td>
            <td><button className="special-btn danger" onClick={remove}>Delete</button></td>
        </tr >
    );
}

export default RecipeIngredientRow;