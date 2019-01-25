/**
 * project match-match-r-r
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MainRoutes from './constants/mainMenuRoutes';

const AppRoute = () => {
    return (
        <CSSTransition classNames="rr" timeout={300} in>
            <Switch>
                {MainRoutes.map(route => {
                    return (
                        <Route
                            exact
                            path={route.path}
                            component={route.component}
                            key={route.path}
                        />
                    );
                })}
            </Switch>
        </CSSTransition>
    );
};

export default AppRoute;
