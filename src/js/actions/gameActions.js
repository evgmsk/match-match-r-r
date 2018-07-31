/**
 * project match-match-r-r
 */
import ActionTypes from './actionTypes';

export const setDifficulty = difficulty => ({
    type: ActionTypes.SET_DIFFICULTY,
    payload: difficulty,
});

export const setSkirt = skirt => ({
    type: ActionTypes.SET_SKIRT,
    payload: skirt,
});

export const newGame = bool => ({
    type: ActionTypes.NEW_GAME,
    payload: bool,
});

export const startGame = bool => ({
    type: ActionTypes.START_TIMER,
    payload: bool,
});

export const setTime = time => ({
    type: ActionTypes.TICK,
    payload: time,
});

export const totalRecords = records => ({
    type: ActionTypes.TOTAL_RECORDS,
    payload: records,
});

export const timeout = bool => ({
    type: ActionTypes.SET_TIMEOUT,
    payload: bool,
});

export const cardOpened = difficulty => ({
    type: ActionTypes.SHOWED_CARD,
    payload: difficulty,
});
