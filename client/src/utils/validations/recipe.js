const createRecipeValidationFunc = (title, content, portions, preparationTime, cookingTime, categoryName, picture) => {
    let validTitle = (() => {
        if (
            title.length >= 3 &&
            title.length <= 50 &&
            title !== ''
        ) {
            return ''
        }
        return (`Title should be between ${recipeConstants.TITLE_MIN_LEN} and ${recipeConstants.TITLE_MAX_LEN} characters long.`);
    })();

    let validContent = (() => {
        if (
            content.length >= 3 &&
            content.length <= 5000 &&
            content !== ''
        ) {
            return true
        }
        return false
    })();

    let validPortions = (() => {
        if (
            portions >= 1 &&
            portions <= 1000
        ) {
            return true
        }
        return false
    })();

    let validPreparationTime = (() => {
        if (
            preparationTime >= 1 &&
            preparationTime <= 1000
        ) {
            return true
        }
        return false
    })();

    let validCookingTime = (() => {
        if (
            cookingTime >= 1 &&
            cookingTime <= 1000
        ) {
            return true
        }
        return false
    })();

    let validcategoryName = (() => {
        if (
            categoryName !== ''
        ) {
            return true
        }
        return false
    })();

    let validPicture = (() => {
        if (
            (picture.startsWith('https://') || picture.startsWith('http://')) &&
            picture !== ''
        ) {
            return true
        }
        return false
    })();

    return {
        validTitle,
        validContent,
        validPortions,
        validPreparationTime,
        validCookingTime,
        validcategoryName,
        validPicture
    }
}

export default createRecipeValidationFunc
