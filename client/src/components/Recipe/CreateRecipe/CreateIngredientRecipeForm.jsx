import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { generate } from 'shortid';

import InputError from "../../shared/InputError/InputError.jsx"
import * as validator from '../../../utils/validations/ingredientValidator.js';

function CreateIngredientRecipeForm({ clickHandler }) {
    const [ingredients, setIngredients] = useState([]);
    const[errorName, setErrorName] = useState([]);
    const[errorQuantity, setErrorQuantity] = useState([]);

    useEffect(() => {
        clickHandler(ingredients)
    }, [ingredients, errorName, errorQuantity]);

    const addIngredient = () => {
        setIngredients(prevState => ([...prevState, {
            id: generate(),
            name: '',
            quantity: ''
        }]));
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

        setErrorName(prevState => ([...prevState, 
            validator.validName(ingredients[ingredientIndex]?.name)
        ]));
    }

    const onBlurIngredientNameHandler = (e) => {
        const ingredientIndex = getIngredientIndex(e.target.id);

        setErrorName(prevState => ([...prevState, 
            validator.validName(ingredients[ingredientIndex]?.name)
        ]));
    }

    const changeIngredientQuantityHandler = (e) => {
        const quantity = e.target.value;
        const ingredientIndex = getIngredientIndex(e.target.id);

        setIngredients(currentIngredient => produce(currentIngredient, ingredients => {
            ingredients[ingredientIndex].quantity = quantity;
        }));

        setErrorName(validator.validName(quantity));
    }

    const onBlurIngredientQuantityHandler = (e) => {
        const ingredientIndex = getIngredientIndex(e.target.id);

        setErrorQuantity(prevState => ([...prevState, 
            validator.validQuantity(ingredients[ingredientIndex]?.quantity)
        ]));
    }

    const getIngredientIndex = (target) => {
        const startIndex = (target).indexOf('[') + 1;
        const endIndex = (target).indexOf(']');
        const ingredientIndex = (target).slice(startIndex, endIndex);

        return ingredientIndex;
    }

    return (
        <div>
            <label className="fonts-bold">Ingredients: </label>
            {ingredients.map((ingredient, ingredientIndex) => {
                const index = `ingredients[${ingredientIndex}]`;
                return (
                    <div className="current-ingredient-add" key={ingredient.id}>
                        <label className="form-control-label custom-color-green">Ingredient: </label>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor={index}>Name</label>
                            <input onChange={changeIngredientNameHandler} onBlur={onBlurIngredientNameHandler} className="form-control" key={() => produce()} id={`${index}`} type="text" />
                        </div>
                        <InputError>{errorName[ingredientIndex]}</InputError> 
                        <div className="form-group">
                            <label className="form-control-label" htmlFor={index}>Quantity</label>
                            <input onChange={changeIngredientQuantityHandler} onBlur={onBlurIngredientQuantityHandler} className="form-control" key={() => produce()} id={`${index}`} type="text" />
                        </div>
                        <InputError>{errorQuantity[ingredientIndex]}</InputError> 
                        <button type="button" className="btn btn-danger custom-danger-button" onClick={() => removeIngredient(index)}>Remove</button>
                        <hr />
                    </div>
                )
            })}
            <button id="custom-add-ingredient-button" type="button" className="btn btn-primary ml-2" onClick={addIngredient}> Add ingredient</button >
        </div>
    );
}

export default CreateIngredientRecipeForm;