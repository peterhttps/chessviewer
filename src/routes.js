import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import ViewerPage from './pages/Viewer';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/viewer" component={ViewerPage} />

        </Switch>
    </BrowserRouter>
);

export default Routes;
