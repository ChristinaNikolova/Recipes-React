namespace Recipes.WebApi.Areas.Admin.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Recipes.Common;
    using Recipes.Services.Data.Ingredients;
    using Recipes.Web.Models.Admin.Ingredients.InputModels;
    using Recipes.Web.Models.Admin.Ingredients.ViewModels;
    using Recipes.Web.Models.Common.ViewModels;
    using Recipes.WebApi.Controllers;

    [Route("api/admin/[controller]/[action]")]
    public class IngredientsController : ApiController
    {
        private readonly IIngredientsService ingredientsService;

        public IngredientsController(IIngredientsService ingredientsService)
        {
            this.ingredientsService = ingredientsService;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Create([FromBody] IngredientCreateAdminInputModel input)
        {
            //if (this.User.Identity.Name == GlobalConstants.Roles.Admin)
            //{
            var isIngredientAlreadyExisting = await this.ingredientsService.IsAlreadyAddedAsync(input.Name);

            if (isIngredientAlreadyExisting)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.AlreadyExistsIngredient,
                });
            }

            try
            {
                await this.ingredientsService.CreateAsync(input.Name);

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
            //}

            //return this.Unauthorized();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IEnumerable<IngredientAdminViewModel>>> All()
        {
            //if (this.User.Identity.Name == GlobalConstants.Roles.Admin)
            //{
            try
            {
                var ingredients = await this.ingredientsService.GetAllAsync<IngredientAdminViewModel>();

                return this.Ok(ingredients);
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
            //}

            //return this.Unauthorized();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<IngredientUpdateInputModel>> IngredientForUpdate(string id)
        {
            //if (this.User.Identity.Name == GlobalConstants.Roles.Admin)
            //{
            try
            {
                var ingredient = await this.ingredientsService.GetDetailsAsync<IngredientUpdateInputModel>(id);

                return this.Ok(ingredient);
            }
            catch (Exception)
            {
                return this.BadRequest(new BadRequestViewModel
                {
                    Message = Messages.Error.Unknown,
                });
            }
            //}

            //return this.Unauthorized();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Delete(string id)
        {
            //if (this.User.Identity.Name == GlobalConstants.Roles.Admin)
            //{
            try
            {
                await this.ingredientsService.DeleteAsync(id);

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
            // }

            // return this.Unauthorized();
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> Update(IngredientUpdateInputModel input)
        {
            ;
            //if (this.User.Identity.Name == GlobalConstants.Roles.Admin)
            // {
            try
            {
                await this.ingredientsService.UpdateAsync(input.Id, input.Name);

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
            //}

            //return this.Unauthorized();
        }
    }
}
