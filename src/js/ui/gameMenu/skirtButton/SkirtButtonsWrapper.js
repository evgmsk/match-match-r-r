/**
 * project match-match-r-r
 */
import React from 'react';
import SkirtButton from './SkirtButton';
import GameMenu from '../../../constants/gameMenuTitles';
import './skritButton.scss';

const SkirtButtonsWrapper = () => {
    return (
        <div className="game-menu-item drop-menu">
            <button className="drop-menu-title">Cards skirt</button>
            <ul className="drop-menu-list">
                {GameMenu.Skirts.map(s =>
                    <li key={s.skirtName}>
                        <SkirtButton skirtName={s.skirtName} />
                    </li>)
                }
            </ul>
        </div>
    );
};

SkirtButtonsWrapper.propTypes = {

};

export default SkirtButtonsWrapper;
