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
        <section id="categories" className="section">
            <div className="container">
                <h1 className="title text-center cursive-font-style">All Categories</h1>
                <hr />
                <div className="categories-list">
                    {categories
                        .map(c => <SingleCategory
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            picture={c.picture}
                            recipesCount={c.recipesCount} />)}
                </div>
            </div>
        </section>
    );
}

export default CategoriesList;