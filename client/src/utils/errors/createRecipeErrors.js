import recipeConstants from '../constants/recipeConstants.js';

function createRecipeErrors(title, content, portions, preparationTime, cookingTime, categoryName, picture) {
    let errors = [];

    if (title.length < recipeConstants.TITLE_MIN_LEN || title.length > recipeConstants.TITLE_MAX_LEN || title === '') {
        errors.push(`Title should be between ${recipeConstants.TITLE_MIN_LEN} and ${recipeConstants.TITLE_MAX_LEN} characters long.`);
    }

    if (content.length < recipeConstants.CONTENT_MIN_LEN || content.length > recipeConstants.CONTENT_MAX_LEN || content === '') {
        errors.push(`Content should be between ${recipeConstants.CONTENT_MIN_LEN} and ${recipeConstants.CONTENT_MAX_LEN} characters long.`);
    }

    if (portions < recipeConstants.PORTIONS_MIN || portions > recipeConstants.PORTIONS_MAX || !portions) {
        errors.push(`Portions should be between ${recipeConstants.PORTIONS_MIN} and ${recipeConstants.PORTIONS_MAX}.`);
    }

    if (preparationTime < recipeConstants.PREP_TIME_MIN || preparationTime > recipeConstants.PREP_TIME_MAX || !preparationTime) {
        errors.push(`Prep time should be between ${recipeConstants.PREP_TIME_MIN} and ${recipeConstants.PREP_TIME_MAX}.`);
    }

    if (cookingTime < recipeConstants.COOK_TIME_MIN || cookingTime > recipeConstants.COOK_TIME_MAX || !cookingTime) {
        errors.push(`Cook time should be between ${recipeConstants.COOK_TIME_MIN} and ${recipeConstants.COOK_TIME_MAX}.`);
    }

    if (categoryName === '') {
        errors.push('Category name is required.');
    }

    if (picture === undefined || !(picture.startsWith('https://') || picture.startsWith('http://'))) {
        errors.push('Idvalid URL.');
    }

    return errors;
}

export default createRecipeErrors