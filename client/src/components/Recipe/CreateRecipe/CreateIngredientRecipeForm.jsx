import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { generate } from 'shortid';

import InputError from "../../shared/InputError/InputError.jsx"
import * as validator from '../../../utils/validations/ingredientValidator.js';

function CreateIngredientRecipeForm({ clickHandler }) {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        clickHandler(ingredients)
    }, [ingredients]);

    const addIngredient = () => {
        setIngredients(prevState => ([...prevState, {
            id: generate(),
            name: '',
            quantity: '',
            errorName: validator.ErrorMessageName(),
            errorQuantity: validator.ErrorMessageQuantity(),
            isTouchedName: false,
            isTouchedQuantity: false,
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

        setNameError(ingredientIndex, name);
    }

    const onBlurIngredientNameHandler = (e) => {
        const ingredientIndex = getIngredientIndex(e.target.id);
        let name = ingredients[ingredientIndex]?.name;

        setIngredients(currentIngredient => produce(currentIngredient, ingredients => {
            ingredients[ingredientIndex].isTouchedName = true;
        }));

        setNameError(ingredientIndex, name);
    }

    const changeIngredientQuantityHandler = (e) => {
        const ingredientIndex = getIngredientIndex(e.target.id);
        const quantity = e.target.value;

        setIngredients(currentIngredient => produce(currentIngredient, ingredients => {
            ingredients[ingredientIndex].quantity = quantity;
        }));

        setQunatityError(ingredientIndex, quantity);
    }

    const onBlurIngredientQuantityHandler = (e) => {
        const ingredientIndex = getIngredientIndex(e.target.id);
        let quantity =ingredients[ingredientIndex]?.quantity;

        setIngredients(currentIngredient => produce(currentIngredient, ingredients => {
            ingredients[ingredientIndex].isTouchedQuantity = true;
        }));

        setQunatityError(ingredientIndex, quantity);
    }

    const setNameError = (ingredientIndex, name) =>{
        setIngredients(currentIngredient => produce(currentIngredient, ingredients => {
            ingredients[ingredientIndex].errorName = validator.validName(name);
        }));
    }

    const setQunatityError = (ingredientIndex, quantity) => {
        setIngredients(currentIngredient => produce(currentIngredient, ingredients => {
            ingredients[ingredientIndex].errorQuantity = validator.validQuantity(quantity);
        }));
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
                        <div className="m-2 required-ingredient">* Please note, that all Ingredient's fields are required 🙂</div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor={index}>Name</label>
                            <input onChange={changeIngredientNameHandler} onBlur={onBlurIngredientNameHandler} className="form-control" key={() => produce()} id={`${index}`} type="text" />
                        </div>
                        {ingredient.isTouchedName &&<InputError>{ingredient.errorName}</InputError>}
                        <div className="form-group">
                            <label className="form-control-label" htmlFor={index}>Quantity</label>
                            <input onChange={changeIngredientQuantityHandler} onBlur={onBlurIngredientQuantityHandler} className="form-control" key={() => produce()} id={`${index}`} type="text" />
                        </div>
                        {ingredient.isTouchedQuantity &&<InputError>{ingredient.errorQuantity}</InputError>}
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