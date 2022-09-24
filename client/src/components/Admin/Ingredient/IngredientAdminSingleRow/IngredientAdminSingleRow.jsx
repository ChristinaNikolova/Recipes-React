import { Link } from 'react-router-dom';

function IngredientAdminSingleRow({ id, name, recipeIngredientsCount, clickHandler }) {
    return (
        <tr className=''>
            <td>{name}</td>
            <td>{recipeIngredientsCount}</td>
            <td><Link to={`/admin/ingredients/update/${id}`}><button className="special-btn warning">Update</button></Link></td>
            <td><button className="special-btn danger" onClick={() => clickHandler(id)}>Delete</button></td >
        </tr >
    );
}

export default IngredientAdminSingleRow;