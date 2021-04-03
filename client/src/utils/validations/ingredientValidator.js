import ingredientConstants from '../constants/ingredientConstants.js';

export const validName = (name) => {
    if (
        name?.length >= ingredientConstants.NAME_MIN_LEN &&
        name?.length <= ingredientConstants.NAME_MAX_LEN &&
        name !== ''
    ) {
        return '';
    }

    return (`Name should be between ${ingredientConstants.NAME_MIN_LEN} and ${ingredientConstants.NAME_MAX_LEN} characters long.`);
};

export const validQuantity = (quantity) => {
    if (
        quantity?.length >= ingredientConstants.QUANTITY_MIN_LEN &&
        quantity?.length <= ingredientConstants.QUANTITY_MAX_LEN &&
        quantity !== ''
    ) {
        return '';
    }

    return `Quantity should be between ${ingredientConstants.QUANTITY_MIN_LEN} and ${ingredientConstants.QUANTITY_MAX_LEN} characters long.`;
};