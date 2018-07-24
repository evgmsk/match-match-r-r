/**
 * project match-match-r-r
 */
import ActionTypes from '../actionTypes';

export const tick = time => ({
    type: ActionTypes.TICK,
    payload: time,
});

export const startTimer = bool => ({
    type: ActionTypes.START_TIMER,
    payload: bool,
});
