namespace Recipes.Web.Models.Admin.Ingredients.InputModels
{
    using global::Recipes.Data.Models;
    using global::Recipes.Services.Mapping;

    public class IngredientUpdateInputModel : IngredientCreateAdminInputModel, IMapFrom<Ingredient>
    {
        public string Id { get; set; }
    }
}
