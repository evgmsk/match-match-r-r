/**
 * project match-match-r-r
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menuItem.scss';

const MenuItem = (props) => {
    return (
        <NavLink
            to={props.href}
            activeClassName="selected"
            className="main-menu-item"
            exact
        >
            {props.title}
        </NavLink>);
};

export default MenuItem;

MenuItem.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
