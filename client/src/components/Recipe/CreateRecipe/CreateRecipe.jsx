import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { generate } from 'shortid';

import * as categoriesService from '../../../services/categoriesService.js';
import * as recipesService from '../../../services/recipesService.js';

import './CreateRecipe.css';

function CreateRecipe() {
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);

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

        setIngredients(currentIngredient => produce(currentIngredient, v => {
            v[ingredientIndex].name = name;
        }));
    }

    const changeIngredientQunatityHandler = (e) => {
        const quantity = e.target.value;
        const ingredientIndex = getIngredientIndex(e.target.id);

        setIngredients(currentIngredient => produce(currentIngredient, v => {
            v[ingredientIndex].quantity = quantity;
        }));
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
                ingredients);
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
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="title">Title</label>
                                <input className="form-control" id="title" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="content">Content</label>
                                <textarea className="form-control" id="content" type="text" cols="10" rows="7"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="portions">Portions</label>
                                <input className="form-control" id="portions" type="number" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="preparationTime">Preparation Time in minutes</label>
                                <input className="form-control" id="preparationTime" type="number" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="cookingTime">Cooking time in minutes</label>
                                <input className="form-control" id="cookingTime" type="number" />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="categoryName">Category</label>
                                <select className="form-control" id="categoryName">
                                    <option disabled>Please select one of the options below</option>
                                    {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="picture">Picture url</label>
                                <input className="form-control" id="picture" type="url" />
                            </div>
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
                                            <input onChange={changeIngredientQunatityHandler} className="form-control" id={`${index}`} type="text" />
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