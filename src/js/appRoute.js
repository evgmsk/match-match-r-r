/**
 * project match-match-r-r
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InvitationPage from './containers/invitationPage/InvitationPage';
import LoginPage from './ui/loginPage/LoginPage';
import GamePage from './ui/gamePage/GamePage';
import { MainMenuRoutes } from './constants/mainMenuRoutes';

const AppRoute = props => {
    console.log(props);
    return (
        <Switch>
            <Route exact path={MainMenuRoutes.HOME} component={InvitationPage} />
            <Route path={MainMenuRoutes.LOGIN} component={LoginPage} />
            <Route path={MainMenuRoutes.GAME} component={GamePage} />
        </Switch>
    );
};

export default AppRoute;
