/**
 * project match-match-r-r
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './menuItem.scss';

const MenuItem = ({ title, onClick = f => f, ...restProps }) => {
    return (
        <NavLink {...restProps} onClick={onClick}>
            {title}
        </NavLink>);
};

export default MenuItem;

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
