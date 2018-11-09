/**
 * project WizBattle
 */
import React from 'react';
import PropTypes from 'prop-types';
import MainRoutes from '../../constants/mainMenuRoutes';
import MenuItem from './mainMenuItem/MenuItem';
import './mainMenu.scss';

const MainMenu = React.forwardRef((props, ref) => {
    return (
        <nav className={props.className} ref={ref}>
            {
                MainRoutes.map((x, i) => {
                    return <MenuItem
                        key={i.toString()}
                        href={x.path}
                        title={x.title}
                    />;
                })
            }
        </nav>
    );
});
MainMenu.propTypes = {
    className: PropTypes.string.isRequired,
};

export default MainMenu;
