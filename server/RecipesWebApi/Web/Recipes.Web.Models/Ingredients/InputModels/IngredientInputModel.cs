namespace Recipes.Web.Models.Ingredients.InputModels
{
    using System.ComponentModel.DataAnnotations;

    using global::Recipes.Common;

    public class IngredientInputModel
    {
        [Required]
        [StringLength(Validations.Ingredient.NameMaxLenght, ErrorMessage = Messages.Error.RequiredMinMaxLength, MinimumLength = Validations.Ingredient.NameMinLenght)]
        public string Name { get; set; }

        [Required]
        [StringLength(Validations.RepiceIngredient.QuantityMaxLenght, ErrorMessage = Messages.Error.RequiredMinMaxLength, MinimumLength = Validations.RepiceIngredient.QunatityMinLenght)]
        public string Quantity { get; set; }
    }
}
