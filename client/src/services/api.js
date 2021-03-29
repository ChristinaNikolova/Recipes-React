const baseUrl = 'https://localhost:44319/api';
const recipesUrl = `${baseUrl}/recipes`;
const commentsUrl = `${baseUrl}/comments`;
const categoriesUrl = `${baseUrl}/categories`;
const usersUrl = `${baseUrl}/users`;
const ingredientsUrl = `${baseUrl}/ingredients`;

export default {
    allCategories: `${categoriesUrl}/all`,
    allCategoriesNames: `${categoriesUrl}/allNames`,
    allRecipes: `${recipesUrl}/all`,
    createRecipe: `${recipesUrl}/create`,
    deleteRecipe: `${recipesUrl}/delete`,
    orderRecipes: `${recipesUrl}/order`,
    detailsRecipe: `${recipesUrl}/details`,
    recipeLike: `${recipesUrl}/like`,
    recipeDislike: `${recipesUrl}/dislike`,
    recipesCurrentCategory: `${recipesUrl}/byCategory`,
    searchRecipe: `${recipesUrl}/search`,
    allCommentsCurrentRecipe: `${commentsUrl}/all`,
    createComment: `${commentsUrl}/create`,
    favouriteRecipes: `${usersUrl}/favourite`,
    ownRecipes: `${usersUrl}/own`,
    ingredientsCurrentRecipe: `${ingredientsUrl}/getByRecipe`,
    deleteIngredientCurrentRecipe: `${ingredientsUrl}/delete`
};