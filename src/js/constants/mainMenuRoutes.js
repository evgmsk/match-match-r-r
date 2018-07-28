/**
 * project match-match-r-r
 */
import GamePage from '../ui/gamePage/GamePage';
import LoginPage from '../ui/loginPage/LoginPage';
import RecordsPage from '../ui/recordsPage/RecordsPage';
import Invitation from '../containers/invitationPage/InvitationPage';

export const MainMenuRoutes = {
    HOME: '/',
    LOGIN: '/login',
    GAME: '/game',
};

export const MainMenuTitles = [
    {
        path: MainMenuRoutes.HOME,
        title: 'Home',
    },
    {
        path: MainMenuRoutes.LOGIN,
        title: 'Login',
    },
    {
        path: MainMenuRoutes.GAME,
        title: 'Game',
    },
];

export const MainRoutes = {
    HOME: {
        path: '/',
        title: 'Home',
        component: Invitation,
    },
    RECORDS: {
        path: '/records',
        title: 'Records',
        component: RecordsPage,
    },
    LOGIN: {
        path: '/login',
        title: 'Login',
        component: LoginPage,
    },
    GAME: {
        path: '/game',
        title: 'Play',
        component: GamePage,
    },
};