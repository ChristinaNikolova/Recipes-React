namespace Recipes.Common
{
    public static class GlobalConstants
    {
        public static class Admin
        {
            public const string Email = "admin@recipes.com";

            public const string HashedPassword = "AQAAAAEAACcQAAAAECrjCD23cQQ28Tyci+UMuaGrFMDUb/trG4E0RbJa4McRVfWFJ6c5UG4NpbXDB6K5rQ==";
        }

        public static class Roles
        {
            public const string Admin = "Admin";

            public const string User = "User";
        }

        public static class SeedersPath
        {
            public const string Category = @"../../Data/Recipes.Data/Seeding/Data/Categories.json";

            public const string Ingredient = @"../../Data/Recipes.Data/Seeding/Data/Ingredients.json";
        }

        public static class JWTExpiration
        {
            public const int DefaultDaysExpiredToken = 7;
        }

        public static class OrderCriteria
        {
            public const string Old = "old";

            public const string New = "new";

            public const string LikesCount = "likes";

            public const string CommentsCount = "comments";
        }
    }
}
