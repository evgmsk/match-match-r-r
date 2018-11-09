/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import GameMenu from '../gameMenu/GameMenu';
import MainMenu from '../mainMenu/MainMenu';
import BurgerMenuButton from '../mainMenu/burgerMenuButton/BurgerMenuButton';
import './header.scss';

const Header = props => {
    const menuRef = React.createRef();
    const game = props.location.pathname === '/game';
    const onClick = () => {
        menuRef.current.classList.toggle('dropped');
    };
    const headerClassName = game ? 'game-header' : 'header';
    const mainMenuClassName = game ? 'menu-wrapper burger' : 'menu-wrapper';
    const burgerClassName = `burger-menu-button ${!game && 'hidden'}`;
    return (
        <header className={headerClassName}>
            <MainMenu className={mainMenuClassName} ref={menuRef} />
            {game && <GameMenu />}
            <BurgerMenuButton className={burgerClassName} onClick={onClick} />
        </header>
    );
};

Header.propTypes = {
    location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(Header);
