/**
 * project match-match-r-r
 */
import ActionTypes from './actionTypes';

export const savePlayer = (name, id) => ({
    type: ActionTypes.SAVE_PLAYER,
    payload: {
        name,
        id,
    },
});

export const saveRecord = (difficulty, time) => ({
    type: ActionTypes.SAVE_RECORD,
    payload: {
        difficulty,
        time,
    },
});
