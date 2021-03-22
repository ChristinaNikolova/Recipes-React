import { Component } from 'react';
import * as recipesService from '../../../services/recipesService.js';

import './RecipesCurrentCategory.css';

class RecipesCurrentCategory extends Component {
    constructor(props) {
        console.log("in")
        super(props)

        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        // const id = this.props.match.params.id;
        console.log(this.props.match.params)
        recipesService
            .getByCategory();
    }

    render() {
        return (
            <div className="recipes-current-category-wrapper">
                <div className="container">
                    <div className="col-md-12">
                        <h1 className="text-center p-1">Recipes in category: </h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            ...
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipesCurrentCategory;