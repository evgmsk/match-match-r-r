/**
 * project WizBattle
 */
import React from 'react';
import { MainMenuTitles } from '../../constants/mainMenuRoutes';
import MenuItem from './menuItem';
import './mainMenu.scss';

const MainMenu = () => {
    return (
        <nav className="menu-wrapper">
            {
                MainMenuTitles.map((x) => {
                    return <MenuItem
                        key={x}
                        path={x.path}
                        title={x.title}
                    />;
                })
            }
        </nav>
    );
};

export default MainMenu;
