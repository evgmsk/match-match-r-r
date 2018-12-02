/**
 * project match-match-r-r
 */
import GamePage from '../containers/gamePage/GamePageContainer';
import LoginPage from '../ui/loginPage/LoginPage';
import RecordsPage from '../ui/recordsPage/RecordsPage';
import Invitation from '../ui/invitationPage/InvitationPage';

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
