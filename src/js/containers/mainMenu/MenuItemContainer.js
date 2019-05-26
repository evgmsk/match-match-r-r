/**
 * project match-match-r-r
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import MenuItemUI from '../../ui/mainMenu/mainMenuItem/MenuItem';
import { onLoadData } from '../../store/actions/appActions';
import { getRecords } from '../../store/actions/playerActions';

const MenuItem = (props) => {
    const condition = !props.playerName && props.href === '/game';
    const href = condition ? '/login' : props.href;
    const { pathname } = props.location;
    const onClick = e => {
        if (pathname !== href) {
            props.onLoadData(true);
            if (href === '/records')
                props.getRecords([]);
        } else
            e.preventDefault();
    };
    const activeClass = !condition ? 'selected' : '';
    return (
        <MenuItemUI
            to={href}
            activeClassName={activeClass}
            className={props.className || "main-menu-item"}
            exact
            title={props.title}
            onClick={onClick}
        />);
};

export default withRouter(connect(
    state => ({ playerName: state.player.name }),
    { onLoadData, getRecords },
)(MenuItem));

MenuItem.propTypes = {
    onLoadData: PropTypes.func.isRequired,
    getRecords: PropTypes.func.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    playerName: PropTypes.string.isRequired,
    location: PropTypes.objectOf(Object).isRequired,
};
