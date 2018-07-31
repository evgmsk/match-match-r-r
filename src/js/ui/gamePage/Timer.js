/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import './timer.scss';

const Timer = props => {
    const time = t => {
        let minutes = Math.round(t / 60).toString();
        let sec = (t % 60).toString();
        minutes = minutes.length > 1 ? minutes : `0${minutes}`;
        sec = sec.length > 1 ? sec : `0${sec}`;
        return `${minutes}:${sec}`;
    };
    return (
        <div className="game-timer">
            <span className="game-timer-title">Time: </span>
            <span className="game-timer-time">{time(props.time)}</span>
        </div>
    );
};

Timer.propTypes = {
    time: PropTypes.number.isRequired,
};

export default Timer;
