import { Route, Switch, Redirect } from 'react-router-dom';

import Footer from './components/shared/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Header from './components/shared/Header/Header.jsx';
import Register from './components/Auth/Register/Register.jsx';
import Login from './components/Auth/Login/Login.jsx';
import CategoriesList from './components/Category/CategoriesList/CategoriesList.jsx';
import FavouriteRecipes from './components/User/FavouriteRecipes/FavouriteRecipes.jsx';
import OwnRecipes from './components/User/OwnRecipes/OwnRecipes.jsx';
import RecipesList from './components/Recipe/RecipesList/RecipesList.jsx';
import CreateRecipe from './components/Recipe/CreateRecipe/CreateRecipe.jsx';
import RecipeDetails from './components/Recipe/RecipeDetails/RecipeDetails.jsx';
import RecipesCurrentCategory from './components/Recipe/RecipesCurrentCategory/RecipesCurrentCategory.jsx';
import RecipeIngredientsList from './components/Ingredients/RecipeIngredientsList/RecipeIngredientsList.jsx';
import AdminHome from './components/Admin/AdminHome/AdminHome.jsx';
import IngredientsAdminList from './components/Admin/Ingredient/IngredientsAdminList/IngredientsAdminList.jsx';
import IngredientAdminUpdate from './components/Admin/Ingredient/IngredientAdminUpdate/IngredientAdminUpdate.jsx';
import NotFound from './components/shared/NotFound/NotFound.jsx';

import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home'></Redirect>
                </Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/categories' exact component={CategoriesList}></Route>
                <Route path='/users/favourite' exact component={FavouriteRecipes}></Route>
                <Route path='/users/own' exact component={OwnRecipes}></Route>
                <Route path='/recipes' exact component={RecipesList}></Route>
                <Route path='/recipes/create' component={CreateRecipe}></Route>
                <Route path='/recipes/details/:id' component={RecipeDetails}></Route>
                <Route path='/recipes/current-category/:id' component={RecipesCurrentCategory}></Route>
                <Route path='/recipes/ingredients/:id' component={RecipeIngredientsList}></Route>
                <Route path='/admin/dashboard' component={AdminHome}></Route>
                <Route path='/admin/ingredients' exact component={IngredientsAdminList}></Route>
                <Route path='/admin/ingredients/update/:id' component={IngredientAdminUpdate}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
