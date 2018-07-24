/**
 * project match-match-r-r
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Invitation from './ui/Invitation/InvitationPage';
import LoginPage from './ui/Login/LoginPage';
import GamePage from './ui/Game/GamePage';
import { MainRoutes } from '../../ConstsData/constants';

const StartPageRoute = () =>
    <Switch>
        <Route exact path={MainRoutes.HOME.path} component={Home} />
        <Route exact path={MainRoutes.DRAWBOX.path} component={DrawBoxContainer} />
        <Route exact path={MainRoutes.LOGIN.path} component={LogPage} />
        <Route exact path={MainRoutes.ABOUT.path} component={About} />
        <Route exact path={MainRoutes.GAME.path} component={GamePageContainer} />
    </Switch>;

export default StartPageRoute;