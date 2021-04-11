import { useState, useEffect } from 'react';

import * as categoriesService from '../../../services/categoriesService.js';
import SingleCategory from '../SingleCategory/SingleCategory.jsx';

import './CategoriesList.css';

function CategoriesList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoriesService
            .all()
            .then(categories => setCategories(categories))
            .catch(err => console.error(err));

    }, []);

    return (
        <div className="categories-wrapper">
            <div className="container">
                <div className="col-md-12">
                    <h1 className="text-center pt-2 cursive-font-style">All Categories</h1>
                    <hr />
                </div>
                <div className="row">
                    {categories
                        .map(c => <SingleCategory
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            picture={c.picture}
                            recipesCount={c.recipesCount} />)}
                </div>
            </div>
        </div>
    );
}

export default CategoriesList;