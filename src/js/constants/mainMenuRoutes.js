/**
 * project match-match-r-r
 */
import GamePage from '../ui/gamePage/GamePage';
import LoginPage from '../ui/loginPage/LoginPage';
import RecordsPage from '../containers/recordsPage/RecordsPage';
import Invitation from '../containers/invitationPage/InvitationPage';

const MainRoutes = [
    {
        path: '/',
        title: 'Home',
        component: Invitation,
    },
    {
        path: '/records',
        title: 'Records',
        component: RecordsPage,
    },
    {
        path: '/login',
        title: 'Login',
        component: LoginPage,
    },
    {
        path: '/game',
        title: 'Play',
        component: GamePage,
    },
];


export default MainRoutes;
