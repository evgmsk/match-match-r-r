/**
 * project match-match-r-r
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import GameMenu from '../gameMenu/GameMenu';
import MainMenu from '../mainMenu/MainMenu';
import BurgerMenuButton from './burgerMenuButton/BurgerMenuButton';
import './header.scss';

const Header = props => {
    const menuRef = React.createRef();
    const game = props.location.pathname === '/game';
    const onClick = () => {
        menuRef.current.classList.toggle('dropped');
    };
    const headerClassName = game ? 'game-header' : 'header';
    const mainMenuClassName = game ? 'menu-wrapper burger' : 'menu-wrapper';
    return (
        <header className={headerClassName}>
            <MainMenu className={mainMenuClassName} ref={menuRef} />
            {game && <Fragment><GameMenu /><BurgerMenuButton onClick={onClick} /></Fragment>}
        </header>
    );
};

Header.propTypes = {
    location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Header);
