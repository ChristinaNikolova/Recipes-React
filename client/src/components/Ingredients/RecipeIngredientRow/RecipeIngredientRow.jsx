import * as ingredientsService from '../../../services/ingredientsService.js';

function RecipeIngredientRow({ ingredientId, recipeId, ingredientName, quantity, clickHandler }) {
    const remove = () => {
        ingredientsService
            .remove(recipeId, ingredientId)
            .then(clickHandler());
    }

    return (
        <tr>
            <td>{ingredientName}</td>
            <td>{quantity}</td>
            <td><button className="btn btn-danger" onClick={remove}>Delete</button></td>
        </tr >
    );
}

export default RecipeIngredientRow;