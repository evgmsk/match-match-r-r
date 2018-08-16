/**
 * project match-match-r-r
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newGameInit } from '../../../actions/gameActions';
import './newGameButton.scss';

const NewGameButton = props => {
    const className = 'game-menu-item game-menu-button';
    const onClick = e => {
        e.preventDefault();
        e.stopPropagation();
        e.target.blur();
        props.newGameInit();
    };
    const onKeyDown = e => {
        e.stopPropagation();
        if (e.key === 'Enter' || e.key === 'Space')
            props.newGameInit();
    };
    return (
        <button
            className={className}
            onClick={onClick}
            onKeyDown={onKeyDown}
        >
            New Game
        </button>
    );
};

NewGameButton.propTypes = {
    newGameInit: PropTypes.func.isRequired,
};

export default connect(
    null,
    { newGameInit },
)(NewGameButton);
