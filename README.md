# :egg::ramen::spaghetti: Recipes
Recipes is a small SPA created with Asp.Net Core with ReactJS template.

## :memo: Description
Recipes can be used to present particular blog for recipes.

#### :white_check_mark: Users futures: 

    - register as regular user, login and logout. 
    - see all categories   
    - see recipes in current category
    - see all recipes, filter and order them by different criteria.
    - search recipe by name
    - see recipe's detail information.
    - like/dislike recipes
    - write comments to recipe
    - add new recipes
    - update or remove his own recipes
    - have area with his own recipes and his favourite recipes
      
#### :white_check_mark: Admin futures: 

    - all user's futures.
    - admin's dashboard:  
      * add, edit and delete categories.
      * add, edit and delete ingredients.

## :hammer_and_pick: Build with

 - .NET Core 5.0

 - MSSQL Server 

 - Entity Framework Core 5.0
 
 - Dependency Injection

 - Repository Pattern

 - WebApi
 
 - ReactJS

 - AutoMapper

 - Newtonsoft.Json

 - TypeScript

 - Bootstrap

 - FontAwesome

 - CSS

 - HTML5

 - toastr

 - Immer

 - ShortId
 

## Application Configurations
 #### To start server: 
 
 1. Create appsettings.json file in Data.Recipe.Data. 

    - Add your Connection String 

 2. Create one more appsettings.json file in Web.Recipe.WebApi. 

    - Add your Connection String

    - Add your own secret (needed for generating JWT for authentication) in format: "JwtSettings": { "Secret": "Your secret here" }

## :framed_picture: Screen Shoots

![Home Page](https://res.cloudinary.com/dieu4mste/image/upload/v1662041222/home_mv0t9a.png)
![Details Recipe](https://res.cloudinary.com/dieu4mste/image/upload/v1662041222/details_qbzvbd.png)
![My recipes](https://res.cloudinary.com/dieu4mste/image/upload/v1662041222/my_recipes_xsj3pg.png)
![Create Recipe](https://res.cloudinary.com/dieu4mste/image/upload/v1662041221/create_recipe_mcdshr.png)
