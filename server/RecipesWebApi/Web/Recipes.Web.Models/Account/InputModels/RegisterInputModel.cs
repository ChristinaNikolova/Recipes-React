namespace Recipes.Web.Models.Account.InputModels
{
    using System.ComponentModel.DataAnnotations;

    using global::Recipes.Common;

    public class RegisterInputModel
    {
        [Required]
        [MinLength(Validations.User.UsernameMinLength, ErrorMessage = Messages.Error.UsernameMinLength)]
        public string Username { get; set; }

        [Required]
        [EmailAddress(ErrorMessage = Messages.Error.InvalidEmail)]
        public string Email { get; set; }

        [Required]
        [MinLength(Validations.User.PasswordMinLength, ErrorMessage = Messages.Error.PasswordMinLength)]
        public string Password { get; set; }
    }
}
