/**
 * project match-match-r-r
 */
import React from 'react';
import LevelButton from '../../../containers/gameMenu/LevelButton';
import { Levels } from '../../../constants/constants';
import './levelButton.scss';

const LevelButtonsWrapper = () => {
    return (
        <div className="game-menu-item drop-menu">
            <button className="drop-menu-title">Game level</button>
            <ul className="drop-menu-list">
                {Levels.map(level =>
                    <li key={level}>
                        <LevelButton value={level} />
                    </li>)}
            </ul>
        </div>
    );
};

export default LevelButtonsWrapper;
