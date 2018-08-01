/**
 * project match-match-r-r
 */
import React from 'react';
// import PropTypes from 'prop-types';
import LevelButton from './LevelButton';
import GameMenu from '../../../constants/gameMenuTitles';
import './levelButton.scss';

const LevelButtonsWrapper = () => {
    return (
        <div className="game-menu-item drop-menu">
            <button className="drop-menu-title">Game level</button>
            <ul className="drop-menu-list">
                {GameMenu.Levels.map(level =>
                    <li key={level.value}>
                        <LevelButton value={level.value} />
                    </li>)}
            </ul>
        </div>
    );
};

LevelButtonsWrapper.propTypes = {

};

export default LevelButtonsWrapper;
