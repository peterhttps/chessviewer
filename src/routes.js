import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ViewerPage from "./pages/Viewer";
import SearchPage from "./pages/Search";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/viewer" component={ViewerPage} />
      <Route exact path="/search" component={SearchPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
