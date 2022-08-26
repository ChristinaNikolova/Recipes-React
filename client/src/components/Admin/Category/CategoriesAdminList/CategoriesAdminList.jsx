import { useState, useEffect } from 'react';

import * as authService from '../../../../services/authService.js';
import * as categoriesService from '../../../../services/categoriesService.js';
import AdminTableHead from '../../../shared/Administration/AdminTableHead/AdminTableHead.jsx';
import CategoryAdminSingleRow from '../CategoryAdminSingleRow/CategoryAdminSingleRow.jsx';

import './CategoriesAdminList.css';

function CategoriesAdminList({ history }) {
    const [categories, setCategories] = useState([]);
    const [hasToReload, setHasToReload] = useState(false);

    useEffect(() => {
        if (!authService.isAdmin()) {
            history.push('/');
            return;
        }

        categoriesService
            .getAllForAdmin()
            .then(categories => setCategories(categories))
            .then(setHasToReload(false))
            .catch(err => console.error(err));
    }, [hasToReload]);

    const reload = () => {
        setTimeout(() => {
            setHasToReload(true);
        }, 250);
    }

    return (
        <section id="admin-categories" className="section">
            <div className="container">
                <h1 className="title text-center cursive-font-style">Categories</h1>
                <table className="table table-striped table-bordered table-hover">
                    <AdminTableHead />
                    <tbody>
                        {categories.map(c => <CategoryAdminSingleRow
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            recipesCount={c.recipesCount}
                            clickHandler={reload} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default CategoriesAdminList;