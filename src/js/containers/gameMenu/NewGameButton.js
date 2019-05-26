/**
 * project match-match-r-r
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainMenuButton from '../../ui/gameMenu/mainMenuButton/MainMenuButton';
import { newGameInit } from '../../store/actions/gameActions';

const NewGameButton = props => {
    const {
        className = 'game-menu-item new-game',
        name = 'New Game',
        newGameInit,
    } = props || {};

    const childProps = {className, name, onClickHandler: newGameInit};

    return (
        <MainMenuButton {...childProps} />
    );
};

NewGameButton.propTypes = {
    newGameInit: PropTypes.func.isRequired,
};

export default connect(null, {newGameInit})(NewGameButton);

