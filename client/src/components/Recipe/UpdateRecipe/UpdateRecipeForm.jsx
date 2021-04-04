import { useEffect, useState } from 'react';
import toastr from 'toastr';

import * as categoriesService from '../../../services/categoriesService.js';
import * as recipesService from '../../../services/recipesService.js';
import * as validator from '../../../utils/validations/recipeValidator.js';
import Input from '../../shared/Input/Input.jsx';
import CreateIngredientRecipeForm from '../../shared/IngredientRecipeForm/IngredientRecipeForm.jsx';

function UpdateRecipeForm({ recipeId, clickHandler }) {
    const [recipe, setRecipe] = useState({});
    const [ingredientsForRecipe, setIngredientsForRecipe] = useState([]);
    const [categories, setCategories] = useState([]);
    const [errorTitle, setErrorTitle] = useState('');
    const [errorContent, setErrorContent] = useState('');
    const [errorPortions, setErrorPortions] = useState('');
    const [errorPrepTime, setErrorPrepTime] = useState('');
    const [errorCookTime, setErrorCookTime] = useState('');
    const [errorPicture, setErrorPicture] = useState('');

    useEffect(() => {
        recipesService
            .getRecipeForUpdate(recipeId)
            .then(recipe => setRecipe(recipe));
    }, []);

    useEffect(() => {
        categoriesService.getAllNames()
            .then(categories => setCategories(categories));
    }, []);

    const updateIngredients = (ingredients) => {
        setIngredientsForRecipe(ingredients);
    }

    const onUpdateRecipeSubmitHandler = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const content = e.target.content.value;
        const portions = e.target.portions.value;
        const preparationTime = e.target.preparationTime.value;
        const cookingTime = e.target.cookingTime.value;
        const categoryName = e.target.categoryName.value;
        const picture = e.target.picture.value;

        setErrorTitle(validator.validTitle(title));
        setErrorContent(validator.validContent(content));
        setErrorPortions(validator.validPortions(portions));
        setErrorPrepTime(validator.validPreparationTime(preparationTime));
        setErrorCookTime(validator.validCookingTime(cookingTime));
        setErrorPicture(validator.validPicture(picture));

        var validIngredients = !(ingredientsForRecipe.some(i => i.errorName !== '' || i.errorQuantity !== ''));

        if (validator.validTitle(title) === '' &&
            validator.validContent(content) === '' &&
            validator.validPortions(portions) === '' &&
            validator.validPreparationTime(preparationTime) === '' &&
            validator.validCookingTime(cookingTime) === '' &&
            validator.validPicture(picture) === '' &&
            validIngredients) {
                recipesService
                .update(recipeId, title, content, portions, preparationTime, cookingTime, categoryName, picture, ingredientsForRecipe)
                .then((data) => {
                    if (data['status'] !== 400) {
                        toastr.success(data['message'], 'Success');
                        clickHandler();
                        return;
                    }
                    toastr.error(data['message'], 'Error');
                });
        }
    }

    return (
        <form onSubmit={onUpdateRecipeSubmitHandler}>
            <div className="row space-top">
                <div className="col-lg-8">
                    <Input
                        type='text'
                        name='title'
                        label='Title'
                        value={recipe.title}
                        error={errorTitle} />

                    <Input
                        type='text'
                        name='content'
                        label='Content'
                        value={recipe.content} 
                        error={errorContent}/>

                    <Input
                        type='number'
                        name='portions'
                        label='Portions'
                        value={recipe.portions}
                        error={errorPortions} />

                    <Input
                        type='number'
                        name='preparationTime'
                        label='Preparation Time in minutes'
                        value={recipe.preparationTime}
                        error={errorPrepTime} />

                    <Input
                        type='number'
                        name='cookingTime'
                        label='Cooking Time in minutes'
                        value={recipe.cookingTime}
                        error={errorCookTime} />

                    <div className="form-group">
                        <label className="form-control-label" htmlFor="categoryName">Category</label>
                        <select className="form-control" id="categoryName">
                            {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                            <option value={recipe.categoryId}>{recipe.categoryName}</option>
                        </select>
                    </div>

                    <Input
                        type='url'
                        name='picture'
                        label='Picture url'
                        value={recipe.picture}
                        error={errorPicture} />
                    <hr />
                    <CreateIngredientRecipeForm clickHandler={updateIngredients} />
                    <hr />
                    <button className="btn btn-secondary" type="submit">Update</button>
                </div>
            </div>
        </form>
    );
}

export default UpdateRecipeForm;