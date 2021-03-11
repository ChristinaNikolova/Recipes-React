namespace Recipes.Web.Models.Comments.InputModels
{
    using System.ComponentModel.DataAnnotations;

    using global::Recipes.Common;

    public class CommentInputModel
    {
        [Required]
        [StringLength(Validations.Comment.ContentMaxLenght, ErrorMessage = Messages.Error.RequiredMinMaxLength, MinimumLength = Validations.Comment.ContentMinLength)]
        public string Content { get; set; }

        [Required]
        public string RecipeId { get; set; }
    }
}
