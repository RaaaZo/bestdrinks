import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "Pages/HomePage";
import RegisterPage from "Pages/RegisterPage";
import MyRecipesPage from "Pages/MyRecipesPage";
import EditRecipePage from "Pages/EditRecipePage";
import ProfilePage from "Pages/ProfilePage";
import { AuthContext } from "context/AuthContext";
import DrinkDetailsPage from "Pages/DrinkDetailsPage";
import AddRecipePage from "Pages/AddRecipePage";

const Routes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/drink/:drinkId">
        <DrinkDetailsPage />
      </Route>

      <Route exact path="/auth/register">
        <RegisterPage />
      </Route>

      <Route exact path="/profile">
        {isLoggedIn ? <ProfilePage /> : <Redirect to="/" />}
      </Route>

      <Route exact path="/profile/myRecipes">
        {isLoggedIn ? <MyRecipesPage /> : <Redirect to="/" />}
      </Route>

      <Route exact path="/profile/myRecipes/:recipeId">
        {isLoggedIn ? <EditRecipePage /> : <Redirect to="/" />}
      </Route>

      <Route exact path="/profile/addRecipe">
        {isLoggedIn ? <AddRecipePage /> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
};

export default Routes;
