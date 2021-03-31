import { Link } from 'react-router-dom';

import * as categoriesService from '../../../../services/categoriesService.js';

import './CategoryAdminSingleRow.css';

function CategoryAdminSingleRow({ id, name, recipesCount, clickHandler }) {

    const remove = () => {
        categoriesService.removeFromAdmin(id)
            .then(clickHandler());
    }

    return (
        <tr>
            <td><Link to={`/recipes/current-category/${id}`} className="custom-title">{name}</Link></td>
            <td>{recipesCount}</td>
            <td><Link to={`/admin/categories/update/${id}`}><button className="btn btn-warning">Update</button></Link></td>
            <td><button className="btn btn-danger" onClick={remove} >Delete</button></td >
        </tr >
    );
}

export default CategoryAdminSingleRow;