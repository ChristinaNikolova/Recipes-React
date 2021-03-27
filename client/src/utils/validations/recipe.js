const createRecipeValidationFunc = (title, content, portions, preparationTime, cookingTime, categoryName, picture) => {
    let validTitle = (() => {
        if (
            title.length > 3 &&
            title.length < 50 &&
            title !== ''
        ) {
            return true
        }
        return false
    })();

    let validContent = (() => {
        if (
            content.length > 3 &&
            content.length < 5000 &&
            content !== ''
        ) {
            return true
        }
        return false
    })();

    let validPortions = (() => {
        if (
            portions > 0 &&
            portions < 2147483647 &&
            portions !== ''
        ) {
            return true
        }
        return false
    })();

    let validPreparationTime = (() => {
        if (
            preparationTime > 0 &&
            preparationTime < 2147483647 &&
            preparationTime !== ''
        ) {
            return true
        }
        return false
    })();

    let validCookingTime = (() => {
        if (
            cookingTime > 0 &&
            cookingTime < 2147483647 &&
            cookingTime !== ''
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
            (picture.startsWith('https://') || picture.startsWith('http://')) && picture.length >= 14
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
