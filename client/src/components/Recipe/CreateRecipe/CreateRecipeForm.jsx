import { useState, useEffect } from 'react';

import * as categoriesService from '../../../services/categoriesService.js';
import * as recipesService from '../../../services/recipesService.js';
import * as test from '../../../utils/validations/recipeValidator.js';
import Input from '../../shared/Input/Input.jsx';
import CreateIngredientRecipeForm from './CreateIngredientRecipeForm.jsx';


function CreateRecipeForm({ clickHandler }) {
    const [categories, setCategories] = useState([]);
    const [ingredientsForRecipe, setIngredientsForRecipe] = useState([]);
    const [errorTitle, setErrorTitle] = useState('');
    const [errorContent, setErrorContent] = useState('');
    const [errorPortions, setErrorPortions] = useState('');
    const [errorPrepTime, setErrorPrepTime] = useState('');
    const [errorCookTime, setErrorCookTime] = useState('');
    const [errorPicture, setErrorPicture] = useState('');

    useEffect(() => {
        categoriesService.getAllNames()
            .then(categories => setCategories(categories));
    }, []);

    useEffect(() => {
    }, [errorTitle, errorContent, errorPortions, errorPrepTime, errorCookTime, errorPicture]);

    const updateIngredients = (ingredients) => {
        setIngredientsForRecipe(ingredients);
    }

    const onSubmitCreateForm = (e) => {
        e.preventDefault();
        
        const { title, content, portions, preparationTime, cookingTime, categoryName, picture } = e.target;

        setErrorTitle(test.validTitle(title.value));
        setErrorContent(test.validContent(content.value));
        setErrorPortions(test.validPortions(portions.value));
        setErrorPrepTime(test.validPreparationTime(preparationTime.value));
        setErrorCookTime(test.validCookingTime(cookingTime.value));
        setErrorPicture(test.validPicture(picture.value));

        if (test.validTitle(title.value) === '' &&
            test.validContent(content.value) === '' &&
            test.validPortions(portions.value) === '' &&
            test.validPreparationTime(preparationTime.value) === '' &&
            test.validCookingTime(cookingTime.value) === '' &&
            test.validPicture(picture.value) === '') {
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
    }

    return (
        <form onSubmit={onSubmitCreateForm}>
            <div className="row space-top">
                <div className="col-lg-8">
                    <Input
                        type='text'
                        name='title'
                        label='Title'
                        error={errorTitle} />

                    <Input
                        type='text'
                        name='content'
                        label='Content'
                        error={errorContent} />

                    <Input
                        type='number'
                        name='portions'
                        label='Portions'
                        error={errorPortions} />

                    <Input
                        type='number'
                        name='preparationTime'
                        label='Preparation Time in minutes'
                        error={errorPrepTime} />

                    <Input
                        type='number'
                        name='cookingTime'
                        label='Cooking Time in minutes'
                        error={errorCookTime} />

                    <div className="form-group">
                        <label className="form-control-label" htmlFor="categoryName">Category</label>
                        <select className="form-control" id="categoryName">
                            {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                        </select>
                    </div>

                    <Input
                        type='url'
                        name='picture'
                        label='Picture url'
                        error={errorPicture} />
                    <hr />
                    <CreateIngredientRecipeForm clickHandler={updateIngredients} />
                    <hr />
                    <button type="submit" className="btn btn-secondary">Create</button >
                </div >
            </div >
        </form >
    );
}


export default CreateRecipeForm;