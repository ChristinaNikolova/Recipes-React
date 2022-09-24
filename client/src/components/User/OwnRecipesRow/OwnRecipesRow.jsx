import { Link } from 'react-router-dom';

import './OwnRecipesRow.css';

function OwnRecipesRow({ id, title, picture, categoryName, clickHandler }) {
    return (
        <tr className='own-recipes-row'>
            <td>
                <Link to={`/recipes/details/${id}`} className="td-link">{title}</Link>
            </td >
            <td>
                <img className="table-pic" src={picture} alt="recipe-pic" />
            </td>
            <td>{categoryName}</td>
            <td><Link to={`/recipes/ingredients/${id}`}><button className="special-btn danger">Delete Ingredients</button></Link></td>
            <td><Link to={`/recipes/update/${id}`}><button className="special-btn warning">Update</button></Link></td >
            <td><button className="special-btn danger" onClick={() => clickHandler(id)}>Delete</button></td >
        </tr>);
}

export default OwnRecipesRow;