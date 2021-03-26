const baseUrl = 'https://localhost:44319/api';
const recipesUrl = `${baseUrl}/recipes`;
const commentsUrl = `${baseUrl}/comments`;

export default {
    allCategories: `${baseUrl}/categories/all`,
    allRecipes: `${recipesUrl}/all`,
    orderRecipes: `${recipesUrl}/order`,
    detailsRecipe: `${recipesUrl}/details`,
    recipesCurrentCategory: `${recipesUrl}/byCategory`,
    searchRecipe: `${recipesUrl}/search`,
    allCommentsCurrentRecipe: `${commentsUrl}/all`,
    createComment: `${commentsUrl}/create`
};