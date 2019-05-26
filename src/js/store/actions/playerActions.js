/**
 * project match-match-r-r
 */
import ActionTypes from './actionTypes';

export const setPlayer = payload => ({
    type: ActionTypes.SET_PLAYER,
    payload,
});

export const regPlayer = payload => ({
    type: ActionTypes.REG_PLAYER,
    payload,
});


export const loginPlayer = payload => ({
    type: ActionTypes.LOGIN_PLAYER,
    payload,
});

export const confirmRegistration = payload => ({
    type: ActionTypes.REGISTRATION_OR_LOG_FAIL,
    payload,
});

export const saveRecord = payload => ({
    type: ActionTypes.SAVE_RECORD,
    payload,
});

export const getRecords = payload => ({
    type: ActionTypes.GET_RECORDS,
    payload,
});
