namespace Recipes.Web.Models.Admin.Categories.InputModels
{
    using System.ComponentModel.DataAnnotations;

    using global::Recipes.Common;

    public class CategoryInputModel
    {
        [Required]
        [StringLength(Validations.Category.NameMaxLenght, ErrorMessage = Messages.Error.RequiredMinMaxLength, MinimumLength = Validations.Category.NameMinLenght)]
        public string Name { get; set; }

        [Required]
        public string Picture { get; set; }
    }
}
