/**
 * project match-match-r-r
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainRoutes from './constants/mainMenuRoutes';

const AppRoute = () => {
    return (
        <Switch>
            {MainRoutes.map(route => {
                return (
                    <Route exact path={route.path} component={route.component} key={route.path} />
                );
            })}
        </Switch>
    );
};

export default AppRoute;
