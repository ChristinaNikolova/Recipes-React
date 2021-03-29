namespace Recipes.WebApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Recipes.Common;
    using Recipes.Data.Models;
    using Recipes.Services.Data.Dtos.Ingredients;
    using Recipes.Services.Data.RecipeIngredients;
    using Recipes.Services.Data.RecipeLikes;
    using Recipes.Services.Data.Recipes;
    using Recipes.Web.Models.Common.ViewModels;
    using Recipes.Web.Models.Ingredients.InputModels;
    using Recipes.Web.Models.Ingredients.ViewModels;
    using Recipes.Web.Models.Recipes.InputModels;
    using Recipes.Web.Models.Recipes.ViewModels;

    [Route("api/[controller]/[action]")]
    public class RecipesController : ApiController
    {
        private readonly IRecipesService recipesService;
        private readonly IRecipeLikesService recipeLikesService;
        private readonly IRecipeIngredientsService recipeIngredientsService;
        private readonly UserManager<ApplicationUser> userManager;

        public RecipesController(
            IRecipesService recipesService,
            IRecipeLikesService recipeLikesService,
            IRecipeIngredientsService recipeIngredientsService,
            UserManager<ApplicationUser> userManager)
        {
            this.recipesService = recipesService;
            this.recipeLikesService = recipeLikesService;
            this.recipeIngredientsService = recipeIngredientsService;
            this.userManager = userManager;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Create([FromBody] RecipeInputModel input)
        {
            var isTitleAlreadyExisting = await this.recipesService.IsTitleAlreadyExistingAsync(input.Title);

            if (isTitleAlreadyExisting)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.AlreadyExistsRecipe,
                });
            }

            try
            {
                //var user = await this.userManager.FindByNameAsync(this.User.Identity.Name);

                var userId = "c3a43854-bd43-409d-b368-e21733328c4b";

                var ingredients = PrepareIngredients(input.Ingredients);

                //await this.recipesService.CreateAsync(input.Title, input.Content, input.Portions, input.PreparationTime, input.CookingTime, input.CategoryName, input.Picture, ingredients, user.Id);

                await this.recipesService.CreateAsync(input.Title, input.Content, input.Portions, input.PreparationTime, input.CookingTime, input.CategoryName, input.Picture, ingredients, userId);

                return this.Ok(new
                {
                    Message = Messages.Success.Added,
                });
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IEnumerable<RecipeBaseViewModel>>> All()
        {
            try
            {
                var recipes = await this.recipesService.GetAllAsync<RecipeBaseViewModel>();

                return this.Ok(recipes);
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpGet("{categoryId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IEnumerable<RecipeBaseViewModel>>> ByCategory(string categoryId)
        {
            try
            {
                var recipes = await this.recipesService.GetAllByCategoryAsync<RecipeBaseViewModel>(categoryId);

                return this.Ok(recipes);
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<RecipeDetailsViewModel>> Details(string id)
        {
            try
            {
                var recipe = await this.recipesService.GetDetailsAsync<RecipeDetailsViewModel>(id);

                //var user = await this.userManager.FindByNameAsync(this.User.Identity.Name);

                //recipe.IsFavourite = await this.recipeLikesService.IsFavouriteAsync(user.Id, id);

                var userId = "c3a43854-bd43-409d-b368-e21733328c4b";

                recipe.IsFavourite = await this.recipeLikesService.IsFavouriteAsync(userId, id);

                recipe.Ingredients = await this.recipeIngredientsService.GetIngredientByRecipeAsync<BaseIngredientViewModel>(id);

                return this.Ok(recipe);
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<RecipeUpdateInputModel>> RecipeForUpdate(string id)
        {
            try
            {
                var recipe = await this.recipesService.GetDetailsAsync<RecipeUpdateInputModel>(id);

                return this.Ok(recipe);
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpPost("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Like(string id)
        {
            ;
            try
            {
                //var user = await this.userManager.FindByNameAsync(this.User.Identity.Name);

                //await this.recipeLikesService.LikeAsync(user.Id, id);

                var userId = "c3a43854-bd43-409d-b368-e21733328c4b";

                await this.recipeLikesService.LikeAsync(userId, id);

                return this.Ok(new
                {
                    Message = Messages.Success.Added,
                });
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpPost("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Dislike(string id)
        {
            try
            {
                //var user = await this.userManager.FindByNameAsync(this.User.Identity.Name);

                //await this.recipeLikesService.DislikeAsync(user.Id, id);

                var userId = "c3a43854-bd43-409d-b368-e21733328c4b";

                await this.recipeLikesService.DislikeAsync(userId, id);

                return this.Ok(new
                {
                    Message = Messages.Success.Deleted,
                });
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpGet("{query}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IEnumerable<RecipeBaseViewModel>>> Search(string query)
        {
            try
            {
                var recipes = await this.recipesService.GetSearchedAsync<RecipeBaseViewModel>(query);

                return this.Ok(recipes);
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpGet("{criteria}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IEnumerable<RecipeBaseViewModel>>> Order(string criteria)
        {
            //test with more recipes
            try
            {
                var recipes = await this.recipesService.GetOrderAsync<RecipeBaseViewModel>(criteria);

                return this.Ok(recipes);
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpDelete("{recipeId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Delete(string recipeId)
        {
            try
            {
                await this.recipesService.DeleteAsync(recipeId);

                return this.Ok(new
                {
                    Message = Messages.Success.Deleted,
                });
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Update(RecipeUpdateInputModel input)
        {
            try
            {
                var ingredients = PrepareIngredients(input.Ingredients);

                await this.recipesService.UpdateAsync(input.Id, input.Title, input.Content, input.CategoryName, input.CookingTime, input.PreparationTime, input.Portions, ingredients, input.Picture);

                return this.Ok(new
                {
                    Message = Messages.Success.Updated,
                });
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
        }

        private static List<IngredientRecipeCreateDto> PrepareIngredients(IEnumerable<IngredientInputModel> input)
        {
            var ingredients = input
                    .Select(i => new IngredientRecipeCreateDto()
                    {
                        Name = i.Name,
                        Quantity = i.Quantity,
                    })
                    .ToList();

            return ingredients;
        }
    }
}
