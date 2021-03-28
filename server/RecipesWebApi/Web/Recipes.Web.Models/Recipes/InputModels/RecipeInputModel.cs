namespace Recipes.Web.Models.Recipes.InputModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    using global::Recipes.Common;
    using global::Recipes.Web.Models.Ingredients.InputModels;

    public class RecipeInputModel
    {
        [Required]
        [StringLength(Validations.Recipe.TitleMaxLenght, ErrorMessage = Messages.Error.RequiredMinMaxLength, MinimumLength = Validations.Recipe.TitleMinLenght)]
        public string Title { get; set; }

        [Required]
        [StringLength(Validations.Recipe.ContentMaxLenght, ErrorMessage = Messages.Error.RequiredMinMaxLength, MinimumLength = Validations.Recipe.ContentMinLenght)]

        public string Content { get; set; }

        [Required]

        public string Picture { get; set; }

        [Range(typeof(int), Validations.Recipe.PortionsMin, Validations.Recipe.PortionsMax)]
        public int Portions { get; set; }

        [Range(typeof(int), Validations.Recipe.PrepTimeMin, Validations.Recipe.PrepTimeMax)]
        public int PreparationTime { get; set; }

        [Range(typeof(int), Validations.Recipe.CookTimeMin, Validations.Recipe.CookTimeMax)]
        public int CookingTime { get; set; }

        [Required]
        public string CategoryName { get; set; }

        public IEnumerable<IngredientInputModel> Ingredients { get; set; }
    }
}
