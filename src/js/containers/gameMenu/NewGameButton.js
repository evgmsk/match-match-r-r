/**
 * project match-match-r-r
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainMenuButton from '../../ui/gameMenu/mainMenuButton/MainMenuButton';
import { newGameInit } from '../../actions/gameActions';

const NewGameButton = props => {
    const childProps = {
        className: 'game-menu-item new-game',
        name: 'New Game',
        onClickHandler: props.newGameInit,
    };

    return (
        <MainMenuButton {...childProps} />
    );
};

NewGameButton.propTypes = {
    newGameInit: PropTypes.func.isRequired,
};

export default connect(
    null,
    dispatch => ({
        newGameInit(x) {
            dispatch(newGameInit(x));
        },
    }),
)(NewGameButton);
