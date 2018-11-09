/**
 * project match-match-r-r
 */
import React from 'react';
import LevelButtonsWrapper from './levelButton/LevelButtonsWrapper';
import SkirtButtonsWrapper from './skirtButton/SkirtButtonsWrapper';
import NewGameButton from './gameMenuButton/NewGameButton';
import './gameMenu.scss';

const GameMenu = () => {
    return (
        <div className="game-menu-wrapper">
            <SkirtButtonsWrapper />
            <NewGameButton />
            <LevelButtonsWrapper />
        </div>
    );
};

export default GameMenu;

GameMenu.propTypes = {

};
