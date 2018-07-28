/**
 * project match-match-r-r
 */
import React from 'react';
import './recordsTablleHead.scss';

const RecordsTableHead = () => {
    return (
        <div className="records-head-wrapper">
            <div className="player-name-head">
                <span>Player Name</span>
            </div>
            <div className="player-records-head">
                <span>Player Records</span>
            </div>
            <div className="difficulty-level-head">
                <span>Low</span>
            </div>
            <div className="difficulty-level-head">
                <span>Medium</span>
            </div>
            <div className="difficulty-level-head">
                <span>High</span>
            </div>
            <div className="difficulty-level-head">
                <span>Ultimate</span>
            </div>
        </div>
    );
}
