/**
 * project match-match-r-r
 */
import React from 'react';
import SkirtButton from '../../../containers/gameMenu/SkirtButton';
import { CardsSkirts } from '../../../constants/constants';
import './skritButton.scss';

const SkirtButtonsWrapper = () => {
    return (
        <div className="game-menu-item drop-menu">
            <button className="drop-menu-title">Cards skirt</button>
            <ul className="drop-menu-list">
                {CardsSkirts.map(skirt =>
                    <li key={skirt}>
                        <SkirtButton skirtName={skirt} />
                    </li>)
                }
            </ul>
        </div>
    );
};

export default SkirtButtonsWrapper;
