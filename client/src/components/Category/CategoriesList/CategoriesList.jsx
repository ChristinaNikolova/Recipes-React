import { Component } from 'react';

import * as categoriesService from '../../../services/categoriesService.js';
import SingleCategory from '../SingleCategory/SingleCategory.jsx';

import './CategoriesList.css';

class CategoriesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        categoriesService
            .all()
            .then(categories => this.setState({ categories: categories }));
    }

    render() {
        return (
            <div className="categories-wrapper">
                <div className="container">
                    <div className="col-md-12">
                        <h1 className="text-center pt-2">All Categories</h1>
                        <hr />
                    </div>
                    <div className="row">
                        {this
                            .state
                            .categories
                            .map(c => <SingleCategory
                                key={c.id}
                                name={c.name}
                                picture={c.picture}
                                recipesCount={c.recipesCount} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoriesList;