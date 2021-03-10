namespace Recipes.Common
{
    public static class Validations
    {
        public static class Recipe
        {
            public const int TitleMinLenght = 3;

            public const int TitleMaxLenght = 50;

            public const int ContentMinLenght = 3;

            public const int ContentMaxLenght = 5000;

            public const string PortionsMin = "1";

            public const string PrepTimeMin = "1";

            public const string CookTimeMin = "1";

            public const string IntMaxValue = "2147483647";
        }

        public static class Category
        {
            public const int NameMinLenght = 3;

            public const int NameMaxLenght = 50;
        }

        public static class Ingredient
        {
            public const int NameMinLenght = 3;

            public const int NameMaxLenght = 50;
        }

        public static class RepiceIngredient
        {
            public const int QunatityMinLenght = 3;

            public const int QuantityMaxLenght = 50;
        }

        public static class Comment
        {
            public const int ContentMinLength = 3;

            public const int ContentMaxLenght = 500;
        }

        public static class User
        {
            public const int UsernameMinLength = 3;

            public const int PasswordMinLength = 5;
        }
    }
}
