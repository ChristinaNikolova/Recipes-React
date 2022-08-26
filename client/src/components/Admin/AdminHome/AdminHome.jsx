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
        <section id="admin-home" className="section">
            <h1 className="title text-center cursive-font-style">Welcome to Administration</h1>
            <hr className="admin-hr-dashboard" />
            <ul className="admin-ul">
                <li className="admin-li">
                    <div className="admin-li-title">
                        Categories
                    </div>
                    <div className="admin-li-wrapper">
                        <Link to="/admin/categories"><button className="custom-btn">All Categories</button></Link>
                        <Link to="/admin/categories/create"><button className="custom-btn">Create Category</button></Link>
                    </div>
                </li>
                <li className="admin-li">
                    <div className="admin-li-title">
                        Ingredients
                    </div>
                    <div className="admin-li-wrapper">
                        <Link to="/admin/ingredients"><button className="custom-btn">All Ingredients</button></Link>
                        <Link to="/admin/ingredients/create"><button className="custom-btn">Create Ingredient</button></Link>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default AdminHome;