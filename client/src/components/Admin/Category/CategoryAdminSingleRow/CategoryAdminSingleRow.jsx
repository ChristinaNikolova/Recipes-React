import { Link } from 'react-router-dom';

import './CategoryAdminSingleRow.css';

function CategoryAdminSingleRow({ id, name, recipesCount, clickHandler }) {
    return (
        <tr className='table-row'>
            <td><Link to={`/recipes/current-category/${id}`}>{name}</Link></td>
            <td>{recipesCount}</td>
            <td><Link to={`/admin/categories/update/${id}`}><button className="special-btn warning">Update</button></Link></td>
            <td><button className="special-btn danger" onClick={() => clickHandler(id)}>Delete</button></td >
        </tr >
    );
}

export default CategoryAdminSingleRow;