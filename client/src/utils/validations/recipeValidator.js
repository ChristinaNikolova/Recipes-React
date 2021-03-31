import recipeConstants from '../constants/recipeConstants.js';

export const validTitle = (title) => {
    if (
        title.length >= recipeConstants.TITLE_MIN_LEN &&
        title.length <= recipeConstants.TITLE_MAX_LEN &&
        title !== ''
    ) {
        return '';
    }

    return (`Title should be between ${recipeConstants.TITLE_MIN_LEN} and ${recipeConstants.TITLE_MAX_LEN} characters long.`);
};

export const validContent = (content) => {
    if (
        content.length >= recipeConstants.CONTENT_MIN_LEN &&
        content.length <= recipeConstants.CONTENT_MAX_LEN &&
        content !== ''
    ) {
        return '';
    }

    return `Content should be between ${recipeConstants.CONTENT_MIN_LEN} and ${recipeConstants.CONTENT_MAX_LEN} characters long.`;
};

export const validPortions = (portions) => {
    if (
        portions >= recipeConstants.PORTIONS_MIN &&
        portions <= recipeConstants.PORTIONS_MAX
    ) {
        return '';
    }

    return `Portions should be between ${recipeConstants.PORTIONS_MIN} and ${recipeConstants.PORTIONS_MAX}.`;
};

export const validPreparationTime = (preparationTime) => {
    if (
        preparationTime >= recipeConstants.PREP_TIME_MIN &&
        preparationTime <= recipeConstants.PREP_TIME_MAX
    ) {
        return '';
    }

    return `Prep time should be between ${recipeConstants.PREP_TIME_MIN} and ${recipeConstants.PREP_TIME_MAX}.`;
};

export const validCookingTime = (cookingTime) => {
    if (
        cookingTime >= recipeConstants.COOK_TIME_MIN &&
        cookingTime <= recipeConstants.COOK_TIME_MAX
    ) {
        return '';
    }

    return `Cook time should be between ${recipeConstants.COOK_TIME_MIN} and ${recipeConstants.COOK_TIME_MAX}.`;
};

export const validPicture = (picture) => {
    if ((picture.startsWith('https://') || picture.startsWith('http://')) &&
        picture !== ''
    ) {
        return '';
    }

    return 'Idvalid URL.';
};

export const validSearchText = (content) => {
    if (
        content.length >= recipeConstants.SEARCH_TEXT_MIN_LEN &&
        content !== ''
    ) {
        return '';
    }

    return (`Content should be at least ${recipeConstants.SEARCH_TEXT_MIN_LEN} characters long.`);
}
