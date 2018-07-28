/**
 * project WizBattle
 */
import React from 'react';
import PropTypes from 'prop-types';
import { MainMenuTitles } from '../../constants/mainMenuRoutes';
import MenuItem from './menuItem';
import './mainMenu.scss';

const MainMenu = props => {
    return (
        <nav className={props.className}>
            {
                MainMenuTitles.map((x, i) => {
                    return <MenuItem
                        key={i.toString()}
                        href={x.path}
                        title={x.title}
                    />;
                })
            }
        </nav>
    );
};
MainMenu.propTypes = {
    className: PropTypes.string.isRequired,
};

export default MainMenu;
