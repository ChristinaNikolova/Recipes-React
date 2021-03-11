namespace Recipes.Web.Models.Admin.Ingredients.InputModels
{
    using System.ComponentModel.DataAnnotations;

    using global::Recipes.Common;

    public class IngredientCreateAdminInputModel
    {
        [Required]
        [StringLength(Validations.Ingredient.NameMaxLenght, ErrorMessage = Messages.Error.RequiredMinMaxLength, MinimumLength = Validations.Ingredient.NameMinLenght)]
        public string Name { get; set; }
    }
}
