import { useState, useEffect } from 'react';

import * as categoriesService from '../../../services/categoriesService.js';
import * as recipesService from '../../../services/recipesService.js';
import * as test from '../../../utils/validations/recipeValidator.js';
import Input from '../../shared/Input/Input.jsx';
import CreateIngredientRecipeForm from './CreateIngredientRecipeForm.jsx';


function CreateRecipeForm({ clickHandler }) {
    const [categories, setCategories] = useState([]);
    const [ingredientsForRecipe, setIngredientsForRecipe] = useState([{}]);

    useEffect(() => {
        categoriesService
            .getAllNames()
            .then(categories => setCategories(categories));
    }, []);

    const updateIngredients = (ingredients) => {
        setTimeout(() => {
            setIngredientsForRecipe(ingredients);
        }, 400);
    }

    const onCreateRecipeSubmitHandler = (e) => {
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
                ingredientsForRecipe)
            .then(() => {
                clickHandler();
            });
    }

    return (
        <form onSubmit={onCreateRecipeSubmitHandler}>
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
                            {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                        </select>
                    </div>

                    <Input
                        type='url'
                        name='picture'
                        label='Picture url' />
                    <hr />
                    <CreateIngredientRecipeForm

                        clickHandler={updateIngredients} />
                    <hr />
                    <button type="submit" className="btn btn-secondary">Create</button >
                </div >
            </div >
        </form >
    );
}

export default CreateRecipeForm;