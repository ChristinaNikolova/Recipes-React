import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { generate } from 'shortid';

import * as categoriesService from '../../../services/categoriesService.js';
import * as recipesService from '../../../services/recipesService.js';
import * as test from '../../../utils/validations/recipeValidator.js';
import Input from '../../shared/Input/Input.jsx';

import './CreateRecipe.css';

function CreateRecipe({ history }) {
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [errorTitle, setErrorTitle] = useState('');
    const [errorContent, setErrorContent] = useState('');
    const [errorPortion, setErrorPortion] = useState('');
    const [errorPrepTime, setErrorPrepTime] = useState('');
    const [errorCookTime, setErrorCookTime] = useState('');
    const [errorPicture, setErrorPicture] = useState('');

    useEffect(() => {
        categoriesService.getAllNames()
            .then(categories => setCategories(categories));
    }, []);

    const addIngredient = () => {
        setIngredients(prevState => [...prevState, {
            id: generate(),
            name: '',
            quantity: ''
        }]);
    };

    const removeIngredient = (targetIndex) => {
        const ingredientIndex = getIngredientIndex(targetIndex);
        const ingredientId = ingredients[ingredientIndex].id;

        setIngredients(ingredients => ingredients.filter(x => x.id !== ingredientId));
    };

    const changeIngredientNameHandler = (e) => {
        const name = e.target.value;
        const ingredientIndex = getIngredientIndex(e.target.id);

        setIngredients(currentIngredient => produce(currentIngredient, ingredients => {
            ingredients[ingredientIndex].name = name;
        }));
    }

    const changeIngredientQuantityHandler = (e) => {
        const quantity = e.target.value;
        const ingredientIndex = getIngredientIndex(e.target.id);

        setIngredients(currentIngredient => produce(currentIngredient, ingredients => {
            ingredients[ingredientIndex].quantity = quantity;
        }));
    }

    const onCreateRecipeSubmitHandler = (e) => {
        e.preventDefault();

        const { title, content, portions, preparationTime, cookingTime, categoryName, picture } = e.target;

        //validate

        // var error = test.validTitle(title.value);
        // console.log(title.value);
        // console.log("error")
        // console.log(error);

        // setErrorTitle(errorTitle => produce(errorTitle, () => test.validTitle(title.value)));
        // useEffect(() => {
        //     categoriesService.getAllNames()
        //         .then(categories => setCategories(categories));
        // }, []);

        // useEffect(() => {
        //     error => setErrorTitle(error)
        // }, []);

        //console.log(errorTitle);

        // recipesService
        //     .create(title.value,
        //         content.value,
        //         portions.value,
        //         preparationTime.value,
        //         cookingTime.value,
        //         categoryName.value,
        //         picture.value,
        //         ingredients)
        //     .then(() => {
        //         history.push(`/recipes`);
        //     });
    }

    const getIngredientIndex = (target) => {
        const startIndex = (target).indexOf('[') + 1;
        const endIndex = (target).indexOf(']');
        const ingredientIndex = (target).slice(startIndex, endIndex);

        return ingredientIndex;
    }

    return (
        <div className="create-recipe-wrapper" >
            <div className="fill pt-2 pb-2"></div>
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1 className="create-recipe-title cursive-font-style">Create New Recipe</h1>
                    </div>
                </div>
                <form onSubmit={onCreateRecipeSubmitHandler}>
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
                                error={errorPortion} />

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
                            <label className="fonts-bold">Ingredients: </label>
                            {ingredients.map((ingredient, ingredientIndex) => {
                                const index = `ingredients[${ingredientIndex}]`;
                                return (
                                    <div className="current-ingredient-add" key={ingredient.id}>
                                        <label className="form-control-label custom-color-green">Ingredient: </label>
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor={index}>Name</label>
                                            <input onChange={changeIngredientNameHandler} className="form-control" id={`${index}`} type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label" htmlFor={index}>Quantity</label>
                                            <input onChange={changeIngredientQuantityHandler} className="form-control" id={`${index}`} type="text" />
                                        </div>
                                        <button type="button" className="btn btn-danger custom-danger-button" onClick={() => removeIngredient(index)}>Remove</button>
                                        <hr />
                                    </div>
                                )
                            })}
                            <button id="custom-add-ingredient-button" type="button" className="btn btn-primary ml-2" onClick={addIngredient}> Add ingredient</button >
                            <hr />
                            <button type="submit" className="btn btn-secondary">Create</button >
                        </div >
                    </div >
                </form >
            </div >
            <div className="fill pt-2 pb-2"></div>
        </div >
    );
}

export default CreateRecipe;