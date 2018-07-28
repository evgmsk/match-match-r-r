/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import GameMenu from '../gameMenu/GameMenu';
import MainMenu from '../mainMenu/MainMenu';

import './header.scss';

const Header = ({ location }) => {
    return (
        <header className={location.pathname === '/game' ? 'game-header' : 'header'}>
            <MainMenu className={location.pathname === '/game' ? 'menu-wrapper burger' : 'menu-wrapper'} />
            {location.pathname === '/game' && <GameMenu />}
        </header>
    );
};

Header.propTypes = {
    location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Header);
