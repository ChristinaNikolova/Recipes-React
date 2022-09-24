import { useState, useEffect } from 'react';
import toastr from 'toastr';

import * as categoriesService from '../../../../services/categoriesService.js';

import AdminTableHead from '../../../shared/Administration/AdminTableHead/AdminTableHead.jsx';
import CategoryAdminSingleRow from '../CategoryAdminSingleRow/CategoryAdminSingleRow.jsx';

import './CategoriesAdminList.css';

function CategoriesAdminList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const remove = (categoryId) => {
        categoriesService
            .removeFromAdmin(categoryId)
            .then((data) => {
                if (data['status'] === 400) {
                    toastr.error(data['message'], 'Error');
                    return;
                }
                loadCategories();
                toastr.success(data['message'], 'Success');
            });
    }

    const loadCategories = () => {
        categoriesService
            .getAllForAdmin()
            .then(categories => setCategories(categories))
            .catch(err => console.error(err));
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
                            clickHandler={remove} />)}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default CategoriesAdminList;