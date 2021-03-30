import { render } from '@testing-library/react';
import produce from 'immer';
import { Component } from 'react';

import * as categoriesService from '../../../services/categoriesService.js';
import * as recipesService from '../../../services/recipesService.js';
import * as test from '../../../utils/validations/recipeValidator.js';
import Input from '../../shared/Input/Input.jsx';
import CreateIngredientRecipeForm from './CreateIngredientRecipeForm.jsx';


class CreateRecipeForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            ingredientsForRecipe: []
        };
    }

    componentDidMount() {
        categoriesService
            .getAllNames()
            .then(categories => this.setState({ categories: categories }));
    }

    updateIngredients(ingredients) {
        console.log(ingredients);
        this.setState(({ ingredientsForRecipe: ingredients }));
    }

    onSubmitCreateForm(e) {
        e.preventDefault();

        const { title, content, portions, preparationTime, cookingTime, categoryName, picture } = e.target;

        recipesService
            .create(title.value,
                content.value,
                portions.value,
                preparationTime.value,
                cookingTime.value,
                categoryName.value,
                picture.value,
                this.state.ingredientsForRecipe)
            .then(() => {
                this.props.clickHandler();
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitCreateForm.bind(this)}>
                <div className="row space-top">
                    <div className="col-lg-8">
                        <Input
                            type='text'
                            name='title'
                            label='Title' />

                        <Input
                            type='text'
                            name='content'
                            label='Content' />

                        <Input
                            type='number'
                            name='portions'
                            label='Portions' />

                        <Input
                            type='number'
                            name='preparationTime'
                            label='Preparation Time in minutes' />

                        <Input
                            type='number'
                            name='cookingTime'
                            label='Cooking Time in minutes' />

                        <div className="form-group">
                            <label className="form-control-label" htmlFor="categoryName">Category</label>
                            <select className="form-control" id="categoryName">
                                {this.state.categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                            </select>
                        </div>

                        <Input
                            type='url'
                            name='picture'
                            label='Picture url' />
                        <hr />
                        <CreateIngredientRecipeForm clickHandler={this.updateIngredients.bind(this)} />
                        <hr />
                        <button type="submit" className="btn btn-secondary">Create</button >
                    </div >
                </div >
            </form >
        );
    }
}


export default CreateRecipeForm;