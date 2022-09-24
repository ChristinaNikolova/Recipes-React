import { Route, Switch, Redirect } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContexts.jsx';

import Header from './components/shared/Header/Header.jsx';
import Footer from './components/shared/Footer/Footer.jsx';

import Home from './components/Home/Home.jsx';
import Register from './components/Auth/Register/Register.jsx';
import Login from './components/Auth/Login/Login.jsx';

import CategoriesList from './components/Category/CategoriesList/CategoriesList.jsx';
import FavouriteRecipes from './components/User/FavouriteRecipes/FavouriteRecipes.jsx';
import OwnRecipes from './components/User/OwnRecipes/OwnRecipes.jsx';
import RecipesList from './components/Recipe/RecipesList/RecipesList.jsx';
import CreateRecipe from './components/Recipe/CreateRecipe/CreateRecipe.jsx';
import RecipeDetails from './components/Recipe/RecipeDetails/RecipeDetails.jsx';
import UpdateRecipe from './components/Recipe/UpdateRecipe/UpdateRecipe.jsx';
import RecipesCurrentCategory from './components/Recipe/RecipesCurrentCategory/RecipesCurrentCategory.jsx';
import RecipeIngredientsList from './components/Ingredients/RecipeIngredientsList/RecipeIngredientsList.jsx';

import AdminHome from './components/Admin/AdminHome/AdminHome.jsx';
import IngredientsAdminList from './components/Admin/Ingredient/IngredientsAdminList/IngredientsAdminList.jsx';
import IngredientAdminUpdate from './components/Admin/Ingredient/IngredientAdminUpdate/IngredientAdminUpdate.jsx';
import IngredientAdminCreate from './components/Admin/Ingredient/IngredientAdminCreate/IngredientAdminCreate.jsx';
import CategoriesAdminList from './components/Admin/Category/CategoriesAdminList/CategoriesAdminList.jsx';
import CategoryAdminUpdate from './components/Admin/Category/CategoryAdminUpdate/CategoryAdminUpdate.jsx';
import CategoryAdminCreate from './components/Admin/Category/CategoryAdminCreate/CategoryAdminCreate.jsx';

import NotFound from './components/shared/NotFound/NotFound.jsx';

import GuestRoute from './components/common/GuestRoute.jsx';
import PrivateRoute from './components/common/PrivateRoute.jsx';
import AdminRoute from './components/common/AdminRoute.jsx';

import './App.css';

function App() {
    return (
        <AuthProvider>
            <div className="app">
                <Header />
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/home'></Redirect>
                    </Route>
                    <Route path='/home' component={Home}></Route>

                    <Route
                        path='/register'
                        render={(props) => (
                            <GuestRoute>
                                <Register {...props} />
                            </GuestRoute>
                        )}>
                    </Route>

                    <Route
                        path='/login'
                        render={(props) => (
                            <GuestRoute>
                                <Login {...props} />
                            </GuestRoute>
                        )}>
                    </Route>

                    <Route path='/categories' exact component={CategoriesList}></Route>

                    <Route
                        path='/users/favourite'
                        exact
                        render={() => (
                            <PrivateRoute>
                                <FavouriteRecipes />
                            </PrivateRoute>
                        )}>
                    </Route>

                    <Route
                        path='/users/own'
                        exact
                        render={() => (
                            <PrivateRoute>
                                <OwnRecipes />
                            </PrivateRoute>
                        )}>
                    </Route>

                    <Route path='/recipes' exact component={RecipesList}></Route>

                    <Route
                        path='/recipes/create'
                        render={(props) => (
                            <PrivateRoute>
                                <CreateRecipe {...props} />
                            </PrivateRoute>
                        )}>
                    </Route>

                    <Route
                        path='/recipes/update/:id'
                        render={(props) => (
                            <PrivateRoute>
                                <UpdateRecipe {...props} />
                            </PrivateRoute>
                        )}>
                    </Route>

                    <Route
                        path='/recipes/details/:id'
                        render={(props) => (
                            <PrivateRoute>
                                <RecipeDetails {...props} />
                            </PrivateRoute>
                        )}>
                    </Route>

                    <Route
                        path='/recipes/current-category/:id'
                        render={(props) => (
                            <PrivateRoute>
                                <RecipesCurrentCategory {...props} />
                            </PrivateRoute>
                        )}>
                    </Route>

                    <Route
                        path='/recipes/ingredients/:id'
                        render={(props) => (
                            <PrivateRoute>
                                <RecipeIngredientsList {...props} />
                            </PrivateRoute>
                        )}>
                    </Route>

                    <Route
                        path='/admin/dashboard'
                        render={() => (
                            <AdminRoute>
                                <AdminHome />
                            </AdminRoute>
                        )}>
                    </Route>

                    <Route
                        path='/admin/ingredients'
                        exact
                        render={() => (
                            <AdminRoute>
                                <IngredientsAdminList />
                            </AdminRoute>
                        )}>
                    </Route>

                    <Route
                        path='/admin/ingredients/create'
                        exact
                        render={(props) => (
                            <AdminRoute>
                                <IngredientAdminCreate {...props} />
                            </AdminRoute>
                        )}>
                    </Route>

                    <Route
                        path='/admin/ingredients/update/:id'
                        render={(props) => (
                            <AdminRoute>
                                <IngredientAdminUpdate {...props} />
                            </AdminRoute>
                        )}>
                    </Route>

                    <Route
                        path='/admin/categories'
                        exact
                        render={() => (
                            <AdminRoute>
                                <CategoriesAdminList />
                            </AdminRoute>
                        )}>
                    </Route>

                    <Route
                        path='/admin/categories/create'
                        exact
                        render={(props) => (
                            <AdminRoute>
                                <CategoryAdminCreate {...props} />
                            </AdminRoute>
                        )}>
                    </Route>

                    <Route
                        path='/admin/categories/update/:id'
                        render={(props) => (
                            <AdminRoute>
                                <CategoryAdminUpdate {...props} />
                            </AdminRoute>
                        )}>
                    </Route>

                    <Route path="*" component={NotFound}></Route>
                </Switch>
                <Footer />
            </div>
        </AuthProvider >
    );
}

export default App;
