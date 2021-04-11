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
        <div className="all-category-wrapper">
            <div className="container">
                <h1 className="text-center cursive-font-style p-1">Categories</h1>
                <hr />
                <table className="table table-striped table-bordered table-hover custom-table">
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
            </div >
            <div className="fill pb-1 pt-1"></div>
        </div >
    );
}

export default CategoriesAdminList;