import { useState, useEffect } from 'react';

import * as categoriesService from '../../../../services/categoriesService.js';
import CategoryAdminSingleRow from '../CategoryAdminSingleRow/CategoryAdminSingleRow.jsx';

import './CategoriesAdminList.css';

function CategoriesAdminList() {
    const [categories, setCategories] = useState([]);
    const [hasToReload, setHasToReload] = useState(false);

    useEffect(() => {
        categoriesService
            .getAllForAdmin()
            .then(categories => setCategories(categories))
            .then(setHasToReload(false));
    }, [hasToReload]);

    const reload = () => {
        setHasToReload(true);
    }

    return (
        <div className="all-category-wrapper">
            <div className="container">
                <h1 className="text-center cursive-font-style p-1">Categories</h1>
                <hr />
                <table className="table table-striped table-bordered table-hover custom-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Recipes Count</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
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