import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { generate } from 'shortid';

function CreateIngredientRecipeForm({ clickHandler }) {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        clickHandler(ingredients)
    }, [ingredients]);

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
    }

    const changeIngredientQuantityHandler = (e) => {
        const quantity = e.target.value;
        const ingredientIndex = getIngredientIndex(e.target.id);

        setIngredients(currentIngredient => produce(currentIngredient, ingredients => {
            ingredients[ingredientIndex].quantity = quantity;
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
                        <div className="form-group">
                            <label className="form-control-label" htmlFor={index}>Name</label>
                            <input onChange={changeIngredientNameHandler} className="form-control" key={() => produce()} id={`${index}`} type="text" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor={index}>Quantity</label>
                            <input onChange={changeIngredientQuantityHandler} className="form-control" key={() => produce()} id={`${index}`} type="text" />
                        </div>
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