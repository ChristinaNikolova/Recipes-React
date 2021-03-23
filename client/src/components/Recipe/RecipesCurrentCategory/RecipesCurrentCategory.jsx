import { Component } from 'react';

import SingleRecipe from '../SingleRecipe/SingleRecipe.jsx'
import * as recipesService from '../../../services/recipesService.js';

import './RecipesCurrentCategory.css';

class RecipesCurrentCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        const categoryId = this.props.match.params.id;

        recipesService
            .getByCategory(categoryId)
            .then(recipes => this.setState({ recipes: recipes }));
    }

    render() {
        console.log(this.state);
        return (
            <div className="recipes-current-category-wrapper">
                <div className="container">
                    <div className="col-md-12">
                        <h1 className="text-center p-1">Recipes in category: </h1>
                        <hr />
                    </div>
                    <div className="row">
                        {this.state.recipes.map(r => <SingleRecipe
                            key={r.id}
                            id={r.id}
                            title={r.title}
                            picture={r.picture}
                            content={r.content}
                            categoryName={r.categoryName}
                            recipeLikesCount={r.recipeLikesCount}
                            commentsCount={r.commentsCount} />)}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipesCurrentCategory;