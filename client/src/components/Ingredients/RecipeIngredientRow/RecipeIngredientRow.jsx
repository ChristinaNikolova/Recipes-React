function RecipeIngredientRow({ ingredientId, ingredientName, quantity, clickHandler }) {
    return (
        <tr>
            <td>{ingredientName}</td>
            <td>{quantity}</td>
            <td><button className="special-btn danger" onClick={() => clickHandler(ingredientId)}>Delete</button></td>
        </tr >
    );
}

export default RecipeIngredientRow;