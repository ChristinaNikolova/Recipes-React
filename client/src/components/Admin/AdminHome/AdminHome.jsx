import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as authService from '../../../services/authService.js';

import './AdminHome.css';

function AdminHome({ history }) {
    useEffect(() => {
        if (!authService.isAdmin()) {
            history.push('/');
            return;
        }
    }, [])

    return (
        <div className="admin-home-wrapper">
            <h1 className="text-center cursive-font-style p-1">Wellcome to Administration</h1>
            <hr className="hr-admin-dashboard" />
            <div>
                <ul className="custom-font-li">
                    <li className="bold-admin-dashboard m-1">
                        Categories
                    <div className="mt-2 mb-2">
                            <Link to="/admin/categories"><button className="btn btn-secondary mr-2 remove-font all-admin-area">All Categories</button></Link>
                            <Link to="/admin/categories/create"><button className="btn btn-primary mr-2 remove-font create-admin-area">Create category</button></Link>
                        </div>
                    </li>
                    <li className="bold-admin-dashboard m-1">
                        Ingredients
                    <div className="mt-2 mb-2">
                            <Link to="/admin/ingredients"><button className="btn btn-secondary mr-2 remove-font all-admin-area">All Ingredients</button></Link>
                            <Link to="/admin/ingredients/create"><button className="btn btn-primary mr-2 remove-font create-admin-area">Create ingredient</button></Link>
                        </div>
                    </li >
                </ul >
            </div >
        </div >
    );
}

export default AdminHome;