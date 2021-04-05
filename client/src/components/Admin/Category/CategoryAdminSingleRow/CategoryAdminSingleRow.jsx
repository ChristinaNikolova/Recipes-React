import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import toastr from 'toastr';

import * as authService from '../../../../services/authService.js';
import * as categoriesService from '../../../../services/categoriesService.js';

import './CategoryAdminSingleRow.css';

function CategoryAdminSingleRow({ id, name, recipesCount, clickHandler, history }) {
    useEffect(() => {
        if (!(authService.isAuthenticated() && authService.isAdmin())) {
            history.push('/')
        }
    }, [])

    const remove = () => {
        categoriesService
            .removeFromAdmin(id)
            .then((data) => {
                if (data['status'] !== 400) {
                    toastr.success(data['message'], 'Success');
                    clickHandler();
                    return;
                }
                toastr.error(data['message'], 'Error');
            });
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