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
            to={props.path}
            activeClassName="selected"
        >
            {props.title}
        </NavLink>);
};

export default MenuItem;

MenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
