/**
 * project match-match-r-r
 */
import React from 'react';
import PropsTypes from 'prop-types';
import './timer.scss';

const Timer = ({ time }) => {
    return (
        <div className="game-timer">
            <span className="game-timer-title">Time: </span>
            <span className="game-timer-time">{time}</span>
        </div>
    );
};

export default Timer;

Timer.propTypes = {
    time: PropsTypes.string.isRequired,
};
