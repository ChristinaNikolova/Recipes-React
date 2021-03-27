const baseUrl = 'https://localhost:44319/api';
const recipesUrl = `${baseUrl}/recipes`;
const commentsUrl = `${baseUrl}/comments`;
const categoriesUrl = `${baseUrl}/categories`;

export default {
    allCategories: `${categoriesUrl}/all`,
    allCategoriesNames: `${categoriesUrl}/allNames`,
    allRecipes: `${recipesUrl}/all`,
    orderRecipes: `${recipesUrl}/order`,
    detailsRecipe: `${recipesUrl}/details`,
    recipesCurrentCategory: `${recipesUrl}/byCategory`,
    searchRecipe: `${recipesUrl}/search`,
    allCommentsCurrentRecipe: `${commentsUrl}/all`,
    createComment: `${commentsUrl}/create`
};